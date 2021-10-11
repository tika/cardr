import { createEndpoint } from "@app/endpoint";
import { DisplayedError, NotFound } from "@app/expections";
import { JWT } from "@app/jwt";
import redis from "@app/redis";
import { Player } from "@app/santise";
import { doesUserWin } from "@app/utils";
import Pusher from "pusher";
import { Card, Game } from "src/pages/[code]";

function getKey(code: string) {
  return `game:${code}`;
}

export async function sendUpdate(code: string) {
  const game = await getGame(code);

  if (game) {
    game.lastUpdated = new Date();

    await pusher.trigger(code, "game-update", game);
  }
}

export const pusher = new Pusher({
  appId: process.env.APP_ID as string,
  key: process.env.KEY as string,
  secret: process.env.SECRET as string,
  cluster: process.env.CLUSTER as string,
  useTLS: true,
});

export default createEndpoint({
  GET: async (req, res) => {
    const code = req.query.code as string;

    res.send({ game: await getGame(code) });
  },
  PUT: async (req, res) => {
    // Handles joining
    const code = req.query.code as string;
    const { player } = req.body as { player: Player };

    const game = await getGame(code);

    // if there is already a game with this code && player is not already in this game
    if (game) {
      if (game.players.length >= 2) {
        return res.json({ status: "full-game" });
      }

      if (await isPlayerInGame(code, player.id)) {
        return res.json({ status: "already-in-game" });
      } else {
        await addPlayer(code, player);
        sendUpdate(code);

        return res.json({
          status: "joined-game",
          turn: false,
          game: await getGame(code),
        });
      }
    }

    createGame(code, player);
    return res.json({
      status: "joined-new-game",
      turn: true,
      game: await getGame(code),
    });
  },
  POST: async (req, res) => {
    const code = req.query.code as string;
    const user = JWT.parseRequest(req);

    if (!user) throw new NotFound("user");

    // Check if the user requesting is in the game

    const game = await getGame(code);

    if (!game) throw new NotFound("game");

    if (!(await isPlayerInGame(code, user.id)))
      throw new DisplayedError(401, "Player not in game");

    // since we know this player is actually in the game
    // now we can remove 1 from the deck, update that in the game, and send out a pusher req

    if (game.deck.length <= 0) {
      res.send({ ended: true });
      return;
    }

    // remove top 1 from deck
    const card = game.deck.pop() as Card;

    if (game.players[0].id === user.id) {
      game.hand0 = card;
    } else game.hand1 = card;

    game.turn = game.turn === 0 ? 1 : 0;

    // first update
    redis.set(getKey(code), JSON.stringify(game));

    // now we just need to send out an "update req"
    sendUpdate(code);

    // if we are tryna compare them
    if (game.hand1 && game.hand0) {
      // work out who wins
      if (doesUserWin(game.hand1, game.hand0))
        game.cards1.push(game.hand0, game.hand1);
      else game.cards0.push(game.hand0, game.hand1);

      // reset
      game.hand0 = null;
      game.hand1 = null;
    }

    // update again, lol
    redis.set(getKey(code), JSON.stringify(game));

    res.send({ game });
  },
  DELETE: async (req, res) => {
    const code = req.query.code as string;
    const user = JWT.parseRequest(req);

    if (!user) throw new NotFound("user");

    // Check if the user requesting is in the game
    if (!(await isPlayerInGame(code, user.id)))
      throw new DisplayedError(401, "Player not in game");

    deleteGame(code);

    res.send({ deleted: true });
  },
});

export async function isGame(code: string) {
  return (await getGame(code)) !== null;
}

export async function addPlayer(code: string, player: Player) {
  const game = await getGame(code);
  if (!game) return;

  game.players.push(player);

  await redis.set(getKey(code), JSON.stringify(game), "ex", 3600);
}

function generateShuffleCards() {
  const cards: Card[] = [];

  // Generate cards
  for (let c of ["red", "black", "yellow"])
    for (let n = 1; n <= 10; n++)
      cards.push({ color: c as Card["color"], number: n as Card["number"] });

  // Shuffle cards
  for (let i = 0; i < cards.length; i++) {
    const random = Math.floor(Math.random() * 29);
    cards[random] = cards[i];
    cards[i] = cards[random];
  }

  return cards;
}

export async function createGame(code: string, initialPlayer: Player) {
  const found = await redis.get(getKey(code));
  if (found) return;

  console.log("Created: " + code);

  await redis.set(
    getKey(code),
    JSON.stringify({
      players: [initialPlayer],
      deck: generateShuffleCards(),
      cards0: [],
      cards1: [],
      hand0: null,
      hand1: null,
      turn: 0,
    }),
    "ex",
    3600
  );
}

export async function deleteGame(code: string) {
  await redis.del(getKey(code));

  console.log("Deleted game: " + code);
  pusher.trigger(code, "game-delete", {});
}

export async function isPlayerInGame(code: string, playerId: string) {
  const optionalGame = await getGame(code);
  if (!optionalGame) return false;
  return optionalGame.players.filter((p) => p.id === playerId).length > 0;
}

export async function getGame(code: string) {
  const optionalGame = await redis.get(getKey(code));
  if (!optionalGame) return null;
  return JSON.parse(optionalGame) as Game;
}

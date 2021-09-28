import { createEndpoint } from "@app/endpoint";
import { NotFound } from "@app/expections";
import { JWT } from "@app/jwt";
import { Player } from "@app/santise";
import Pusher from "pusher";
import { Card, Game } from "src/pages/[code]";

export async function sendUpdate(code: string) {
    await pusher.trigger(code, "game-update", getGame(code));
}

export const pusher = new Pusher({
    appId: process.env.APP_ID as string,
    key: process.env.KEY as string,
    secret: process.env.SECRET as string,
    cluster: process.env.CLUSTER as string,
    useTLS: true,
});

let games: Game[] = [];

export default createEndpoint({
    GET: async (req, res) => {
        const code = req.query.code;
        res.send({ game: games.filter(g => g.code === code)[0] });
    },
    PUT: async (req, res) => { // Handles joining
        const code = req.query.code as string;
        const { player } = req.body as { player: Player };
        
        // if there is already a game with this code && player is not already in this game
        if (isGame(code)) {
            if (getGame(code)!.players.length >= 2) {
                return res.json({ status: "full-game" });
            }

            if (getPlayersGame(player.id) && getPlayersGame(player.id).code === code) {
                return res.json({ status: "already-in-game" });
            } else {
                addPlayer(code, player);
                sendUpdate(code);
                
                return res.json({ status: "joined-game", turn: false, game: getGame(code) });
            }
        }

        createGame(code, player);
        return res.json({ status: "joined-new-game", turn: true, game: getGame(code) });
    },
    POST: async (req, res) => {
        const code = req.query.code;
        const user = JWT.parseRequest(req);

        if (!user) throw new NotFound("user");

        // Check if the user requesting is in the game
        const game = getPlayersGame(user.id);
        
        // todo: update error code
        if (!game || game.code !== code) throw new NotFound("game");

        // since we know this player is actually in the game
        // now we can remove 1 from the deck, update that in the game, and send out a pusher req

        if (game.deck.length <= 0) {
            res.send({ ended: true });
            return;
        }

        // remove top 1 from deck
        const card = game.deck.pop() as Card;

        // if we are tryna compare them
        if (game.hand1 && game.hand0) {
            
            // work out who wins
            if ((game.hand1.color === game.hand0.color && game.hand1.number > game.hand0.number)
                || doesUserWin([game.hand1, game.hand0], 0)) {
                // user 1 wins
                game.cards1.push(game.hand0, game.hand1);
            } else { // user 0 wins
                game.cards0.push(game.hand0, game.hand1);
            }

            // reset
            game.hand0 = null;
            game.hand1 = null;
        } else {
            // they are user 0
            if (game.players[0].id === user.id) game.hand0 = card;
            else game.hand1 = card;
        }

        game.turn = game.turn === 0 ? 1 : 0;

        // now we just need to send out an "update req"
        sendUpdate(code);

        res.send({ game });
    },
});

function doesUserWin(compare: Card[], user: 0 | 1) {
    const other = user === 0 ? 1 : 0;

    if (compare[user].color === "red" && compare[other].color === "black")
        return true;

    if (compare[user].color === "yellow" && compare[other].color === "red")
        return true;

    if (compare[user].color === "black" && compare[other].color === "yellow")
        return true;

    return false;
}

export function isGame(code: string): boolean {
    return games.filter(g => g.code === code).length > 0;
}

export function addPlayer(code: string, player: Player): void {
    const game = games.find(g => g.code === code);
    if (!game) return;

    game.players.push(player);
}

function generateShuffleCards() {
  const cards: Card[] = [];
  
  // Generate cards
  for (let c of ["red", "black", "yellow"])
      for (let n = 1; n <= 10; n++)
        cards.push({ color: c as Card["color"], number: n as Card["number"] })

  // Shuffle cards
  for (let i = 0; i < cards.length; i++) {
    const random = Math.floor(Math.random() * 29);
    cards[random] = cards[i];
    cards[i] = cards[random];
  }

  return cards;
}

export function createGame(code: string, initialPlayer: Player): void {
    if (isGame(code)) return;
    
    games.push({
        code,
        players: [initialPlayer],
        deck: generateShuffleCards(),
        cards0: [],
        cards1: [],
        hand0: null,
        hand1: null,
        turn: 0
    });
}

export function deleteGame(code: string) {
    games = games.filter(g => g.code !== code);
}

export function getPlayersGame(player: string) {
    return games.filter(g => g.players.filter(p => p.id === player).length > 0)[0];
}

export function getGame(code: string): Game | null {
    if (!isGame(code)) return null;
    return games.filter(g => g.code === code)[0];
}
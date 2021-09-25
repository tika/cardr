import { Player } from "@app/santise";
import { NextApiRequest, NextApiResponse } from "next";
import Pusher from "pusher";
import { addPlayer, createGame, getGame, getPlayersGame, isGame } from "../game/[code]";

export const pusher = new Pusher({
  appId: process.env.APP_ID as string,
  key: process.env.KEY as string,
  secret: process.env.SECRET as string,
  cluster: process.env.CLUSTER as string,
  useTLS: true,
});

export async function sendUpdate(code: string) {
  await pusher.trigger(code, "game-update", getGame(code));
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { player, code } = req.body as { player: Player, code: string };

  // if there is already a game with this code && player is not already in this game
  if (isGame(code)) {

    if (getPlayersGame(player.id) && getPlayersGame(player.id).code === code) {
      console.log(`${player.name} is already in ${code}`)
    } else {
      addPlayer(code, player);
      sendUpdate(code);
      
      console.log(`adding ${player.name} to ${code}! There are now ${getGame(code)?.players}`)
    }
  } else {
    createGame(code, player);
  }

  res.json({ game: code });
}

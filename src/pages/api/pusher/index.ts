import { Player } from "@app/santise";
import { NextApiRequest, NextApiResponse } from "next";
import Pusher from "pusher";
import { addPlayer, createGame, getGame, isGame } from "../game/[code]";

export const pusher = new Pusher({
  appId: process.env.APP_ID as string,
  key: process.env.KEY as string,
  secret: process.env.SECRET as string,
  cluster: process.env.CLUSTER as string,
  useTLS: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { player, code } = req.body as { player: Player, code: string };

  console.log(`${player.name} joined ${code}`);

  // if there is already a game with this code
  if (isGame(code)) {
    addPlayer(code, player);
    const response = await pusher.trigger("game", "start-event", getGame(code));
  }

  createGame(code, player);

  res.json({ game: code });
}

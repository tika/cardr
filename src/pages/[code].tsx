import { fetcher } from "@app/fetcher";
import { JWT } from "@app/jwt";
import { Player } from "@app/santise";
import { GetServerSideProps } from "next";
import Pusher from "pusher-js";
import useSWR from 'swr';
import { useEffect, useState } from "react";

type GameProps = {
  user: Player;
  token: string;
  game: Game;
  code: string;
};

interface Card {
  color: "red" | "black" | "yellow";
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface Game {
  code: string;
  players: Player[];
  cards: Card[];
};

export default function Game(props: GameProps) {
  const [game, setGame] = useState<Game>(props.game);
  
  // todo: find a way to update the game whenever it is updated
  // -> send a request when the game loads

  // Once a player joins the game, create a socket stating who we are
  function sendReq() {
    fetcher("POST", "/pusher", { player: props.user, code: props.code });
  }

  useEffect(() => sendReq(), []);

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_KEY as string, {
      cluster: "eu",
    });

    const channel = pusher.subscribe("game");

    channel.bind("join-event", function (data: { player: Player, code: string }) {
      // fetcher("GET", `/game/${props.code}`);
      console.log(data);
    });

    return () => pusher.unsubscribe("game");
  }, []);

  return (
    <div>
      {game?.players.length < 2 ? <div>
        <h1>Waiting for players... {game?.players.length}/2</h1>
        <h2>Code: {props.code}</h2>
        </div> 
      :
        <div>
          <h1>hello</h1>
        </div>
      }
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = JWT.parseRequest(ctx.req);

  return {
    props: { user: user as Player, code: ctx.query.code, token: ctx.req.cookies.token },
  };
};

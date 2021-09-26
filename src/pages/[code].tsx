import { fetcher } from "@app/fetcher";
import { JWT } from "@app/jwt";
import { Player } from "@app/santise";
import { GetServerSideProps } from "next";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type GameProps = {
  user: Player;
  token: string;
  game: Game;
  code: string;
};

export interface Card {
  color: "red" | "black" | "yellow";
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface Game {
  code: string;
  players: Player[];
  cards: Card[];
  turn: 0 | 1;
};

export default function Game(props: GameProps) {
  const [game, setGame] = useState<Game | undefined>();
  const [turn, setTurn] = useState<0 | 1>(0);

  // Once a player joins the game, create a socket stating who we are
  useEffect(() => {
    fetcher("PUT", `/game/${props.code}`, { player: props.user })
      .then((res: any) => toast(res.status)); // res.status === what the error/success code is
  }, []);

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_KEY as string, {
      cluster: "eu",
    });

    // We are only sending pusher reqs to our game
    const channel = pusher.subscribe(props.code); 

    channel.bind("game-update", (data: Game) => {
      console.log(data);
      setGame(data);
    });

    return () => pusher.unsubscribe(props.code);
  }, []);

  function takeFromDeck() {
    // this is bad usage of a rest API but we will just use it to get the next move
    // -> make sure this user is in the game tho
    fetcher("POST", `/game/${props.code}`);
  }

  return (
    <div>
      {!game ? <div>
        <h1>Waiting for players... 1/2</h1>
        <h2>Code: {props.code}</h2>
        </div>
      :
        <div>
          <h1>Game: {game.code}</h1>
          <h2>Players: {game.players.map(p => p.name).join(", ")}</h2>
          <button onClick={takeFromDeck}>Take from deck</button> {/* todo: have this disabled when it is not our turn*/}
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

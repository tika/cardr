import { fetcher } from "@app/fetcher";
import { JWT } from "@app/jwt";
import { Player } from "@app/santise";
import { CardComp } from "@components/Card";
import { LogOut } from "iconic-react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styles from "./game.module.css";
import generalStyles from "./styles.module.css";

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
  deck: Card[];
  cards0: Card[]; // when comparison of hands are done, either goes to player 0 or 1's decks
  cards1: Card[];
  hand0: Card | null; // stores turn 0 hand
  hand1: Card | null; // stores turn 1 hand
  turn: 0 | 1;
  lastUpdated?: Date;
};

export default function Game(props: GameProps) {
  const router = useRouter();

  const [game, setGame] = useState<Game | undefined>();
  // const [isTurn, setIsTurn] = useState<boolean>(false);
  const [me, setMe] = useState<0 | 1>(0);

  // Once a player joins the game, create a socket stating who we are
  useEffect(() => {
    fetcher("PUT", `/game/${props.code}`, { player: props.user })
      .then((res: any) => {
        toast(res.status); // res.status === what the error/success code is
        if (res.status.includes("joined")) { 
          setMe(res.turn ? 0 : 1);

          if (!res.turn) {
            // we know there is another player and therefore we can just set the game
            setGame(res.game);
          }
        }
      });
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

    channel.bind("game-delete", () => {
      router.push("/");
    });

    return () => pusher.unsubscribe(props.code);
  }, []);

  function takeFromDeck() {
    // this is bad usage of a rest API but we will just use it to get the next move
    // -> make sure this user is in the game tho
    fetcher("POST", `/game/${props.code}`);
  }

  return (
    <div className={styles.bg}>
      {!game ? <div className={generalStyles.bg}>
        <h1 className={generalStyles.heading} style={{ fontSize: "3em" }}>waiting for a teammate...</h1>
        <h2 className={generalStyles.subheading} style={{ fontSize: "1.5em" }}>tip: remember to press "take from deck"</h2>
        <button className={generalStyles.iconButton} style={{ width: "10em", marginTop: "1em" }} onClick={() => 
          {
            router.push("/")
            fetcher("DELETE", `/game/${props.code}`).catch((err) => toast.error(err))
          }
        }>
          <LogOut size={25} color="white" />
          exit
        </button>
        <h2 className={styles.code}>code: {props.code}</h2>
        </div>
      :
        <>
          {game.deck.length === 0 ? <div>
            <h1>{game.cards0.length > game.cards1.length ? game.players[0].name : game.players[1].name} won!</h1>
            <h2>{game.cards0.length} cards :: {game.players[0].name}</h2>
            <h2>{game.cards1.length} cards :: {game.players[1].name}</h2>
          </div> : <div>
            <h1 className={styles.game}>game with <span>{game.players.filter(p => p.name !== props.user.name)[0].name}</span></h1>
            <button onClick={takeFromDeck} disabled={game.turn !== me}>Take from deck</button>
            <h2 className={styles.code}>code: {props.code}</h2>
            <CardComp color="yellow" number={5} />
          </div>}
        </>
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

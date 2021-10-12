import { fetcher } from "@app/fetcher";
import { JWT } from "@app/jwt";
import { Player } from "@app/santise";
import { doesUserWin } from "@app/utils";
import { Arrow } from "@components/Arrow";
import { ChooseCard } from "@components/ChooseCard";
import { OpponentCard } from "@components/OpponentCard";
import { LogOut } from "iconic-react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import Pusher from "pusher-js";
import { useEffect, useRef, useState } from "react";
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
  players: Player[];
  deck: Card[];
  cards0: Card[]; // when comparison of hands are done, either goes to player 0 or 1's decks
  cards1: Card[];
  hand0: Card | null; // stores turn 0 hand
  hand1: Card | null; // stores turn 1 hand
  turn: 0 | 1;
  lastUpdated?: Date;
}

export default function Game(props: GameProps) {
  const router = useRouter();

  const [game, setGame] = useState<Game | undefined>();
  const [me, setMe] = useState<0 | 1>(0);
  const gameRef = useRef(game);
  gameRef.current = game;

  // Once a player joins the game, create a socket stating who we are
  useEffect(() => {
    fetcher("PUT", `/game/${props.code}`, { player: props.user }).then(
      (res: any) => {
        if (res.status === "full-game") {
          toast.error("Game full");
          router.push("/");
          return;
        }

        toast(res.status); // res.status === what the error/success code is

        if (res.status.includes("joined") || res.status === "already-in-game") {
          setMe(res.turn ? 0 : 1);

          if (!res.turn || res.status === "already-in-game") {
            // we know there is another player and therefore we can just set the game
            setGame(res.game);
          }
        }
      }
    );
  }, []);

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_KEY as string, {
      cluster: "eu",
    });

    // We are only sending pusher reqs to our game
    const channel = pusher.subscribe(props.code);

    channel.bind("game-update", (data: Game) => {
      console.log(data);

      if (
        data.deck.length !== 30 &&
        data.hand0 !== null &&
        data.hand1 !== null
      ) {
        setTimeout(() => {
          const g = gameRef.current;

          if (!g || g.hand0 === null || g.hand1 === null) return;

          const _game = { ...g };

          if (doesUserWin(g.hand1, g.hand0))
            _game.cards1.push(g.hand1, g.hand0);
          else _game.cards0.push(g.hand1, g.hand0);

          console.log(_game);

          _game.hand0 = null;
          _game.hand1 = null;

          setGame(_game);
        }, 0.5 * 1000);
      }

      setGame(data);
    });

    channel.bind("game-delete", () => {
      router.push("/");
    });

    return () => pusher.unsubscribe(props.code);
  }, []);

  // should we be comparing
  function isTransition() {
    if (!game) return false;
    return game.hand0 !== null && game.hand1 !== null;
  }

  return (
    <div className={styles.bg}>
      {!game ? (
        <div className={generalStyles.bg}>
          <h1 className={generalStyles.heading} style={{ fontSize: "3em" }}>
            waiting for a teammate...
          </h1>
          <h2
            className={generalStyles.subheading}
            style={{ fontSize: "1.5em" }}
          >
            tip: remember to press "take from deck"
          </h2>
          <button
            className={generalStyles.iconButton}
            style={{ width: "10em", marginTop: "1em" }}
            onClick={() => {
              router.push("/");
              fetcher("DELETE", `/game/${props.code}`).catch((err) =>
                toast.error(err)
              );
            }}
          >
            <LogOut size={25} color="white" />
            exit
          </button>
          <h2 className={styles.code}>code: {props.code}</h2>
        </div>
      ) : (
        <>
          {game.deck.length === 0 ? (
            <div className={styles.ended}>
              <h1>
                you
                {game.cards0.length > game.cards1.length
                  ? game.players[0].name
                  : game.players[1].name}{" "}
                won!
              </h1>
              <h2>you lost to {game.players[0].name}</h2>
            </div>
          ) : (
            <div className={styles.game}>
              <h1 className={styles.title}>
                game with{" "}
                <span>
                  {
                    game.players.filter((p) => p.name !== props.user.name)[0]
                      .name
                  }
                </span>
              </h1>
              <div className={styles.playground}>
                <div
                  className={styles.cards}
                  style={{
                    gap: isTransition() ? "calc((20em - 42px) / 2)" : "20em",
                  }}
                >
                  <div>
                    <ChooseCard
                      disabled={isTransition() || game.turn === me}
                      isTurnedOver={
                        me === 0 ? game.hand0 !== null : game.hand1 !== null
                      }
                      onTake={() => fetcher("POST", `/game/${props.code}`)}
                      topCard={me === 0 ? game.hand0 : game.hand1}
                    />
                    <h1>
                      {me === 0 ? game.players[0].name : game.players[1].name}
                    </h1>
                  </div>
                  {isTransition() && (
                    <Arrow
                      style={{ marginTop: "4.5em" }}
                      flipped={
                        me === 0
                          ? doesUserWin(game.hand1, game.hand0)
                          : doesUserWin(game.hand0, game.hand1)
                      }
                      scaleFactor={1}
                    />
                  )}
                  <div>
                    <OpponentCard
                      isTurn={!isTransition() && game.turn === me}
                      isTurnedOver={
                        me === 0 ? game.hand1 !== null : game.hand0 !== null
                      }
                      hand={me === 0 ? game.hand1 : game.hand0}
                    />
                    <h1>
                      {me === 0 ? game.players[1].name : game.players[0].name}
                    </h1>
                  </div>
                </div>

                <div className={styles.score}>
                  <h1>{me === 0 ? game.cards0.length : game.cards1.length}</h1>
                  <h2>:</h2>
                  <h1>{me === 1 ? game.cards0.length : game.cards1.length}</h1>
                </div>
              </div>
              <h2 className={styles.code}>code: {props.code}</h2>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = JWT.parseRequest(ctx.req);

  return {
    props: {
      user: user as Player,
      code: ctx.query.code,
      token: ctx.req.cookies.token,
    },
  };
};

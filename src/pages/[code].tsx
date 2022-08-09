import { JWT } from "@app/jwt";
import { Player } from "@app/santise";
import { doesUserWin } from "@app/utils";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import Pusher from "pusher-js";
import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import gameStyles from "@styles/game.module.css";
import axios from "axios";
import { WaitPage } from "@components/WaitPage";
import { EndGamePage } from "@components/EndGamePage";
import { GamePage } from "@components/GamePage";
import { santiseUser } from "../app/santise";
import { prisma } from "@app/prisma";

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

    const joinGame = useCallback(
        async (abortController: AbortController) => {
            // Join the game
            let res;

            // Removes CancelError
            try {
                res = await axios.put(
                    `/api/game/${props.code}`,
                    { player: props.user },
                    { signal: abortController.signal }
                );
            } catch (error) {
                return;
            }

            if (!res) return;

            const { status, turn, game } = res.data;

            if (status === "full-game") {
                toast.error("Game full");
                return router.push("/");
            }

            toast(status); // res.status === what the error/success code is

            // If we are already in a game
            if (status.includes("joined") || status === "already-in-game") {
                setMe(turn ? 0 : 1);

                if (!turn || status === "already-in-game") {
                    // we know there is another player and therefore we can just set the game

                    if (game.hand1 || game.hand0) setMe(turn ? 1 : 0);

                    setGame(game);
                }
            }
        },
        [props.code, props.user, router]
    );

    // Once a player joins the game, create a socket stating who we are
    useEffect(() => {
        const controller = new AbortController();

        joinGame(controller);

        return () => {
            controller.abort();
        };
    }, [joinGame]);

    useEffect(() => {
        // this is CLIENT SIDE PUSHER
        const pusher = new Pusher(
            process.env.NEXT_PUBLIC_PUSHER_KEY as string,
            {
                cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
            }
        );

        // We are only sending pusher reqs to our game
        const channel = pusher.subscribe(props.code);

        channel.bind("game-update", (data: Game) => {
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
    }, [props.code, router]);

    return (
        <div className={gameStyles.bg}>
            {!game || game.players.length === 1 ? (
                <WaitPage router={router} code={props.code} />
            ) : (
                <>
                    {game.deck.length === 0 ? (
                        <EndGamePage router={router} me={me} game={game} />
                    ) : (
                        <GamePage
                            code={props.code}
                            game={game}
                            me={me}
                            user={props.user}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const user = JWT.parseRequest(ctx.req);

    if (!user) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    const fullUser = await prisma.user.findFirst({
        where: {
            id: user.id,
        },
    });

    if (!fullUser) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return {
        props: {
            user: santiseUser(fullUser),
            code: ctx.query.code,
            token: ctx.req.cookies.token,
        },
    };
};

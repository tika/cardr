import { Game } from "src/pages/[code]";
import gameStyles from "@styles/game.module.css";
import styles from "@styles/styles.module.css";
import { LogoutIcon } from "@heroicons/react/outline";
import { NextRouter } from "next/router";

interface Props {
    game: Game;
    me: number;
    router: NextRouter;
}

export function EndGamePage({ game, me, router }: Props) {
    function getEndText() {
        if (!game) return <h1></h1>;

        const winner =
            game.cards0.length > game.cards1.length
                ? game.players[0].name
                : game.players[1].name;
        const loser =
            game.players[0].name === winner
                ? game.players[1].name
                : game.players[0].name;
        const pointDifference = Math.abs(
            game.cards0.length - game.cards1.length
        );

        if (me === 0 && game.cards0.length > game.cards1.length) {
            return (
                <h1>
                    you <span style={{ color: "var(--green)" }}>won</span> by{" "}
                    {pointDifference} points against <span>{loser}</span>
                </h1>
            );
        } else if (me === 1 && game.cards1.length > game.cards0.length) {
            return (
                <h1>
                    you <span style={{ color: "var(--green)" }}>won</span> by{" "}
                    {pointDifference} points against <span>{loser}</span>
                </h1>
            );
        } else {
            return (
                <h1>
                    you <span style={{ color: "var(--red)" }}>lost</span> by{" "}
                    {pointDifference} points to <span>{winner}</span>
                </h1>
            );
        }
    }

    return (
        <div className={gameStyles.ended}>
            {getEndText()}
            <div className={gameStyles.score}>
                <h1 style={{ fontSize: "1.5em" }}>
                    {me === 0 ? game.cards0.length : game.cards1.length}
                </h1>
                <h2 style={{ fontSize: "1.5em" }}>:</h2>
                <h1 style={{ fontSize: "1.5em" }}>
                    {me === 1 ? game.cards0.length : game.cards1.length}
                </h1>
            </div>

            <button
                className={styles.iconButton}
                style={{
                    width: "10em",
                    position: "absolute",
                    bottom: "4em",
                }}
                onClick={() => {
                    router.push("/");
                }}
            >
                <LogoutIcon width={25} height={25} color="white" />
                go home
            </button>
        </div>
    );
}

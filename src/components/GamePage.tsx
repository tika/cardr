import { fetcher } from "@app/fetcher";
import { Player } from "@app/santise";
import { doesUserWin } from "@app/utils";
import gameStyles from "@styles/game.module.css";
import { Game } from "src/pages/[code]";
import { Arrow } from "./Arrow";
import { ChooseCard } from "./ChooseCard";
import { OpponentCard } from "./OpponentCard";

interface Props {
    game: Game;
    user: Player;
    me: number;
    code: string;
}

export function GamePage(props: Props) {
    // should we be comparing
    function isTransition() {
        if (!props.game) return false;

        // both hands not null
        return props.game.hand0 !== null && props.game.hand1 !== null;
    }

    return (
        <div className={gameStyles.game}>
            <h1 className={gameStyles.title}>
                game with
                <span>
                    {" " +
                        props.game.players.filter(
                            (p) => p.name !== props.user.name
                        )[0].name}
                </span>
            </h1>
            <div className={gameStyles.playground}>
                <div
                    className={gameStyles.cards}
                    style={{
                        gap: isTransition()
                            ? "calc((20em - 42px) / 2)"
                            : "20em",
                    }}
                >
                    <div>
                        <ChooseCard
                            disabled={
                                isTransition() || props.game.turn === props.me
                            }
                            isTurnedOver={
                                props.me === 0
                                    ? props.game.hand0 !== null
                                    : props.game.hand1 !== null
                            }
                            onTake={() =>
                                fetcher("POST", `/game/${props.code}`)
                            }
                            topCard={
                                props.me === 0
                                    ? props.game.hand0
                                    : props.game.hand1
                            }
                        />
                        <h1>
                            {props.me === 0
                                ? props.game.players[0].name
                                : props.game.players[1].name}
                        </h1>
                    </div>
                    {isTransition() && (
                        <Arrow
                            style={{ marginTop: "4.5em" }}
                            flipped={
                                props.me === 0
                                    ? doesUserWin(
                                          props.game.hand1,
                                          props.game.hand0
                                      )
                                    : doesUserWin(
                                          props.game.hand0,
                                          props.game.hand1
                                      )
                            }
                            scaleFactor={1}
                        />
                    )}
                    <div>
                        <OpponentCard
                            isTurn={
                                !isTransition() && props.game.turn === props.me
                            }
                            isTurnedOver={
                                props.me === 0
                                    ? props.game.hand1 !== null
                                    : props.game.hand0 !== null
                            }
                            hand={
                                props.me === 0
                                    ? props.game.hand1
                                    : props.game.hand0
                            }
                        />
                        <h1>
                            {props.me === 0
                                ? props.game.players[1].name
                                : props.game.players[0].name}
                        </h1>
                    </div>
                </div>

                <div className={gameStyles.score}>
                    <h1>
                        {props.me === 0
                            ? props.game.cards0.length
                            : props.game.cards1.length}
                    </h1>
                    <h2>:</h2>
                    <h1>
                        {props.me === 1
                            ? props.game.cards0.length
                            : props.game.cards1.length}
                    </h1>
                </div>
            </div>
            <h2 className={gameStyles.code}>code: {props.code}</h2>
        </div>
    );
}

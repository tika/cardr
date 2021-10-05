import { Card } from "src/pages/[code]";
import { getColor, getRoman } from "./ChooseCard";
import styles from "./ChooseCard.module.css";

interface OpponentCardProps {
    isTurnedOver: boolean;
    isTurn: boolean;
    topCard: Card;
}

export function OpponentCard(props: OpponentCardProps) {
    return (
        <div
            className={styles.card} style={{
                filter: props.isTurn ? "drop-shadow(0px 0px 10px darkgrey)" : "", 
                ...props.isTurnedOver 
                ? { borderColor: getColor(props.topCard.color) }
                : { borderColor: "var(--button-bg)" }
            }}
        >
            {props.isTurnedOver ?
                <h1 style={{ color: getColor(props.topCard.color) }}>
                    {getRoman(props.topCard.number)}
                </h1>
            : 
                <h1 style={{ color: "var(--button-bg)" }}>
                    ?
                </h1>
            }
        </div>
    )
}
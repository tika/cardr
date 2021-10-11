import { Card } from "src/pages/[code]";
import { getColor, getRoman } from "./ChooseCard";
import styles from "./ChooseCard.module.css";

interface OpponentCardProps {
  isTurnedOver: boolean;
  isTurn: boolean;
  hand: Card | null;
}

export function OpponentCard(props: OpponentCardProps) {
  return (
    <div
      className={styles.card}
      style={{
        filter: props.isTurn ? "drop-shadow(0px 0px 10px darkgrey)" : "",
        ...(props.isTurnedOver
          ? { borderColor: getColor(props.hand!.color) }
          : { borderColor: "var(--button-bg)" }),
      }}
    >
      {props.isTurnedOver ? (
        <h1 style={{ color: getColor(props.hand!.color) }}>
          {getRoman(props.hand!.number)}
        </h1>
      ) : (
        <h1 style={{ color: "var(--button-bg)" }}>?</h1>
      )}
    </div>
  );
}

import { Card } from "src/pages/[code]";
import styles from "./ChooseCard.module.css";

interface ChooseCardProps {
    topCard: Card;
    onTake(): void;
    disabled: boolean;
    isTurnedOver: boolean;
}

export function ChooseCard(props: ChooseCardProps) {
    function getRoman(num: typeof props.topCard.number) {
        switch (num) {
            case 1: return "I";
            case 2: return "II";
            case 3: return "III";
            case 4: return "IV";
            case 5: return "V";
            case 6: return "VI";
            case 7: return "VII";
            case 8: return "VIII";
            case 9: return "IX";
            case 10: return "X";
        }
    }

    function getColor(color: typeof props.topCard.color) {
        switch (color) {
            case "red": return "#EF4444";
            case "black": return "#171717";
            case "yellow": return "#FCD34D";
        }
    }

    return (
        <div 
            onClick={() => !props.disabled && props.onTake()}
            className={styles.card} style={{
                filter: props.disabled ? "" : `drop-shadow(0px 0px 10px darkgrey)`, 
                ...props.isTurnedOver 
                ? { borderColor: getColor(props.topCard.color) }
                : { cursor: "pointer", borderColor: "darkgrey", backgroundColor: "grey" }
            }}
        >
            {props.isTurnedOver && <h1 style={{ color: getColor(props.topCard.color) }}>{getRoman(props.topCard.number)}</h1>}
        </div>
    );
}
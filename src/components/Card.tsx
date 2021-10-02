import { Card } from "src/pages/[code]";
import styles from "./Card.module.css";

export function CardComp(card: Card) {
    function getRoman(num: typeof card.number) {
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

    function getColor(color: typeof card.color) {
        switch (color) {
            case "red": return "#EF4444";
            case "black": return "#171717";
            case "yellow": return "#FCD34D";
        }
    }

    const romanNumeral = getRoman(card.number);

    return (
        <div style={{borderColor: getColor(card.color), color: getColor(card.color)}} className={styles.card}>
            <h1>{romanNumeral}</h1>
        </div>
    );
}
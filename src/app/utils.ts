import { Card } from "src/pages/[code]";

export function doesUserWin(hand1: Card | null, hand0: Card | null) {
  if (!hand1 || !hand0) return false;

  return (
    (hand1.color === hand0.color && hand1.number > hand0.number) ||
    doesUserColorWin([hand1, hand0], 0)
  );
}

function doesUserColorWin(compare: Card[], user: 0 | 1) {
  const other = user === 0 ? 1 : 0;

  if (compare[user].color === "red" && compare[other].color === "black")
    return true;

  if (compare[user].color === "yellow" && compare[other].color === "red")
    return true;

  if (compare[user].color === "black" && compare[other].color === "yellow")
    return true;

  return false;
}

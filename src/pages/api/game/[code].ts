import { createEndpoint } from "@app/endpoint";
import { Player } from "@app/santise";
import { Card, Game } from "src/pages/[code]";

let games: Game[] = [];

export default createEndpoint({
    GET: async (req, res) => {
        const code = req.query.code;
        res.send({ game: games.filter(g => g.code === code)[0] });
    },
});

export function isGame(code: string): boolean {
    return games.filter(g => g.code === code).length > 0;
}

export function addPlayer(code: string, player: Player): void {
    const game = games.find(g => g.code === code);
    if (!game) return;

    game.players.push(player);
}

function generateShuffleCards() {
  const cards: Card[] = [];
  
  // Generate cards
  for (let c of ["red", "black", "yellow"])
      for (let n = 1; n <= 10; n++)
        cards.push({ color: c as Card["color"], number: n as Card["number"] })

  // Shuffle cards
  for (let i = 0; i < cards.length; i++) {
    const random = Math.floor(Math.random() * 29);
    cards[random] = cards[i];
    cards[i] = cards[random];
  }

  return cards;
}

export function createGame(code: string, initialPlayer: Player): void {
    if (isGame(code)) return;
    
    games.push({
        code,
        players: [initialPlayer],
        cards: generateShuffleCards()
    });
}

export function deleteGame(code: string) {
    games = games.filter(g => g.code !== code);
}

export function getPlayersGame(player: string) {
    return games.filter(g => g.players.filter(p => p.id === player).length > 0)[0];
}

export function getGame(code: string): Game | null {
    if (!isGame(code)) return null;
    return games.filter(g => g.code === code)[0];
}
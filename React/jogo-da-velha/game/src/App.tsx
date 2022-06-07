import { useState, useEffect } from "react";
import "./App.css";

type Player = "O" | "X";

function App() {
  const [turn, setTurn] = useState<Player>("O");
  const [winner, setWinner] = useState<Player | null>(null);
  const [isTie, setIsTie] = useState<boolean | null>(null);

  const [mark, setMark] = useState<{ [key: string]: Player }>({});
  const gameOver = !!winner || !!isTie;

  const getSquare = (many: number) => {
    return new Array(many).fill(true);
  };

  const play = (index: number) => {
    setMark((prev) => ({ ...prev, [index]: turn }));
    setTurn((prev) => (prev === "O" ? "X" : "O"));
  };

  const getCellPlayer = (index: number) => {
    if (!mark[index]) {
      return;
    }

    return mark[index];
  };

  const getWinner = () => {
    const linesForVictory = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [2, 5, 7],
      [2, 5, 8],
    ];
    for (const line of linesForVictory) {
      const [a, b, c] = line;
      if (mark[a] && mark[a] === mark[b] && mark[a] === mark[c]) {
        return mark[a];
      }
    }
  };

  const reset = () => {
    setMark({});
    setWinner(null);
    setIsTie(null);
  };

  useEffect(() => {
    const winner = getWinner();

    if (winner) setWinner(winner);
  }, [mark]);

  return (
    <section className="container">
      {winner && <h1>O usuário {winner.toUpperCase()} ganhou</h1>}
      {!gameOver && <p>É a vez do {turn}</p>}
      {gameOver && <button onClick={() => reset()}>Novo Jogo</button>}
      <section className="board">
        {getSquare(9).map((_, i) => (
          <article
            className={`cell ${getCellPlayer(i)}`}
            onClick={() => play(i)}
          >
            {mark[i]}
          </article>
        ))}
      </section>
    </section>
  );
}

export default App;

import { useState, useEffect } from "react";
import { getSquare, getCellPlayer, getWinner } from "../utils/index";
import { PlayerWinner, PlayerTurn, GameBoard } from "./components";

import "./App.css";

function App() {
  const [turn, setTurn] = useState<Player>("O");
  const [winner, setWinner] = useState<Player | null>(null);
  const [isTie, setIsTie] = useState<boolean | null>(null);
  const [mark, setMark] = useState<{ [key: string]: Player }>({});
  const gameOver = !!winner || !!isTie;

  const play = (index: number) => {
    setMark((prev) => ({ ...prev, [index]: turn }));
    setTurn((prev) => (prev === "O" ? "X" : "O"));
  };

  const reset = () => {
    setMark({});
    setWinner(null);
    setIsTie(null);
  };

  const checkWinner = () => {
    const winner = getWinner(mark);

    if (winner) setWinner(winner);
  };

  useEffect(() => {
    checkWinner();
  }, [mark]);

  return (
    <section className="container">
      <PlayerWinner isWinner={winner} />
      <PlayerTurn gameOver={gameOver} turn={turn} reset={() => reset()} />
      <GameBoard
        drawBoard={getSquare}
        cell={getCellPlayer}
        play={play}
        mark={mark}
      />
    </section>
  );
}

export default App;

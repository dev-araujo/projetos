import { useState } from "react";
import "./App.css";

type Player = "O" | "X";

function App() {
  const [turn, setTurn] = useState<Player>("O");
  const [winner, setWinner] = useState<Player | null>(null);
  const [isTie, setIsTie] = useState<boolean | null>(null);

  const [mark, setMark] = useState<{ [key: string]: Player }>({});

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

  return (
    <section className="container">
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

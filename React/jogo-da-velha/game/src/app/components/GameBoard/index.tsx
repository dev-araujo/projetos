import React from "react";

function GameBoard({ drawBoard, cell, play, mark }: any) {
  return (
    <section className="board">
      {drawBoard(9).map((_: any, i: any) => (
        <article
          className={`cell ${cell(i, mark)}`}
          onClick={() => play(i)}
          key={i}
        >
          {mark[i]}
        </article>
      ))}
    </section>
  );
}

export default GameBoard;

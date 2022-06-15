import React from "react";

function PlayerWinner({ isWinner }: Player | any) {
  return (
    <h1>{isWinner && <h1>O usuário '{isWinner.toUpperCase()}' ganhou</h1>}</h1>
  );
}

export default PlayerWinner;

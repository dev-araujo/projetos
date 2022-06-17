import "./styles.css";

function PlayerTurn({ gameOver, turn, reset }: any) {
  return (
    <div>
      {!gameOver && (
        <h1>
          É a vez do
          <span className={turn === "O" ? "cell-o" : "cell-x"}>{turn}</span>
        </h1>
      )}
      {gameOver && <button onClick={reset}>{"Novo Jogo".toUpperCase()}</button>}
    </div>
  );
}

export default PlayerTurn;

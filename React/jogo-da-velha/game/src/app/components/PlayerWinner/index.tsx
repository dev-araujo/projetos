import "./styles.css";

function PlayerWinner({ isWinner }: Player | any) {
  return (
    <div>
      {isWinner && (
        <h1>
          O usuário
          <span className={isWinner === "O" ? "cell-o" : "cell-x"}>
            {isWinner.toUpperCase()}
          </span>
          ganhou!!
        </h1>
      )}
    </div>
  );
}

export default PlayerWinner;

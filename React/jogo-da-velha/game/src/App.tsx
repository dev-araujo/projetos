import { useState } from "react";
import "./App.css";

function App() {
  const initialGame: Array<Array<string>> = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [game, setGame] = useState(initialGame);
  const [start, setStart] = useState<String>("X");
  const [isPlay, setIsPlae] = useState<Boolean>(true);

  const gameTable = (play: any) => {
    return (
      <section className="table">
        <article className="line">
          <div className="place">{play[0][0]}</div>
          <div className="place">{play[0][1]}</div>
          <div className="place">{play[0][2]}</div>
        </article>
        <article className="line">
          <div className="place">{play[1][0]}</div>
          <div className="place">{play[1][1]}</div>
          <div className="place">{play[1][2]}</div>
        </article>
        <article className="line">
          <div className="place">{play[2][0]}</div>
          <div className="place">{play[2][1]}</div>
          <div className="place">{play[2][2]}</div>
        </article>
      </section>
    );
  };

  return <section>{gameTable(initialGame)}</section>;
}

export default App;

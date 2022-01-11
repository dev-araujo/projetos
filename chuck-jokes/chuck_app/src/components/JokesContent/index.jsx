import { useContext, useState, useEffect } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import ChuckLogo from "../../assets/chuck_logo.png";
import * as S from "./styles";

function JokesContent() {
  const { jokes, jokesList, search } = useContext(GlobalStateContext);
  const [isVisible, setIsVisible] = useState("visible");

  const jokeSearchedList = jokesList.map((joke) => {
    return <S.List>* {joke.value}</S.List>;
  });

  const isVisibleOrNot = () => {
    if (search.length > 0 || jokeSearchedList.length > 0 || jokes.length > 0) {
      setIsVisible("invisible");
    } else {
      setIsVisible("visible");
    }
  };

  useEffect(() => {
    isVisibleOrNot();
  }, []);

  return (
    <S.Container>
      {search.length > 0 ? jokeSearchedList : <S.List>{jokes}</S.List>}
      <img className={isVisible} src={ChuckLogo} alt={"logo"} />
    </S.Container>
  );
}

export default JokesContent;

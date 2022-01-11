import { useContext } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import * as S from "./styles";

function JokesContent() {
  const { jokes, jokesList, search } = useContext(GlobalStateContext);

  return (
    <S.Container>
      {search.length > 0
        ? jokesList.map((joke) => {
            return <><h1>{joke.categories[0]}</h1><p>{joke.value}</p></>
          })
        : jokes}
    </S.Container>
  );
}

export default JokesContent;

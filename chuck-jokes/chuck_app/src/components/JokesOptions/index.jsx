import { useContext } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import {
  api_getJokesPerCategories,
  api_getRandomJokes,
} from "../../services/api";

import * as S from "./styles";

function JokesOptions() {
  const { setJokes, categories, setSearch } = useContext(GlobalStateContext);
  
  const getJokes = () => {
    api_getRandomJokes(setJokes);
    setSearch("");
  };
  return (
    <S.Container>
      <S.Options>
        {categories.map((option) => {
          return (
            <S.Button
              key={option}
              value={option}
              onClick={() => {
                api_getJokesPerCategories(setJokes, option);
                setSearch("");
              }}
            >
              {option}
            </S.Button>
          );
        })}
      </S.Options>
      <S.RandomButton onClick={getJokes}>Random</S.RandomButton>
    </S.Container>
  );
}

export default JokesOptions;

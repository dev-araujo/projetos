import { useContext } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import { api_getJokesPerCategories } from "../../services/apis";

import * as S from "./styles";

function JokesOptions() {
  const { setJokes, categories } = useContext(GlobalStateContext);

  return (
    <S.Container>
      {categories.map((option) => {
        return (
          <S.Button
            key={option}
            value={option}
            onClick={() => api_getJokesPerCategories(setJokes, option)}
          >
            {option}
          </S.Button>
        );
      })}
    </S.Container>
  );
}

export default JokesOptions;

import { useContext } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import { api_getSearchJokes } from "../../services/api";
import * as S from "./styles";

function JokesSearch() {
  const { jokesList, setJokesList, setJokes, setSearch, search } =
    useContext(GlobalStateContext);

  const searching = (e) => {
    e.preventDefault();
    api_getSearchJokes(setJokesList, search);
  };

  return (
    <form>
      <S.SearchBar
        type={"search"}
        placeholder={"searching jokes,press ENTER or go"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <S.ButtonSearch onClick={searching}>Go</S.ButtonSearch>
    </form>
  );
}

export default JokesSearch;

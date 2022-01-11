import { useContext } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import { api_getSearchJokes } from "../../services/apis";
import * as S from "./styles";

function JokesSearch() {
  const { jokes, setJokes, setSearch, search } = useContext(GlobalStateContext);

  const searching = (event) => {
    event.preventDefault();
    api_getSearchJokes(setJokes, search);
    setSearch("");
  };
  console.log(jokes);
  return (
    <form onSubmit={searching}>
      <S.SearchBar
        type={"search"}
        placeholder={"searching jokes"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <S.ButtonSearch type={"submit"}>Go</S.ButtonSearch>
    </form>
  );
}

export default JokesSearch;

import SearchIcon from "../../assets/search.svg";
import "./styles.scss";

function Search({ searchValue,onChangeCall }: SearchProps) {
  return (
    <section className="poke-search">
      <input
        className="poke-search__input"
        type="search"
        value={searchValue.value}
        onChange={onChangeCall}
      />
      <img src={SearchIcon} alt="lupa" />
    </section>
  );
}

export default Search;

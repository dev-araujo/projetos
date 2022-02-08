import { useMemo } from "react";
import { useObservableState } from "observable-hooks";
import { BehaviorSubject, combineLatestWith, map } from "rxjs";
import { usePokemon } from "../../store/store";
import { Card } from "../../components";
import SearchIcon from "../../assets/search.svg";

import "./styles.scss";

function Search() {
  const { pokemon$ } = usePokemon();
  const search$ = useMemo(() => new BehaviorSubject(""), []);
  const pokemon = useObservableState(pokemon$, []);

  const [filterPokemon] = useObservableState(
    () =>
      pokemon$.pipe(
        combineLatestWith(search$),
        map(([pokemon, search]) =>
          pokemon.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          )
        )
      ),
    []
  );

  return (
    <form>
      <section className="poke-search">
        <input
          className="poke-search__input"
          type="search"
          value={search$.value}
          onChange={(e) => search$.next(e.target.value)}
        />
        <img src={SearchIcon} alt="lupa" />
      </section>
      <section className="poke-search__list">
        {filterPokemon
          .map((p) => (
            <div key={p.name}>
              <Card pokeName={p.name} pokeId={p.id} />
            </div>
          ))
          .slice(0, 16)}
      </section>
    </form>
  );
}

export default Search;

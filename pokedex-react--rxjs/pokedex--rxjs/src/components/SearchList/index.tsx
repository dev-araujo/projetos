import { useMemo } from "react";
import { useObservableState } from "observable-hooks";
import { BehaviorSubject, combineLatestWith, map } from "rxjs";
import { useNavigate } from "react-router";
import { goToPokemonDetails } from "../../routes/Coordinator";
import { usePokemon } from "../../store/store";
import { Card } from "..";
import SearchIcon from "../../assets/search.svg";

import "./styles.scss";

function SearchList() {
  let navigate =useNavigate()
  const { pokemon$ } = usePokemon();
  const search$ = useMemo(() => new BehaviorSubject(""), []);
  const pokemon = useObservableState(pokemon$, []);

  const [filterPokemon] = useObservableState(() =>
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
              <Card pokeName={p.name} pokeId={p.id} pokeDetailGo={()=>goToPokemonDetails(navigate,p.id)} />
            </div>
          ))
          .slice(0, 16)}
      </section>
    </form>
  );
}

export default SearchList;

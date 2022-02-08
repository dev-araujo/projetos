import { useMemo } from "react";
import { useObservableState } from "observable-hooks";
import { BehaviorSubject, combineLatestWith, map } from "rxjs";
import { usePokemon } from "../../store/store";
import SearchIcon from '../../assets/search.svg'

import Pokeball from "../../assets/pokeball.png";
import PokeballShape from "../../assets/pokeball_shape.jpg";

import "./styles.scss"

function Search() {
  const { pokemon$, captured$ } = usePokemon();
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
        {filterPokemon.map((p) => {
          return (
            <div key={p.name}>
              {/* <img
                onClick={() => {
                  if (captured$.value.includes(p.id)) {
                    captured$.next(captured$.value.filter((id) => id !== p.id));
                  } else {
                    captured$.next([...captured$.value, p.id]);
                  }
                }}
                className={"pokeball"}
                src={captured$.value.includes(p.id) ? Pokeball : PokeballShape}
                alt={"pokeball"}
              /> */}
              <strong>{p.name}</strong>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                alt={p.name}
              />
            </div>
          );
        })}
      </section>
    </form>
  );
}

export default Search;

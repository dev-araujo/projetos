import  { useMemo } from "react";
import { BehaviorSubject, combineLatestWith, map } from "rxjs";
import { useObservableState } from "observable-hooks";
import Button from "@mui/material/Button";

import { usePokemon } from "../../store/store";
import { go, back } from "../../utils/changePage";
import { toggleDrawer } from "../../utils/toggleDrawer";

import Logo from "../../assets/logo.svg";
import NotFound from "../../assets/not_found.png";
import { Search, Banner, List, FooterPaginate, Modal } from "../../components/index";

import "./styles.scss";

function Initial() {
  const { pokemon$, paginate$, openModal$ } = usePokemon();
  const search$ = useMemo(() => new BehaviorSubject(""), []);
  const paginate = useObservableState(paginate$, { initial: 0, end: 15 });
  const openModal = useObservableState(openModal$, false);

  const [filterPokemon] = useObservableState(
    () =>
      pokemon$.pipe(
        combineLatestWith(search$),
        map(([pokemon, search]) =>
          pokemon.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
        )
      ),
    []
  );

  return (
    <main className="initial">
      <Banner image={Logo} />
      <Search
        searchValue={search$.value}
        onChangeCall={(e: React.ChangeEvent<HTMLInputElement>) => search$.next(e.target.value)}
      />
      <Button onClick={() => openModal$.next(!openModal)} className="initial__modal">Ver Pokemons Capturados</Button>
      <section className="initial__list">
        {filterPokemon.length > 0 ? (
          <List
            pokemons={
              search$.value.length <= 0
                ? filterPokemon.slice(paginate.initial, paginate.end)
                : filterPokemon.slice(0, 151)
            }
          />
        ) : (
          <img src={NotFound} alt={"not found"} />
        )}
      </section>

      <FooterPaginate
        onClickBack={(e: React.FormEvent) => back(e, paginate$, paginate)}
        onClickGo={(e: React.FormEvent) => go(e, paginate$, paginate)}
      />
      <Modal open={openModal} close={toggleDrawer("right", openModal$)} />
    </main>
  );
}

export default Initial;

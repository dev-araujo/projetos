import { map } from "rxjs";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useObservableState } from "observable-hooks";

import { pokeImage } from "./../../constant/url";
import { goToInitial } from "../../routes/Coordinator";
import { usePokemon } from "../../store/store";

import { Stats, Types, HeaderName } from "../../components/index";

import "./styles.scss";

function Info() {
  let navigate = useNavigate();
  const { id } = useParams();
  const { pokemonWithPower$ } = usePokemon();

  const pokemon = useObservableState(
    () => pokemonWithPower$.pipe(map((pokemon) => pokemon.filter((p) => p.id === Number(id)))),
    []
  );

  return (
    <section id="pokemon-info">
      <HeaderName pokemon={pokemon[0]} />

      <section className="pokemon__status">
        <img src={`${pokeImage}${id}.svg`} alt={"pokemon"} className="slideInDown" />

        <article className="pokemon__status__statistics fadeIn">
          <section>
            <h3>Estatísticas</h3>
            <Types pokemon={pokemon[0]} />
            <ol>
              <li>
                {pokemon[0].map((poke: any) => {
                  return (
                    <section className="pokemon__status-skill" key={poke?.name}>
                      <Stats name={"-Poder"} stat={poke.power} />
                      <Stats name={"-Ataque"} stat={poke.attack} />
                      <Stats name={"-Defesa"} stat={poke.defense} />
                      <Stats name={"-Ataque Especial"} stat={poke.special_attack} />
                      <Stats name={"-Defesa Especial"} stat={poke.special_defense} />
                      <Stats name={"-Velocidade"} stat={poke.speed} />
                    </section>
                  );
                })}
              </li>
            </ol>
          </section>

          <a className="btn btn__secondary" onClick={() => goToInitial(navigate)}>
            voltar
          </a>
        </article>
      </section>
    </section>
  );
}

export default Info;

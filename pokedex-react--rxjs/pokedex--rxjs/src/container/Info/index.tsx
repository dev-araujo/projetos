import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { pokeImage } from "./../../constant/url";
import { goToInitial } from "../../routes/Coordinator";
import { usePokemon } from "../../store/store";
import { useObservableState } from "observable-hooks";
import { map } from "rxjs";

import { Stats } from "../../components/index";

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
    <div>
      <section className="pokemon__names">
        {pokemon[0].map((poke: any) => {
          return (
            <div key={poke?.name}>
              <h1 className="slideInLeft">{poke?.name}</h1>
              <h2 className="slideInRight">{poke?.name}</h2>
            </div>
          );
        })}
      </section>

      <section className="pokemon__status">
        <img src={`${pokeImage}${id}.svg`} alt={"po"} className="slideInDown" />

        <article className="pokemon__status__statistics fadeIn">
          <section>
            <h3>Estatísticas</h3>
            {pokemon[0].map((poke) => {
              return Object.values(poke?.type).map((type: string) => {
                return (
                  <span key={type}>
                    <span className={type.toLocaleLowerCase()}>{type}</span>
                  </span>
                );
              });
            })}
            <ol>
              <li>
                {pokemon[0].map((poke: any) => {
                  return (
                    <div className="pokemon__status-skill" key={poke?.name}>
                      <Stats name={"Power"} stat={poke.power} />
                      <Stats name={"Attack"} stat={poke.attack} />
                      <Stats name={"Defense"} stat={poke.defense} />
                      <Stats name={"Special-Attack"} stat={poke.special_attack} />
                      <Stats name={"Specia-Defense"} stat={poke.special_defense} />
                      <Stats name={"Speed"} stat={poke.speed} />
                    </div>
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
    </div>
  );
}

export default Info;

import { useNavigate } from "react-router";

import { goToPokemonDetails } from "../../routes/Coordinator";
import { Card } from "../index";

import "./styles.scss";

function List({ pokemons }: any) {
  let navigate = useNavigate();
  return (
    <section className="poke-list">
      {pokemons.map((p: any) => (
        <div key={p.name}>
          <Card
            pokeName={p.name}
            pokeId={p.id}
            pokeDetailGo={() => goToPokemonDetails(navigate, p.id)}
          />
        </div>
      ))}
    </section>
  );
}

export default List;

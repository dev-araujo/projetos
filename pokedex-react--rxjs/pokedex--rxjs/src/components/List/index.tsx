import { useNavigate } from "react-router";
import { Card } from "../index";
import { goToPokemonDetails } from "../../routes/Coordinator";

import "./styles.scss";

function List({ pokemons, start, end }: any) {
  let navigate = useNavigate();
  return (
    <section className="poke-list">
      {pokemons
        .map((p: any) => (
          <div key={p.name}>
            <Card
              pokeName={p.name}
              pokeId={p.id}
              pokeDetailGo={() => goToPokemonDetails(navigate, p.id)}
            />
          </div>
        ))
        .slice(start, end)}
    </section>
  );
}

export default List;

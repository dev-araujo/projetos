import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  console.log(id)
  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={'po'}
      />
    </div>
  );
}

export default Details;

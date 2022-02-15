import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { pokeImage } from './../../constant/url';
import {goToInitial} from '../../routes/Coordinator'

function Info() {
  let navigate = useNavigate()
  const { id } = useParams();
  return (
    <div>
      <img
        src={`${pokeImage}${id}.svg`}
        alt={"po"}
      />
      <button onClick={()=>goToInitial(navigate)}>voltar</button>
    </div>
  );
}

export default Info;

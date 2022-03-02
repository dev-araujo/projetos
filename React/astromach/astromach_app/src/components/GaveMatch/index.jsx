import { useContext } from "react";
import Context from "../../global/Context";

import * as S from "./styles";

function GaveMatch() {
  const { listMatched } = useContext(Context);

  return (
    <S.Container>
      {listMatched.map((match) => {
        return (
          <S.Persons key={match.id}>
            <img src={match.photo} alt={"foto de usuários"} loading="eager" />
            <p>{match.name}</p>
          </S.Persons>
        );
      })}
    </S.Container>
  );
}

export default GaveMatch;

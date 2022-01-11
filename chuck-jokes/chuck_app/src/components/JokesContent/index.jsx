import { useContext } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import * as S from "./styles";

function JokesContent() {
  const { jokes } = useContext(GlobalStateContext);

  return <S.Container >{jokes}</S.Container>;
}

export default JokesContent;

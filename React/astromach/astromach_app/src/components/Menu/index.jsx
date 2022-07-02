import { useContext } from "react";
import Context from "../../global/Context";
import { deleteMatches } from "../../services/api-services";
import Logo from "../../assets/logo.png";

import * as S from "./styles";

function Menu() {
  const { changeView, setChangeView } = useContext(Context);

  const change = () => {
    setChangeView(!changeView);
  };

  const cleanMatches = () => {
    if (changeView) {
      deleteMatches();
    }
  };

  return (
    <S.Container>
      <S.ClearMatchesButton onClick={cleanMatches}>
        {changeView ? "Limpar" : " "}
      </S.ClearMatchesButton>
      <S.LogoImage src={Logo} alt={"logo"} />
      <S.MatchesButton onClick={change}>
        {changeView ? "Voltar" : "Ver matches"}
      </S.MatchesButton>
    </S.Container>
  );
}

export default Menu;

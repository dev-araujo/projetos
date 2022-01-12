import { useContext } from "react";
import Context from "../../global/Context";

import * as S from "./styles";

const Content = () => {
  const { isMatch } = useContext(Context);

  const preview = {
    id: "2LAsTKPOVs3tavH6ga6v",
    age: 26,
    photo:
      "https://static.ndmais.com.br/2019/07/P-15-Texto-1-Foto-1-Anitta-533x800.jpg",
    name: "Anitta",
    bio: "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras.",
  };

  return (
    <S.Container>
      <img src={isMatch.photo || preview.photo} alt={"isMatch"} />

      <S.Information>
        <h1>
          {isMatch.name || preview.name}, {isMatch.age || preview.age}
        </h1>
        <p>{isMatch.bio || preview.bio}</p>
      </S.Information>
    </S.Container>
  );
};

export default Content;

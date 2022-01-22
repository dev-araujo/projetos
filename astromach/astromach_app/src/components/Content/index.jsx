import { useContext } from "react";
import Context from "../../global/Context";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import * as S from "./styles";

const Content = () => {
  const { isMatch } = useContext(Context);

  // const preview = {
  //   id: "2LAsTKPOVs3tavH6ga6v",
  //   age: 26,
  //   photo:
  //     "https://static.ndmais.com.br/2019/07/P-15-Texto-1-Foto-1-Anitta-533x800.jpg",
  //   name: "Anitta",
  //   bio: "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras.",
  // };
  console.log(isMatch);
  return (
    <S.Container>
      {isMatch !== "" ? (
        <>
          <img src={isMatch.photo} alt={"isMatch"} />

          <S.Information>
            <h1>
              {isMatch.name}, {isMatch.age}
            </h1>
            <p>{isMatch.bio}</p>
          </S.Information>
        </>
      ) : (
        <S.Loading>
          <CircularProgress />
        </S.Loading>
      )}
    </S.Container>
  );
};

export default Content;

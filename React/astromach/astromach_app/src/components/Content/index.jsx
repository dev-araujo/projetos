import { useContext } from "react";
import Context from "../../global/Context";

import CircularProgress from "@mui/material/CircularProgress";

import * as S from "./styles";

const Content = () => {
  const { isMatch } = useContext(Context);

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

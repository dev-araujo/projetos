import { useContext } from "react";
import Context from "../../global/Context";
import HeartIcon from "@material-ui/icons/Favorite";
import XIcon from "@material-ui/icons/Close";
import ChoiceButton from "@material-ui/core/Fab";

import { getIsMatch, postMatch } from "../../services/api-services";

import * as S from "./styles";

function Options() {
  const { isMatch, setIsMatch } = useContext(Context);

  const loadNew = () => {
    return getIsMatch(setIsMatch);
  };

  const ohYeah = () => {
    const data = {
      id: isMatch.id,
      choice: true,
    };
    postMatch(data);
  };

  const match = () => {
    loadNew();
    ohYeah();
  };
  return (
    <S.Container>
      <ChoiceButton color="primary" onClick={loadNew} aria-label="edit">
        <XIcon />
      </ChoiceButton>

      <ChoiceButton color="secondary" onClick={match} aria-label="edit">
        <HeartIcon />
      </ChoiceButton>
    </S.Container>
  );
}

export default Options;

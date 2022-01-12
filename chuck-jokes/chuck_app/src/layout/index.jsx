import {
  JokesHeader,
  JokesSearch,
  JokesOptions,
  JokesContent,
} from "../components/index";

import * as S from "./styles";

function Layout() {
  return (
    <S.Container>
      <S.OptionsSide>
        <JokesHeader />
        <JokesSearch />
        <JokesOptions />
      </S.OptionsSide>
      <JokesContent />
    </S.Container>
  );
}

export default Layout;

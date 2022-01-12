import { useContext } from "react";
import Context from "../global/Context";
import { Menu, Content, Options, GaveMatch } from "../components/index";

import * as S from "./styles";

function Layout() {
  const { changeView } = useContext(Context);
  return (
    <S.Container>
      <S.CardLayout>
        <Menu />
        {changeView ? (
          <GaveMatch />
        ) : (
          <section>
            <Content />
            <Options />
          </section>
        )}
      </S.CardLayout>
    </S.Container>
  );
}

export default Layout;

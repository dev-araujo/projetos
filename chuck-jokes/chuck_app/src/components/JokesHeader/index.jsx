import AvatarImage from "../../assets/chuck_avatar.png";
import * as S from "./styles";

function JokesHeader() {
  return (
    <section>
        <S.Title>CHUCK JOKES</S.Title>
      <S.Avatar>
        <img src={AvatarImage} alt={"jokes"} />
      </S.Avatar>
    </section>
  );
}

export default JokesHeader;

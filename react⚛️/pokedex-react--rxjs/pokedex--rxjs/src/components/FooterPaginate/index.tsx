import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";

import "./styles.scss";

function FooterPaginate({ onClickGo,onClickBack }: PaginateProps) {
  return (
    <footer className="footer-paginate">
      <p onClick={onClickBack}>
        <ArrowCircleLeftRoundedIcon fontSize={"large"} />
      </p>
      <p onClick={onClickGo}>
        <ArrowCircleRightRoundedIcon fontSize={"large"} />
      </p>
    </footer>
  );
}

export default FooterPaginate;

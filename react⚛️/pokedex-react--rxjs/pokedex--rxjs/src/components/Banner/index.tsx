import "./styles.scss"
function Banner({image}:any) {
  return (
    <figure className="banner__figure">
      <img src={image} alt="logo" />
    </figure>
  );
}

export default Banner

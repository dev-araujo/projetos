import React from "react";

import { images } from "../../constants";

function SubHeading({title}) {
  return (
    <section style={{marginBottom:'1rem'}}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </section>
  );
}

export default SubHeading;

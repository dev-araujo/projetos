import React from "react";

import { images } from "../../constants";
import { SubHeading } from "./../../components/index";

import "./styles.css";

function Header() {
  return (
    <section className="app__header app__wrapper section__padding" id="home">
      <section className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis
          quam scelerisque sapien. Et, penatibus aliquam amet tellus
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </section>
      <section className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </section>
    </section>
  );
}

export default Header;

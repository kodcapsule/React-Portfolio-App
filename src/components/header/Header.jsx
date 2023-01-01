import React from "react";
import "./header.css";
import Cta from "./Cta";
import Social from "./SocialHandles";

import ME from "../../assets/me.png";
const Header = () => {
  return (
    <header className="header__container">
      <div className="container">
        <h5> I'm </h5>
        <h1>Kuseh Wewoliamo</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__to__contact">
          Scroll to contact
        </a>
        <Social />
      </div>
    </header>
  );
};

export default Header;

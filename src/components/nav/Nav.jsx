import React from "react";
import "./nav.css";

import { ImHome } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";

const Nav = () => {
  return (
    <nav className="nav-__containter">
      {" "}
      <a href="#home" className="active">
        <ImHome />
      </a>
      <a href="#about">
        <FaUserAlt />
      </a>
      <a href="#contact">
        <MdContactMail />
      </a>
      <a href="#experience">
        <MdWork />
      </a>
      <a href="#services">
        <RiServiceFill />
      </a>
    </nav>
  );
};

export default Nav;

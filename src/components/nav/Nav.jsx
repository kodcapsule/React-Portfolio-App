import React from "react";
import { useState } from "react";
import "./nav.css";

import { ImHome } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="nav-__containter">
      {" "}
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <ImHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactMail />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdWork />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceFill />
      </a>
    </nav>
  );
};

export default Nav;

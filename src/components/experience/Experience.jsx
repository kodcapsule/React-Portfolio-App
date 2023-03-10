import React from "react";
import "./experience.css";
import { FaCheckCircle } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript1 } from "react-icons/di";
import { SiDjango } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
const Experience = () => {
  return (
    <section>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="container_frontend">
          <h3>FRONTEND Develoepment</h3>
          <div className="experinece__content">
            <article className="experince_details">
              {/* <FaCheckCircle className="check_icon" /> */}
              <ImHtmlFive className="check_icon" />
              <h4>HTML</h4>
            </article>
            <article className="experince_details">
              <IoLogoCss3 className="check_icon" />

              <h4>CSS</h4>
            </article>
            <article className="experince_details">
              <DiJavascript1 className="check_icon" />
              <h4>JAVASCRIPT</h4>
            </article>
            <article className="experince_details">
              <FaBootstrap className="check_icon" />
              <h4>BOOTSRAP</h4>
            </article>
            <article className="experince_details">
              <SiTailwindcss className="check_icon" />
              <h4>TAILWIND</h4>
            </article>
            <article className="experince_details">
              <RiReactjsLine className="check_icon" />
              <h4>REACT</h4>
            </article>
          </div>
        </div>

        <div className="container_frontend">
          <h3>BACKEND Development</h3>
          <div className="experinece__content">
            <article className="experince_details">
              <FaNodeJs className="check_icon" />
              <h4>NodeJS</h4>
            </article>
            <article className="experince_details">
              <SiDjango className="check_icon" />
              <h4>Django</h4>
            </article>
            <article className="experince_details">
              <GrMysql className="check_icon" />
              <h4>MYSQL</h4>
            </article>
            <article className="experince_details">
              <SiPostgresql className="check_icon" />
              <h4>POSTGRE</h4>
            </article>
            <article className="experince_details">
              <FaCheckCircle className="check_icon" />
              <h4>MANGO DB</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

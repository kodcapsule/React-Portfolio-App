import React from "react";
import "./about.css";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineWork } from "react-icons/md";

import Me from "../../assets/me.png";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know Me</h5>
      <h2>About ME</h2>

      <div className="container about__container">
        <div className="me_container">
          <img src={Me} alt="Me" className="me__img" />
        </div>

        <div className="about_container">
          <div className="cards-container">
            <article className="about_card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 + years</small>
            </article>

            <article className="about_card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Clients</small>
            </article>

            <article className="about_card">
              <MdOutlineWork className="about__icon" />
              <h5>Work</h5>
              <small>80 + Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ex quisquam velit eligendi fuga, eum temporibus sapiente architecto
            odio, dolorum quas accusantium exercitationem nihil a nam quod amet.
            Harum, ipsam?
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

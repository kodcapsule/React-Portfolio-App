import React from "react";
import "./experience.css";
import { FaCheckCircle } from "react-icons/fa";
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
              <FaCheckCircle />
              <h4>HTML</h4>
            </article>
            <article className="experince_details">
              <FaCheckCircle />
              <h4>CSS</h4>
            </article>
            <article className="experince_details">
              <FaCheckCircle />
              <h4>JAVASCRIPT</h4>
            </article>
            <article className="experince_details">
              <FaCheckCircle />
              <h4>BOOTSRAP</h4>
            </article>
            <article className="experince_details">
              <FaCheckCircle />
              <h4>TAILWIND</h4>
            </article>
            <article className="experince_details">
              <FaCheckCircle />
              <h4>REACT</h4>
            </article>
          </div>
        </div>

        <div className="container_frontend">
          <h3>BACKEND Development</h3>
          <div className="experinece__content">
            <article className="experince_details">
              <FaCheckCircle />
              <h4>NodeJS</h4>
            </article>
            <article className="experince_details">
              <FaCheckCircle />
              <h4>Django</h4>
            </article>
            <article className="experince_details">
              <FaCheckCircle />
              <h4>MYSQL</h4>
            </article>
            <article className="experince_details">
              <FaCheckCircle />
              <h4>POSTGRE</h4>
            </article>
            <article className="experince_details">
              <FaCheckCircle />
              <h4>MANGO DB</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

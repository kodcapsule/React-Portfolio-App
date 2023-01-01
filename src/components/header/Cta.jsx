import React from "react";
import CV from "../../assets/web.pdf";

const Cta = () => {
  return (
    <div className="cta">
      {" "}
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default Cta;

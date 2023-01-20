import React from "react";
import "./testimonials.css";
import PRJ from "../../assets/prj.png";
const Testimonials = () => {
  return (
    <section id="services">
      <h5>Reviews From Clients </h5>
      <h2>Testimonials</h2>
      <div className="container testimonial__container">
        <article className="testimonail">
          <div className="client__avata">
            <img src={PRJ} alt="" />
          </div>
          <h5 className="client__name">Kuseh Wewoli</h5>
          <p className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            facere, eos ad aspernatur magni sequi libero beatae reprehenderit
            vero nisi.
          </p>
        </article>
        <article className="testimonail">
          <div className="client__avata">
            <img src={PRJ} alt="" />
          </div>
          <h5 className="client__name">Kuseh Wewoli</h5>
          <p className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            facere, eos ad aspernatur magni sequi libero beatae reprehenderit
            vero nisi.
          </p>
        </article>
        <article className="testimonail">
          <div className="client__avata">
            <img src={PRJ} alt="" />
          </div>
          <h5 className="client__name">Kuseh Wewoli</h5>
          <p className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            facere, eos ad aspernatur magni sequi libero beatae reprehenderit
            vero nisi.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;

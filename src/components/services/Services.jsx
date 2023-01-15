import "./services.css";
import { GoCheck } from "react-icons/go";

const Services = () => {
  return (
    <section>
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className="services">
          <h3 className="service__heading">Web Development</h3>
          <ul className="Ssrvice_list">
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <h3 className="service__heading">UI/UX</h3>
          <ul className="Ssrvice_list">
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <h3 className="service__heading">Content Creation</h3>
          <ul className="Ssrvice_list">
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck className="services__list__icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

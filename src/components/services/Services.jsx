import "./services.css";
import { GoCheck } from "react-icons/go";

const Services = () => {
  return (
    <section>
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className="services">
          <h3>UI/UX</h3>
          <ul className="Ssrvice_list">
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <h3>Web Development</h3>
          <ul className="Ssrvice_list">
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <h3>Content Creation</h3>
          <ul className="Ssrvice_list">
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li className="service">
              <GoCheck />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services__list">
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* ============================= end of UI/UX ============================ */}

        <article className="services">
          <div className="service__head">
            <h3>Wew Developer</h3>
          </div>
          <ul className="services__list">
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* ============================= end of Web developer ============================ */}

        <article className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="services__list">
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* ============================= end of Content creation ============================ */}
      </div>
    </section>
  );
};

export default Services;

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
              <p>Criando design básico de UI/UX usando figma</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Protótipos figma.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Estudos de components</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Estudos de dashboard figma</p>
            </li>
          </ul>
        </article>

        {/* ============================= end of UI/UX ============================ */}

        <article className="services">
          <div className="service__head">
            <h3>Web Developer</h3>
          </div>
          <ul className="services__list">
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Criação de Front End usando HTML/CSS, SASS, CSS Framework</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Javascript</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>React JS</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Next JS</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Node JS</p>
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
              <p>Web site</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Blog</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Apps</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Systems</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Data Base</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Hospedagem sites</p>
            </li>
          </ul>
        </article>

        {/* ============================= end of Content creation ============================ */}
      </div>
    </section>
  );
};

export default Services;

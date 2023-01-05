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
              <p>UX | UI Design Figma</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Design Logo Figma.</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Design Midia Socials</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Design Banners</p>
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
              <p>Web sites</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Landing Page</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Formulario</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Web apps</p>
            </li>
          </ul>
        </article>

        {/* ============================= end of Web developer ============================ */}

        <article className="services">
          <div className="service__head">
            <h3>Services</h3>
          </div>
          <ul className="services__list">
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Produtos de Sofwares</p>
            </li>
            <li>
              <i class="service__list-icon bx bx-check"></i>
              <p>Freelancer</p>
            </li>
          </ul>
        </article>

        {/* ============================= end of Content creation ============================ */}
      </div>
    </section>
  );
};

export default Services;

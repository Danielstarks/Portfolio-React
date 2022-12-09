import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          {/*FRONTEND*/}

          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <i class="experience__details-icon bx bxs-badge-check"></i>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Web sites, Forms, Tables e Dashboard.</small>
              </div>
            </article>
            <article className="experience__details">
            <i class="experience__details-icon bx bxs-badge-check"></i>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Style components, animate e Sass. </small>
              </div>
            </article>
            <article className="experience__details">
            <i class="experience__details-icon bx bxs-badge-check"></i>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Functions, Object e Prototypes. </small>
              </div>
            </article>
            <article className="experience__details">
            <i class="experience__details-icon bx bxs-badge-check"></i>
              <div>
              <h4>REACT</h4>
              <small className="text-light">Pages, Rotas, Jsx e Components.</small>
              </div>
            </article>
          </div>
        </div>

        {/*BACKEND*/}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
            <i class="experience__details-icon bx bxs-badge-check"></i>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Estudando essa tecnologia</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="experience__details-icon bx bxs-badge-check"></i>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Estudando essa tecnologia</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="experience__details-icon bx bxs-badge-check"></i>
              <div>
                <h4>PHP</h4>
                <small className="text-light">EEstudando essa tecnologia</small>
              </div>
            </article>
            <article className="experience__details">
              <i class="experience__details-icon bx bxs-badge-check"></i>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Estudando essa tecnologia</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

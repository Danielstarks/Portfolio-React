import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <i className="about__icon bx bx-award"></i>
              <h5>Experience</h5>
              <small>3+ Yers Working</small>
            </article>

            <article className="about__card">
              <i className="about__icon bx bx-user-check"></i>
              <h5>Experience</h5>
              <small>3+ Yers Working</small>
            </article>

            <article className="about__card">
              <i className="about__icon bx bx-folder-open"></i>
              <h5>Experience</h5>
              <small>3+ Yers Working</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            dolorem aliquid ducimus repellat debitis modi similique, velit ipsa
            tempore ab omnis quibusdam neque iure itaque repudiandae cum,
            laborum eum hic.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

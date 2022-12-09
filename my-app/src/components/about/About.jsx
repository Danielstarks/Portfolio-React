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
              <h5>Full Stack</h5>
              <small>Aluno Danki Code</small>
            </article>

            <article className="about__card">
              <i className="about__icon bx bx-user-check"></i>
              <h5>Analise de Sistema</h5>
              <small>Senac São Paulo</small>
            </article>

            <article className="about__card">
              <i className="about__icon bx bx-folder-open"></i>
              <h5>Projetos</h5>
              <small>No GitHub</small>
            </article>
          </div>
          <p>
            Engenheiro de Software apaixonado por desenvolvimento web, Clean
            Code, UX | UI Design e Interatividade. Possuo experiências no
            desenvolvimento de sites, criação de layouts e artes para mídias
            sociais. Atuei desenvolvendo sites, na maioria das vezes para
            divulgar meu desenvolvimento utilizando HTML5, CSS3, Javascript,
            ReactJS, bibliotecas como por exemplo o Bootstrap. Acredito que
            posso integrar seu time e ajudar no crescimento da sua empresa,
            sempre disposto a aprender novas tecnologias e sempre comprometido
            com datas e detalhes dos trabalhos.
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

import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crytpo Currency Dashbord & Financial Visualization",
    github: "https://github.com/Danielstarks/web-foodfun",
    demo: "https://app-fast-food.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Crytpo Currency Dashbord & Financial Visualization",
    github: "https://github.com/Danielstarks/web-fortnite",
    demo: "hhttps://web-fortnite.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Crytpo Currency Dashbord & Financial Visualization",
    github: "https://github.com/Danielstarks/web-dance",
    demo: "https://web-dance.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Crytpo Currency Dashbord & Financial Visualization",
    github: "https://github.com/Danielstarks/Portfolio-web",
    demo: "https://portfolio-danielgomes.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crytpo Currency Dashbord & Financial Visualization",
    github: "https://github.com/Danielstarks/web-viagens",
    demo: "https://web-vigens.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Crytpo Currency Dashbord & Financial Visualization",
    github: "https://github.com/Danielstarks/web-viagens",
    demo: "https://web-vigens.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

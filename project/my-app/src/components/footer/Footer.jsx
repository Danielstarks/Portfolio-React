import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#" className="footer__logo">
          Daniel
        </a>

        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/daniel-santos1/" target="_blank">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a   href="https://www.instagram.com/daniel_santoskkk/"
              target="_blank">
              <i className="bx bxl-instagram"></i>
          </a>
          <a  href="https://api.whatsapp.com/send/?phone=5511981102837"
              target="_blank">
          <i className="bx bxl-whatsapp"></i>
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Daniel. All right reserved.</small>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

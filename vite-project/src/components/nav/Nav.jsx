import React from "react";
import { useState } from "react";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <i className="bar bx bx-home"></i>
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <i className="bar bx bx-user"></i>
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <i className="bar bx bx-book"></i>
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <i className="bar bx bxs-terminal"></i>
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contac")}
          className={activeNav === "#contac" ? "active" : ""}
        >
          <i className="bar bx bx-message-square-dots"></i>
        </a>
      </nav>
    </div>
  );
};

export default Nav;

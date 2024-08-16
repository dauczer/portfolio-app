import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Alex Daucourt</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <span className="footer__copy">
          &#169; Alex Daucourt. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

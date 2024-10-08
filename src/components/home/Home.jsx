import React from "react";
import "./home.css";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content container">
          <Data />
          <div className="home__img"></div>
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

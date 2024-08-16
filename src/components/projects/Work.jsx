import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section class="work section" id="projects">
      <h2 class="section__title">My projects</h2>
      <span class="section__subtitle">Personnal projects, outside of my job</span>

      <Works />
    </section>
  );
};

export default Work;

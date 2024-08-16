import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Years Working</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Studies</h3>
        <span className="about__subtitle">Master of statistic modeling</span>
      </div>

      <div className="about__box">
        <i class="bx bx-file about__icon"></i>

        <h3 className="about__title">Personnal projects</h3>
        <span className="about__subtitle">See below</span>
      </div>
    </div>
  );
};

export default Info;

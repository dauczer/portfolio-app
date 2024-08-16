import React from "react";

const Softskills = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Languages & soft skills <i class="uil uil-brain"></i></h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">French</h3>
              <span className="skills__level">Native</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">English</h3>
              <span className="skills__level">Bilingual</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Spanish</h3>
              <span className="skills__level">A2 / B1</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Teamwork</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Communication</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Problem solving</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Softskills;

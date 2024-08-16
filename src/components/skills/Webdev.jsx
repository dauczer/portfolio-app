import React from "react";

const Webdev = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Web development <i class="uil uil-window"></i></h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Webdev;

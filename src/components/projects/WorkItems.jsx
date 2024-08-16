import React, { useState } from "react";

const WorkItems = ({ item }) => {

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <span className="work__button" onClick={() => toggleTab(1)}>
            See more info this project
            <i className="uil uil-arrow-right work__button-icon"></i>
      </span>

      <div
        className={
          toggleState === 1
            ? "work__modal active-modal"
            : "work__modal"
        }
      >
        <div className="work__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times work__modal-close"
          ></i>

          <h3 className="work__modal-title">{item.title}</h3>
          <p className="work__modal-description">
            {item.quick_description}
          </p>

          <ul className="work__modal-work grid">
            <li className="work__modal-service">
              <i class="uil uil-edit"></i>
              <p className="work__modal-info">
              {item.description}
              </p>
            </li>

            <li className="work__modal-service">
              {item.category.toLowerCase() === 'data' ? (
                <>
                  <i class="uil uil-github-alt"></i>
                  <a className="work__modal-info work__link" href={item.github_link} target="_blank" rel="noopener noreferrer">
                  Github link
                  </a>
                </>
              ) : item.category.toLowerCase() === 'job' ? (
                <>
                  <p className="work__modal-info">
                    <ul>
                      <li>
                        - an advanced Tobit model which was supposed to increase fraud detection
                      </li>
                      <li>
                        - full automatisation of any repeatable PDF documents using Python and HTML (with a pleasent esthetic)
                      </li>
                      <li>
                        - a loooot of diverse dashboards, using Power BI
                      </li>
                      <li>
                        - some applications useful in the company, using PowerApp (such as a complete dynamic contact directory)
                      </li>
                    </ul>
                  </p>
                </>
              ) : item.category.toLowerCase() === 'web' ?(
                <>
                  <i class="uil uil-desktop-alt"></i>
                  <a className="work__modal-info work__link" href={item.website_link} target="_blank" rel="noopener noreferrer">
                  Website link
                  </a>
                </>
                
              ) : null}
            </li>

            <li className="work__modal-service">
            {item.category.toLowerCase() === 'data' ? (
                <>
                  <i class="uil uil-file-graph"></i>
                  <a className="work__modal-info work__link" href={item.report} target="_blank">
                  Show report
                  </a>
                </>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;

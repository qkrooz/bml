import React from "react";
import "./PageEnd.css";
import texts from "../_resources/texts.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitch, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
const PageEnd = ({ lang }) => {
  return (
    <div
      className="page-end-container"
    >
      <div className="social-links">
        <a class="social-a" href="#">
          <FontAwesomeIcon icon={faTwitch} color={'white'} />
        </a>
        <a class="social-a" href="#">
          <FontAwesomeIcon icon={faFacebook} color={'white'} />
        </a>
        <a class="social-a" href="#">
          <FontAwesomeIcon icon={faDiscord} color={'white'} />
        </a>
        <a class="social-a" href="#">
          <FontAwesomeIcon icon={faInstagram} color={'white'} />
        </a>
        <a class="social-a" href="#">
          <FontAwesomeIcon icon={faTwitter} color={'white'} />
        </a>
      </div>
      <div className="important-links">
        <button className="important-link">{texts[lang].footer[1]}</button>
        <button className="important-link">{texts[lang].footer[2]}</button>
        <button className="important-link">{texts[lang].footer[3]}</button>
      </div>
      <div className="company-info">
        <p className="info">
          Border Major League 2020 {"\u00a9"} {texts[lang].footer[4]}
        </p>
      </div>
    </div>
  );
};
export default PageEnd;

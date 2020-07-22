import React from "react";
import "./Header.css";
import Logo from "../_img/Untitled-2.png";
// react-router-dom
import { Link, NavLink } from "react-router-dom";
import * as Icon from "react-feather";
import { Menu, Dropdown } from "antd";
const Header = ({ lang, setLanguage, texts, isLive }) => {
  let isLogged = false;
  const langMenu = (
    <Menu>
      {lang === "es" ? (
        <Menu.Item>
          <button className="language-button" onClick={() => setLanguage("en")}>
            Inglés
          </button>
        </Menu.Item>
      ) : (
          <Menu.Item>
            <button className="language-button" onClick={() => setLanguage("es")}>
              Spanish
          </button>
          </Menu.Item>
        )}
    </Menu>
  );
  return (
    <div className="header">
      <nav>
        <NavLink to="/home" className="logo">
          <img src={Logo} alt="" className="logo" />
        </NavLink>
        <NavLink
          className="link"
          activeStyle={{ color: "#ff2400" }}
          exact
          to="/home"
        >
          {texts[lang].nav[1]}
        </NavLink>
        <NavLink
          className="link"
          activeStyle={{ color: "#ff2400" }}
          to="/home/calendar"
        >
          {texts[lang].nav[2]}
        </NavLink>
        <NavLink
          className="link"
          activeStyle={{ color: "#ff2400" }}
          to="/home/ranking"
        >
          {texts[lang].nav[3]}
        </NavLink>
        <NavLink
          className="link"
          activeStyle={{ color: "#ff2400" }}
          to="/home/teams"
        >
          {texts[lang].nav[4]}
        </NavLink>
      </nav>
      {isLive ? (
        <div className="live-container controls">
          <p className="control-stamp glow">{"\u2B24"}</p>
          <p className="control-stamp">{texts[lang].live_stamp}</p>
        </div>
      ) : null}

      <div className="controls">
        <Dropdown overlay={langMenu} placement="bottomLeft" arrow>
          <a className="control">
            <p class="control-stamp">{lang}</p>
            <Icon.Globe color={"#e2e2e2"} />
          </a>
        </Dropdown>
        <Link className="control" to="/login">
          <Icon.User color={"#e2e2e2"} />
          {isLogged ? null : (
            <p class="control-stamp">{texts[lang].login_stamp}</p>
          )}
        </Link>
      </div>
    </div>
  );
};
export default Header;

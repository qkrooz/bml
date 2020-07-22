import React from "react";
import "./Home.css";
import "./Posts.css";
import { Row, Col } from "antd";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import * as Icon from "react-feather";
// Others
import PageEnd from "../_components/PageEnd";
import Team1 from "../_img/team1.png";
import Team2 from "../_img/team2.png";
import ExampleImg from "../_img/example1.jpg";
import ExampleImg2 from "../_img/example2.jpg";
import ExampleImg3 from "../_img/example3.jpg";
import AdImage from "../_img/ad.jpg";
import AdImage2 from "../_img/ad2.jpg";
import BannerImg from "../_img/banner.png";
import FullWidthImage from "../_img/fullwidth.jpg";

const Event = () => {
  return (
    <div className="event-container">
      <p className="timeStamp">8:00 AM</p>
      <div className="teams-container" style={{ paddingBottom: 0 }}>
        <img src={Team1} alt="team-logo" className="teamImage" />
        <p className="teamName">HLG</p>
      </div>
      <div className="teams-container">
        <img src={Team2} alt="team-logo" className="teamImage" />
        <p className="teamName">III</p>
      </div>
    </div>
  );
};
const Schedule = () => {
  return (
    <Col span={3} style={{ maxHeight: "100%", overflow: "auto" }}>
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
    </Col>
  );
};
const Stream = () => {
  return (
    <Row style={{ height: "100%" }}>
      <ReactTwitchEmbedVideo
        channel="lck"
        width={"100%"}
        height={"100%"}
        theme="dark"
      />
    </Row>
  );
};
const StandardPost = ({ img, content, type }) => {
  return (
    <Col span={12}>
      <a>
        <div className="standardPostContainer">
          <div className="gradient"></div>
          <div className="image">
            <img src={img} alt="post-image" className="post-image" />
          </div>
          <p className="post-type">{type}</p>
          <div className="postFooter">
            <p className="title">{content}</p>
            <div className="posttimeago">
              <FontAwesomeIcon
                icon={faClock}
                color={"white"}
                style={{ marginRight: "0.5em" }}
              />
              <p className="date">01/01/2000 5:45:00 PM</p>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};
const FullWidthPost = () => {
  return (
    <Col span={24}>
      <div className="fullWidthPostContainer">
        <a>
          <img src={FullWidthImage} alt="fullwidth-banner" />
          <div className="fw-info">
            <p className="fw-title">CS: GO</p>
            <p className="fw-subtitle">¡Comienza tu viaje a la cima!</p>
          </div>
        </a>
      </div>
    </Col>
  );
};
const BannerPromo = () => {
  return (
    <Col span={24}>
      <div className="bannerPromoContainer">
        <a>
          <img src={BannerImg} alt="" />
        </a>
      </div>
    </Col>
  );
};
const Ad = ({ img }) => {
  return (
    <div className="adContainer">
      <img src={img} alt="ad-image" />
    </div>
  );
};
const Home = ({ isLive, lang }) => {
  let isSchedule = false;
  let mainContent;
  if (isSchedule === false) {
    mainContent = 24;
  } else {
    mainContent = 21;
  }
  return (
    <Row style={{ height: "100%" }}>
      {/* Events COL */}
      {isSchedule ? <Schedule /> : null}
      {/* Main Col */}
      <Col
        span={mainContent}
        style={{ flexGrow: 1, height: "100%", overflow: "auto" }}
      >
        {isLive ? <Stream /> : null}
        <Row style={{ minHeight: "100%", padding: "1em" }}>
          <Col span={19}>
            <Row gutter={[16, 0]}>
              {/* Aqui comienzan los posts */}
              <StandardPost
                img={ExampleImg2}
                content={"¡Conoce al nuevo campeón de League of Legends!"}
                type={"VIDEO"}
              />
              <StandardPost
                img={ExampleImg3}
                content={"¿Logrará Full Impact conquistar la copa?"}
                type={"VIDEO"}
              />
              <FullWidthPost />
              <BannerPromo />
              <StandardPost
                img={ExampleImg}
                content={"Esto a penas comienza"}
                type={"ARTÍCULO"}
              />
              <StandardPost
                img={ExampleImg2}
                content={"¡Conoce al nuevo campeón de League of Legends!"}
                type={"VIDEO"}
              />
            </Row>
            <Row>
              <div className="load-more-container-outter">
                <a className="load-more-container">
                  <h1>Cargar más</h1>
                  <Icon.ChevronDown color={"white"} />
                </a>
              </div>
            </Row>
          </Col>
          <Col
            span={5}
            style={{ padding: "1em", paddingTop: 0, paddingRight: 0 }}
          >
            {/* Aqui comienza la publicidad */}
            <p
              style={{
                color: "grey",
                fontSize: "0.7em",
                marginBottom: "0.5em",
              }}
            >
              Publicidad
            </p>
            <Ad img={AdImage} />
            <Ad img={AdImage2} />
          </Col>
        </Row>
        <PageEnd lang={lang} />
      </Col>
    </Row>
  );
};
export default Home;

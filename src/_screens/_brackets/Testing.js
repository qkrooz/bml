import React from 'react';
import '../Ranking.css';
import { Col } from 'antd';
import Team1 from "../../_img/team1.png";
import Team2 from "../../_img/team2.png";
function BracketTeam({ image, label, points }) {
    return (
        <div className={`team-container`}>
            <div className="team-image-container">
                <img src={image} alt="teamImage" />
            </div>
            <div className="team-name-container">
                <p>{label}</p>
            </div>
            <div className="points-container">
                <p>{points}</p>
            </div>
        </div>
    );
}
function BracketElement() {
    return (
        < div className="bracket-element" >
            <BracketTeam image={Team1} label='FULL IMPACT' points={1} />
            <BracketTeam image={Team2} label='ZEUS WARRIORS' points={5} />
        </div >

    );
}
function Testing() {
    return (
        <>
            <Col className="quarterfinals-container">
                <BracketElement />
                <BracketElement />
                <BracketElement />
                <BracketElement />
            </Col>
            <Col className="semifinals-container">
                <BracketElement />
                <BracketElement />
            </Col>
            <Col className="semifinals-container">
                <BracketElement />
                <BracketElement />
            </Col>
            <Col className="quarterfinals-container">
                <BracketElement />
                <BracketElement />
                <BracketElement />
                <BracketElement />
            </Col>
        </>
    );
}
export default Testing;
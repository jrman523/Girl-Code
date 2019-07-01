import React from 'react';
import './index.css';

const Raleway = {
    fontFamily: "'Raleway', sans-serif"
}
const Barlow = {
    fontFamily: "'Barlow', sans-serif"
}
const header = {
    fontFamily: "'Barlow', sans-serif",
    fontSize: '100px'
}
const logoBackground = {
    backgroundColor: "#cec3ab"
}
const logo = {
    fontSize: '75px',
    fontFamily: "'Raleway', sans-serif",
    color: 'black',
    fontWeight: 'bolder'
}
const whitesmoke = {
    backgroundColor: 'whitesmoke'
}
const customGrey = {
    backgroundColor: '#444547'
}


const MainPage = () => {
    return (
        <div>
            <title>About</title>
            <div className="parallax-container1">
                <img className="logoimage" src={"assets/images/logo.png"} />
            </div>

            <div className="parallax-container" style={whitesmoke}>
                <div className="wrapper h100">
                    <h1 className="overlay center-align" style={header}>JOIN OUR COMMUNITY</h1>
                </div>
            </div>

            <div className="parallax-container" style={customGrey} id="researchresults">
                <div className="wrapper h100">
                    <h3 className="white-text overlay left-align" style={Raleway}> RESEARCH RESULTS</h3>
                    <br />
                    <p className="white-text" style={Raleway}> When it comes to STEM professions, women lag far behind men even as the demand for science, tech, engineering, and mathematics jobs have increased in order to help the United States remain competitive globally. According to the PEW Research Center, </p>
                    <br />
                    <p className="white-text" style={Raleway}>“..girls or young women face obstacles in their schooling that discourage them from pursuing STEM careers. Those obstacles, experts say, include cultural biases that teach girls they are less skilled than boys in math and science, despite research findings to the contrary.”(1) </p>
                    <br />
                    <p className="white-text" style={Raleway}>GirlCode was created to help girls and young women surpass those cultural biases that may tell them they are not good enough, or smart enough to pursue their interests in STEM, specifically in Software Engineering. </p>
                    <br />
                    <p className="grey-text" style={Raleway}>(1) Ornes , Stephen. “The STEM Gender Gap.” CQ Researcher by CQ Press, 2018, library.caress.com/cqresearcher/document.php?id=cqresrre2018090700.</p>
                </div>
            </div>

            <div className="parallax-container" style={whitesmoke} id="missionstatement">
                <div className="valign-wrapper h100">
                    <h3 className="overlay center-align" style={Raleway}> MISSION STATEMENT</h3>
                    <p className="text" style={Raleway}>GirlCode’s mission is to stop the paradigm of cultural bias against women in STEM by providing a community where girls feel supported and are encouraged to pursue their interests in Software Engineering.</p>
                </div>
            </div>

            <div className="parallax-container" style={customGrey} id="whoweare">
                <div className="valign-wrapper h100">
                    <h3 className="white-text overlay center-align" style={Raleway}>WHO WE ARE</h3>
                    <p className="white-text" style={Raleway}>GirlCode is an online platform where users belong to a greater community of other future Software Engineers. GirlCode users can learn fundamental coding skills through our fun and interactive-multilevel games and quizzes. GirlCode users can also feel supported through our forum “Blog”, where they can discuss all things Girl or all things Software Engineer with other users. </p>
                </div>
            </div>
        </div>
    );
};
export default MainPage;
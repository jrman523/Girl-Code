import React from 'react';
import { Link } from "react-router-dom";
import './education.css';

const RalewayBold = {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 'bolder',
    color: '#444547',
    fontSize: '50px'
}

const customRed = {
    backgroundColor: '#ff9999'
}

const customGrey = {
    color: '#444547'
}

const customLightPink = {
    color: '#ffe6de'
}
const Education = () => {
    return (
        <div>
            <title>Education</title>
            <div className="parallax-container">
                <img className="educationimage" src={"assets/images/education.png"} alt="Education" />
            </div>

            <div className="parallax-container" style={customRed} align="center">
                <div className="wrapper h100">
                    <h3 className="overlay center-align" style={RalewayBold}>Q U I Z Z E S</h3>
                    <br />
                    <h6 align="center" style={customGrey}>HTML Quiz</h6>
                    <Link to="/eduction/htmlquiz" className="btn-floating waves-effect grey darken-2 lighten-1"><i
                        className="material-icons" align="center">Go!</i></Link>
                    <br />
                    <br />
                    <h6 align="center" style={customGrey}>CSS Quiz</h6>
                    <Link to="/eduction/cssquiz" className="btn-floating waves-effect grey darken-2 lighten-1"><i
                        className="material-icons">Go!</i></Link>
                    <br />
                    <br />
                    <h6 align="center" style={customGrey}>JavaScript Quiz</h6>
                    <Link to="/eduction/jsquiz" className="btn-floating waves-effect grey darken-2 lighten-1"><i
                        className="material-icons">Go!</i></Link>
                    <br />
                </div>
            </div>
            <div className="parallax-container" style={customLightPink} align="center">
                <div className="wrapper h100">
                    <h3 className="overlay center-align" style={RalewayBold}>H T M L</h3>
                    <br />
                    <h6 align="center" style={customGrey}>HTML Pac-Girl</h6>
                    <br />
                    <Link to="/eduction/PacGirl" className="btn-floating waves-effect grey darken-2 lighten-1"><i className="material-icons">Go</i></Link>
                </div>
            </div>
            <div className="parallax-container" style={customRed} align="center">
                <div className="wrapper h100">
                    <h3 className="overlay center-align" style={RalewayBold}>C S S</h3>
                    <br />
                    <br />
                    <br />
                    <h5 align="center" style={customGrey}>COMING SOON...</h5>
                </div>
            </div>
            <div className="parallax-container" style={customLightPink} align="center">
                <div className="wrapper h100">
                    <h3 className="overlay center-align" style={RalewayBold}> J A V A S C R I P T</h3>
                    <br />
                    <br />
                    <br />
                    <h5 align="center" style={customGrey}>COMING SOON..</h5>
                </div>
            </div>
        </div>
    );
};
export default Education;
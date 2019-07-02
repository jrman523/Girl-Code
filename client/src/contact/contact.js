import React from 'react';
import './contact.css';

const Barlow = {
    fontFamily: "'Barlow', sans-serif"
}
const whitesmoke = {
    backgroundColor: 'whitesmoke'
}
const whitesmokeColor = {
    color: 'whitesmoke'
}
const CormorantGaramond = {
    fontFamily: "'Cormorant Garamond', serif"
}
const customGrey = {
    backgroundColor: '#444547'
}

const Contact = () => {
    return (
        <div>
            <title>Contact</title>
            <div className="parallax-container1">
                <img className="logoimage" src={"assets/images/contact.png"} alt="Contact"/>
            </div>
            <div className="parallax-container" style={whitesmoke}>
                <div className="wrapper h100">
                    <h3 className="overlay center-align" style={Barlow}>FOUNDING TEAM</h3>
                    <br />
                    <br />
                    <div>
                        <img src={"assets/images/maria.png"} className="mariaimg" alt="Maria"/>
                        <br />
                        <h6 className="heading6" align="left">M A R I A - C O F O U N D E R</h6>
                        <p align="left" className="mariablurb">
                            Maria received an undergraduate degree in Political Science from
                            Temple University before receiving a certification in software
                            engineering from the University of Pennsylvania. Maria wanted to
                            create a platform that also doubled as a safespace where young women
                            could explore their interests in software engineering without
                            judgement.</p>
                    </div>
                </div>
            </div>
            <div className="parallax-container" style={whitesmoke}>
                <div className="wrapper h100">
                    <div>
                        <br />
                        <br />
                        <img src={"assets/images/jad.png"} className="jadimg" alt="Jad"/>
                        <br />

                        <h6 className="heading6" align="left">J A D - C O F O U N D E R</h6>
                        <p align="left" className="mariablurb">
                            Jad received a bachelor's degree from Penn State University in Biology before receiving a certificate in Software Engineering from the University of Pennsylvania.
                            As Co-Founder of GirlCode and an expert gamer, Jad is responsible for making and updating all the coding games found on GirlCode. Jad's support of GirlCode comes from his personal belief
                            that if the STEM field wants to reach its full potential, it has to be more inclusive of women.
                            In his free time Jad plays frisbee and spends time with his dog.</p>
                    </div>
                </div>
            </div>
            <div className="parallax-container" style={customGrey}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <br />
                            <h4 align="center" style={whitesmokeColor}>Email Submission</h4>
                            <br />
                            <p align="center" style={whitesmokeColor}>Here at GirlCode, we pride ourselves in our human to human contact. You are not just another user to us. If you have any questions, comments, or concerns please press the email submission button below to get in contact with us.</p>
                            <p align="center" style={whitesmokeColor}>GirlCode replies back to each inquiry within 24 hours of receiving it.</p>
                            <p align="center" style={whitesmokeColor}>Thank you for using our platform!</p>
                            <form id="" action="mailto:m.restrepo95@gmail.com">
                                <br />
                                <div align="center">
                                    <button className="btn-floating waves-effect grey darken-2 lighten-1" style={CormorantGaramond} type="submit" id="email-submit-btn" value="Send">GO!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default Contact;
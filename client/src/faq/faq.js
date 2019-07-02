import React from 'react';
import './faq.css';

const RalewayBold = {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 'bold'
}
const Raleway = {
    fontFamily: "'Raleway', sans-serif"
}
const whitesmoke = {
    backgroundColor: 'whitesmoke'
}
const FAQ = () => {
    return (
        <div>
            <title>FAQ</title>
            <div className="parallax-container1">
                <img className="logoimage" src={"assets/images/FAQ.png"} alt="FAQ" />>
            </div>
            <div className="parallax-container" style={whitesmoke}>
                <div className="wrapper h100">
                    <h6 className="left-align" style={RalewayBold}>What is GirlCode?</h6>
                    <p className="left-align" style={Raleway}>GirlCode is an online platform for girls who aspire to be software engineers. GirlCode offers coding quizzes, games, and an online blog where they can talk all things code and all things girl.</p>
                    <h6 className="left-align" style={RalewayBold}>What Ages Does GirlCode Target?</h6>
                    <p className="left-align" style={Raleway}> Although there are no age restrictions, GirlCode typically targets users ages 10-14. We believe this is the critical age where girls need to be encourages to pursue interests in STEM and more specifically software engineering!</p>
                    <h6 className="left-align" style={RalewayBold}>Is GirlCode Free?</h6>
                    <p className="left-align" style={Raleway}>Absolutely! We have measured up our competition and we have decided to make GirlCode free for all of our users forever. We believe that by using this business model we will foster an inclusive environment filled with intelligent and unique individuals from all walks of life! </p>
                    <h6 className="left-align" style={RalewayBold}>When Will GirlCode Add More Games and/or Quizzes?</h6>
                    <p className="left-align" style={Raleway}>GirlCode is currently in Beta mode, which means we are not all there yet. However, we are constantly working on implementing more games and levels to our games as our users go through our curriculum. </p>
                    <h6 className="left-align" style={RalewayBold}>Will There Be More Languages Added To Your Program?</h6>
                    <p className="left-align" style={Raleway}>Eventually, GirlCode will include more quizzes and games on more languages. Please email us for suggestions on what other languages you would like to see.</p>
                </div>
            </div>
            <div className="parallax-container" style={whitesmoke}>
                <div className="wrapper h100">
                    <h6 className="left-align" style={RalewayBold}>Why Do I Have To Create an Account to Use GirlCode?</h6>
                    <p className="left-align" style={Raleway}>GirlCode makes its users create an account so that we can store your progress on your games and quizzes.</p>
                    <h6 className="left-align" style={RalewayBold}>How Does the Blog Work?</h6>
                    <p className="left-align" style={Raleway}>We designed the blog to work like a forum where you can ask questions or post a comment and other GirlCode users can respond back to you and vice versa.</p>
                    <h6 className="left-align" style={RalewayBold}>Are There Any Restrictions On What Can Be Talked About on The Forum</h6>
                    <p className="left-align" style={Raleway}>Community guidelines suggest that GirlCode users keep the blog to talk about code and girls in STEM questions and/or comments and/or concerns.</p>
                    <h6 className="left-align" style={RalewayBold}>I Have a Game Suggestion!</h6>
                    <p className="left-align" style={Raleway}>GirlCode appreciates all feedback from our users, for feedback please email us through our "Contact" page.</p>
                    <h6 className="left-align" style={RalewayBold}>Can I Friend GirlCode on Social Media?</h6>
                    <p className="left-align" style={Raleway}>We are currently working to add a GirlCode social media presence! Once we are done we will post about it on our page.</p>
                    <h6 className="left-align" style={RalewayBold}>My Question Was Not Answered on the FAQ Page</h6>
                    <p className="left-align" style={Raleway}>Please email us directly through our "Contact" page and we will get back to you within 24 hours.</p>
                </div>
            </div>
        </div>
    );
};
export default FAQ;
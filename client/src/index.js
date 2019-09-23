import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './nav/Nav';
import MainPage from './mainPage/mainpage';
import './mainPage/index.css';
import Footer from './footer/footer';
import Blog from './blog/blog';
import FAQ from './faq/faq';
import Contact from './contact/contact';
import Eduction from './education/education';
import cssQuiz from './cssQuiz/cssQuiz';
import htmlQuiz from './htmlQuiz/htmlquiz';
import jsQuiz from './jsQuiz/jsQuiz';
import Login from './login/login';
import Register from './register/register';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/eduction" component={Eduction} />
                    <Route exact path="/eduction/htmlquiz" component={htmlQuiz} />
                    <Route exact path="/eduction/cssquiz" component={cssQuiz} />
                    <Route exact path="/eduction/jsquiz" component={jsQuiz} />
                    <Route exact path="/eduction/PacGirl" component={() => window.location.assign("http://localhost:1234/")} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/FAQ" component={FAQ} />
                    <Footer />
                </div >
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

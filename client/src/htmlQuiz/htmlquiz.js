import React from 'react';
import { QuizData } from './QuizData';
import './style.css';

const Raleway = {
    fontFamily: "'Raleway', sans-serif"
}

const fontSize = {
    fontSize: '20px'
}

class htmlQuiz extends React.Component {
    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: [],
        quizEnd: false,
        score: 0
    }

    loadQuiz = () => {
        const { currentQuestion } = this.state;
        this.setState(() => {
            return {
                questions: QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                answers: QuizData[currentQuestion].answer
            }
        })
    }
    componentDidMount() {
        this.loadQuiz();
    }

    nextQuestionHandler = () => {
        const { userAnswer, answers, score } = this.state;
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
        console.log(this.state.currentQuestion);
        if (userAnswer === answers) {
            this.setState({
                score: score + 1
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentQuestion } = this.state;
        if (this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    questions: QuizData[currentQuestion].question,
                    options: QuizData[currentQuestion].options,
                    answers: QuizData[currentQuestion].answer
                }
            })
        }
    }

    checkAnswer = (answer) => {
        this.setState({
            userAnswer: answer
        })
    }

    finishHandler = () => {
        if (this.state.currentQuestion === QuizData.length - 1) {
            this.setState({
                quizEnd: true
            })
        }
    }

    render() {
        const { questions, options, currentQuestion, userAnswer, quizEnd } = this.state;

        if (quizEnd) {
            return (
                <div>
                    <div id="wrapper">
                        <h1>J A V A S C R I P T Q U I Z</h1>
                        <div id="sub-wrapper">
                            <div id="quiz-area" style={Raleway}>
                                <h2>Game Over</h2>
                                <h3>Your score is {this.state.score}</h3>
                                <p style={fontSize}>The Correct Answers for the Questions are:</p>
                                <ul>
                                    {QuizData.map((item, index) => (
                                        <li className="list" key={index}>{item.answer}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <title>html Quiz</title>
                <div id="wrapper">
                    <h1>J A V A S C R I P T Q U I Z</h1>
                    <div id="sub-wrapper">
                        <div id="quiz-area" style={Raleway}>
                            <h2>{questions}</h2>
                            <span style={fontSize}>{`Quetion ${currentQuestion + 1} out of ${QuizData.length}`}</span>
                            <div className="collection">
                                {options.map(option => (
                                    <a href='#!' key={option.id} onClick={() => this.checkAnswer(option)} className={`collection-item answer ${userAnswer === option ? "selected" : null}`}>
                                        {option}
                                    </a>
                                ))}
                            </div>
                            {currentQuestion < QuizData.length - 1 && <button onClick={this.nextQuestionHandler}>Next</button>}
                            {currentQuestion === QuizData.length - 1 && <button onClick={this.finishHandler}>Finish</button>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default htmlQuiz;
var card = $("#quiz-area");
var countStartNumber = 30;

// Question set
var questions = [{
  question: "Who was the first president of the United States?",
  answers: ["George Washington", "Mark Twain", "Abraham Lincoln", "Henry Ford"],
  correctAnswer: "George Washington",
  image: "assets/images/georgewashington.gif"
}, {
  question: "How many presidents have been impeached?",
  answers: ["Three", "None", "One", "Two"],
  correctAnswer: "Two",
  image: "https://media.giphy.com/media/fp9bqPNUoUd5m/giphy-downsized.gif"
}, {
  question: "Which one of the president's below is not on Mount Rushmore?",
  answers: ["Abraham Lincoln", "George Bush", "Theodore Roosevelt", "Thomas Jefferson"],
  correctAnswer: "George Bush",
  image: "https://media.giphy.com/media/yXYXqod9oaCxq/giphy.gif"
}, {
  question: "Who Did Marilyn Monroe sing 'Happy Birthday Mr. President' to?",
  answers: ["John F. Kennedy", "Dwight Eisenhower", "Ronald Raegan", "Jimmy Carter"],
  correctAnswer: "John F. Kennedy",
  image: "assets/images/jfk.gif"
}, {
  question: "How many presidents has the United States had?",
  answers: ["forty-four", "fourty-three", "fourty-five", "fifty-two"],
  correctAnswer: "fourty-five",
  image: "https://media.giphy.com/media/xUPGcjPLLxiKpXxeEg/source.gif"
}, {
  question: "Who was the only president to be elected four times?",
  answers: ["Harry S. Truman", "Herbert Hoover", "Franklin D. Roosevelt", "Woodrow Wilson"],
  correctAnswer: "Franklin D. Roosevelt",
  image: "assets/images/fdr.gif"
}, {
  question: "Which president was blind in their left eye?",
  answers: ["Calvin Coolidge", "Teddy Roosevelt", "James Buchanan", "Jimmy Carter"],
  correctAnswer: "Teddy Roosevelt",
  image: "assets/images/teddyroosevelt.gif"
}, {
  question: "Which president had pet alligators?",
  answers: ["George Bush", "Richard Nixon", "Harry S. Truman", "Herbert Hoover"],
  correctAnswer: "Herbert Hoover",
  image: "https://media.giphy.com/media/Nh0DgQBi47Ppu/giphy.gif"
}];

// Variable to hold our setInterval
var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    this.counter--;
    $("#counter-number").text(this.counter);
    if (this.counter === 0) {
      console.log("TIME UP");
      this.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(this.countdown.bind(this), 1000);

    card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    this.counter = window.countStartNumber;
    $("#counter-number").text(this.counter);
    this.currentQuestion++;
    this.loadQuestion.bind(this)();
  },

  timeUp: function() {

    clearInterval(window.timer);

    $("#counter-number").text(this.counter);

    card.html("<h2>Out of Time!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results, 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(window.timer);

    card.html("<h2>All done, heres how you did!</h2>");

    $("#counter-number").text(this.counter);

    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    card.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(window.timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    this.incorrect++;

    clearInterval(window.timer);

    card.html("<h2>Nope!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(window.timer);

    this.correct++;

    card.html("<h2>Correct!</h2>");
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", game.reset.bind(game));

$(document).on("click", ".answer-button", function(e) {
  game.clicked.bind(game, e)();
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion.bind(game)();
});
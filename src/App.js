import React, { useState } from "react";
import Header from "./components/header";
import questions from "./api/questions";
import Score from "./components/score";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Result from "./components/result";
import Image1 from './images/image2.jpg'
import Footer from './components/Footer'


export default function App() {

  // this is our main file from here we get everything to show on screen

  const [message, setMessage] = useState(""); //this will messages to show on screen for scores
  const [mainMessage,setMainMessage] = useState('');//this is our main message to show to user
  const [score, setScore] = useState(0);//this returns score 


//the handleAnswerOptionClick function handle the option clicks and messages to show to users
 
  const handleAnswerOptionClick = (isCorrect) => {
    setScore(score + isCorrect); //this will set our score we will use this futher to show score

    //this is our logic to show in message based on score
    if (score <= questions.length * 1) {
      setMainMessage('Very Low Risk!');
      setMessage("Your results indicate that you have none , or very few symptoms of depression. IF you notice that your symptoms aren't improving, you may want to bring them up with a mental health professional or someone who is supporting you.");
    } else if (score > questions.length * 1 && score <= questions.length * 2) {
      setMainMessage('Low Risk!');
      setMessage("Your results indicate that you may be experiencing symptoms of mild depression. While your symptoms are not likely having a major impact on your life, it is important to monitor them. You should talk with someone you trust or start a conversation with medical health professional if symptoms aren't improving. Try including 10 minutes of meditation in your daily routine.");
    } else if (score > questions.length * 2 && score <= questions.length * 3) {
      setMainMessage('High Risk!!');
      setMessage("Your results indicate that you may be experiencing symptoms of moderately severe depression. Based on your answers, living with these symptoms is causing difficulty managing relationships and even the tasks of everyday life. These results do not mean that you have depression, but we would recommend you start a conversation with a mental health professional.");
    } else {
      setMainMessage('Severe Risk!!');
      setMessage("Your results indicate that you may be experiencing symptoms of severe depression. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life. These results do not mean that you have depression, but we would recommend you start a conversation with a mental health professional.");
    }
  };

  //this is Home function and we are getting questions and answers from here 
  const Home = () => (
    <div>
      {questions.map((question) => (
        <div>
          {/* this is qustion section */}
          <div className="question-section">
            <div className="question-text">{question.questionText}</div>
          </div>
          {/* this is answer section */}
          <div className="answer-section">
            {question.answerOptions.map((answerOption) => (
              <button
                className="option-button"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Router>
      <Header />
      <img src={Image1} alt=''></img> 
      <div className="app"> 
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route
            path="/score"
            component={() => <Result score={score} message={message} mainMessage= {mainMessage}/>}
          />
          
        </div>
        <Link to="/score">
            <Score score={score} />
          </Link>
          <Footer/>
      </div>
    </Router>
  );
}

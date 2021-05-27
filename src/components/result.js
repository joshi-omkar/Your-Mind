import React from "react";
import questions from "../api/questions";
import '../index.css'

function Result({ score, message , mainMessage }) {
  return (
    <div>
      <div className="main-message">
        <h3>{mainMessage}</h3>
      </div>
      <div className="score-section">
        <div>
        <p>
          You scored {score} out of {questions.length * 4}
        </p>
        
      </div>
      </div>
        <div>
          <p>{message}</p>
        </div>
    </div>
  );
}

export default Result;

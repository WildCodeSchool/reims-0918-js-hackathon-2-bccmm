import React from "react";
import Checkboxes from "./Checkboxes";
import { questionQuizLaser } from "../API/questionQuiz";
import { Link } from "react-router-dom";
const QuizLaser = () => {
  return (
    <div>
      {questionQuizLaser.map((question, index) => (
        <Checkboxes {...question} key={index} />
      ))}
    </div>
  );
};
export default QuizLaser;

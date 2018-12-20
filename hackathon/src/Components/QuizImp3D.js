import React from "react";
import Checkboxes from "./Checkboxes";
import {questionQuizImp3D} from "../API/questionQuiz";

const QuizImp3D = () => {
  return (
    <div>
      {questionQuizImp3D.map((question, index) => (
        <Checkboxes {...question} key={index} />
      ))}
    </div>
  );
};

export default QuizImp3D;

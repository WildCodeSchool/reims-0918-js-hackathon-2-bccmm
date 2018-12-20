import React from "react";
import Checkboxes from "./Checkboxes";
import { questionQuizLaser } from "../API/questionQuiz";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const QuizLaser = () => {
  return (
    <div>
      {questionQuizLaser.map((question, index) => (
        <Checkboxes {...question} key={index} />
      ))}
      <Link to="/">
        <Button>Retour à l'accueil</Button>
      </Link>
    </div>
  );
};
export default QuizLaser;

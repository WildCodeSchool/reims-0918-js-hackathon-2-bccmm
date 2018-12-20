import React from "react";
import Checkboxes from "./Checkboxes";
import { questionQuizImp3D } from "../API/questionQuiz";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const QuizImp3D = () => {
  return (
    <div>
      {questionQuizImp3D.map((question, index) => (
        <Checkboxes {...question} key={index} />
      ))}
      <Link to="/">
        <Button>Retour à l'accueil</Button>
      </Link>
    </div>
  );
};

export default QuizImp3D;

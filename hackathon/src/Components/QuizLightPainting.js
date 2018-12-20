import React from "react";
import Checkboxes from "./Checkboxes";
import { questionQuizLightPainting } from "../API/questionQuiz";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const QuizLightPainting = () => {
  return (
    <div>
      {questionQuizLightPainting.map((question, index) => (
        <Checkboxes {...question} key={index} />
      ))}
      <Link to="/">
        <Button>Retourà l'accueil</Button>
      </Link>
    </div>
  );
};
export default QuizLightPainting;

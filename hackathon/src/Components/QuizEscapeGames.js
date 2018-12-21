import React from "react";
import Checkboxes from "./Checkboxes";
import { questionQuizEscapeGames } from "../API/questionQuiz";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const QuizEscapeGames = () => {
  return (
    <div>
      <h2>Les Escape Games</h2>
      {questionQuizEscapeGames.map((question, index) => (
        <Checkboxes {...question} key={index} />
      ))}
      <Link to="/">
        <Button>Retour à l'accueil</Button>
      </Link>
    </div>
  );
};
export default QuizEscapeGames;

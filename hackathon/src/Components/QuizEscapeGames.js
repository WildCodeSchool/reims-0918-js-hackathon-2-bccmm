import React from "react";
import Checkboxes from "./Checkboxes";
import {questionQuizEscapeGames} from "../API/questionQuiz";
import { Link } from "react-router-dom";
const QuizEscapeGames =() =>{
    return(
        <div>
            {questionQuizEscapeGames.map(
                (question, index)=>(
                    <Checkboxes {...question}
                    key={index}/>
                )
            )}
        </div>
    );
};
export default QuizEscapeGames;
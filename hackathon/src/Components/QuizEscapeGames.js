import React from "react";
import Checkboxes from "./Checkboxes";
import {questionQuizEscapeGames} from "../API/questionQuiz";

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
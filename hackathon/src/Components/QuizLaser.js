import React from "react";
import Checkboxes from "./Checkboxes";
import {questionQuizLaser} from "../API/questionQuiz";

const QuizLaser =() =>{
    return(
        <div>
            {questionQuizLaser.map(
                (question, index)=>(
                    <Checkboxes {...question}
                    key={index}/>
                )
            )}
        </div>
    );
};
export default QuizLaser;

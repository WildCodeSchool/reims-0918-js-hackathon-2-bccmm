import React from "react";
import Checkboxes from "./Checkboxes";
import {questionQuizLightPainting} from "../API/questionQuiz";
import { Link } from "react-router-dom";
const QuizLightPainting =() =>{
    return(
        <div>
            {questionQuizLightPainting.map(
                (question, index)=>(
                    <Checkboxes {...question}
                    key={index}/>
                )
            )}
        </div>
    );
};
export default QuizLightPainting;

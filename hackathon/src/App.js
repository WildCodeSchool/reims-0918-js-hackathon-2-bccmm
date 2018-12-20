import React, { Component } from "react";
import Checkboxes from "./Components/Checkboxes";
import "./App.css";
import questionQuiz from "./API/questionQuiz";
import Header from "./Header";
import QuizLaser from "./Components/QuizLaser";
import QuizLightPainting from "./Components/QuizLightPainting";
import QuizEscapeGames from "./Components/QuizEscapeGames";

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <QuizLaser />
        <QuizLightPainting />
        <QuizEscapeGames />
      </div>
    )
  }
}

export default App;
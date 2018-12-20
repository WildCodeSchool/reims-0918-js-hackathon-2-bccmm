import React, { Component } from "react";
import "./App.css";
import QuizImp3D from "./Components/QuizImp3D";
import Header from "./Header";
import QuizLaser from "./Components/QuizLaser";
import QuizLightPainting from "./Components/QuizLightPainting";
import QuizEscapeGames from "./Components/QuizEscapeGames";
import HomePage from "./HomePage";

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <QuizLaser />
        <QuizLightPainting />
        <QuizEscapeGames />
        <QuizImp3D />
      </div>
    )
  }
}

export default App;
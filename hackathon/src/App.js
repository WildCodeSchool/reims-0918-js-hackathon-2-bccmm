import React, { Component } from "react";
import Checkboxes from "./Components/Checkboxes";
import "./App.css";
import questionQuiz from "./API/questionQuiz";
import Header from "./Header";
import QuizLaser from "./Components/QuizLaser";

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <QuizLaser />
      </div>
    )
  }
}

export default App;
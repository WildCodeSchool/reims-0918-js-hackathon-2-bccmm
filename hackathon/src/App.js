import React, { Component } from "react";
import Checkboxes from "./Components/Checkboxes";
import "./App.css";
import questionQuiz from "./API/questionQuiz";
import Header from "./Header";
import QuizzButton from "./QuizzButton";
import Workshop from "./Workshop";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Workshop />
        <QuizzButton />
        {questionQuiz.map((question, index) => (
          <Checkboxes {...question} key={index} />
        ))}
      </div>
    );
  }
}

export default App;

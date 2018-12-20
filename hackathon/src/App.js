import React, { Component } from "react";
import Checkboxes from "./Components/Checkboxes";
import "./App.css";
import questionQuiz from "./API/questionQuiz";
import Header from "./Header";
import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomePage />
        {questionQuiz.map((question, index) => (
          <Checkboxes {...question} key={index} />
        ))}
      </div>
    );
  }
}

export default App;

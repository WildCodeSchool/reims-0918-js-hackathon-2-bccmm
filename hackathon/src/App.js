import React, { Component } from "react";
import Checkboxes from "./Components/Checkboxes";
import "./App.css";
import questionQuiz from "./API/questionQuiz";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {questionQuiz.map((question, index) => (
          <Checkboxes {...question} key={index} />
        ))}
      </div>
    );
  }
}

export default App;

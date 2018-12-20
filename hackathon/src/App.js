import React, { Component } from "react";
import Checkboxes from "./Components/Checkboxes";
import Calendar from "react-calendar";
import "./App.css";
import questionQuiz from "./API/questionQuiz";
import Header from "./Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  onChange = date => {
    this.setState({ date });
  };

  render() {
    return (
      <div>
        <Header />
        {questionQuiz.map((question, index) => (
          <Checkboxes {...question} key={index} />
        ))}
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}

export default App;

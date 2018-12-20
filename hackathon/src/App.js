import React, { Component } from "react";
import "./App.css";
import QuizImp3D from "./Components/QuizImp3D";
import Header from "./Header";
import Calendar from "react-calendar";
// import HomePage from "./HomePage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date("2019-02-11")
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Calendar className="class" activeStartDate={this.state.date} />
        <QuizImp3D />
      </div>
    );
  }
}

export default App;

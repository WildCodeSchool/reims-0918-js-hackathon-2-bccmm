import React, { Component } from "react";
import "./App.css";
import QuizImp3D from "./Components/QuizImp3D";
import Header from "./Header";
import HomePage from "./HomePage";

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <QuizImp3D />
      </div>
    )
  }
}

export default App;
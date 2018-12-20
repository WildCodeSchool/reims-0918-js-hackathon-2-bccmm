import React, { Component } from "react";
import "./App.css";
import QuizImp3D from "./Components/QuizImp3D";
import Header from "./Header";
import Calendar from "react-calendar";
// import HomePage from "./HomePage";
import QuizLaser from "./Components/QuizLaser";
import QuizLightPainting from "./Components/QuizLightPainting";
import QuizEscapeGames from "./Components/QuizEscapeGames";
import HomePage from "./HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/QuizLaser" component={QuizLaser} />
            <Route path="/QuizImp3D" component={QuizImp3D} />
            <Route path="/QuizEscapeGame" component={QuizEscapeGames} />
            <Route path="/QuizLightpainting" component={QuizLightPainting} />
          </Switch>
        </BrowserRouter>

        {/* <QuizLaser />
        <QuizLightPainting />
        <QuizEscapeGames />
        <QuizImp3D /> */}
      </div>
    );
  }
}

export default App;

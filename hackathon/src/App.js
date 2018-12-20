import React, { Component } from "react";
import "./App.css";
import QuizImp3D from "./Components/QuizImp3D";
import Header from "./Header";
import QuizzButton from "./QuizzButton";
import Workshop from "./Workshop";
import QuizLaser from "./Components/QuizLaser";
import QuizLightPainting from "./Components/QuizLightPainting";
import QuizEscapeGames from "./Components/QuizEscapeGames";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={QuizzButton} />
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

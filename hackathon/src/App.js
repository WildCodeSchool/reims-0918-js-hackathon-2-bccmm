import React, { Component } from "react";
import "./App.css";
import QuizImp3D from "./Components/QuizImp3D";
import Header from "./Header";
import Calendar from "react-calendar";
import HomePage from "./HomePage";
import QuizzButton from "./QuizzButton";
import Workshop from "./Workshop";
import QuizLaser from "./Components/QuizLaser";
import QuizLightPainting from "./Components/QuizLightPainting";
import QuizEscapeGames from "./Components/QuizEscapeGames";
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
        <div className="calendar">
          <Calendar activeStartDate={this.state.date} />
          <div className="legendary">
            <div className="vignettes">
              <p>Février 2019</p>
              <button className="atelier1" />
              <br />
              <button className="atelier2" />
              <p>Avril 2019</p>
              <button className="atelier3" />
              <br />
              <button className="atelier4" />
              <p>Juillet 2019</p>
              <button className="atelier5" />
            </div>
            <div className="mois">
              <div>
                <div>
                  <p>
                    11 au 15 Février 2019: CREATION JEU VIDEO CABANES POUR
                    OISEAUX FRILEUX
                  </p>
                </div>
                <div>
                  <p>
                    18 au 22 Février 2019: THEATRE & MEDIA JEUX DE POCHES EN
                    BOIS LIGHT PAINTING
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p>8 au 12 Avril 2019: ESCAPE GAME</p>
                </div>
                <div>
                  <p>
                    15 au 19 Avril 2019: CIRCUIT DE BILLES GÉANTS CONSTRUCTION
                    DE JEUX
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    8 au 12 Juillet 2019: FIGURINE 3D SELFIE ET NUMÉRIQUE:
                    REDÉCOUVRIR LA PHOTOGRAPHIE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <QuizImp3D />
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

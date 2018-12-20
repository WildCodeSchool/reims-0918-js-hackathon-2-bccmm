import React, { Component } from "react";
import "./App.css";
import QuizImp3D from "./Components/QuizImp3D";
import Header from "./Header";
<<<<<<< HEAD
import Calendar from "./Components/Calendar";
=======
import HomePage from "./HomePage";
>>>>>>> 2fff36c24fd9437ca92c8da983c587d1199c7592

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      fake: new Date(2018, 1)
    };
  }

  onChange = date => {
    this.setState({ date });
  };

  render() {
    console.log(typeof this.state.date);
    console.log(this.state.date);
    console.log(this.state.fake);
    return (
      <div>
        <Header />
<<<<<<< HEAD
        {questionQuiz.map((question, index) => (
          <Checkboxes {...question} key={index} />
        ))}
        <Calendar />
        {/* <Calendar value={[new Date(2019, 1, 11), new Date(2019, 1, 15)]} /> */}
        {/* <Calendar value={[new Date(2019, 1, 18), new Date(2019, 1, 22)]} /> */}
        {/* <Calendar value={[new Date(2019, 3, 8), new Date(2019, 3, 12)]} />
        <Calendar value={[new Date(2019, 6, 8), new Date(2019, 6, 12)]} /> */}
=======
        <QuizImp3D />
>>>>>>> 2fff36c24fd9437ca92c8da983c587d1199c7592
      </div>
    );
  }
}

export default App;

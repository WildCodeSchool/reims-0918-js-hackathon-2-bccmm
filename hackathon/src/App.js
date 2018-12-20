import React, { Component } from "react";
import Checkboxes from "./Components/Checkboxes";
import "./App.css";
import questionQuiz from "./API/questionQuiz";
import Header from "./Header";
import Calendar from "./Components/Calendar";

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
        {questionQuiz.map((question, index) => (
          <Checkboxes {...question} key={index} />
        ))}
        <Calendar />
        {/* <Calendar value={[new Date(2019, 1, 11), new Date(2019, 1, 15)]} /> */}
        {/* <Calendar value={[new Date(2019, 1, 18), new Date(2019, 1, 22)]} /> */}
        {/* <Calendar value={[new Date(2019, 3, 8), new Date(2019, 3, 12)]} />
        <Calendar value={[new Date(2019, 6, 8), new Date(2019, 6, 12)]} /> */}
      </div>
    );
  }
}

export default App;

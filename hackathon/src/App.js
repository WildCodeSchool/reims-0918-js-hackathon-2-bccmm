import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    
    var dataSet = [
      {
        question: "What is 8 x 1?",
        answers: [
          "1",
          "8",
          "16",
          "9"
        ],
        
      },
      {
        question: "Who is Steve Jobs?",
            answers: [
              "CEO of Microsoft",
              "Barber in NY",
              "Movie Star",
              "CEO of Apple"
            ],
           
      },
       {
            question: "Metallica is a ____ band",
            answers: [
              "Blues",
              "Hard-Rock",
              "Jazz",
              "Metal"
            ],
         
          },
          {
            question: "IS is a ____",
            answers: [
              "Word",
              "Band",
              "Terror Group",
              "Brand"
            ],
           
          },
          {
            question: "Who was Einstein",
            answers: [
              "A Scientist",
              "A Dentist",
              "A Serial Killer",
              "None of the above"
            ],
          
          },
          {
            question: "JavaScript can be used in ____ development",
            answers: [
              "Back-End",
              "Front-End",
              "ReactJS",
              "All of the Above"
            ],
          
          },
          {
            question: "Hitler was a",
            answers: [
              "Mass Murderer",
              "Dictator",
              "Jew",
              "None of the above",
              "All of the above"
            ],
           
          },
          {
            question: "Korn is a",
            answers: [
              "Nu-Metal band",
              "Religion",
              "Singer"
            ],
         
          },
          {
            question: "Windows computers are",
            answers: [
              "Horrible",
              "Great",
              "Cheap",
              "Invented by Bill Gates"
            ],
         
          },
          {
            question: "The BigBan stands in",
            answers: [
              "Egypt",
              "London",
              "Amsterdam",
              "NewYork"
            ],
         
          },
    ];
    
    this.state = {current:0, dataSet:dataSet, correct:0, incorrect:0}
    this.handleClick = this.handleClick.bind(this)
    
  } // end constructor
  
  handleClick(choice) {
    if (choice == this.state.dataSet[this.state.current].correct) {
      this.setState({correct: this.state.correct + 1})
    } else {
      this.setState({incorrect: this.state.incorrect + 1})
    }
    
    if (this.state.current == 9) {
      this.setState({current: 0})
      this.setState({incorrect: 0})
      this.setState({correct: 0})
    } else {
         this.setState({current: this.state.current + 1}) 
    }
  }
  
  render() {
    return(
      <div>
        <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
      </div>
    )
  }
}

function Question(props) {
  var style = {
    width: "200%",
    color: "red",
  }
  return (
    <h1 style={style}>{props.dataSet.question}</h1>
  )
}

function Answer(props) {
  var style = {
    width: "200%",
    height: 50,
    color: "blue"
  }
  return(
    <div>
      <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
    </div>
  )
}

function AnswerList(props) {
  var answers = []
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
  }
  return(
    <div>
      {answers}
    </div>
  )
}

function QuizArea(props) {
  var style = {
    width: "25%",
    display: "block",
    textAlign: "center",
    boxSizing: "border-box",
    float: "left",
    padding: "0 2em"
  }
  return(
    <div style={style}>
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>
  )
}

export default App;
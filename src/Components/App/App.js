import React, { Component } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import NextButton from '../NextButton/NextButton';
import GameForm from '../GameForm/GameForm';
import Header from '../Header/Header';
import MathBoard from '../MathBoard/MathBoard';
import EndPage from '../EndPage/EndPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timeLeft: true,
      operation: '+',
      time: '180',
      numberCorrect: 0,
      numberIncorrect: 0
    }
  }

  startTimer = () => {
    this.setState({ timeLeft: true })
  }

  endTimer = () => {
    this.setState({ timeLeft: false })
    this.setState({ timeLeft: true })
  }

  updateSelections = (category, value) => {
    this.setState({
      [category]: value
    })
  }

  increaseCorrect = () => {
    this.setState({ numberCorrect: this.state.numberCorrect + 1 })
  }

  increaseIncorrect = () => {
    this.setState({ numberIncorrect: this.state.numberIncorrect + 1 })
  }

  render() {
    return (
      <main>
        {!this.state.timeLeft &&
          <Routes>
            <Route
              exact path='/play'
              element={ <Navigate replace to='/end' /> }
            />
          </Routes>
        }
        <Routes>
          <Route
            exact path="/"
            element={<>
              <HomePage/>
              <NextButton startTimer={this.startTimer} nextLink='/select'/>
            </>}
          />
          <Route
            exact path='/select'
            element={<>
              <GameForm updateSelections={this.updateSelections} operation={this.state.operation} time={this.state.time}/>
              <NextButton startTimer={this.startTimer} nextLink='/play'/>
            </>}
          />
          <Route
          exact path='/play'
          element={
            <section className='game-board'>
            <Header endTimer={this.endTimer} time={this.state.time} />
            <MathBoard operation={this.state.operation} increaseCorrect={this.increaseCorrect} increaseIncorrect={this.increaseIncorrect} />
            </section>            }
            />
          <Route exact path='/end' element={<><EndPage numberCorrect={this.state.numberCorrect} numberIncorrect={this.state.numberIncorrect} time={this.state.time} /><NextButton startTimer={this.startTimer} nextLink='/select'/></>} />
        </Routes>
      </main>
    )
  }
}

export default App;

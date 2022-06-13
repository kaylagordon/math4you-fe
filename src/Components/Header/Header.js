import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      minutesLeft: 0,
      secondsLeft: 0
    }
  }

  countdown = () => {
    const tick = () => {
      if(this.state.secondsLeft > 0) {
        let newSeconds = this.state.secondsLeft - 1;
        this.setState({
          secondsLeft: newSeconds
        })
        setTimeout(tick, 1000);
      } else if (this.state.minutesLeft >= 1) {
        let newMinutes = this.state.minutesLeft - 1;
        this.setState({
          minutesLeft: newMinutes,
          secondsLeft: 60
        })
        setTimeout(tick, 1000);
      } else {
        this.props.endTimer()
      }
    }

    tick();
  }

  componentDidMount = async () => {
    await this.setState({
      minutesLeft: Math.floor(this.props.time / 60),
      secondsLeft: this.props.time % 60
    })
    this.countdown();
  }

  render() {
    return (
      <header className='Header'>
      <h1>MATH<span className='highlight-title'>4</span>YOU</h1>
      <h2>TIME LEFT: 0{this.state.minutesLeft}:{this.state.secondsLeft < 10 ? `0${this.state.secondsLeft}` : this.state.secondsLeft}</h2>
      <Link to = '/select'>
      <button className='go-back-button'>GO BACK</button>
      </Link>
      </header>
    );
  }
};

export default Header;

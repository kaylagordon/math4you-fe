import React, { Component } from 'react';
import './MathCard.css';
import { getNumbers, writeExpression, operationPairings } from '../../problemSets';
import { getAnswer } from '../../apiCalls/apiCalls';

export class MathCard extends Component {
  constructor() {
    super();
    this.state= {
      numbers: [],
      expression: '',
      answer: '',
      evaluatedTo: 'waiting',
      error: ''
    };
  };

  async componentDidMount() {
    await this.setState({ numbers: getNumbers() })

    this.setState({ expression: writeExpression(this.state.numbers, this.props.operation) })
  }

  updateAnswer = event => {
    this.setState({
      answer: event.target.value
    });
  };

  checkAnswer = () => {
    getAnswer(operationPairings[this.props.operation], this.state.numbers)
    .then(data => {
      console.log(data);
      if (String(data.solution) === this.state.answer) {
        this.setState({ evaluatedTo: 'correct' })
        this.props.increaseCorrect();
        setTimeout(this.getNewCard, 2500)
      } else {
        this.setState({ evaluatedTo: 'incorrect' })
        this.props.increaseIncorrect();
      }
    })
    .catch(err => this.setState({ error: err }))
  }

  getNewCard = async () => {
    await this.setState({
      numbers: getNumbers(),
      answer: '',
      evaluatedTo: 'waiting'
    })

    this.setState({ expression: writeExpression(this.state.numbers, this.props.operation) })
  }

  render() {
    return (
      <div className={`MathCard ${this.state.evaluatedTo}`}>
        <p className='expression-text'>{this.state.expression}</p>
        <input
          type='text'
          value={this.state.answer}
          onChange={this.updateAnswer}
        />
        { this.state.error && <p>Oops! Try again!</p> }
        <button
          onClick={this.checkAnswer}
        >CHECK</button>
      </div>
    );
  };
};

export default MathCard;

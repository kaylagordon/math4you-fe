import React from 'react';
import './MathBoard.css';
import MathCard from '../MathCard/MathCard';

export const MathBoard = ({ operation, increaseCorrect, increaseIncorrect }) => {
  const renderCards = () => {
    let cards = [];
    for (var i = 0; i < 8; i++) {
      cards.push(<MathCard key = {i} operation={operation} increaseCorrect={increaseCorrect} increaseIncorrect={increaseIncorrect} />)
    }
    return cards;
  }

  return (
    <section className='MathBoard'>
      {renderCards()}
    </section>
  );
};

export default MathBoard;

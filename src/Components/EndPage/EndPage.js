import React from 'react';
import './EndPage.css';

export const EndPage = ({ numberCorrect, numberIncorrect, time }) => {
  const speed =
    ((numberCorrect
    / time
    * 60)
    .toFixed(1))

  const accuracy =
    ((numberCorrect /
    (numberCorrect + numberIncorrect)
    * 100)
    .toFixed(1))

  return (
    <section className='EndPage'>
      <h1>GREAT WORK!</h1>
      <h2>your results:</h2>
      <p className='end-data-text'><span className='highlight-data' id='number-correct-text'>{numberCorrect}</span> correct answers</p>
      <p className='end-data-text'><span className='highlight-data' id='number-correct--per-minute-text'>{speed}</span> correct answers per minute</p>
      <p className='end-data-text'><span className='highlight-data' id='percent-accurate-text'>{accuracy}%</span> accuracy</p>
    </section>
  );
}

export default EndPage;

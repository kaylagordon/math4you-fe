import './GameForm.css';

function GameForm(props) {

  const renderButtons = (category, topics) => {
    return topics.map(topic => {
      return (
        <button
        key={Math.random()}
          className={`${props[category] === topic ?
            'form-button selected' :
            'form-button'}`
          }
          value={topic}
          name={category}
          onClick={(e) => props.updateSelections(e.target.name, e.target.value)}
        >{category === 'operation' ?
          topic :
          parseInt(topic)/60
        }</button>
      )
    })
  }

  return (
    <form className="GameForm">
      <h1>MATH<span>4</span>YOU</h1>
      <div className='topic-container'>
        <p className='form-label'>operation:</p>
        <div className='form-buttons-container'>
          {renderButtons('operation', ['+', '-', '*'])}
        </div>
      </div>
      <div className='topic-container'>
        <p className='form-label'>minutes:</p>
        <div className='form-buttons-container'>
          {renderButtons('time', ['180', '60', '30'])}
        </div>
      </div>
    </form>
  );
}

export default GameForm;

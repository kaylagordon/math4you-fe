import './NextButton.css';
import { Link } from 'react-router-dom';
import arrowImage from '../../images/arrow-icon.png';


function NextButton({ nextLink, startTimer }) {
  const goToNextPage = () => {
    startTimer();
  }

  return (
    <Link to={nextLink}>
      <button
        className='NextButton'
        onClick={goToNextPage}
      >
      {nextLink === '/' ?
        <p>play again!</p> :
        <p>let's go!</p>
      }
      <img src={arrowImage} alt='next-arrow'/>
      </button>
    </Link>
  );
}

export default NextButton;

import { Link } from 'react-router-dom';
import { getScore } from '../../utils';
import styles from './End.module.css';
import { Card } from '../../components';

export default function End({ dealerCards, playerCards }) {
  // console.log(dealerCards, playerCards);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gagné !</h1>
      <div className={styles.score}>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            Croupier - {getScore(dealerCards)}
          </h2>
          <div>
            {dealerCards.map((card) => (
              <Card id={card.id} />
            ))}
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            Joueur - {getScore(playerCards)}
          </h2>
          <div>
            {playerCards.map((card) => (
              <Card id={card.id} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Link className={styles.button} to="/game">
          Try Again
        </Link>
      </div>
    </div>
  );
}

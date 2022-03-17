import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getScore } from '../../utils';
import styles from './End.module.css';
import { Button, Card } from '../../components';

export default function End({ dealerCards, playerCards }) {
  const [dealerScore, setDealerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);

  useEffect(() => {
    setDealerScore(getScore(dealerCards));
    setPlayerScore(getScore(playerCards));
  }, [dealerCards, playerCards]);

  const getEndMessage = () => {
    if (playerScore > 21) return dealerScore > 21 ? 'Égalité' : 'Perdu';
    if (dealerScore > 21) return 'Gagné';
    if (playerScore === dealerScore) return 'Égalité';
    return playerScore > dealerScore ? 'Gagné' : 'Perdu';
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{getEndMessage()} !</h1>
      <div className={styles.score}>
        <div>
          <h2 style={{ textAlign: 'center' }}>Croupier - {dealerScore}</h2>
          <div>
            {dealerCards.map((card) => (
              <Card id={card.id} />
            ))}
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: 'center' }}>Joueur - {playerScore}</h2>
          <div>
            {playerCards.map((card) => (
              <Card id={card.id} />
            ))}
          </div>
        </div>
      </div>
      <Link tabIndex={-1} className={styles.link} to="/game">
        <Button size="large">Réessayer</Button>
      </Link>
    </div>
  );
}

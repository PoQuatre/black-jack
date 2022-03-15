import { Card } from '..';
import { getScore } from '../../utils';
import styles from './Hand.module.css';

export default function Hand({ cards }) {
  return (
    <div className={styles.container}>
      <h2>Player {getScore(cards)}</h2>
      {cards.map((card) => (
        <Card id={card.id} />
      ))}
    </div>
  );
}

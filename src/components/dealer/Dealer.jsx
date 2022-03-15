import { Card } from '../card';
import { getScore } from '../../utils';
import styles from './Dealer.module.css';

export default function Dealer({ cards }) {
  return (
    <div className={styles.dealer}>
      <h2>Dealer {getScore(cards)}</h2>
      {cards.map((card, i) => (
        <Card id={i === 0 ? card.id : undefined} />
      ))}
    </div>
  );
}

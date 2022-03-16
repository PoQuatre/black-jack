import { Card } from '../card';
import styles from './Dealer.module.css';

export default function Dealer({ cards }) {
  return (
    <div className={styles.dealer}>
      <h2 className={styles['dealer-score']}>CROUPIER </h2>
      <div className={styles['re-cards']}>
        {cards.map((card, i) => (
          <Card id={i === 0 ? card.id : undefined} />
        ))}
      </div>
    </div>
  );
}

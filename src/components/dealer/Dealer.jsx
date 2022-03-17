import { getScore } from '../../utils';
import { Card } from '../card';
import styles from './Dealer.module.css';

export default function Dealer({ cards }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Croupier - {getScore([cards[0] || 0])}+</h2>
      <div>
        {cards.map((card, i) => (
          <Card id={i === 0 ? card.id : undefined} />
        ))}
      </div>
    </div>
  );
}

import { Card } from '../card';
import { getScore } from '../../utils';
import styles from './Hand.module.css';

export default function Hand({ cards }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>score joueur: {getScore(cards)}</h2>
      <div className={styles.handcenter}>
        <div className={styles['cards-player']}>
          {cards.map((card) => (
            <Card id={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

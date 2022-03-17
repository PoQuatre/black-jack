import { Card } from '../card';
import { getScore } from '../../utils';
import styles from './Hand.module.css';

export default function Hand({ cards }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Joueur - {getScore(cards)}</h2>
      <div>
        {cards.map((card) => (
          <Card id={card.id} />
        ))}
      </div>
    </div>
  );
}

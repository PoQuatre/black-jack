import styles from './Card.module.css';

export default function Card({ id }) {
  return <div className={styles.container}>{id || 'A default card'}</div>;
}

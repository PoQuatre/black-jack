import { Link } from 'react-router-dom';
import * as styles from './Start.module.css';

export default function Start() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Black Jack</h1>
      <Link className={styles.button} to="/game">
        New Game
      </Link>
    </div>
  );
}

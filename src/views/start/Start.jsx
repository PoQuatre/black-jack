import { Link } from 'react-router-dom';
import { Button } from '../../components';
import styles from './Start.module.css';

export default function Start() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Black Jack</h1>
      <Link tabIndex={-1} className={styles.button} to="/game">
        <Button size="large">New Game</Button>
      </Link>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Button } from '../../components';
import styles from './Start.module.css';

export default function Start() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Black Jack</h1>
      <Link tabIndex={-1} to="/game">
        <Button size="large">Nouvelle Partie</Button>
      </Link>
    </div>
  );
}

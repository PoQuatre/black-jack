import { Card } from '../../components';
import styles from './Game.module.css';

export default function Game() {
  return (
    <>
      <h1 className={styles.title}>Game</h1>;
      <Card />
    </>
  );
}

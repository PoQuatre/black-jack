import styles from './StartScreen.module.css';

export default function StartScreen() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Black Jack</h1>
      <button className={styles.button} type="button">
        New Game
      </button>
    </div>
  );
}

import styles from './Card.module.css';

export default function Card({ id }) {
  return (
    <img
      className={styles.img}
      src={
        id
          ? `${import.meta.env.BASE_URL}assets/img/cards/${id}.png`
          : `${import.meta.env.BASE_URL}assets/img/backs/card58.png`
      }
      alt="card"
    />
  );
}

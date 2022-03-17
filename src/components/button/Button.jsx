import { useEffect, useState } from 'react';
import styles from './Button.module.css';

export default function Button({ children, onClick, size }) {
  const [fontSize, setFontSize] = useState('1.25rem');

  useEffect(() => {
    switch (size) {
      case 'large':
        setFontSize('2rem');
        break;
      case 'small':
        setFontSize('0.75rem');
        break;
      default:
        setFontSize('1.25rem');
        break;
    }
  }, [size]);

  return (
    <button onClick={onClick} className={styles.button} type="button">
      <span className={styles.shadow} />
      <span className={styles.edge} />
      <span className={styles.front} style={{ fontSize }}>
        {children}
      </span>
    </button>
  );
}

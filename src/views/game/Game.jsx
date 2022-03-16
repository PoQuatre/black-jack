import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dealer, Hand } from '../../components';
import { Deck, getScore } from '../../utils';
import styles from './Game.module.css';

export default function Game() {
  const navigate = useNavigate();
  const deck = useRef(new Deck(6));

  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);

  useEffect(() => {
    setDealerCards((cards) => [...cards, deck.current.draw()]);
    setPlayerCards((cards) => [...cards, deck.current.draw()]);
    setDealerCards((cards) => [...cards, deck.current.draw()]);
    setPlayerCards((cards) => [...cards, deck.current.draw()]);
  }, []);

  useEffect(() => {
    if (getScore(dealerCards) >= 21 || getScore(playerCards) >= 21) {
      navigate('/end');
    }
  }, [navigate, dealerCards, playerCards]);

  const draw = () => {
    setPlayerCards((cards) => [...cards, deck.current.draw()]);
    if (getScore(dealerCards) < 16) {
      setDealerCards((cards) => [...cards, deck.current.draw()]);
    }
  };

  return (
    <div className={styles.backgr}>
      <Dealer cards={dealerCards} className={styles['car-deal']} />
      <div className={styles['bar-player']}>
        <div className={styles['bar-play']}>
          <button
            onClick={draw}
            type="button"
            className={styles['button-pioch']}
          >
            Piocher
          </button>
          <button className={styles['button-pioch']} type="button">
            Abondonner
          </button>
          <button className={styles['button-pioch']} type="button">
            options
          </button>
        </div>
      </div>
      <Hand cards={playerCards} />
    </div>
  );
}

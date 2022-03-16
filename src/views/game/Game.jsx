import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dealer, Hand } from '../../components';
import { Deck, getScore } from '../../utils';
import styles from './Game.module.css';

export default function Game({
  dealerCards,
  playerCards,
  addDealerCard,
  addPlayerCard,
  resetCards,
}) {
  const navigate = useNavigate();
  const deck = useRef(new Deck(6));
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    if (!didMount) {
      resetCards();

      addDealerCard(deck.current.draw());
      addPlayerCard(deck.current.draw());
      addDealerCard(deck.current.draw());
      addPlayerCard(deck.current.draw());

      setDidMount(true);
    }
  }, [addDealerCard, addPlayerCard, didMount, resetCards]);

  useEffect(() => {
    if (!didMount) return;
    if (getScore(dealerCards) >= 21 || getScore(playerCards) >= 21) {
      navigate('/end');
    }
  }, [navigate, dealerCards, playerCards, didMount]);

  const draw = () => {
    addPlayerCard(deck.current.draw());
    if (getScore(dealerCards) < 16) {
      addDealerCard(deck.current.draw());
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

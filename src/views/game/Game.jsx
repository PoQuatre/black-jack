/* eslint-disable react/no-unescaped-entities */
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Dealer, Hand } from '../../components';
import { Deck, getScore, sleep } from '../../utils';
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

      (async () => {
        await sleep(500);
        addDealerCard(deck.current.draw());
        await sleep(500);
        addPlayerCard(deck.current.draw());
        await sleep(500);
        addDealerCard(deck.current.draw());
        await sleep(500);
        addPlayerCard(deck.current.draw());
      })();

      setDidMount(true);
    }
  }, [addDealerCard, addPlayerCard, didMount, resetCards]);

  useEffect(() => {
    if (!didMount) return;
    if (getScore(dealerCards) >= 21 || getScore(playerCards) >= 21) {
      (async () => {
        await sleep(500);
        navigate('/end');
      })();
    }
  }, [navigate, dealerCards, playerCards, didMount]);

  const draw = async () => {
    addPlayerCard(deck.current.draw());
    await sleep(500);
    if (getScore(dealerCards) < 16) {
      addDealerCard(deck.current.draw());
    }
  };

  const stop = async () => {
    await sleep(500);
    navigate('/end');
  };

  return (
    <div className={styles.container}>
      <Dealer cards={dealerCards} />
      {/* <div className={styles['bar-player']}>
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
      </div> */}
      <Hand cards={playerCards} />
      <div className={styles.buttons}>
        <Button onClick={draw}>Piocher</Button>
        <Button onClick={stop}>S'arrêter</Button>
      </div>
    </div>
  );
}

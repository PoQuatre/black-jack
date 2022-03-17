/* eslint-disable react/no-unescaped-entities */
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Dealer, Hand } from '../../components';
import { Deck, getScore, sleep, throttle } from '../../utils';
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
  const enabled = useRef(false);
  const [didMount, setDidMount] = useState(false);
  const draw = useRef(
    throttle(
      async (cards) => {
        if (!enabled.current) return;

        addPlayerCard(deck.current.draw());
        await sleep(500);
        if (getScore(cards) < 16) {
          addDealerCard(deck.current.draw());
        }
      },
      1000,
      { trailing: false },
    ),
  ).current;

  useEffect(() => {
    if (didMount) return;

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
      enabled.current = true;
    })();

    setDidMount(true);
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

  const stop = async () => {
    if (!enabled.current) return;

    const cards = [...dealerCards];
    while (getScore(cards) < 16) {
      const card = deck.current.draw();
      cards.push(card);
      addDealerCard(card);
      // eslint-disable-next-line no-await-in-loop
      await sleep(500);
    }

    await sleep(500);
    navigate('/end');
  };

  return (
    <div className={styles.container}>
      <Dealer cards={dealerCards} />
      <Hand cards={playerCards} />
      <div className={styles.buttons}>
        <Button onClick={() => draw(dealerCards)}>Piocher</Button>
        <Button onClick={stop}>S'arrêter</Button>
      </div>
    </div>
  );
}

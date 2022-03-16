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
    <>
      <h1 className={styles.title}>Game</h1>
      <button onClick={draw} type="button">
        Piocher
      </button>
      <Dealer cards={dealerCards} />
      <Hand cards={playerCards} />
    </>
  );
}

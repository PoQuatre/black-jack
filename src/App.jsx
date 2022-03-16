import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Start, Game, End } from './views';

export default function App() {
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);

  const addDealerCard = (card) => {
    setDealerCards((cards) => [...cards, card]);
  };

  const addPlayerCard = (card) => {
    setPlayerCards((cards) => [...cards, card]);
  };

  const resetCards = () => {
    setDealerCards([]);
    setPlayerCards([]);
  };

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route
        path="/game"
        element={
          <Game
            dealerCards={dealerCards}
            playerCards={playerCards}
            addDealerCard={addDealerCard}
            addPlayerCard={addPlayerCard}
            resetCards={resetCards}
          />
        }
      />
      <Route
        path="/end"
        element={<End dealerCards={dealerCards} playerCards={playerCards} />}
      />
    </Routes>
  );
}

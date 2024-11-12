import React from "react";
import './App.css';
import { Card } from "../Card/Card";
import { Moves } from "../Moves/Moves";
import { Attempts } from "../Attempts/Attempts";
import { SourceImage } from "../../types";
import { itemsImage } from "../../utils";
import { Popup } from "../Popup/Popup";


export const App = () => {

  const [cards, setCards] = React.useState<SourceImage[]>([]);
  const [openCards, setOpenCards] = React.useState<number[]>([]);
  const [matched, setMatched] = React.useState<number[]>([]);
  const [attempts, setAttempts] = React.useState<number>(40);
  const [moves, setMoves] = React.useState<number>(0);
  
  const flipCard = (index: number): void => {
    if (openCards.length > 1) return;
    else setOpenCards((openCard) => [...openCard, index]);
  };
  
  React.useEffect(() => {
    setCards(itemsImage.sort(() => Math.random() - 0.5));
  }, []);

  React.useEffect(() => {
    if (openCards.length < 2) return;

    const firstMatched = cards[openCards[0]];
    const secondMatched = cards[openCards[1]];
    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openCards.length === 2) {
      setMoves(moves + 1);
      setAttempts(attempts - 1);
      setTimeout(() => setOpenCards([]), 1000);
    }
  }, [openCards]);

  const gameRestart = () => {
    setOpenCards([]);
    setMatched([]);
    setAttempts(40);
    setMoves(0);
    setCards(itemsImage.sort(() => Math.random() - 0.5));
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="header">
          <div className="header__title">Memory</div>
        </div>
        <div className="main">
          <Card
            cards={cards}
            openCards={openCards}
            matched={matched}
            flipCard={flipCard}
          />
          <Moves
            moves={moves}
          />
          <Attempts
            attempts={attempts}
          />
          <Popup
            attempts={attempts}
            matched={matched}
            moves={moves}
            gameRestart={gameRestart}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
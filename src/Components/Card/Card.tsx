import React, { FC } from 'react';
import './Card.css';
import { SourceImage } from '../../types';
import imgBackSide from '../../img/KC.png';

interface Props {
  cards: SourceImage[];
  openCards: number[];
  matched: number[];
  flipCard: (index: number) => void;
}

export const Card: FC<Props> = ( props ) => {
  return (
      <div className="cards-grid">
        {props.cards
          .map((card, index) => {
            let isFlipped = false;
            let isVisible = true;
            if (props.openCards.includes(index)) isFlipped = true;
            if (props.matched.includes(card.id)) {
              isFlipped = true;
              isVisible = false;
            }
            return (
              <div
                key={index}
                onClick={() => props.flipCard(index)}
                className={`${!isFlipped ? 'card' : 'flipped card--block'}
                           ${!isVisible ? 'card--hidden' : ''}`}
              >
                <div className="card-front ">
                  <img src={card.img} width="100" alt="card-front" />
                </div>
                <div className="card-back ">
                  <img src={imgBackSide} width="100" alt="card-back" />
                </div>
              </div>
            )})}
      </div>
  );
};
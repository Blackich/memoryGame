import React, { FC } from 'react';
import './Popup.css';

interface Props {
  attempts: number;
  matched: number[];
  moves: number;
  gameRestart: () => void;
}

export const Popup:FC<Props> = (props) => {
  return (
    <div>
      {props.attempts === 0 ? (
        <div className="popup-lose">
          <div className="popup-text">
            <p>Увы, вы проиграли</p>
            <p>У вас кончились ходы</p>
          </div>
          <button onClick={() => props.gameRestart()} className="btn-restart">
            Сыграть еще
          </button>
        </div>
      ) : null}

      {props.matched.length === 8 ? (
        <div className="popup-win">
          <div className="popup-text">
            <p>Ура, вы выйграли</p>
            <p>{`Это заняло ${props.moves} ходов`}</p>
          </div>
          <button onClick={() => props.gameRestart()} className="btn-restart">
            Сыграть еще
          </button>
        </div>
      ) : null}
    </div>
  )
}
import React, { FC } from 'react';

interface Props {
  moves: number;
}

export const Moves:FC<Props> = ({ moves }) => {
  return (
    <div className="moves-made">
      <div className="moves-made__title">Сделано ходов</div>
      <div className="moves-made__num">{moves}</div>
    </div>
  )
}

import React, { FC } from 'react';

interface Props {
  attempts: number;
}

export const Attempts:FC<Props> = ({attempts}) => {
  return (
    <div className="attempts-left">
      <div className="attempts-left__title">Осталось попыток</div>
      <div className="attempts-left__num">{attempts}</div>
    </div>
  )
}

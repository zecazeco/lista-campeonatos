import React from 'react';

import { IMatch } from '../../interfaces/match';

function Match({
  date, home, away, competition,
}: IMatch) {
  return (
    <article className="card">
      <div className="match__meta">
        <span>{competition}</span>
        <span>{date}</span>
      </div>
      <div className="match__board">
        <span className="match__team--home">{home}</span>
        <span className="match__vs">x</span>
        <span>{away}</span>
      </div>
    </article>
  );
}

export default Match;

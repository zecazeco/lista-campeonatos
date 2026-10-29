import React from 'react';

import { ITeam } from '../../interfaces/team';

// pega as iniciais das duas primeiras palavras do nome
function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function Team({ name, city }: ITeam) {
  return (
    <article className="card team">
      <span className="team__avatar" aria-hidden="true">{initials(name)}</span>
      <div>
        <h2 className="card__title">{name}</h2>
        <p className="card__text">{city}</p>
      </div>
    </article>
  );
}

export default Team;

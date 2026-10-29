import React from 'react';
import { Link } from 'react-router-dom';
import { ICompetition } from '../../interfaces/competition';

function Competition({
  id,
  name,
  description,
  quantity,
}: ICompetition) {
  return (
    <article className="card">
      <div className="competition__head">
        <h2 className="card__title">{name}</h2>
        <span className="badge">{quantity} times</span>
      </div>
      <p className="card__text">{description}</p>
      <div className="competition__actions">
        <Link className="button" to={`/competitions/${id}/teams`}>Participantes</Link>
        <Link className="button button--ghost" to={`/competitions/${id}/matches`}>Jogos</Link>
      </div>
    </article>
  );
}

export default Competition;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ITopBar } from '../../interfaces/topBar';

function TopBar({ title }: ITopBar) {
  const { pathname } = useLocation();

  return (
    <header className="topbar">
      <nav className="topbar__nav">
        <Link to="/" className="topbar__brand">
          Campeonatos <span>&</span> Confrontos
        </Link>
        {pathname !== '/' && <Link to="/" className="topbar__back">← Voltar</Link>}
      </nav>
      <h1 className="topbar__title">{title}</h1>
    </header>
  );
}

export default TopBar;

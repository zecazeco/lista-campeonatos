import React from 'react';

import { IStatus } from '../../interfaces/status';

function Status({ loading, error, empty }: IStatus) {
  if (loading) {
    return <div className="spinner" role="status" aria-label="carregando" />;
  }

  if (error) {
    return <p className="notice notice--error">Não foi possível carregar os dados.</p>;
  }

  if (empty) {
    return <p className="notice">Nenhum item encontrado.</p>;
  }

  return null;
}

export default Status;

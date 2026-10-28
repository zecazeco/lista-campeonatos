import React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { IStatus } from '../../interfaces/status';

function Status({ loading, error, empty }: IStatus) {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress aria-label="carregando" />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">Não foi possível carregar os dados.</Alert>;
  }

  if (empty) {
    return <Alert severity="info">Nenhum item encontrado.</Alert>;
  }

  return null;
}

export default Status;

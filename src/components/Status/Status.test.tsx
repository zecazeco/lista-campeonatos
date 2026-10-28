import React from 'react';
import { render, screen } from '@testing-library/react';
import Status from './index';

test('Mostra o carregando enquanto busca os dados', () => {
  render(<Status loading error={false} empty />);

  expect(screen.getByLabelText('carregando')).toBeInTheDocument();
});

test('Mostra mensagem de erro quando a busca falha', () => {
  render(<Status loading={false} error empty />);

  expect(screen.getByText('Não foi possível carregar os dados.')).toBeInTheDocument();
});

test('Mostra aviso quando a lista vem vazia', () => {
  render(<Status loading={false} error={false} empty />);

  expect(screen.getByText('Nenhum item encontrado.')).toBeInTheDocument();
});

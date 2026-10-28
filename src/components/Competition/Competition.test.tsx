import React from 'react';
import { render, screen } from '@testing-library/react';
import Competition from './index';

const id = '0';
const name = 'competição 1';
const quantity = '20';
const description = 'descricao competição muito legal';

test('Componente recebe um card com nome da competição, descriçao e quantidade de times', () => {
  render(<Competition id={id} name={name} quantity={quantity} description={description} />);

  const text1 = screen.getByText(name);
  const text2 = screen.getByText(`${quantity} times`);
  const text3 = screen.getByText(description);

  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(text3).toBeInTheDocument();
});

/* eslint-disable max-len */
import React from 'react';
import {screen} from '@testing-library/react';
import {render} from './test-utils';
import App from './App';

test('Verificando Butões da Home', () => {
  render(<App />);
  const btnCadastrar = screen.getByTestId('btn-cadastrar');
  const btnCompetidor = screen.getByTestId('btn-competidor');
  expect(btnCompetidor).toBeInTheDocument();
  expect(btnCadastrar).toBeInTheDocument();
});

test(
    'Verificando se o botão cadastrar redireciona para a página de cadastro',
    () => {
      render(<App />);
      const btnCadastrar = screen.getByTestId('btn-cadastrar');
      btnCadastrar.click();
      expect(window.location.pathname).toBe('/formulario');
    },
);

test(
    'Verificando se o botão competidor redireciona para a página de competidores',
    () => {
      render(<App />);
      const btnCompetidor = screen.getByTestId('btn-competidor');
      btnCompetidor.click();
      expect(window.location.pathname).toBe('/lista-de-candidatos');
    },
);

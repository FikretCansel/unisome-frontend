import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { Router, BrowserRouter } from 'react-router-dom';
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";


test('renders App', () => {
  const store = configureStore();
  render( <Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/UNISOMEA/i);
  expect(linkElement).toBeInTheDocument();
});
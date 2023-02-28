import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Login from './Login';
import { Router, BrowserRouter } from 'react-router-dom';
import * as Firebase from '../../firebase';
import { authObjectMock } from '../../setupTests';


Firebase.auth = authObjectMock;

console.log(Firebase.auth.signInWithEmailAndPassword)

test('renders login and check email exist', () => {
  const { getByText } = render( <BrowserRouter><Login /></BrowserRouter>);
  const linkElement = getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders login and check password exist', () => {
  const { getByText } = render( <BrowserRouter><Login /></BrowserRouter>);
  const linkElement = getByText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});

test('email input should change', () => {
  render( <BrowserRouter><Login /></BrowserRouter>);
  const emailInput = screen.getByPlaceholderText(/Enter email address/i);
  const testInput = "Fikret"
  fireEvent.change(emailInput,{target:{value: testInput}});
  expect(emailInput.value).toBe(testInput);
});

test('validation error should not be', () => {
  render( <BrowserRouter><Login /></BrowserRouter>);
  const errorMessage = screen.getByTestId("error-message");
  expect(errorMessage).not.toBeVisible();
});

test('validation error should be, when clicked submit and the input was empty', () => {
  render( <BrowserRouter><Login /></BrowserRouter>);
  const loginButton = screen.getByTestId("login-button");
  const errorMessage = screen.getByTestId("error-message");
  fireEvent.click(loginButton);
  expect(errorMessage).toBeVisible();
});

test('login success', () => {
  render( <BrowserRouter><Login /></BrowserRouter>);
  const emailInput = screen.getByPlaceholderText(/Enter email address/i);
  const testInput = "fikret@hotmail.com"
  fireEvent.change(emailInput,{target:{value: testInput}});

  const passwordInput = screen.getByPlaceholderText(/Enter password/i);
  fireEvent.change(passwordInput,{target:{value: testInput}});

  const loginButton = screen.getByTestId("login-button");
  const errorMessage = screen.getByTestId("error-message");
  fireEvent.click(loginButton);
  expect(Firebase.auth.signInWithEmailAndPassword).toHaveBeenCalled();
});
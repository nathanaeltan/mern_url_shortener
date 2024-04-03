import { fireEvent, render, screen } from '@testing-library/react';
import UrlInput from '../../components/UrlInput';
import { Provider } from 'react-redux';

import {store} from '../../store/store';

describe('UrlInput', () => {
  test('renders input field and button', () => {
    render(
      <Provider store={store}>
        <UrlInput />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('Shorten That URL...');
    expect(inputElement).toBeInTheDocument();

    const buttonElement = screen.getByText('Shorten');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should disable button initially and enable it when input is provided', () => {
    render(
      <Provider store={store}>
        <UrlInput />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('Shorten That URL...');
    const buttonElement = screen.getByText('Shorten');

    expect(buttonElement).toBeDisabled();

    fireEvent.change(inputElement, { target: { value: 'https://example.com' } });
    expect(buttonElement).toBeEnabled();
  });

  test('should dispatch shortenUrl action on form submission', () => {
    const mockDispatch = jest.fn();
    jest.spyOn(store, 'dispatch').mockImplementation(mockDispatch);

    render(
      <Provider store={store}>
        <UrlInput />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('Shorten That URL...');
    const buttonElement = screen.getByText('Shorten');

    fireEvent.change(inputElement, { target: { value: 'https://example.com' } });
    fireEvent.click(buttonElement);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

});
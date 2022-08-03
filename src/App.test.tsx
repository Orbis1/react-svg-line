import React from 'react';
import '@testing-library/jest-dom'
import { App } from "./App";
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('should render coordinates', () => {
    render(<App />);
    expect(screen.getByTestId("linechart")).toBeInTheDocument();
  })
})
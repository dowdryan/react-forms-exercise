import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


it("successfully renders", () => {
  render(<App/>)
});

it("matches screenshot", () => {
  const {asFragment} = render(<App/>)
  expect(asFragment()).toMatchSnapshot()
});
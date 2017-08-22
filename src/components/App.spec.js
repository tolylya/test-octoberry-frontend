// Must have at least one test file in this directory or Mocha will throw an error.


import React from 'react';
import {shallow} from 'enzyme';
import App from './App.jsx';

describe('<App />', () => {
  it('should be render \'App\'', () => {
    shallow(<App />);

    expect(true).toBe(true);
  });
});

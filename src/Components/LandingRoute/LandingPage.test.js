import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import LandingPage from './LandingPage'
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<LandingPage />);
});
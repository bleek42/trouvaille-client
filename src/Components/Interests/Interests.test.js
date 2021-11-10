import React from 'react';
import Interests from './Interests';
import { shallow } from 'enzyme';
import { ContextProvider } from '../../Context';

it('renders without crashing', () => {
  shallow(<ContextProvider><Interests /></ContextProvider>);
});

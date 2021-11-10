import React from 'react';
import WaypointsSelect from './WaypointsSelect';
import { shallow } from 'enzyme';
import { ContextProvider } from '../../Context';

it('renders without crashing', () => {
  shallow(<ContextProvider><WaypointsSelect /></ContextProvider>);
});

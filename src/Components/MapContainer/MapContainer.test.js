import React from 'react';
import MapContainer from './MapContainer';
import { shallow } from 'enzyme';
import { ContextProvider } from '../../Context';

it('renders without crashing', () => {
  shallow(<ContextProvider><MapContainer /></ContextProvider>);
});

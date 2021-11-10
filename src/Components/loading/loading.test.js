import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Loading from './loading'
import { shallow, mount } from 'enzyme';


it('renders without crashing', () => {
  shallow(<Loading />);
});

it('displays the loading message', () => {
    const wrapper = mount(
        <BrowserRouter>
            <Loading />
        </BrowserRouter>
    );

    const message = <h2>Finding exciting new stories takes time! Please be patient with us!</h2>;
    
    expect(wrapper.contains(message)).toEqual(true);
});
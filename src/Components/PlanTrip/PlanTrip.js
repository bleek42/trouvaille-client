import React from 'react';
import Menu from '../Menu/Menu';
import ContextProvider from '../../Context'
import Header from '../Header/Header';

import './PlanTrip.css'
import HamburgerIcon from '../HamburberIcon/HamburgerIcon';

class PlanTrip extends React.Component {
  static contextType = ContextProvider

  componentDidMount() {
    this.context.setRadius(null)
  }

  handleSubmit = e => {
    e.preventDefault();
    //Get all input values from the form!
    const destination = e.target.destination.value
    const detours = e.target.detours.value
    const radius = e.target.radius.value * 1000
    const time = e.target.time.value
    this.context.setRadius(radius)
    //Set the state witin context (userTrip obj)
    this.context.setTrip(destination, detours, radius, time)
    this.props.history.push('/waypoints');
  }



  render() {
    return (
      <>
        <Header />
        <HamburgerIcon />
        <Menu />
        <form className='plan-trip' onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='destination'>Where are you going?</label>
          <input type='text' id='destination' placeholder='city, state, or zip' required />

          <label htmlFor='detours'>How many detours will you make en route?</label>
          <input type='number' id='detours' min='1' max='25?' />

          <label htmlFor='radius'>Choose your max detour radius in Kilometers</label>
          <input type="number" name="radius" id="radius" min="1" max="10" />

          {/* assuming max time includes entire trip start to finish */}
          <label htmlFor='time'>Choose your max trip time(hrs)</label>
          <input type='number' id='time' min='1' max='100' />

          <div className='buttons'>
            <button type='submit'>Submit</button>
            <button onClick={() => this.props.history.push('/dashboard')}>Back</button>
          </div>

        </form>

      </>
    )
  }
}

export default PlanTrip;
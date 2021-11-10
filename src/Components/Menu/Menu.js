import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContextProvider from '../../Context';
import './Menu.css';
// import PastTrips from '../Nav/PastTrips';

export default class Menu extends Component {
  static contextType = ContextProvider;

  render() {
    return (
      <div>
        {this.context.showMenu &&
          <nav id='menu'>
            <ul className='menu-container'>
              <li><Link to="/MyTrips">Past Trips</Link></li>
              <li className="link-container"><Link to='/new-trip'>Plan a New Trip
              </Link></li>
              <li className='link-container'><Link to="/dashboard">Discover new places</Link></li>
              <li className='link-container'><Link to="/interests">Change my preferences</Link></li>
            </ul>
          </nav>
        }
      </div>
    );
  }
}
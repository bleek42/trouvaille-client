import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContextProvider from '../../Context';
import './Menu.css';
// import PastTrips from '../Nav/PastTrips';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="menu-container">
      {isMenuOpen ? (
        <div className="menu-open">
          <button id="close" onClick={() => setIsMenuOpen(false)}>some close icon goes here</button>
          <nav>
            <ul>
              <li>Dashboard</li>
              <li>Plan New Trip</li>
              <li>View Past Trips</li>
              <li>Preferences</li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="menu-closed">
          <button id="open" onClick={() => setIsMenuOpen(true)}>some open icon goes here</button>
        </div>
      )}
    </div>
  );
}

// export default class Menu extends Component {
//   static contextType = ContextProvider;

//   render() {
//     return (
//       <div>
//         {this.context.showMenu &&
//           <nav id='menu'>
//             <ul className='menu-container'>
//               <li><Link to="/MyTrips">Past Trips</Link></li>
//               <li className="link-container"><Link to='/new-trip'>Plan a New Trip
//               </Link></li>
//               <li className='link-container'><Link to="/dashboard">Discover new places</Link></li>
//               <li className='link-container'><Link to="/interests">Change my preferences</Link></li>
//             </ul>
//           </nav>
//         }
//       </div>
//     );
//   }
// }
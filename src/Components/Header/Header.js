import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ContextProvider from '../../Context';
import TokenService from '../../services/token-service';
//import PlanTrip from './PlanTrip/PlanTrip';
import { Spring } from 'react-spring/renderprops';
import './Header.css';
import HamburgerIcon from '../HamburberIcon/HamburgerIcon';
import LandingPage from '../LandingRoute/LandingPage';


export default function Header() {
  return (
    <div className="header-container">
      <header>
        <h1>Trouvaille</h1>
      </header>
    </div>

  );
}

// class Header extends Component {

//   static contextType = ContextProvider

//   handleLogoutClick = () => {
//     this.context.processLogout()
//   }

//   renderLogoutLink() {
//     return (
//       <div className="dashboard-logout">
//         <Link
//           onClick={this.handleLogoutClick}
//           to='/login'>
//           Logout
//         </Link>
//       </div>
//     )
//   }

//   renderLoginLink() {
//     return (<>
//       <nav className="trouvaille-nav-dashboard">
//         <Link to='/login'>Login</Link>
//         <Link to='/register'>Register</Link>
//         {window.location.pathname !== '/interests' ? <div>
//         </div> : null}
//       </nav>
//     </>
//     )
//   }

//   render() {
//     if (window.location.pathname === '/') {
//       return (
//         <>
//           <HamburgerIcon />
//           <Spring
//             from={{ marginTop: -500 }}
//             to={{ marginTop: 0 }}>
//             {props => <div style={props}>
//               <h1 className="landing-title">
//                 <Link to='/'>
//                   Trouvaille
//       </Link>
//               </h1>
//             </div>}
//           </Spring>
//         </>

//       )
//     } else {
//       return (
//         <>
//           <HamburgerIcon />
//           <Spring
//             from={{ marginTop: -500 }}
//             to={{ marginTop: 0 }}>
//             {props => <div style={props}>
//               <header className='trouvaille_header'>


//                 {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
//                 <h1 className="trouvaille-header">
//                   <Link to='/'>
//                     Trouvaille
//             </Link>
//                 </h1>
//               </header></div>}
//           </Spring>
//         </>

//       );
//     }
//   }
// }

// export default Header;
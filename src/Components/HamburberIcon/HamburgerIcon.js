import { slide as Menu } from 'react-burger-menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';;

// export default function M() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="menu"
//   )
// }

// export default class MenuContainer extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       menuOpen: false
//     }
//   }
//   showSettings(event) {
//     event.preventDefault();
//   }
//   styles = {
//     bmBurgerButton: {
//       position: 'absolute',
//       width: '36px',
//       height: '30px',
//       left: '16px',
//       top: '16px'
//     },
//     bmBurgerBars: {
//       background: '#373a47'
//     },
//     bmBurgerBarsHover: {
//       background: '#a90000'
//     },
//     bmCrossButton: {
//       height: '24px',
//       width: '24px'
//     },
//     bmCross: {
//       background: '#bdc3c7'
//     },
//     bmMenuWrap: {
//       position: 'fixed',
//       height: '100%',
//       top: "0"
//     },
//     bmMenu: {
//       padding: '2.5em 1.5em 0',
//       fontSize: '1.15em'
//     },
//     bmMorphShape: {
//       fill: '#373a47'
//     },
//     bmItemList: {
//       color: '#b8b7ad',
//       padding: '0.8em'
//     },
//     bmItem: {
//       display: 'inline-block'
//     },
//     bmOverlay: {
//       background: 'rgba(0, 0, 0, 0)'
//     }
//   }

//   handleStateChange(state) {
//     this.setState({ menuOpen: state.isOpen })
//   }

//   closeMenu() {
//     this.setState({ menuOpen: false })
//   }

//   toggleMenu() {
//     this.setState(state => ({ menuOpen: !state.menuOpen }))
//   }


//   render() {
//     // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
//     return (
//       <Menu styles={this.styles} isOpen={this.state.menuOpen}
//         onStateChange={(state) => this.handleStateChange(state)}>
//         {localStorage.getItem('user_id') ? <Link onClick={() => this.closeMenu()} className='link-container' to='/myTrips'>Past Trips</Link> : <Link onClick={() => this.closeMenu()} className='link-container' to='/register'>Sign Up</Link>}
//         <Link onClick={() => this.closeMenu()} className='link-container' to='/new-trip'>Plan a New Trip </Link>
//         <Link onClick={() => this.closeMenu()} className='link-container' to="/dashboard">Near Me</Link>
//         <Link onClick={() => this.closeMenu()} className='link-container' to="interests" >Preferences</Link>
//       </Menu>
//     );
//   }
// }
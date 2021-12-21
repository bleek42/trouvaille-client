import React, { useEffect, useContext } from 'react';
import { Link, Route } from 'react-router-dom';
import ContextProvider from '../../Context';
import { useSpring, animated } from 'react-spring';
import Header from '../Header/Header';
import Interests from '../Interests/Interests';


import './LandingPage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function LandingPage(props) {

  const context = useContext(ContextProvider);

  const history = useHistory();

  const springProps = useSpring({ to: { opacity: 1, marginTop: 0 }, from: { opacity: 0, marginTop: -500 } });

  useEffect(() => {
    const getGeoLocation = async () => {
      try {
        await navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          console.log({ latitude, longitude });
          context.setOriginCoords({ lat: latitude, lon: longitude });
        });
      }
      catch {
        console.error('error caught');
      }
      finally {
        console.log('finally block');
      }
    };
    getGeoLocation();
    // return () => {
    //   if (localStorage.getItem('user_id')) props.history.push('/dashboard');
    // };
  }, []);

  return (
    <div className="landing-page-container">
      <header>
        <h1>Welcome to Trouvaille!</h1>
      </header>
      <animated.div style={springProps} className="landing-text">
        <h4>Some of the best experiences are unplanned.. Some of the most memorable moments are spontaneous...</h4>
        <p>
          However, life doesn't always allow for that. For the times that you want great experiences that you are able to tell
          your friends and family about for years to come, but are on a schedule and need to plan things out, we are here for you!
          Trouvaille lets you pick your starting point and your destination, and fill in a quick survey of your preferences, including
          how often you are able to stop, how much time you can spend driving the wrong direction (because all the best stuff is off
          the beaten path), and, of course, your interests so that we show you locations that are relevant to you! Once that is done,
          we will map out a route for you to follow that lets you make those unforgettable memories, without all the worry of
          making it to your destination on time.
        </p>
        <button onClick={() => history.push('/interests')}>
          Get Started!
        </button>
      </animated.div>
    </div>
  );
}

// class LandingPage extends Component {
//   static contextType = ContextProvider

//   componentDidMount() {
//     let myVar = this;
//     navigator.geolocation.getCurrentPosition(function (position) {
//       let latitude = position.coords.latitude;
//       let longitude = position.coords.longitude;
//       myVar.context.setOriginCoords({ lat: latitude, lng: longitude })

//     })
//     if (localStorage.getItem("user_id")) {
//       this.props.history.push("/dashboard")
//     }
//   }

//   render() {
//     return (
//       <>
//         <Header />

//         <Spring
//           from={{ opacity: 0, marginTop: -500 }}
//           to={{ opacity: 1, marginTop: 0 }}>
//           {props => <div style={props} className="landing-page">
//             <p>
//               Here at Trouvaille, we believe that the best experiences are unplanned. Your most memorable moments are spontaneous.
//               However, life doesn't always allow for that. For the times that you want great experiences that you are able to tell
//               your friends and family about for years to come, but are on a schedule and need to plan things out, we are here for you!
//               Trouvaille lets you pick your starting point and your destination, and fill in a quick survey of your preferences, including
//               how often you are able to stop, how much time you can spend driving the wrong direction (because all the best stuff is off
//               the beaten path), and, of course, your interests so that we show you locations that are relevant to you! Once that is done,
//               we will map out a route for you to follow that lets you make those unforgettable memories, without all the worry of
//               making it to your destination on time.
//           </p>
//           <p className="landing-2">
//             We hope you enjoy your road trip! Please feel free to use our demo credentials to log in!
//           </p>
//           <p className="landing-2">
//             Demo: Username = demouser, Password = 11AAaa!!
//           </p>

//             <Link to="/interests">Let's Get Started!</Link>
//           </div>}
//         </Spring>
//       </>
//     )
//   }
// }

// export default LandingPage;
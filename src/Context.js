import React, { Component } from 'react';
import TokenService from './services/token-service';

//user data (userInterests, and userTrip) has to get stored in the database
//all the data in context clears whenever browser is refreshed!!

const Context = React.createContext({
  userInterests: [],
  user: {},
  showMenu: false,
  toggleMenu: () => { },
  userTrip: {
    destination: '',
    numDetours: 0,
    maxRadius: 0,
    maxTime: 0,
    origin: {}
  },
  addUserInterests: () => { },
  removeUserInterests: () => { },
  clearUserInterests: () => { },
  setTrip: () => { },
  setUser: () => { },
  processLogin: () => { },
  processLogout: () => { },
})
export default Context

//-----------------------------------//

export class ContextProvider extends Component {
  state = {
    showMenu: false,
    userInterests: [],
    user: {},
    toggleMenu: () => { },
    userTrip: {
      destination: '',
      numDetours: null,
      maxRadius: null,
      maxTime: null
    },
    addUserInterests: () => { },
    removeUserInterests: () => { },
    clearUserInterests: () => { },
    setTrip: () => { },
    waypoints: [],
    endCoords: {},
    originCoords: {},
    setOriginCoords: () => { },
    setEndCoords: () => { },
    setWaypoints: () => { },
    setUser: () => { },
    processLogin: () => { },
    radius: null,
    setRadius: () => { }
  }

  componentDidMount() {
    this.checkStorage()
  }

  checkStorage = () => {
    if (localStorage.getItem("trouvailleData")) {
      this.setState({ ...JSON.parse(localStorage.getItem("trouvailleData")) })
    }
  }

  componentDidUpdate() {
    localStorage.setItem("trouvailleData", JSON.stringify(this.state))
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  setEndCoords = (endCoords) => {
    this.setState({ endCoords })
  }
  setRadius = (radius) => {
    this.setState({ radius: radius })
  }
  setOriginCoords = (originCoords) => {
    this.setState({ originCoords })
  }
  //Add items to interests array
  addUserInterests = (checkedItem) => {
    if (this.state.userInterests.length === 0) {
      return this.setState({ userInterests: [checkedItem] })
    }
    else {
      //make sure checkedItem isn't already in the array!
      let bool = true
      bool = this.state.userInterests.every(interest => {
        if (interest === checkedItem) {
          return false
        }
        return true
      })
      if (bool) {
        return this.setState({ userInterests: [...this.state.userInterests, checkedItem] })
      }
    }
  }

  //remove items when they're unchecked
  removeUserInterests = (unchekedItem) => {
    for (let i = 0; i < this.state.userInterests.length; i++) {
      if (unchekedItem === this.state.userInterests[i]) {
        this.state.userInterests.splice(i, 1)
        this.setState({ userInterests: this.state.userInterests })
      }
    }
  }

  clearUserInterests = () => {
    this.setState({ userInterests: [] })
  }

  //Store all all the values passed into the PlanTrip form!
  setTrip = (destination, detours, radius, time) => {
    this.setState({
      userTrip: {
        destination: destination,
        numDetours: detours,
        maxRadius: radius,
        maxTime: time
      }
    })
  }

  setWaypoints = (waypoints) => {
    this.setState({
      waypoints: waypoints
    })
  }

  // set user object in state
  setUser = user => {
    this.setState({ user })
  }

  //save the auth token to the window local storage
  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.user_id,
      username: jwtPayload.sub,
    })
  }

  processLogout = () => {
    TokenService.clearAuthToken()
    localStorage.removeItem('user_id')
    this.setUser({})
  }

  render() {
    const value = {
      user: this.state.user,
      showMenu: this.state.showMenu,
      userInterests: this.state.userInterests,
      userTrip: this.state.userTrip,
      toggleMenu: this.toggleMenu,
      addUserInterests: this.addUserInterests,
      removeUserInterests: this.removeUserInterests,
      clearUserInterests: this.clearUserInterests,
      setTrip: this.setTrip,
      waypoints: this.state.waypoints,
      setWaypoints: this.setWaypoints,
      setEndCoords: this.setEndCoords,
      endCoords: this.state.endCoords,
      setOriginCoords: this.setOriginCoords,
      originCoords: this.state.originCoords,
      processLogin: this.processLogin,
      setUser: this.setUser,
      processLogout: this.processLogout,
      setRadius: this.setRadius,
      radius: this.state.radius
    }
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
import { Component } from "react";
import React from 'react';
import ContextProvider from '../../Context'
// import TokenService from "../../services/token-service"
import Map from "../Map/Map";
import {
  FacebookIcon, FacebookShareButton,
  TwitterIcon, TwitterShareButton,
  EmailIcon, EmailShareButton
} from 'react-share';
import './MapContainer.css'
import Header from '../Header/Header';


class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waypoints: []
    }
  }

  static contextType = ContextProvider
  async componentDidMount() {
    if (localStorage.getItem("user_id") && this.context.userTrip.destination) {
      this.handlePostTrips()
    }
  }

  async handlePostTrips() {
    // const token = TokenService.getAuthToken();
    const context = this.context
    fetch(`${process.env.REACT_APP_URL}/trips`, {
      method: "POST",
      headers: {
        "content-type": "application/json",

      },
      body: JSON.stringify({
        origin: context.originCoords,
        destination: context.endCoords,
        waypoints: context.waypoints,
        user_id: localStorage.getItem("user_id"),
        destination_name: context.userTrip.destination
      }),
      credentials: "same-origin"
    }).then((res) => {
      return res.json()
    })
  }

  composeWaypointsString = () => {
    let waypointString = ""
    if (this.context.waypoints && this.context.waypoints.length > 0) {
      this.context.waypoints.forEach(waypoint => {
        waypointString += waypoint.name.replace(" ", "+")
        waypointString += "|"
      })
      return waypointString
    }
  }
  render() {
    return (
      <>
        <Header />

        <section className="map-container">
          <Map
            isMarkerShown
            originLat={this.context.originCoords.lat}
            originLng={this.context.originCoords.lng}
            destLat={this.context.endCoords.lat}
            destLng={this.context.endCoords.lng}
            waypoints={this.context.waypoints}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}

          />
          <div className="link-bar">
            <a
              href={`https://www.google.com/maps/dir/?api=1&origin=${this.context.originCoords.lat},${this.context.originCoords.lng}&destination=${this.context.endCoords.lat},${this.context.endCoords.lng}&travelmode=driving&waypoints=${this.composeWaypointsString()}`}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              see on google maps
        </a>
            <div className="social-media-buttons">
              <FacebookShareButton
                url={`https://www.google.com/maps/dir/?api=1&origin=${this.context.originCoords.lat},${this.context.originCoords.lng}&destination=${this.context.endCoords.lat},${this.context.endCoords.lng}&travelmode=driving&waypoints=${this.composeWaypointsString()}`}
              >
                <FacebookIcon
                  size={30}
                  round />
              </FacebookShareButton>
              <TwitterShareButton
                url={`https://www.google.com/maps/dir/?api=1&origin=${this.context.originCoords.lat},${this.context.originCoords.lng}&destination=${this.context.endCoords.lat},${this.context.endCoords.lng}&travelmode=driving&waypoints=${this.composeWaypointsString()}`}
              >
                <TwitterIcon
                  size={30}
                  round />
              </TwitterShareButton>
              <EmailShareButton
                url={`https://www.google.com/maps/dir/?api=1&origin=${this.context.originCoords.lat},${this.context.originCoords.lng}&destination=${this.context.endCoords.lat},${this.context.endCoords.lng}&travelmode=driving&waypoints=${this.composeWaypointsString()}`}
                subject={'Hey! Check out this trip!'}
                body={'placeholder'}
              >
                <EmailIcon
                  size={30}
                  round />
              </EmailShareButton>
            </div>
          </div>
          <h2>your stops</h2>
          <ul>
            {this.context.waypoints.map((waypoint) => {
              return <li>{waypoint.name}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default MapContainer;

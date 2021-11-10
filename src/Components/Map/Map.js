/*global google*/

import mapStyles from "./mapstyles"
import React from 'react';
const { compose, withProps, lifecycle } = require("recompose");

/**Look at docs for react-google-maps !**/

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, margin: "50px 0px 0 0" }} className='google-map' />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: new google.maps.LatLng(
            this.props.originLat,
            this.props.originLng
          ),
          destination: new google.maps.LatLng(
            this.props.destLat,
            this.props.destLng
          ),
          waypoints: this.props.waypoints.map((waypoint) => {
            return {
              location: new google.maps.LatLng(
                waypoint.coords.lat,
                waypoint.coords.lng
              ), stopover: false
            }
          }
          ),
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    },
  })
)((props) => (

  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(41.85073, -87.65126)}
    defaultOptions={{ styles: mapStyles }}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>


));

export default MapWithADirectionsRenderer
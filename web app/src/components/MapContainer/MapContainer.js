import React, { Component } from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import "./MapContainer.scss";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const position = {
  lat: 42.33998,
  lng: -71.08915,
};
// const onLoad = marker =>{
//   console.log('marker', marker)
// }
export class MapContainer extends Component {
  render() {
    return (
      //npm install --save @react-google-maps/api, needs googleMapsApiKey to implent the function
      <LoadScript
        googleMapsApiKey="AIzaSyCK1PdOC3hAXpHzXLrVJcuzyC8ioio6Cm0"
        googlePlacesApiKey="AIzaSyCB4RFECa07qtPVgqmnAI9dtyV2G2NoQyc"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={15}
        >
          {/* Child components, such as markers, info windows, etc. */}
          {/* <Marker onLoad={onLoad} position={position} /> */}
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default MapContainer;

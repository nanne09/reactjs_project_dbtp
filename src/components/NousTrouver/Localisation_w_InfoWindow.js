import React, { useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

import mapStyles from './mapStyles';

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
  const [ selectedMarker, setSelectedMarker ] = useState(false);
  return (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 46.737450, lng: 4.916570 }} defaultOptions={{styles: mapStyles}}>
      {props.isMarkerShown && <Marker position={{ lat: 46.737450, lng: 4.916570 }} onClick={() => setSelectedMarker(!selectedMarker)} icon={{ url:'/img/NousContacter/cone.svg', scaledSize: new window.google.maps.Size(30, 30)}}/>}
      {selectedMarker && <InfoWindow position={{ lat: 46.737450, lng: 4.916570 }} onCloseClick={() => setSelectedMarker(false)}><div><h2>DBTP</h2><p>Votre expert depuis 40 ans</p></div></InfoWindow>}
    </GoogleMap>
  )
}))

const SimpleMap = () =>
  <div style={{ width: '100vw', height: '100vh'}}>
    <MyMapComponent
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>

export default SimpleMap;
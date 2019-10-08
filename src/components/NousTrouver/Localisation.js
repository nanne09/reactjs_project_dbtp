import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import mapStyles from './mapStyles';

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
  // console.log(process.env.REACT_APP_GOOGLE_KEY)
  return (
    <GoogleMap 
      defaultZoom={12}
      defaultCenter={{ lat: 46.737450, lng: 4.916570 }}
      defaultOptions={{styles: mapStyles}}
    >
      {props.isMarkerShown && <Marker position={{ lat: 46.737450, lng: 4.916570 }}/>}
    </GoogleMap>
  )
}))

const DbtpMap = () =>
  <div style={{ width: '50vw', height: '100vh'}}>
    <MyMapComponent
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`} // &key=${process.env.REACT_APP_GOOGLE_KEY}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>

export default DbtpMap;
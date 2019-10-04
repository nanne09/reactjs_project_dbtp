import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'google-map-react';

// const Map = (props) => {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 45.421532, lng: -75.697189}}
//     />
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap((props) => Map(props)));
 
// const SimpleMap = () => {
//     return (
//       <div style={{width: '100w', height: '100vh' }}>
//         <WrappedMap 
//           googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
//           loadingElement={<div style={{height : '100%' }} />}
//           containerElement={<div style={{height : '100%' }} />}
//           mapElement={<div style={{height : '100%' }} />}
//         />
//       </div>
//     )
// }

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

const SimpleMap = () =>
  <MyMapComponent
    isMarkerShown
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
 
export default SimpleMap;
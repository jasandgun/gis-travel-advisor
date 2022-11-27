import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Rating, Typography, useMediaQuery} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import {MapContainer} from './MapStyles';
import {MapParams, defaultCoords} from './MapTypes';


function Map({setCoordinates, setBounds, coordinates}: MapParams) {
  const isMobile = useMediaQuery('(min-width: 600px)');

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyBTluYPoLi3dCMO2STktm-2NFK82uxM9_Y'}}
        defaultCenter={defaultCoords}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        // options={''}
        onChange={(event) => {
          console.log(event)
          setCoordinates({lat: event.center.lat, lng: event.center.lng});
          setBounds({ne: event.marginBounds.ne, sw: event.marginBounds.sw});
        }}
        // onChildClick={''}
      >

      </GoogleMapReact>
    </MapContainer>
  );
}

export default Map;

import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Rating, Typography, useMediaQuery} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import {MapContainer} from './MapStyles';
import {MapParams} from './MapTypes';


function Map({setCoordinates, setBounds, coordinates}: MapParams) {
  const isMobile = useMediaQuery('(min-width: 600px)');
  const defaultCoords = {lat: -6.175189725921076, lng: 106.82713134137512};

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyCLlzcoxMuK-TKFMS_9siIuFu1_Kzpokqo'}}
        defaultCenter={defaultCoords}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        // options={''}
        onChange={(event) => {
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

import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Rating, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import { MapContainer } from './MapStyles'

function Map() {
  const isMobile = useMediaQuery('(min-width: 600px)');
  const defaultCoords = { lat: -6.175189725921076, lng: 106.82713134137512 };

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: ''}}
        defaultCenter={defaultCoords}
        center={defaultCoords}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}
      >

      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;

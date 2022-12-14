import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Rating, Typography, useMediaQuery} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import {MapContainer, MarkerContainer, PointerImg, StyledPaper} from './MapStyles';
import {MapParams, defaultCoords} from '../../types/componentTypes/MapTypes';
import {restaurantPlaceholderImg} from "../PlaceDetails/PlaceDetails";
import multiBrandNetwork from "./skins/multi-brand-network";

function Map({setCoordinates, setBounds, coordinates, places, setChildClicked}: MapParams) {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{key: String(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)}}
        defaultCenter={defaultCoords}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={{disableDefaultUI: true, zoomControl: true, styles: multiBrandNetwork}}
        onChange={(event) => {
          console.log(event)
          setCoordinates({lat: event.center.lat, lng: event.center.lng});
          setBounds({ne: event.marginBounds.ne, sw: event.marginBounds.sw});
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <MarkerContainer
            // @ts-ignore
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {
              isMobile ? (
                <LocationOnOutlinedIcon color={"primary"} fontSize={"large"}/>
              ) : (
                <StyledPaper elevation={3}>
                  <Typography gutterBottom variant={"subtitle2"}>
                    {place.name}
                  </Typography>
                  <PointerImg
                    src={place.photo ? place.photo.images.large.url : restaurantPlaceholderImg}
                    alt={place.name}
                  />
                  <Rating size={"small"} value={Number(place.rating)} readOnly/>
                </StyledPaper>
              )
            }
          </MarkerContainer>
        ))}
      </GoogleMapReact>
    </MapContainer>
  );
}

export default Map;

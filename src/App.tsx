import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@mui/material';

import { getPlacesData } from './api'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { Bounds, Coords } from './components/Map/MapTypes';

const defaultCoords = { lat: 0, lng: 0 };
const defaultBounds: Bounds = { ne: defaultCoords, sw: defaultCoords };

function App() {
  // states for places and locations
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState<Coords>(defaultCoords);
  const [bounds, setBounds] = useState<Bounds>(defaultBounds);

  // get current user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(( {coords: {latitude, longitude} } ) => {
      setCoordinates({ lat: latitude, lng: longitude });
    })
  }, []);

  // call places data
  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne)
      .then((data: any) => {
        setPlaces(data);
      })
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
       <Grid item xs={12} md={4}>
        <List places={places}/>
       </Grid>
       <Grid item xs={12} md={8}>
        <Map 
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />
       </Grid>
      </Grid>
    </>
  );
}

export default App;

import React, {useEffect, useState} from 'react';
import {CssBaseline, Grid, ThemeProvider} from '@mui/material';

import {getPlacesData} from './api/PlacesDataAPI'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import {Place} from './types/apiTypes/PlaceDetailsResponse';
import {Bounds, Coords} from './types/componentTypes/MapTypes';
import {darkTheme} from "./AppStyles";


function App() {
  // states for places and locations
  const [places, setPlaces] = useState<Array<Place>>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<Array<Place>>([])
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState<number>(0);
  const [coordinates, setCoordinates] = useState<Coords>({} as Coords);
  const [bounds, setBounds] = useState<Bounds>({} as Bounds);
  //action states
  const [childClicked, setChildClicked] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  // get current user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  // call places data
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data: Array<Place>) => {
          setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([]);
          setRating(0);
          setIsLoading(false);
        })
    }
  }, [type, bounds]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Header setCoordinates={setCoordinates}/>
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

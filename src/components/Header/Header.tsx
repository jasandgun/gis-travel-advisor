import React, {useState} from 'react';
import {Autocomplete} from '@react-google-maps/api';
import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CardTravelIcon from '@mui/icons-material/CardTravel';

import {Search, SearchIconWrapper, StyledInputBase} from './HeaderStyles'
import {HeaderParams} from "./HeaderTypes";

function Header({setCoordinates}: HeaderParams) {
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete>({} as google.maps.places.Autocomplete);

  const onLoad = (autoComplete: google.maps.places.Autocomplete) => setAutocomplete(autoComplete);
  const onPlaceChanged = () => {
    // @ts-ignore
    const lat = autocomplete.getPlace().geometry.location.lat();
    // @ts-ignore
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({lat, lng});
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{mr: 2}}>
            <CardTravelIcon/>
          </IconButton>
          <Typography variant="h5" color="inherit" sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
            Travel Advisor
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <Search>
              <SearchIconWrapper>
                <TravelExploreIcon/>
              </SearchIconWrapper>
              <StyledInputBase placeholder="Explore new places..." inputProps={{'aria-label': 'search'}}/>
            </Search>
          </Autocomplete>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

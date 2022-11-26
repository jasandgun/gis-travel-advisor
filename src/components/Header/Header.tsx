import React from 'react';
import {Autocomplete} from '@react-google-maps/api';
import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CardTravelIcon from '@mui/icons-material/CardTravel';

import {Search, SearchIconWrapper, StyledInputBase} from './HeaderStyles'

function Header() {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{mr: 2}}
          >
            <CardTravelIcon/>
          </IconButton>
          <Typography
            variant="h5"
            color="inherit"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
          >
            Travel Advisor
          </Typography>
          {/* <Autocomplete> */}
          <Search>
            <SearchIconWrapper>
              <TravelExploreIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Explore new places..."
              inputProps={{'aria-label': 'search'}}
            />
          </Search>
          {/* </Autocomplete> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

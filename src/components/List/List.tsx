import React, {useState, useEffect, createRef, RefObject} from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@mui/material';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import {Container, StyledFormControl, StyledGrid, ProgressWrapper} from './ListStyles';
import {Place, ListParams} from './ListTypes'

function List({places, childClicked, isLoading}: ListParams) {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [elRefs, setElRefs] = useState<Array<RefObject<HTMLDivElement>>>([]);

  useEffect(() => {
    // if (places) {
    setElRefs((refs) => Array(places?.length).fill(0).map((_, i) => refs[i] || createRef()));
    // }
  }, [places]);

  return (
    <Container>
      <Typography variant="h4">
        Where will you go?
      </Typography>
      {
        isLoading ? (
          <ProgressWrapper>
            <CircularProgress size={"5rem"}/>
          </ProgressWrapper>
        ) : (
          <>
            <StyledFormControl>
              <InputLabel>Type</InputLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </StyledFormControl>
            <StyledFormControl>
              <InputLabel>Rating</InputLabel>
              <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3.0</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4}>Above 4.5</MenuItem>
              </Select>
            </StyledFormControl>
            <StyledGrid container spacing={3}>
              {places?.map((place: Place, i: number) => (
                <Grid item xs={12} key={i}>
                  <PlaceDetails
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                    place={place}
                  />
                </Grid>
              ))}
            </StyledGrid>
          </>
        )
      }
    </Container>
  );
}

export default List;

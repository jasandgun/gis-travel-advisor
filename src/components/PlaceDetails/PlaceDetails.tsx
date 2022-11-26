import React from 'react';
import { Place } from '../List/ListTypes'

function PlaceDetails({ place }: { place: Place }) {
  return (
    <h1>{place.name}</h1>
  );
};

export default PlaceDetails;

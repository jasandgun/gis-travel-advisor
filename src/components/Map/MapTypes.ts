import React from 'react';
/**
 * user defined types for map component
 */
type Coords = {
  lat: number,
  lng: number,
};
type Bounds = {
  ne: Coords,
  sw: Coords,
}
type MapParams = {
  setCoordinates: React.Dispatch<React.SetStateAction<Coords>>,
  setBounds: React.Dispatch<React.SetStateAction<Bounds>>,
  coordinates: Coords,
}

export type { Bounds, Coords, MapParams };

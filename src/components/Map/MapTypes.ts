/**
 * user defined types for map component
 */
import React from 'react';
import {Place} from "../../api/PlaceDetailsResponse";

type Coords = {
  lat: number;
  lng: number;
};
type Bounds = {
  ne: Coords;
  sw: Coords;
};
type MapParams = {
  setCoordinates: React.Dispatch<React.SetStateAction<Coords>>;
  setBounds: React.Dispatch<React.SetStateAction<Bounds>>;
  coordinates: Coords;
  places: Array<Place>;
};

// default coordinates and bounds for Jakarta's Monas
const defaultCoords: Coords = {lat: -6.1751363929173495, lng: 106.82714207002972};
const defaultBounds: Bounds = {
  ne: {lat: -6.162272335837457, lng: 106.84342844316814},
  sw: {lat: -6.188000137509675, lng: 106.81085569689128},
};

export type {Bounds, Coords, MapParams};
export {defaultCoords, defaultBounds};

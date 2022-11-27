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
  setChildClicked: React.Dispatch<React.SetStateAction<any>>;
};

// default coordinates and bounds for Jakarta's Monas
const defaultCoords: Coords = {lat: -6.1751363929173495, lng: 106.82714207002972};

export type {Bounds, Coords, MapParams};
export {defaultCoords};

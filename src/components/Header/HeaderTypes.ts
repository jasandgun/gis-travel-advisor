/**
 * user defined types for header component
 */
import {Coords} from "../Map/MapTypes"
import React from "react";

type HeaderParams = {
  setCoordinates: React.Dispatch<React.SetStateAction<Coords>>;
};

export type {HeaderParams};

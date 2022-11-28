/**
 * user defined types for header component
 */
import {Coords} from "./MapTypes"
import React from "react";

type HeaderParams = {
  setCoordinates: React.Dispatch<React.SetStateAction<Coords>>;
};

export type {HeaderParams};

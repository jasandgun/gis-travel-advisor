/**
 * user defined types for placeDetails component
 */
import {Award, Place} from "../../api/PlaceDetailsResponse";
import {RefObject} from "react";

type PlaceDetailsParams = {
  place: Place;
  selected: boolean;
  refProp: RefObject<HTMLDivElement>;
};

export type {Award, Place, PlaceDetailsParams};

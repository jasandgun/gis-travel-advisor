/**
 * user defined types for placeDetails component
 */
import {Award, Place} from "../../api/PlaceDetailsResponse";

type PlaceDetailsParams = {
  place: Place;
  selected: boolean;
  refProp: any;
};

export type {Award, Place, PlaceDetailsParams};

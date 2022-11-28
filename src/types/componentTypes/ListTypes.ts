/**
 * user defined types for list component
 */
import {Place} from "../apiTypes/PlaceDetailsResponse";
import React from "react";

type ListParams = {
  places: Array<Place>;
  childClicked: number;
  isLoading: boolean;
  type: Place["type"];
  setType: React.Dispatch<React.SetStateAction<Place["type"]>>;
  rating: Place["rating"];
  setRating: React.Dispatch<React.SetStateAction<Place["rating"]>>;
};

export type {Place, ListParams};

/**
 * user defined types for list component
 */
import {Place} from "../../api/PlaceDetailsResponse";

type ListParams = {
  places: Array<Place>;
  childClicked: number;
  isLoading: boolean;
};

export type {Place, ListParams};

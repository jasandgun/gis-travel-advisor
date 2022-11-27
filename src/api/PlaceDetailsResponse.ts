/**
 * response types from travel-advisor API
 */
type Award = {
  display_name: string;
  images?: any;
};
type Cuisine = {
  name: string;
};
type Place = {
  address?: string;
  awards?: Array<Award>;
  cuisine?: Array<Cuisine>;
  latitude: string;
  longitude: string;
  name: string;
  num_reviews: number;
  photo?: any;
  phone?: string;
  price_level?: string;
  ranking: string;
  rating: number;
  type: string;
  web_url: string;
  website?: string;
};

export type {Place, Award};
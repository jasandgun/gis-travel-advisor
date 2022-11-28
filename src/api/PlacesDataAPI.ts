import axios from 'axios';
import {Coords} from '../types/componentTypes/MapTypes';
import {Place} from '../types/apiTypes/PlaceDetailsResponse'


const getPlacesData = async (type: Place["type"], sw: Coords, ne: Coords) => {
  try {
    const options = {
      method: 'GET',
      url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        restaurant_tagcategory_standalone: '10591',
        restaurant_tagcategory: '10591',
        limit: '20',
        currency: 'IDR',
        open_now: 'false',
        lunit: 'km',
        lang: 'en_US'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
    const {data: {data}} = await axios.request(options)
    return data;
  } catch (error) {
    console.error(error);
  }
}

export {getPlacesData};

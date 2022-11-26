import axios from 'axios';
import { Coords } from '../components/Map/MapTypes';

const requestUrl:string = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


const getPlacesData = async (sw: Coords, ne: Coords) => {
  try {
    const options = {
      method: 'GET',
      url: requestUrl,
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': 'KEY',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
    const { data: { data } } = await axios.request(options)
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getPlacesData };

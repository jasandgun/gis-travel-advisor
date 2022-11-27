// noinspection SpellCheckingInspection

import axios from 'axios';
import {Coords} from '../components/Map/MapTypes';

const requestUrl: string = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


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
        restaurant_tagcategory_standalone: '10591',
        restaurant_tagcategory: '10591',
        limit: '30',
        currency: 'IDR',
        open_now: 'false',
        lunit: 'km',
        lang: 'en_US'
      },
      headers: {
        'X-RapidAPI-Key': '3930a24209mshd84b03451187b79p106447jsn850d27219516',
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

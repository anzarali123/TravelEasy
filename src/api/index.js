/* eslint-disable consistent-return */
import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (_sw, _ne) => {
  if (!_sw && !_ne) return;
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: _sw.lat,
        tr_latitude: _ne.lat,
        bl_longitude: _sw.lng,
        tr_longitude: _ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "948992def6msh3c2bbbd1bbd81a4p1ab0fcjsnaba42032c905",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getWeatherData = async (lat, lng) => {
//   try {
//     if (lat && lng) {
//       const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
//         params: { lat, lon: lng },
//         headers: {
//           'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
//           'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//         },
//       });

//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

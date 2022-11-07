/* eslint-disable consistent-return */
import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (_sw, _ne) => {
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
        "X-RapidAPI-Key": process.env.REACT_APP_TRAVEL_API_KEY,
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

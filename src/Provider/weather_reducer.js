import React from "react";
import { CLEAR, FETCH_DATA, WEATHER_ERROR, WEATHER_LOADING } from "../actions";

const weather_reducer = (state, action) => {
  switch (action.type) {
    case WEATHER_LOADING: {
      return { ...state, weather_loading: true };
    }

    case FETCH_DATA: {
      const updatedData = [...state.weatherData];
      const data = { id: new Date().getTime(), data: { ...action.payload } };
      updatedData.push(data);
      return {
        ...state,
        weather_loading: false,
        weatherData: updatedData,
        weather_error: false,
        errorMsg: null,
      };
    }

    case WEATHER_ERROR: {
      return {
        ...state,
        weather_loading: false,
        weather_error: true,
        errorMsg: action.payload,
        weatherData: [],
      };
    }

    case CLEAR: {
      return { ...state, weatherData: [], errorMsg: null };
    }

    default: {
      return state;
    }
  }
};

export default weather_reducer;

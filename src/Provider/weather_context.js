import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { FETCH_DATA, WEATHER_ERROR, WEATHER_LOADING } from "../actions";
import weather_reducer from "./weather_reducer";

// initialState
const initialState = {
  weatherData: [],
  weather_loading: false,
  weather_error: false,
  errorMsg: null,
};

// Create Context
const WeatherContext = createContext();

// Provider
const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weather_reducer, initialState);
  const [showResult, setShowResult] = useState(false);

  const fetchWeather = async (cityName) => {
    const apiKey = "13feae2d165a31f6a33f25f0e197b406";
    dispatch({ type: WEATHER_LOADING });
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      );
      return dispatch({ type: FETCH_DATA, payload: data });
    } catch (err) {
      console.log(err.message);
      setShowResult(false);
      dispatch({ type: WEATHER_ERROR, payload: "This city not found !" });
    }
  };

  return (
    <WeatherContext.Provider
      value={{ ...state, dispatch, showResult, setShowResult, fetchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;

// Custom Hook
export const useWeather = () => useContext(WeatherContext);

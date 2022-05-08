import React, { createContext, useContext, useReducer } from "react";
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

  return (
    <WeatherContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;

// Custom Hook
export const useWeather = () => useContext(WeatherContext);

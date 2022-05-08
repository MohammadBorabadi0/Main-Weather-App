import React, { useEffect, useRef, useState } from "react";

// Actions
import { CLEAR } from "../actions";

// Context
import { useWeather } from "../Provider/weather_context";

// Components
import WeatherForm from "./WeatherForm";

// Icons
import { GoLocation } from "react-icons/go";

const LeftAside = () => {
  const {
    dispatch,
    showResult,
    setShowResult,
    weather_error,
    errorMsg,
    weather_loading,
    fetchWeather,
    weatherData,
  } = useWeather();
  const [city, setCity] = useState("");
  const weather = weatherData[weatherData.length - 1];
  const inputRef = useRef();

  //   Images
  let id;
  let icon;
  if (weather) {
    id = weather["data"].weather[0].id;
  }

  if (id === 800) {
    icon = "assets/images/clear.svg";
  } else if (id >= 200 && id <= 232) {
    icon = "assets/images/storm.svg";
  } else if (id >= 600 && id <= 622) {
    icon = "assets/images/snow.svg";
  } else if (id >= 701 && id <= 781) {
    icon = "assets/images/haze.svg";
  } else if (id >= 801 && id <= 804) {
    icon = "assets/images/cloud.svg";
  } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
    icon = "assets/images/rain.svg";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      alert("City Name Must Not Empty !");
      return;
    }

    fetchWeather(city);
    setShowResult(true);
    setCity("");
  };

  useEffect(() => {
    if (!showResult) inputRef.current.focus();
  }, [inputRef]);

  if (!showResult) {
    return (
      <WeatherForm
        inputRef={inputRef}
        weather_error={weather_error}
        weather_loading={weather_loading}
        errorMsg={errorMsg}
        city={city}
        setCity={setCity}
        setShowResult={setShowResult}
        handleSubmit={handleSubmit}
      />
    );
  } else {
    return (
      <>
        <div className="text-white w-full">
          <button
            className="bg-gray-500 ml-8 px-2 py-1 rounded-sm font-semibold"
            onClick={() => {
              setShowResult(false);
              dispatch({ type: CLEAR });
            }}
          >
            Search For Places
          </button>
        </div>
        {weather && (
          <div className="flex flex-col items-center gap-8 text-white mt-8 md:mt-4">
            <div className="w-40">
              <img src={icon} alt={weather["data"].name} />
            </div>
            <p className="text-6xl font-semibold flex items-end gap-1">
              {Math.floor(weather["data"].main["temp"])}
              <span className="text-2xl font-thin">&deg;C</span>
            </p>
            <div>
              <h4 className="text-3xl">
                {weather["data"].weather[0].description}
              </h4>
            </div>
            <div className="text-xl">
              <span>Today</span>
            </div>
            <div className="flex items-center gap-1 text-xl text-gray-400 font-semibold">
              <div className="flex items-center">
                <GoLocation />
              </div>
              <span>{weather["data"].name},</span>
              <p>{weather["data"].sys["country"]}</p>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default LeftAside;

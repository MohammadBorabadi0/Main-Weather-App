import React from "react";

// Icons
import { MdNavigation } from "react-icons/md";
import { useWeather } from "../Provider/weather_context";

const RightAside = () => {
  const { weatherData } = useWeather();
  const weather = weatherData[weatherData.length - 1];

  if (!weatherData.length) {
    return (
      <div className="text-white font-semibold text-xl md:text-3xl">
        <h3>No Data For Show</h3>
      </div>
    );
  }

  return (
    <>
      <header className="text-2xl text-white mb-3 font-semibold bg-slate-900">
        <h2>Today's Highlights</h2>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
        <div className="bg-slate-700 text-white flex flex-col items-center justify-center h-64 rounded-md gap-8">
          <h4 className="font-semibold">Wind Status</h4>
          <p className="text-5xl font-semibold">
            {Math.floor(weather["data"].wind["speed"])}
            <span className="text-xl">mph</span>
          </p>
          <div className="flex items-center justify-center text-white">
            <MdNavigation size="20px" />
            <span className="text-sm">N</span>
          </div>
        </div>
        <div className="bg-slate-700 text-white flex flex-col justify-center items-center h-64 rounded-md gap-8">
          <h4 className="font-semibold">Humidity</h4>
          <p className="text-5xl font-semibold">
            {weather["data"].main["humidity"]}
            <span className="text-xl">%</span>
          </p>
          <div className="w-[80%] h-3 rounded-full bg-white">
            <div
              className="bg-yellow-400 items-start h-full rounded-full"
              style={{ width: `${weather["data"].main["humidity"]}%` }}
            ></div>
          </div>
        </div>
        <div className="bg-slate-700 text-white flex flex-col justify-center items-center h-64 rounded-md gap-8">
          <h4 className="font-semibold">Visibility</h4>
          <p className="text-5xl font-semibold">
            {Number(weather["data"].visibility / 1000).toFixed(1)}
            <span className="text-xl">Km</span>
          </p>
        </div>
        <div className="bg-slate-700 text-white flex flex-col justify-center items-center h-64 rounded-md gap-8">
          <h4 className="font-semibold">Air Pressure</h4>
          <p className="text-5xl font-semibold">
            {Number(weather["data"].main["pressure"] / 5280).toFixed(1)}
          </p>
          <span className="text-xl">miles</span>
        </div>
      </div>
    </>
  );
};

export default RightAside;

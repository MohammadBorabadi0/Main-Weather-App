import React from "react";

// Icons
import { MdOutlineClose } from "react-icons/md";

const WeatherForm = ({
  inputRef,
  city,
  setCity,
  setShowResult,
  weather_loading,
  weather_error,
  errorMsg,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-[90%] xl:w-[80%]"
    >
      <span
        className="absolute top-1.5 right-1.5 text-white text-xl"
        onClick={() => {
          setShowResult(true);
        }}
      >
        <MdOutlineClose />
      </span>
      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City Name"
          ref={inputRef}
          className="flex-1 focus:outline-none font-semibold text-sm md:text-base rounded-sm px-1 lg:px-4 py-1.5"
        />
        <button
          type="submit"
          className="bg-blue-200 text-sm sm:text-base font-semibold rounded-sm px-1 lg:px-4 py-1.5 ml-1"
        >
          Search
        </button>
      </div>
      {weather_error && (
        <div className="bg-red-300 text-red-900 border border-red-900 w-fit px-4 py-1 mt-4 rounded-sm">
          <span className="font-semibold">{errorMsg}</span>
        </div>
      )}
      {weather_loading && (
        <div className="bg-green-300 text-green-900 border border-green-900 w-fit px-4 py-1 mt-4 rounded-sm">
          <h3 className="font-semibold">Loading...</h3>
        </div>
      )}
    </form>
  );
};

export default WeatherForm;

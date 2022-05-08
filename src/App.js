import React from "react";

// Components
import WeatherApp from "./components/WeatherApp";

// Context
import WeatherProvider from "./Provider/weather_context";

const App = () => {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  );
};

export default App;

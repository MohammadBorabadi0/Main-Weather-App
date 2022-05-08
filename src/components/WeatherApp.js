import React from "react";

// Components
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";

const WeatherApp = () => {
  return (
    <main className="grid grid-cols-12 min-h-screen p-4 gap-2 bg-slate-900 max-w-7xl mx-auto md:mt-4">
      <section className="relative flex flex-col items-center rounded-md p-4 py-10 md:px-1 col-span-12 md:col-span-6 lg:col-span-4 bg-slate-800 shadow-md">
        <LeftAside />
      </section>
      <section className="flex flex-col items-center rounded-md p-4 md:px-1 col-span-12 md:col-span-6 lg:col-span-8 shadow-md">
        <RightAside />
      </section>
    </main>
  );
};

export default WeatherApp;

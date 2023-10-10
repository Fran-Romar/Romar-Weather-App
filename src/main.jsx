import React from "react";
import ReactDOM from "react-dom/client";
import "../css/weather.css";
import WeatherApp from "./WeatherApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);

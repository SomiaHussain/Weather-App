import React from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import "../styles/App.css";

function App({ forecasts, location }) {
  return (
    <div className="weather-App">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

export default App;

import React from "react";

export default function DataClima({ dataClima, errorMensaje }) {
  const difKelvin = 273.15;

  return (
    <>
      {dataClima && (
        <div>
          <h2>{dataClima.name}</h2>
          <p className="weather-temp">
            Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}ºC
          </p>
          <p className="weather-desc">
            {(dataClima?.weather[0]?.description).toUpperCase()}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${dataClima?.weather[0]?.icon}@2x.png`}
          />
        </div>
      )}
      {errorMensaje && (
        <p className="weather-error">
          <i className="fa fa-exclamation-triangle"></i> {errorMensaje}
        </p>
      )}
    </>
  );
}

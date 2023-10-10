import { useState } from "react";
import appStyle from "./helpers/appStyle";
import SearchForm from "./components/SearchForm";
import DataClima from "./components/DataClima";

export default function WeatherApp() {
  const [ciudad, setCiudad] = useState("");
  const [dataClima, setDataClima] = useState(null);
  const [errorMensaje, setErrorMensaje] = useState(null);

  const [img, setImg] = useState("weather");
  const imgUrl = `url("../../images/${img}.jpg")`;

  return (
    <div style={appStyle(imgUrl)}>
      <div className="container-app">
        <div className="container">
          <h1>
            <a href="/">WEATHER APP</a>
          </h1>
          <p className="weather-search">Search a city to see the weather</p>
          <SearchForm
            setImg={setImg}
            setDataClima={setDataClima}
            setErrorMensaje={setErrorMensaje}
            ciudad={ciudad}
            setCiudad={setCiudad}
          ></SearchForm>
          <DataClima
            dataClima={dataClima}
            errorMensaje={errorMensaje}
          ></DataClima>
        </div>
      </div>
    </div>
  );
}

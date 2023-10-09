import { useState } from "react";

export default function WeatherApp() {
  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "55118ddd755b760e6675758a815cbb0d";
  const difKelvin = 273.15;

  const [ciudad, setCiudad] = useState("");
  const [dataClima, setDataClima] = useState(null);
  const [errorMensaje, setErrorMensaje] = useState(null);

  /*Styles*/
  const [img, setImg] = useState("weather");
  const imgUrl = `url("../../images/${img}.jpg")`;

  const appStyle = {
    width: "100vw",
    height: "100vh",
    fontFamily: "Oswald, sans-serif",
    textAlign: "center",
    backgroundImage: imgUrl,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#000000",
  };

  const onInputChange = (event) => {
    setCiudad(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchClima();
  };

  const fetchClima = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);

      if (response.status === 404) {
        throw new Error("Not city found");
      }
      const data = await response.json();
      setImg(data.weather[0].main.toLowerCase());
      setDataClima(data);
      setErrorMensaje(null);
    } catch (error) {
      console.log(error);
      setDataClima(null);
      setErrorMensaje("Not found city");
    }
  };

  return (
    <div style={appStyle}>
      <div className="container-app">
        <div className="container">
          <h1>
            <a href="/">WEATHER APP</a>
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="ciudad"
              placeholder="Search a city"
              required
              onChange={onInputChange}
            />
            <button type="submit">Buscar</button>
          </form>
          {dataClima && (
            <div className="weather-container">
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
          {errorMensaje && <p>{errorMensaje}</p>}
        </div>
      </div>
    </div>
  );
}

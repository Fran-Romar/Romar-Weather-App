import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import appStyle from "./helpers/appStyle";
import SearchForm from "./components/SearchForm";
import DataClima from "./components/DataClima";

export default function WeatherApp() {
  const [ciudad, setCiudad] = useState("");
  const [dataClima, setDataClima] = useState(null);
  const [errorMensaje, setErrorMensaje] = useState(null);

  const [flag, setFlag] = useState(null);

  const [img, setImg] = useState("weather");
  const imgUrl = `url("${img}.jpg")`;

  return (
    <div style={appStyle(imgUrl)}>
      <div className="container-landscape">
        <i className="fa fa-cloud"></i>
        <h3>Flip the phone over and enjoy the vertical view</h3>
        <p>Quick, go look for the weather in your city now</p>
      </div>
      <div className="container">
        <Row>
          <Col md="8" className="container-app">
            <div className="container-w">
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
                setFlag={setFlag}
              ></SearchForm>
              <DataClima
                dataClima={dataClima}
                errorMensaje={errorMensaje}
                flag={flag}
              ></DataClima>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

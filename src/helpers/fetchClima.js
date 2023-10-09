const urlBase = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "55118ddd755b760e6675758a815cbb0d";

export const fetchClima = async (setImg, setDataClima, setErrorMensaje, ciudad) => {
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
//This is the frontend which is why we're using useState

import { useEffect, useState } from "react";

const Weather = () => {
  //updating value of zip
  const [zip, setZip] = useState(null);
  //to read each value, has to be defined in your useState
  const [result, setResult] = useState({
    main: { feels_like: 0 },
    wind: { speed: 0 },
    cood: { lat: 0 },
    coord: { lon: 0 },
    main: { humidity: 0 },
  });

  // //FETCH Request
  // const loadData = () => {
  //   fetch("http://localhost:4002/weather")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setDefaultWeather(data);
  //     });
  // };
  //useEffect allows you to perform side effects: fetch data, updating the DOM & timers. //Working with Fetch request useEffect(() => { loadData(); }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4002/api/weather")
      .then((response) => response.json())
      .then((data) => setResult(data));

    //clears your searchbar
    setZip("");
  };

  return (
    <>
      <input onChange={(e) => setZip(e.target.value)} value={zip} />
      <input type="submit" onClick={handleSubmit}></input>

      <div className="weather">
        <h1>{result.cityName}</h1>
        <img
          alt=""
          src={
            "https://openweathermap.org/img/wn/" +
            result?.weather?.icon +
            "@2x.png"
          }
        />
        <h3>{/* Temperature: {weather.main.temp} <span>&#176;</span> F */}</h3>
        <p>Date: {result.main.feels_like}</p>
        <p>WindSpeed: {result.wind.speed}</p>
        <p>Lat: {result.coord.lat}</p>
        <p>Lon: {result.coord.lon}</p>
        <p>Humidity: {result.main.humidity}</p>
      </div>
    </>
  );
};
export default Weather;

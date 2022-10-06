//This is the frontend which is why we're using useState

import { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  //.then is part of the promise
  const getWeatherData = async (city) => {
    ///localhost:4000/users contains
    // "id:1, name: "crush", email: "crush@gmail.com"
    const response = await fetch(`http://localhost:4002/api/weather/${city}`);
    const user = await response.json();
    setWeatherData(user);
  };

  // //component needs to do something after it renders
  // useEffect(() => {
  //   getWeatherData();
  // }, []);

  //if is part of a catch.
  if (!weatherData) {
    return (
      <div>
        <input
          //this allows for the text to show as we're typing it
          value={city}
          onChange={(event) => setCity(event.target.value)}
        ></input>
        <button onClick={() => getWeatherData(city)}>Search</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Today's forecast</h1>
        <p>Latitude: {weatherData.coord.lat}</p>
        <p>Longitude: {weatherData.coord.lon}</p>
        <p>Temperature: {weatherData.main.temp}</p>
      </div>
    );
  }
};

export default Weather;

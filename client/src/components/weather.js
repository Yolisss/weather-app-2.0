//This is the frontend which is why we're using useState

import { useEffect, useState } from "react";

const Weather = () => {
  //updating value of zip
  const [zip, setZip] = useState(null);
  //to read each value, has to be defined in your useState
  //data is in obj form, so in order to retrieve data, we must
  //create an obj with that values inside, in order to read it/update it
  const [result, setResult] = useState({
    //main, wind etc (property); feels_like, speed etc (property value)
    main: { feels_like: 0 },
    wind: { speed: 0 },
    cood: { lat: 0 },
    coord: { lon: 0 },
    main: { humidity: 0 },
  });

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
      {/* //created in input where client can type in zip code of their choice
      //within input, we included onChange method. Any time we have an event
      //passing in as our argument, setZip will update the value (zip) */}
      <input onChange={(e) => setZip(e.target.value)} value={zip} />
      {/* {*we created another input as our submit button. Included an onClick method which will
      call the handleSubmit function.
      By calling the handleSubmit function, our event that's being passed as our argument
      is going to fetch data from the backend. Response will come back as json form and 
      data will be the new value for setResults *} */}
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
        {/* //result wich is the value we're currently working on to update values 
        contains data in an object
        //we will take the current data (result), go into the properties of the object 
        (main, wind etc) and go for the specific data we're looking for(feels_like, wind etc) */}
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

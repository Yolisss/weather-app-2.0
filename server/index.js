import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(cors());

//allows us to see what's in 8088
//configuring express for how to handle requests
app.get("/", (req, res) => {
  res.send("hello again-we are the weather buddies");
});

app.get("/api/weather", (req, res) => {
  const apikey = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apikey}`;

  fetch(url) //making a request to openWeather app from backend, providing info to frontend to client
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));

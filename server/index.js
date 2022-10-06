import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();
const PORT = 4002;

app.use(cors());

console.log(`Your api key is ${process.env.REACT_APP_API_KEY}`);

// app.get("/", (req, res) => {
//   res.json("Weather App Information");
// });

let URL = `https://api.openweathermap.org/data/2.5/weather?zip=92111,us&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`;
console.log(process.env.REACT_APP_API_KEY, "API KIMBERLY");

app.get("/api/weather", (req, res) => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});
app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));

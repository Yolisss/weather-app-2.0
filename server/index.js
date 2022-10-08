import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Router } from "express";
import fetch from "node-fetch";

dotenv.config();
const app = express();
const PORT = 4002;

app.use(cors());

//storing api data in variable URL
let URL = `https://api.openweathermap.org/data/2.5/weather?zip=95076,us&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`;
console.log(process.env.REACT_APP_API_KEY, "API KIMBERLY");

//beginning of get request
app.get(`/api/weather/`, (req, res) => {
  //fetching data from api by passing in URL which holds the api data
  fetch(URL)
    //response from api will return in json form (more readable code)
    .then((response) => response.json())
    //data will then be sent back to server
    .then((data) => {
      res.send(data);
    });
});
app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));

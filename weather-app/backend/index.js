const express = require("express");
const app = express();
const port = 3000;
const qs = require("qs");
const axios = require("axios");

const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "PASTE KEY HERE";

app.get("/", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  let query = request.query;
  query.appid = apiKey;
  let queryString = qs.stringify(query);

  axios(`${apiUrl}?${queryString}`).then((res) => {
    response.send(res.data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

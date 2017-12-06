const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
// const cheerio = require('cheerio');

const apiKey = '034ae87b25404d941d73f2216f2e0887';

//Access all of the static files within the ‘public’ folder.
app.use(express.static('public'));
//By using body-parser we can make use of the req.body object.
app.use(bodyParser.urlencoded({ extended: true }));
//set ejs as rendering engine.
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index.ejs', {weather: null, error: null});
})

// app.post('/', function (req, res) {
//   let city = req.body.searchWeather;
//   console.log(city);
//   //If you use Celsius you’d add: units=metric and if you use Fahrenheit you’d use units=imperial.
//   let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}` 

//   request(url, function (err, response, body) {
//     if(err){
//       res.render('index', {weather: null, error: 'Error, please try again'});
//     } else {
//       let weather = JSON.parse(body);
//       if(weather.main == undefined){
//         res.render('index', {weather: null, error: 'Invalid city name, please try again'});
//       } else {
//         weather.weatherText = `It's ${weather.main.temp} degrees and ${weather.weather[0].main} in ${weather.name}!`;
//         weather.weatherIcon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
//         console.log(weather.weatherIcon);

//         res.render('index', {weather: weather, error: null});
//       }
//     }
//   });
// });


app.post('/', function (req, res) {
  let zip = req.body.searchWeather;
  console.log('zip');
  let zipurl = `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&appid=${apiKey}`;
  console.log('zipurl');
  request(zipurl, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
      res.json({ message: 'post created!' });
    } else {
      let weather = JSON.parse(body);
      if(weather.list[0].main == undefined){
        res.render('index', {weather: null, error: 'Invalid zipcode, please try again'});
        res.json({ message: 'post created!' });
      } else {
        console.log(weather.list[0].main.temp); 
        weather.weatherText = `It's ${weather.list[0].main.temp} degrees.`;
        res.render('index', {weather: weather, error: null});
      }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
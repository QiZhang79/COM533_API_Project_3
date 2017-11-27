const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const apiKey = '034ae87b25404d941d73f2216f2e0887';

app.use(express.static('public'));//This allows us to access all of the static files within the ‘public’ folder.
app.use(bodyParser.urlencoded({ extended: true }));//By using body-parser we can make use of the req.body object.


app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}` //If you use Celsius you’d add: units=metric and if you use Fahrenheit you’d use units=imperial.

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body);
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Invalid city name, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees and ${weather.weather[0].main} in ${weather.name}!`;
        // let weatherIcon = `${weather.weather[0].icon}`;
        // console.log(weatherIcon);
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
});


app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}` //If you use Celsius you’d add: units=metric and if you use Fahrenheit you’d use units=imperial.

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body);
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Invalid city name, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees and ${weather.weather[0].main} in ${weather.name}!`;
        let weatherIcon = `${weather.weather[0].icon}`;
        console.log(weatherIcon);
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
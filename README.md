# COM533 Project3: A Weather App Using Node.js
## Purpose
I’ll develop an weather application in Node.js which gets data from OpenWeatherMap API(https://openweathermap.org/current). In this project, I’ll have a better practice of getting data in Node.js, have deeper thoughts of Node.js Module and handle with different error events.
## Background
Previously, we learned asynchronous JavaScript and pulled data from the Client-side API-driven application practice. And now, we need to practice further, getting data from a third-party API by using Node.js and display the result in browser.
## Description
My weather application provides two basic features, inputing(optional) and outputting results.

(1)My app could call current data for one location
- by city name:
  > `api.openweathermap.org/data/2.5/weather?q={city name}`
- by city ID,
  > `api.openweathermap.org/data/2.5/weather?id={xxxxxxx}`
  
  and I’ll adopt city.list.json(http://bulk.openweathermap.org/sample/) in my code;
- by geographic coordinates,
  > `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}`
  
  and I’ll also use Geolocation API to get users’ latitude and longitude.

(2) My application will display current temperature and rain information in the results.

(3) I’ll use Express module in the application. Since my application don’t upload and change remote data, I only use HTTP Get method.

## Schedule
| Assignment    | Work Schedule | Due Date  |
| :----------- |:--------------| :-----------|
| Determine API and the features<br> of the project | Choose API and design basic feature/ logics for the project. |30 October 2017 |
| Basic HTML and mock-up data<br> work      | Using mock-up data to test my basic code.      |   8 November 2017|
| API request and API source authentication | 1. Get API authentication; <br>2. Connect to the API url to get real data response; <br>3. Deal with data      |   15 November 2017 |
| Presentation of the finally workable project | 1. Improve HTML design, especially the result’s design ; <br>2. Test and prepare for the presentation      |   27 November 2017 |
| Fully finished project | 1. Remove errors; <br>2. Polish User Interface design; <br>3. Adopt advices given in the presentation.      |   7 December 2017 |



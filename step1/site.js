var cities =[
	{
		"weather": {
			"id": "501",
			"main": "Rain",
			"description": "moderate rain",
			"icon": "10d"
		}, //in the real data, there is a "[ ]" in the "weather". And use "cities[0][weather][0][icon]";
		"main": {
			"temp": "43",
			"pressure": "1015",
			"humidity": "81"
		},
		"wind": {
			"speed": "3.1",
			"deg": "180"
		},
		"clouds": {
			"all": "92"
		},
		"id": "2643743",
		"name": "London"
	},{
		"weather": {
			"id": "502",
			"main": "Clear",
			"description": "clear sky",
			"icon": "01d"
		},
		"main": {
			"temp": "50",
			"pressure": "1015",
			"humidity": "81"
		},
		"wind": {
			"speed": "3.1",
			"deg": "180"
		},
		"clouds": {
			"all": "92"
		},
		"id": "2643722",
		"name": "Shang Hai"
	},{
		"weather": {
			"id": "503",
			"main": "Rain",
			"description": "thunderstorm",
			"icon": "11d"
		},
		"main": {
			"temp": "48",
			"pressure": "1015",
			"humidity": "81"
		},
		"wind": {
			"speed": "3.1",
			"deg": "180"
		},
		"clouds": {
			"all": "92"
		},
		"id": "2643734",
		"name": "New York"
	}
]

var main = function(){
	"use strict";
	
	$("#user_form").on("submit", function(e) {	 
	  var name = $("#name").val();
	  var temp = $("#temperature");
	  var icon = $("#icon");
	  var total = $("#total_weather");
	  
	  var output = false;
	  for (var i = 0; i < cities.length; i++){
	  	if(name === cities[i]["name"]){
	  		var main = cities[i]["main"];
	  		var weather = cities[i]["weather"];

	  		temp.append(main["temp"] + '°F');
	  		icon.append('<img src="http://openweathermap.org/img/w/' + weather["icon"] + '.png" />');
	  		total.append(weather["description"]);
	  		output = true;
	  		e.preventDefault();
	  	}	
	  }
	  if(output == false){
	  		alert("Please try again!");
	  }
	  e.preventDefault();
	});

	$("#user_form").on("reset", function(e){
	  $("#name").val("");
	  $("#temperature").remove();
	  $("#total_weather").remove();
	  $("#icon").remove();
	});
};

$(document).ready(main);


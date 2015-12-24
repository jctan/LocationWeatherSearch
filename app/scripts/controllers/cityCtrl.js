'use strict';

angular.module('localweatherApp')
.controller('cityCtrl', ['$scope', 'weatherService', function($scope, weatherService){

	function fetchWeather(zip){
		weatherService.getWeather(zip).then(function(data){
			$scope.weather = data;
			$scope.forecast = data.item.forecast;
			$scope.tempIndex = (parseInt($scope.weather.item.condition.temp) - parseInt($scope.forecast[1].low)) / (parseInt($scope.forecast[1].high) - parseInt($scope.forecast[1].low)) * 100;
		});
	}
	fetchWeather('11214');

	$scope.findWeather = function(zip){
		$scope.zip = zip;
		fetchWeather(zip);
	};

	$scope.weatherImages = function(code){
		if([6, 9, 11, 12, 35, 40].indexOf(parseInt(code)) > -1){
			return "Cloud-Drizzle";
		} else if ([3, 4, 37, 38, 39, 45, 47].indexOf(parseInt(code)) > -1){
			return "Cloud-Lightning";
		} else if ([26, 27, 28, 29, 30, 44].indexOf(parseInt(code)) > -1){
			return "Cloud-Sun";
		} else if ([32, 36].indexOf(parseInt(code)) > -1){
			return "Sun";
		} else {
			return "Cloud-Sun";
		}
	};

	//clear parameters 
	$scope.resetWeather = function(){
		$scope.zip = null;
		$scope.weather = null;
	};

	$scope.drawChart = function(forecast){
		 var graphData = {
			labels: [],
			datasets: [{
				label: "High",
				fillColor: "rgba(220,220,220)",
          		strokeColor: "#ff4136",
         		pointColor: "#ff4136",
         		pointStrokeColor: "#fff",
          		pointHighlightFill: "#fff",
          		pointHighlightStroke: "rgba(220,220,220,1)",
				data: []
			},
			{
				label: "Low",
				fillColor: "rgb(55,122,196)",
         		strokeColor: "#377ac4",
         		pointColor: "#377ac4",
         		pointStrokeColor: "#fff",
          		pointHighlightFill: "#fff",
          		pointHighlightStroke: "rgba(151,187,205,1)",
				data: []
			}]
		};


			for(var i=0; i<forecast.length; i++){
				graphData.labels.push(forecast[i].day);
				graphData.datasets[0].data.push(forecast[i].high);
				graphData.datasets[1].data.push(forecast[i].low);
			}

			var ctx = document.getElementById("forecast-chart").getContext("2d")
			var myNewChart = new Chart(ctx).Line(graphData,lineOptions)
       		$scope.chartDrawn = true

	}

}]);
'use strict';

angular.module('localweatherApp')
	.factory('weatherService', ['$http', '$q', function($http, $q){

		function getWeather(zip){
			var deferred = $q.defer();
			var API_PATH = 'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%22' + zip + '%22&format=json&diagnostics=true&callback=';
			
			$http.get(API_PATH)
			.success(function(data){
				deferred.resolve(data.query.results.channel);
			})
			.error(function(err){
				console.log('Error retrieving data');
				deferred.reject(err);
			});
			return deferred.promise;
		}

		return{
			getWeather : getWeather
		};
	}]);
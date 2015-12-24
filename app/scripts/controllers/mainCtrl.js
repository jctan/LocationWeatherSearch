'use strict';

var app = angular.module('localweatherApp', []);

app.controller('MainCtrl', ['$scope', 'ZipCodeLookupSvc', function ($scope, ZipCodeLookupSvc) {
	      $scope.zipCode = null;
	      $scope.message = 'Finding zip code...';

	      ZipCodeLookupSvc.lookup().then(function(zipCode) {
	        $scope.zipCode = zipCode;
	      }, function(err) {
	        $scope.message = err;
     	 });
  }]);

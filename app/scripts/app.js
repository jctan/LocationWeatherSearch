'use strict';

/**
 * @ngdoc overview
 * @name localweatherApp
 * @description
 * # localweatherApp
 *
 * Main module of the application.
 */
angular
  .module('localweatherApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
       templateUrl: 'views/city.html',
        controller: 'cityCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

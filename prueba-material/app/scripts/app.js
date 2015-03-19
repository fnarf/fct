'use strict';

/**
 * @ngdoc overview
 * @name pruebasApp
 * @description
 * # pruebasApp
 *
 * Main module of the application.
 */
var app = angular
  .module('app', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/material', {
        templateUrl: 'views/material.html',
        controller: 'MyController'
      })
      .when('/material/form', {
        templateUrl: 'views/material-form.html',
        controller: 'MaterialFormCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

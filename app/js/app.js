'use strict';


// Declare app level module which depends on filters, and services
var LendYourTools = angular.module('LendYourTools', [
  'ngRoute',
  'LendYourTools.filters',
  'LendYourTools.services',
  'LendYourTools.directives',
  'LendYourTools.controllers',
  'google-maps',
  'geolocation'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/GoogleMapsDemo', {templateUrl: 'Pages/GoogleMapsDemo.html', controller: 'GoogleMapsDemo'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

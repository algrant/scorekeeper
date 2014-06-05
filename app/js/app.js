'use strict';


// Declare app level module which depends on filters, and services
angular.module('scoreKeeperApp', [
  'ngRoute',
  'scoreKeeperApp.filters',
  'scoreKeeperApp.services',
  'scoreKeeperApp.directives',
  'scoreKeeperApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/simpleScore', {templateUrl: 'partials/simpleScoreSheet.html', controller: 'SimpleScoreCtrl'});
  $routeProvider.otherwise({redirectTo: '/simpleScore'});
}]);

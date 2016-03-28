var newapp=angular.module('newApp', ['ngRoute']);

newapp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      }).
      when('/objective', {
        templateUrl: 'views/objective.html',
        controller: 'objectiveController'
      }).
      when('/career', {
        templateUrl: 'views/career.html',
        controller: 'careerController'
      }).
      when('/education', {
        templateUrl: 'views/education.html',
        controller: 'educationController'
      }).
      when('/krutha', {
        templateUrl: 'views/krutha.html',
        controller: 'kruthaController'
      }).
      when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

//main
//objective
//career
//education guide
//contact us
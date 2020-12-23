//myApp is the module name and it must assign to ng-app directive 
//this module dont have any depenedecies there for keep [] empty
var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope, $http){
  $http.get('js/data.json').then(function(data){
    $scope.artists = data.data;
  });
  
});
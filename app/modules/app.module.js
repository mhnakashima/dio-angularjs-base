var app = angular.module("app", []).controller("HelloWorldController", [
  '$scope',
  function ($scope) {
    $scope.helloWorldMessage = "Hello World";
  },
]);

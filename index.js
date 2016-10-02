// declare the angular application first (module called "myApp")
angular.module('myApp')
  .controller('myAppController', function($scope) {
    $scope.user = {};
    $scope.user.firstName = 'Joe';
  });

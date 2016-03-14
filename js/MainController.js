app.controller('MainController', ['$scope', function($scope) {
$scope.title = 'Books available in your city';
$scope.books = books;

  $scope.plusOne = function(index) {
  	$scope.books[index].karma += 1;
  };
  $scope.minusOne = function(index) {
  	$scope.books[index].karma -= 1;
  };

}]);

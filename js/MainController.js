app.controller('MainController', ['$scope', function($scope) {
$scope.title = 'Books available in your city';
  $scope.books = [
  {
    	"name": 'Super Intelligence',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2014', '03', '08'),
    	"cover": 'img/super-intelligence.jpg',
      "karma": 0
    },
    {
    	"name": 'Here Be Dragons',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2013', '08', '01'),
    	"cover": 'img/here-be-dragons.jpg',
      "karma": 0
    },
       {
    	"name": 'Doing Good Better',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2010', '08', '01'),
    	"cover": 'img/doing-good-better.jpg',
      "karma": 0
    },
       {
    	"name": 'The Life You Can Save',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2015', '08', '01'),
    	"cover": 'img/the-life-you-can-save.jpg',
      "karma": 0
    },
    {
    	"name": 'Super Intelligence',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2014', '03', '08'),
    	"cover": 'img/super-intelligence.jpg',
      "karma": 0
    },
    {
    	"name": 'Here Be Dragons',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2013', '08', '01'),
    	"cover": 'img/here-be-dragons.jpg',
      "karma": 0
    },
       {
    	"name": 'Doing Good Better',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2010', '08', '01'),
    	"cover": 'img/doing-good-better.jpg',
      "karma": 0
    },
       {
    	"name": 'The Life You Can Save',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2015', '08', '01'),
    	"cover": 'img/the-life-you-can-save.jpg',
      "karma": 0
    }

  ];
  $scope.plusOne = function(index) {
  	$scope.books[index].karma += 1;
  };
  $scope.minusOne = function(index) {
  	$scope.books[index].karma -= 1;
  };

}]);

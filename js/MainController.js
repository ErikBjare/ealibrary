app.controller('MainController', ['$scope', function($scope) {
$scope.title = 'Books available in your city';
  $scope.books = [
  {
      "author": 'Nick Bostrom',
    	"title": 'Super Intelligence',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2014', '03', '08'),
    	"cover": 'img/super-intelligence.jpg',
      "city": 'Göteborg',
      "karma": 0
    },
    {
      "author": 'Olle Häggström',
    	"title": 'Here Be Dragons',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2013', '08', '01'),
    	"cover": 'img/here-be-dragons.jpg',
      "city": 'Göteborg',
      "karma": 0
    },
       {
      "author": 'Will MacAskill',
    	"title": 'Doing Good Better',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2010', '08', '01'),
    	"cover": 'img/doing-good-better.jpg',
      "city": 'Göteborg',
      "karma": 0
    },
       {
      "author": 'Peter Singer',
    	"title": 'The Life You Can Save',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2015', '08', '01'),
    	"cover": 'img/the-life-you-can-save.jpg',
      "city": 'Göteborg',
      "karma": 0
    },
      {
      "author": 'Nick Bostrom',
    	"title": 'Super Intelligence',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2014', '03', '08'),
    	"cover": 'img/super-intelligence.jpg',
      "city": 'Malmö',
      "karma": 0
    },
    {
      "author": 'Olle Häggström',
    	"title": 'Here Be Dragons',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2013', '08', '01'),
    	"cover": 'img/here-be-dragons.jpg',
      "city": 'Uppsala',
      "karma": 0
    },
       {
      "author": 'Will MacAskill',
    	"title": 'Doing Good Better',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2010', '08', '01'),
    	"cover": 'img/doing-good-better.jpg',
      "city": 'Malmö',
      "karma": 0
    },
       {
      "author": 'Peter Singer',
    	"title": 'The Life You Can Save',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2015', '08', '01'),
    	"cover": 'img/the-life-you-can-save.jpg',
      "city": 'Malmö',
      "karma": 0
    },
      {
      "author": 'Bick Bostrom',
    	"title": 'False Intelligence',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2014', '03', '08'),
    	"cover": 'img/super-intelligence.jpg',
      "city": 'Stockholm',
      "karma": 0
    },
    {
      "author": 'Olle Häggström',
    	"title": 'Here Be Dragons',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2013', '08', '01'),
    	"cover": 'img/here-be-dragons.jpg',
      "city": 'Lund',
      "karma": 0
    },
       {
      "author": 'Will MacAskill',
    	"title": 'Doing Good Better',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2010', '08', '01'),
    	"cover": 'img/doing-good-better.jpg',
      "city": 'Lund',
      "karma": 0
    },
       {
      "author": 'Peter Singer',
    	"title": 'The Life You Can Save',
      "available": new Date('2016', '08', '01'),
    	"pubdate": new Date('2015', '08', '01'),
    	"cover": 'img/the-life-you-can-save.jpg',
      "city": 'Lund',
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

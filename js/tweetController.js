tweetApp.controller('tweetController', function($scope, $http){
	$scope.test = "I am working!";
	$scope.tweets = tweets;

	$scope.$watch(function () {
	    return location.hash
	}, function (value) {
	    console.log(value);
	});
});

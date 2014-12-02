function update(elem) {
	index = elem.id-1;
}

function data($scope,$http) {
	
  $scope.change = function() { 
    $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
     .success(function(response) {$scope.list = response;}); 

    $http.get("http://www.omdbapi.com/?s=" + $scope.search + "&tomatoes=true&plot=full")
     .success(function(response) {$scope.others = response;});
  };
  
  $http.get("http://www.omdbapi.com/?t=" + "hackers" + "&tomatoes=true&plot=full")
   .success(function(response) {$scope.list = response;});

  $http.get("http://www.omdbapi.com/?s=" + "hackers" + "&tomatoes=true&plot=full")
   .success(function(response) {$scope.others = response;});

  $scope.update = function() {
    $scope.search = $scope.others.Search[index].Title;
  	$scope.change();
  };
}

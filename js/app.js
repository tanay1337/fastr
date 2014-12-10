function update(elem) {
	index = elem.id-1;
}

function data($scope,$http) {

  function fetch() {
    $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
     .success(function(response) {$scope.list = response;}); 

    $http.get("http://www.omdbapi.com/?s=" + $scope.search)
     .success(function(response) {$scope.others = response;});
  }

  var pendingTask;
  $scope.change = function() {
    if(pendingTask) {
      clearTimeout(pendingTask);
    }
    pendingTask = setTimeout(fetch, 800);
  };
  
  $http.get("http://www.omdbapi.com/?t=" + "Sherlock Holmes" + "&tomatoes=true&plot=full")
   .success(function(response) {$scope.list = response;});

  $http.get("http://www.omdbapi.com/?s=" + "Sherlock Holmes")
   .success(function(response) {$scope.others = response;});

  $scope.update = function() {
    $scope.search = $scope.others.Search[index].Title;
  	$scope.change();
  };
}

function data($scope, $http) {
  // when the page loads for the first time
  if($scope.search == undefined) {
    $scope.search = "Sherlock Holmes";
    fetch();
  }

  var pendingTask;

  // will load results when the string in search box changes
  $scope.change = function() {
    if(pendingTask) {
      clearTimeout(pendingTask);
    }
    pendingTask = setTimeout(fetch, 800);
  };

  $scope.update = function() {
    $scope.search = $scope.others.Search[index].Title;
  	$scope.change();
  };

  $scope.select = function() {
    this.setSelectionRange(0, this.value.length);
  }

  function fetch() {
    $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
     .success(function(response) {$scope.list = response;});

    $http.get("http://www.omdbapi.com/?s=" + $scope.search)
     .success(function(response) {$scope.others = response;});
  }

} // end of controller 'data'

function update(elem) {
  index = elem.id - 1;
}

'use strict';

angular.module('myApp', [])
  .controller('MovieController', function($scope, $http){
    $scope.search = "Sherlock Holmes";

    $scope.$watch('search', function() {
      fetch();
    });

    function fetch(){
      $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
      .then(function(response){ $scope.details = response.data; });

      $http.get("http://www.omdbapi.com/?s=" + $scope.search)
      .then(function(response){ $scope.related = response.data; });
    }

    $scope.update = function(movie){
      $scope.search = movie.Title;
      fetch();
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }
  });

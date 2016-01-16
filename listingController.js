angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.showEdit = false;
    $scope.newListing = {}

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push($scope.newListing);
      $scope.newListing = {};
    };
      
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
      
    $scope.showDetails = function(index) {
      $scope.name = $scope.listings[index].name;
      $scope.code = $scope.listings[index].code;
      $scope.latitude = $scope.listings[index].coordinates.latitude;
      $scope.longitude = $scope.listings[index].coordinates.longitude;
      $scope.address = $scope.listings[index].address;
    };
      
    $scope.toggleEdit = function() {
      if ($scope.showEdit) {
        $scope.showEdit = false;
      } else {
        $scope.showEdit = true;
      }
    };
  }
]);
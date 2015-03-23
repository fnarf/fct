app.controller('MaterialSidenavCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $scope.openRightMenu = function() {
    $mdSidenav('right').toggle();
  };
}]);
app.controller('MaterialDialogCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {
  $scope.alert = '';
  $scope.showAlert = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
      //.parent(angular.element(document.body))
      .title('This is an alert title')
      .content('You can specify some description text in here.')
      .ariaLabel('Alert Dialog Demo')
      .ok('Got it!')
      .targetEvent(ev)
      );
  };

  $scope.showConfirm = function(ev) {

    var confirm = $mdDialog.confirm()
    //.parent(angular.element(document.body))
    .title('Would you like to delete your debt?')
    .content('All of the banks have agreed to forgive you your debts.')
    .ariaLabel('Lucky day')
    .ok('Please do it!')
    .cancel('Sounds like a scam')
    .targetEvent(ev);

    $mdDialog.show(confirm).then(function() {//Promesa de apertura del dialog
      $scope.alert = 'You decided to get rid of your debt.';
    }, function() {
      $scope.alert = 'You decided to keep your debt.';
    });
  };

  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/material-fill.html',
      targetEvent: ev,
    })

    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };
}]);

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
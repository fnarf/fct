app.controller('MyController', ["$scope","$timeout","$mdBottomSheet", function($scope, $timeout, $mdBottomSheet) {

$scope.fran = {
    nombre: "fran",
    apellido: "flores"
};

$scope.numbers = [];

$scope.chorrada = function(){
    alert("cancamusa");
};

$scope.randomizeNumbers = function(count){
    for(var i = 0; i < count; i++){
        var number = Math.round((Math.random() * 100) / (100/count));
        alert(number);
        $scope.numbers.push(number);
    }
}

$scope.mostrarNombre = function(){
    alert("Me llamo: " + $scope.fran.nombre);
};

$scope.mostrarArray = function(){
    $scope.randomizeNumbers(4);
    alert("Array: " + JSON.stringify($scope.numbers));
}

//   $scope.alert = '';
//   $scope.showListBottomSheet = function($event) {
//     $scope.alert = '';

//     $mdBottomSheet.show({
//       templateUrl: 'bottom-sheet-list-template.html',
//       controller: 'ListBottomSheetCtrl',
//       targetEvent: $eventMyController
//     }).then(function(clickedItem) {
//       $scope.alert = clickedItem.name + ' clicked!';
//     });
//   };
//   $scope.showGridBottomSheet = function($event) {
//     $scope.alert = '';
//     $mdBottomSheet.show({
//       templateUrl: 'bottom-sheet-grid-template.html',
//       controller: 'GridBottomSheetCtrl',
//       targetEvent: $event
//     }).then(function(clickedItem) {
//       $scope.alert = clickedItem.name + ' clicked!';
//     });
//   };
// })
// .controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
//   $scope.items = [
//   { name: 'Share', icon: 'share' },
//   { name: 'Upload', icon: 'upload' },
//   { name: 'Copy', icon: 'copy' },
//   { name: 'Print this page', icon: 'print' },
//   ];
//   $scope.listItemClick = function($index) {
//     var clickedItem = $scope.items[$index];
//     $mdBottomSheet.hide(clickedItem);
//   };
// })
// .controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
//   $scope.items = [
//   { name: 'Hangout', icon: 'hangout' },
//   { name: 'Mail', icon: 'mail' },
//   { name: 'Message', icon: 'message' },
//   { name: 'Copy', icon: 'copy' },
//   { name: 'Facebook', icon: 'facebook' },
//   { name: 'Twitter', icon: 'twitter' },
//   ];
//   $scope.listItemClick = function($index) {
//     var clickedItem = $scope.items[$index];
//     $mdBottomSheet.hide(clickedItem);
//   };
}]);
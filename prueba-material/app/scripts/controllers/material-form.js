'use strict';

/**
 * @ngdoc function
 * @name appPruebaMaterialApp.controller:MaterialFormCtrl
 * @description
 * # MaterialFormCtrl
 * Controller of the appPruebaMaterialApp
 */

 app.controller('MaterialFormCtrl', ['$scope', '$mdSidenav', '$mdBottomSheet', function($scope, $mdSidenav, $mdBottomSheet) {
 	$scope.options = ['Chelsea', 'Financial District', 'Midtown', 'West Village', 'Williamsburg'];

 	$scope.openBottomSheet = function() {
 		$mdBottomSheet.show({
 			templateUrl: 'views/material-bottomSheet.html'
 		});
 	};

 }]);


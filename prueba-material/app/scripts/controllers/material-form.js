'use strict';

/**
 * @ngdoc function
 * @name appPruebaMaterialApp.controller:MaterialFormCtrl
 * @description
 * # MaterialFormCtrl
 * Controller of the appPruebaMaterialApp
 */
 // app.controller('MaterialFormCtrl', ['$scope', function ($scope) {

 // 	$scope.provincias=[
 // 	{
 // 		idProvincia:2,
 // 		nombre:"Castellón"
 // 	},
 // 	{
 // 		idProvincia:3,
 // 		nombre:"Alicante"
 // 	},
 // 	{
 // 		idProvincia:1,
 // 		nombre:"Valencia"
 // 	},
 // 	{
 // 		idProvincia:7,
 // 		nombre:"Teruel"
 // 	},
 // 	{
 // 		idProvincia:5,
 // 		nombre:"Tarragona"
 // 	}
 // 	];

 // 	$scope.miProvinciaSeleccionada = {};


 // }]);


app.controller('MaterialFormCtrl', function($scope) {
  $scope.options = ['Chelsea', 'Financial District', 'Midtown', 'West Village', 'Williamsburg'];
  $scope.neighborhoods2 = ['Chelsea', 'Financial District', 'Lower Manhattan', 'Midtown', 'Soho', 'Upper Manhattan', 'West Village', 'Williamsburg' ];
});


'use strict';
define(['app'], function (app) {

	app.register.controller('MainController', ['$scope', function($scope){
		$scope.title = "Main Controller";
	}]);
	
});
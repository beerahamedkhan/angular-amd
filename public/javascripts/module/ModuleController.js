'use strict';
define(['app'], function (app) {

	app.register.controller('ModuleController', ['$scope', function($scope){
		$scope.title = "Module Controller";
	}]);
});
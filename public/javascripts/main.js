requirejs.config({
    baseUrl: './',
    paths: {
        //Common Module
        "angular"           : "bower_components/angular/angular.min",
        "angular-route"     : "bower_components/angular-route/angular-route.min",

        //App
        "app"               : "javascripts/app",
        "routeResolver"     : "javascripts/routeresolver",
        "MainController"    : "javascripts/MainController",
        "ModuleController"  : "javascripts/module/ModuleController"
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'app': {
            deps: ['angular', 'angular-route', 'routeResolver']
        },
        'routeResolver': {
            deps: ['angular-route']
        }
    }
});

define(['angular', 'angular-route', 'app'], function (angular) {
    angular.bootstrap(document, ['myApp']);
});


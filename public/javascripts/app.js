define(['routeResolver'], function() {

    //Angular module
    var app = angular.module("myApp", [
        'ngRoute',
        'routeResolverServices'
    ]);
    //Angular Routes
    app.config([
        '$routeProvider',
        'routeResolverProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        '$httpProvider',
        function(
            $routeProvider,
            routeResolverProvider,
            $controllerProvider,
            $compileProvider,
            $filterProvider,
            $provide,
            $httpProvider
        ) {

        app.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service,
            constant: $provide.constant
        };

        var route = routeResolverProvider.route;
        
        $routeProvider
            .when('/', route.resolve('javascripts/home.html', 'MainController', true))
            .when('/module', route.resolve('javascripts/module/views/module.html', 'ModuleController', true));
        }

    ]);
    return app;
});

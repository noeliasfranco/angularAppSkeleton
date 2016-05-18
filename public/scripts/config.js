'use strict';

define([
    'app',
    'angular',
    'baseController',
    'navigatorController',
    'factory/messageLocator',
    'services/commonService',
    'controllers/main/main'
],
    function (app, angular) {
    angular.module('Demo').config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/views/partials/main/main.html',
                controller: "Demo.MainCtrl"
            }).
            when('/dashboard', {
                templateUrl: '/views/partials/main/main.html',
                controller: "Demo.MainCtrl"
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
});
'use strict';

require.config({
    waitSeconds: 60,
    //TODO remove for public applications, we just want to avoid caching for local debugging
    //still, we don't 100% refreshed cache because it would prevent us from using client-side breakpoints
    urlArgs: 'cb=' + Math.floor(new Date().valueOf() / 100000).toString(), // changes each minute
    paths: {
        angular: '../lib/angular/angular.min',
        angularRoute: '../lib/angular/angular-route.min',
        angularAnimate: '../lib/angular/angular-animate.min',
        underscore: '../lib/underscore/underscore-min',
        navigatorController:'controllers/navigator',
        baseController:'controllers/base'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        angularRoute: {
            deps: ['angular']
        },
        angularAnimate: {
            deps: ['angular']
        }
    }
});

require([
    'angular',
    'config'
], function (angular) {
    angular.bootstrap(document, ['Demo']);
});
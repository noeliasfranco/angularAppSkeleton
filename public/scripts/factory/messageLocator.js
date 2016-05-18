'use strict';

define(['app','angular'], function (app,angular) {
    angular.module('Demo').factory('MessageLocator', [function () {
        
        var messageLocator = {
            includePath : ""
        }

        return messageLocator;

    }]);
});
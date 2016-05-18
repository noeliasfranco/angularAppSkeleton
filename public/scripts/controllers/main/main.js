'use strict';
define(['app','angular'], function (app, angular) {
    angular.module('Demo').controller('Demo.MainCtrl', ['$scope','$timeout', 'CommonService',function($scope,$timeout, CommonService) {

         $scope.getData = function(){
            CommonService.getSocialMediaData().then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(response) {
                
            }); 
        }
         
        $scope.init = function () {
            $scope.showSuccess = false;
            $scope.hasError = false;
            $scope.getData();        
        };

        $scope.init();
        
       
        
    }]);
});
'use strict';

/* Controllers */

angular.module('LendYourTools.controllers', []).
  controller('MyCtrl1', ["$scope", function($scope) {
        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        };
  }])
  .controller('MyCtrl2', [function() {

  }]);
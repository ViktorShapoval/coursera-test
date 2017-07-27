(function () {
  'use strict';

  angular.module('asg-1', [])
    .controller('lunchController', lunchController);

  lunchController.$inject = ['$scope'];
  function lunchController($scope) {
    $scope.lunchItemsString = '';
    $scope.lunchStatus = '';

    $scope.displayLunchStatus = function () {
      $scope.lunchStatus = checkLunch($scope.lunchItemsString);
    };

    function checkLunch(string) {
      var lunchItems = string.split(',');

      lunchItems = lunchItems.filter(function(word) { //filtering empty elements in our array
        return word.length > 0;
      });

      if ( lunchItems.length > 3) {
        return 'Too much!';
      } else {
        return 'Enjoy!';
      }
    }
  }
})();

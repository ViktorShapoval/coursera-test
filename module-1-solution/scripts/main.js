(function () {
  'use strict';

  angular.module('asg-1', [])
    .controller('lunchController', lunchController);

  lunchController.$inject = ['$scope'];
  function lunchController($scope) {
    $scope.lunchItemsString = '';
    $scope.lunchStatus = '';

    $scope.controllerClass = '';

    var lunchListOfStatuses = {'tooMuch': 'Too much!', 'empty': 'Please enter data first', 'success': 'Enjoy!'};

    $scope.displayLunchStatus = function () {
      var status = checkLunch($scope.lunchItemsString);
      var message = lunchListOfStatuses[status];
      $scope.lunchStatus = message;

      if ( status == 'empty' ) {
        $scope.controllerClass = 'empty'
      } else {
        $scope.controllerClass = 'filled';
      }
    };

    function checkLunch(string) {
      var lunchItems = string.split(',');

      lunchItems = lunchItems.filter(function(word) { //filtering empty elements in our array
        return word.length > 0;
      });

      if ( lunchItems.length > 3 ) {
        return 'tooMuch';
      } else if (lunchItems.length === 0){
        return 'empty';
      } else {
        return 'success';
      }
    }
  }
})();

(function() {
  'use strict';
  angular.module('RestrauntMenu', ['ui.router', 'data']);

  angular.module('RestrauntMenu')
    .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');
}());

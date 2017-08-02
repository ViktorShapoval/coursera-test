(function() {
  'use strict';
  angular.module('RestrauntMenu')
    .component('categories', {
      bindings: {
        items: '<'
      },
      templateUrl: 'src/restrauntMenu/templates/categories.template.html',
    });
}());

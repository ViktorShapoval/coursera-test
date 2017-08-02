(function() {
  'use strict';

  angular.module('RestrauntMenu')
    .component('categoryInfo', {
      bindings: {
        categoryInfo: '<'
      },
      templateUrl: 'src/restrauntMenu/templates/category-info.template.html'
    });
}());

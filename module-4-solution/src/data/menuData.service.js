(function() {
  'use strict';
  angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
      var service = this;

      service.getCategories = function() {
        var request = $http({
          url: (ApiBasePath + '/categories.json')
        });

        return request;
      }

      service.getCategoryInfo = function(categoryShortName) {
        var request = $http({
          url: (ApiBasePath + '/menu_items.json'),
          params: {
            category: categoryShortName
          }
        });

        return request;
      }
    }
}());

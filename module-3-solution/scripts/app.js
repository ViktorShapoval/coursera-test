(function() {
  'use strict';

  angular.module('menuSearchApp', [])
    .controller('menuSearchController', menuSearchController)
    .service('menuSearchService', menuSearchService)
    .directive('foundItems', menuSearchDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    function menuSearchDirective() {
      var ddo = {
        templateUrl: 'foundItem.html',
        scope: {
          items: '<',
          onRemove: '&'
        },
        controller: menuSearchDirectiveController,
        controllerAs: 'list',
        bindToController: true
      };

      return ddo;
    }

    function menuSearchDirectiveController() {

    }

    menuSearchController.$inject = ['menuSearchService'];
    function menuSearchController(menuSearchService) {
      var searchCtrl = this;

      searchCtrl.foundItems = [];
      searchCtrl.bannedItems = [];

      searchCtrl.searchValue = '';

      searchCtrl.getFilteredMenuItems = function() {
        searchCtrl.errorMessage = '';

        searchCtrl.foundItems = [];
        searchCtrl.bannedItems = [];

        if (searchCtrl.searchValue.length > 0) {
          var promise = menuSearchService.getMatchedMenuItems(searchCtrl.searchValue);

          promise.then( function(response) {
            searchCtrl.foundItems = response;
          });
        } else {
          searchCtrl.errorMessage = 'Nothing found';
        }
      }

      searchCtrl.removeItem = function(index) {
        var item = searchCtrl.foundItems[index];

        searchCtrl.foundItems.splice(index, 1);

        searchCtrl.bannedItems.push(item.short_name);
      }

    };

    menuSearchService.$inject = ['$http','ApiBasePath'];
    function menuSearchService($http, ApiBasePath) {
      var service = this;

      service.getMatchedMenuItems = function (searchTerm) {
        return $http( {method: "GET",
                      url: (ApiBasePath + "/menu_items.json")} )
        .then(function (response) {
          var items = response.data.menu_items;
          var foundItems = [];
          var menuLength = items.length;

          for (var i = 0; i < menuLength; i++) {
            var item = items[i];
            if (item.description.indexOf(searchTerm) !== -1) {
                foundItems.push(item)
              };
          };
          // return processed items
          return foundItems;
        })
      }
    }

})()

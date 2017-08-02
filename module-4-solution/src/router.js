(function() {
  'use strict';
  angular.module('RestrauntMenu')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/restrauntMenu/templates/home.template.html'
      })

      .state('categories', {
        url: '/categories',
        component: 'categories',

        resolve: {
          items: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getCategories()
              .then( function(response) {
                return response.data;
              });
          }]
        }
      })

      .state('categories.item', {
        url: '/category-info/{categoryShortName}',
        component: 'categoryInfo',

        resolve: {
          categoryInfo: ['$stateParams', 'MenuDataService',
                  function ($stateParams, MenuDataService) {
                    return MenuDataService.getCategoryInfo($stateParams.categoryShortName)
                      .then(function (response) {
                        return response.data;
                      });
                  }]
        }
      })

  }

}());

(function () {
  'use strict';

  angular.module('ShoppingListApp', [])
    .controller('ToBuyController', ToBuyController)
    .controller('BoughtController', BoughtController)
    .service('ShoppingListService', ShoppingListService);
    ;

  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListService.getToBuyList();

    toBuyList.moveItem = function (index) {
      ShoppingListService.buyItem(index);

      if (toBuyList.items.length === 0) {
        toBuyList.emptyMessage = 'Everything is bought!';
      }
    };

  };

  BoughtController.$inject = ['ShoppingListService'];
  function BoughtController(ShoppingListService) {
    var boughtList = this;

    boughtList.items = ShoppingListService.getBoughtList();

  };

  function ShoppingListService() {
    var service = this;

    var toBuyItems = [
      {name: 'Cookies', quantity: 2},
      {name: 'Chips', quantity: 3},
      {name: 'Water Bottles', quantity: 4},
      {name: 'Meat Steaks', quantity: 5},
      {name: 'Milk Cartons', quantity: 6}
    ];

    var boughtItems = [];

    service.addItem = function(itemName, itemQuantity) {
      toBuyItems.push({name: itemName, quantity: itemQuantity});
    };

    service.buyItem = function(index) {
      var item = toBuyItems[index];
      toBuyItems.splice(index, 1);
      boughtItems.push(item);
    };

    service.getToBuyList = function() {
      return toBuyItems;
    }

    service.getBoughtList = function () {
      return boughtItems;
    }
  }

})();

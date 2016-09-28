(function(){
    'use strict';

    angular.module('ShoppingListApp', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    var ShoppingList = [
        {
            name: "ipad",
            quantity: "1 set"
        },
        {
            name:"iphone",
            quantity:"2 sets"
        },
        {
            name:"macbook",
            quantity:"2 sets"
        },
        {
            name:"iwatch",
            quantity:"2 sets"
        },
        {
            name:"kindle",
            quantity:"2 sets"
        }

    ];

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var ToBuy = this;

        ToBuy.ToBuyList = ShoppingListCheckOffService.getToBuyItems();

        ToBuy.BuyItem = function(itemIndex){
            ShoppingListCheckOffService.BuyItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var AlreadyBought = this;
        AlreadyBought.AlreadyBoughtList = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService(){
        var service = this;

        var ToBuyItems = ShoppingList;
        var BoughtItems = [];
        var item ={};

        service.getToBuyItems = function(){
            return ToBuyItems;
        }

        service.getBoughtItems = function(){
            return BoughtItems;
        }

        service.BuyItem = function(itemIndex){
            item = ToBuyItems[itemIndex];
            BoughtItems.push(item);
            ToBuyItems.splice(itemIndex, 1);
        }
    }



})();
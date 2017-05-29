(function () {
    // 定义顶层 App
    angular.module('myApp').component('cards', {
    templateUrl: "/app/cards.html",
    controllerAs: "model",
    controller: [function(){
      var model = this;

      model.$onInit = function () {
          
      };
    }]
  });
}());


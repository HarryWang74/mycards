(function () {
    angular.module('myApp').component('cards', {
    templateUrl: "/app/cards.html",
    controllerAs: "model",
    controller: [function(){
      var model = this;
    }]
  });
}());

(function () {
    angular.module('myApp').component('lifeCards', {
    templateUrl: "/app/life/lifeCards.html",
    bindings: {
    },
    transclude: true,
    controllerAs: "ctrl",
    controller: [function(){
      var ctrl = this;
    }]
  });
}());

(function () {
    angular.module('myApp').component('researchCards', {
    templateUrl: "/app/research/researchCards.html",
    bindings: {
    },
    transclude: true,
    controllerAs: "ctrl",
    controller: [function(){
      var ctrl = this;
    }]
  });
}());

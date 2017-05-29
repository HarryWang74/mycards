(function () {
    angular.module('myApp').component('cardsColumn', {
    templateUrl: "/app/shared/cardsColumn.html",
    bindings: {
        "columnHeading": "@",
    },
    transclude: true,
    controllerAs: "ctrl",
    controller: [function(){
      var ctrl = this;
    }]
  });
}());

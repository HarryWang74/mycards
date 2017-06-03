(function () {
    angular.module('myApp').component('libraryCards', {
    templateUrl: "/app/library/libraryCards.html",
    bindings: {
    },
    transclude: true,
    controllerAs: "ctrl",
    controller: [function(){
      var ctrl = this;
    }]
  });
}());

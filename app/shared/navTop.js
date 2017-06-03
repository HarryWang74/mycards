(function () {
    angular.module('myApp').component('navTop', {
    templateUrl: "/app/shared/navTop.html",
    bindings: {
    },
    transclude: true,
    controllerAs: "ctrl",
    controller: [function(){
      var ctrl = this;
    }]
  });
}());

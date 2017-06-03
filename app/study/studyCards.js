(function () {
    angular.module('myApp').component('studyCards', {
    templateUrl: "/app/study/studyCards.html",
    bindings: {
    },
    transclude: true,
    controllerAs: "ctrl",
    controller: [function(){
      var ctrl = this;
    }]
  });
}());

(function () {
    angular.module('myApp').component('catalogSummary', {
    templateUrl: "/app/listing/catalogSummary.html",
    controllerAs: "ctrl",
    transclude: true,
    controller: [function(){
      var ctrl = this;
    }]
    
  });
}());
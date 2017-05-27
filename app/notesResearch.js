
(function () {
    angular.module('myApp').component('notesResearch', {
    templateUrl: "/app/notesResearch.html",
    controllerAs: "model",
    controller: ['$window', function($window){
      var model = this;

      model.$onInit = function () {
      };
    }],
  });
}());


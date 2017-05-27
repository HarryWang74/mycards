(function () {
    angular.module('myApp').component('notesStudy', {
    templateUrl: "/app/notesStudy.html",
    controllerAs: "model",
    controller: ['$window', function($window){
      var model = this;

      model.$onInit = function () {
      };
    }],
  });
}());

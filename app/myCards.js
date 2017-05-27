
(function () {
    // 加入 Inject compone router 到 App
    angular.module('myApp', ['ngComponentRouter']);
    // 把 componet 转化成 HTML5 component
    // requireBase 设置成 false 否则要在页面里设置 base=""
    angular.module('myApp').config(function($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })
    // compoter router 初始化顶层 App
    angular.module('myApp').value('$routerRootComponent', 'myCards')
    
    // 定义顶层 App
    angular.module('myApp').component('myCards', {
    templateUrl: "/app/myCards.html",
    controllerAs: "model",
    controller: ['$window', function($window){
      var model = this;

      model.$onInit = function () {
          console.log("model init")
      };
    }],
    // 顶层 App router config
    $routeConfig: [
        { path: "/study", component: "notesStudy", name: "NotesStudy" },
        { path: "/research", component: "notesResearch", name: "ResearchNotes" },
    ],
  });
}());


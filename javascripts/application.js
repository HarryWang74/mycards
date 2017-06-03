// 定义 myApp module
// 加入 Inject compone router 到 module
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
angular.module('myApp').value('$routerRootComponent', 'app')


// 定义顶层 App
angular.module('myApp').component('app', {
    templateUrl: "/app/app.html",
    controllerAs: "model",
    controller: ['$window', function($window){
        var model = this;

        model.$onInit = function () {
            
        };
    }],
    // 顶层 App router config
    
    $routeConfig: [
        { path: "/", component: "cardsCatalog", name: "CardsCatalog", useAsDefault: true  },
        { path: "/study", component: "studyCards", name: "StudyCards" },
        { path: "/research", component: "researchCards", name: "ResearchCards" },
        { path: "/library", component: "libraryCards", name: "LibraryCards" },
        { path: "/life", component: "lifeCards", name: "LifeCards" },
        { path: "/**", redirectTo: ["CardsCatalog"] }
    ],
});



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

(function () {
    angular.module('myApp').component('cardsCatalog', {
    templateUrl: "/app/listing/cardsCatalog.html",
    controllerAs: "ctrl",
    controller: [function(){
      var ctrl = this;
    }]
  });
}());


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

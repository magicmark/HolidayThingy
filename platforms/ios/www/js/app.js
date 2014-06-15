// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter.controllers',[]);
angular.module('starter.services', []);

angular.module('starter', ['ionic', 'starter.controllers','starter.services','ezfb'])

.run(function($ionicPlatform,ezfb) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  ezfb.init();

})

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     FastClick.attach(document.body);

//     if(window.StatusBar) {
//       // org.apache.cordova.statusbar required
//       StatusBar.styleDefault();
//     }
//   });
// })

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    //if user is not logged in it takes
    //him or her to the login screen
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: 'LoginCtrl'
    })
    //home for logged users
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: 'HomeCtrl'
    })
    .state('chooseCity', {
      url: "/book/city",
      templateUrl: "templates/chooseCity.html",
      controller: 'ChooseCityCtrl'
    })
    .state('chooseBudget', {
      url: "/book/budget",
      templateUrl: "templates/chooseBudget.html",
       controller: 'ChooseBudgetCtrl'
    })
    .state('chooseDates', {
      url: "/book/dates",
      templateUrl: "templates/chooseDates.html",
      controller: 'ChooseDatesCtrl'
    })
    .state('bookHotel', {
      url: "/book/hotel",
      templateUrl: "templates/bookHotel.html",
      controller: 'BookHotelCtrl'
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/book/budget');

})
.config(function (ezfbProvider) {
  ezfbProvider.setInitParams({
    appId: '247567278783426',
    nativeInterface: CDV.FB,
    useCachedDialogs: false
  });

  ezfbProvider.setLoadSDKFunction(function ($document, ezfbAsyncInit) {
    $document.on('deviceready', function () {
      ezfbAsyncInit();
    });
  });
})
.run(function(ezfb) {
  ezfb.init();
});;

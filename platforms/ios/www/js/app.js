// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter.controllers',[]);
angular.module('starter.services', []);

angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {

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
    
    // .state('sendCode', {
    //   url: "/login",
    //   templateUrl: "templates/sendCode.html",
    //   controller: 'sendCodeCtrl'
    // })

    // .state('home', {
    //   url: "/home",
    //   templateUrl: "templates/home.html",
    //   controller: 'HomeCtrl'
    // })
    .state('chooseCity', {
      url: "/book/city",
      templateUrl: "templates/choose.html",
      controller: 'ChooseCtrl'
    })
    .state('chooseBudget', {
      url: "/book/budget",
      templateUrl: "templates/choose.html",
      controller: 'ChooseCtrl'
    })
    .state('chooseDates', {
      url: "/book/dates",
      templateUrl: "templates/choose.html",
      controller: 'ChooseCtrl'
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/book/city');

});
// angular.module('starter.services', [])

// .service('PN', function () {

//   pubnub = PUBNUB.init({
//     publish_key   : 'pub-c-08f7e9d5-424b-4bd3-a751-6daf531b8f73',
//     subscribe_key : 'sub-c-9b23e232-f3b2-11e3-bffd-02ee2ddab7fe'
//   });

//   action = function (m) {
//     alert(m);
//   };

//   pubnub.subscribe({
//     channel : "hello_world",
//     message : function(m){ action(m) },
//     connect : publish
//   });

//   return {
//     sub: function (f) {
//       action = f;
//     }
//   }

// });
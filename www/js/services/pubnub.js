angular.module('starter.services')

.service('PN', function () {

  var pubnub = PUBNUB.init({
    publish_key   : 'pub-c-08f7e9d5-424b-4bd3-a751-6daf531b8f73',
    subscribe_key : 'sub-c-9b23e232-f3b2-11e3-bffd-02ee2ddab7fe'
  });

  var publish = function (m) {
    pubnub.publish({
      channel : "hello_world",
      message : m
    });
  };
    
  pubnub.subscribe({
    channel : "hello_world",
    message : function(m){
      parts = m.split("|");
      action({
        'page':   parts[0],
        'action': parts[1],
        'val':    parts[2]
      });
    }
  });

  var action = function (m) {
    alert(m);
  };

  return {
    sub: function (f) {
      action = f;
    },
    pub: function (d1, d2, d3) {
      publish(d1+"|"+d2+"|"+d3);
    }
  }

});
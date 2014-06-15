angular.module('starter.controllers')

.controller('BookHotelCtrl', function($scope, Holiday, PN, $state) {

  PN.sub(function (m) {
    if (m.page == 'chooseHotel') {
      if (m.action == 'selectHotel') selectHotel(m.val);
      if (m.action == 'goToFlights') {
        if (Holiday.hotel() == '') selectHotel(m.val);
        goToFlights();
      }
    }
  });

  $scope.getNumber = function(num)
  {
    num = parseInt(num);
    return new Array(num);
  }

  $scope.hotels =
    [{
        "name": "Mandarin Oriental Hyde Park",
        "location": "66 Knightsbridge, SW1X 7LA, London",
        "pricePerNight": "474",
        "website": "http:\/\/www.mandarinoriental.com\/london\/",
        "ameneties": "Bar\/Lounge, Wheelchair Access",
        "numRooms": "200",
        "rating": "5",
        "image": "http:\/\/imgec.trivago.com\/uploadimages\/11\/58\/11586992_x.jpeg",
        "events": [{
            "name": "French Musette Social Dance - Bal Musette \u00e0 La Guinguette aux Moineaux",
            "id": "11265949759",
            "url": "http:\/\/www.eventbrite.co.uk\/e\/french-musette-social-dance-bal-musette-a-la-guinguette-aux-moineaux-tickets-11265949759?aff=ebapi",
            "img": "http:\/\/ebmedia.eventbrite.com\/s3-build\/images\/5996169\/34392725550\/1\/logo.jpg",
            "category": "Music"
        }, {
            "name": "Mr Bojangles - New Orleans Blues Sunday 15 June - 15\/06\/2014",
            "id": "11358963967",
            "url": "http:\/\/www.eventbrite.co.uk\/e\/mr-bojangles-new-orleans-blues-sunday-15-june-15062014-tickets-11358963967?aff=ebapi",
            "img": "http:\/\/ebmedia.eventbrite.com\/s3-build\/images\/5853687\/95812796383\/1\/logo.JPG",
            "category": "Music"
        }, {
            "name": "BPSE Prizewinner Lunchtime Recital",
            "id": "11929253719",
            "url": "http:\/\/www.eventbrite.com\/e\/bpse-prizewinner-lunchtime-recital-tickets-11929253719?aff=ebapi",
            "img": "http:\/\/ebmedia.eventbrite.com\/s3-build\/images\/6585193\/94697310259\/1\/logo.jpg",
            "category": "Music"
        }, {
            "name": "Fulvio Sigurta & The Jason Lyon Trio Monday 16 June - 16\/06\/2014",
            "id": "11358342107",
            "url": "http:\/\/www.eventbrite.co.uk\/e\/fulvio-sigurta-the-jason-lyon-trio-monday-16-june-16062014-tickets-11358342107?aff=ebapi",
            "img": "http:\/\/ebmedia.eventbrite.com\/s3-build\/images\/5852813\/95812796383\/1\/logo.jpg",
            "category": "Music"
        }, {
            "name": "Creative Data Club: The Future of Music Technology supported by Omnifone",
            "id": "11568436505",
            "url": "http:\/\/www.eventbrite.co.uk\/e\/creative-data-club-the-future-of-music-technology-supported-by-omnifone-tickets-11568436505?aff=ebapi",
            "img": "http:\/\/ebmedia.eventbrite.com\/s3-build\/images\/6463931\/42274689768\/1\/logo.jpg",
            "category": "Music"
        }]
    }, {
        "name": "Crown Moran",
        "location": "142-152 Cricklewood, NW2 3ED, London",
        "pricePerNight": "78",
        "website": "http:\/\/www.crownmoranhotel.com\/",
        "ameneties": "Wheelchair Access",
        "numRooms": "152",
        "rating": "4",
        "image": "http:\/\/imgec.trivago.com\/uploadimages\/11\/54\/11543460_x.jpeg",
        "events": [{
            "name": "Fun In The Sun : Salsa Picnic With Live Music By  Son Yambu on the bandstand at Parliament Hill,",
            "id": "11957576433",
            "url": "http:\/\/www.eventbrite.co.uk\/e\/fun-in-the-sun-salsa-picnic-with-live-music-by-son-yambu-on-the-bandstand-at-parliament-hill-tickets-11957576433?aff=ebapi",
            "img": "http:\/\/ebmedia.eventbrite.com\/s3-build\/images\/6617777\/105332319833\/1\/logo.jpg",
            "category": "Music"
        }, {
            "name": "Rachel Sutton @ Chandos Arms Jazz",
            "id": "11637033681",
            "url": "http:\/\/www.eventbrite.co.uk\/e\/rachel-sutton-chandos-arms-jazz-tickets-11637033681?aff=ebapi",
            "img": "http:\/\/ebmedia.eventbrite.com\/s3-build\/images\/6236593\/23431733964\/1\/logo.jpg",
            "category": "Music"
        }, {
            "name": "Djembe Fever with Tom Morley",
            "id": "10893868855",
            "url": "http:\/\/www.eventbrite.co.uk\/e\/djembe-fever-with-tom-morley-tickets-10893868855?aff=ebapi",
            "img": "http:\/\/ebmedia.eventbrite.com\/s3-build\/images\/5211537\/46847711399\/1\/logo.jpg",
            "category": "Music"
        }]
    }, {
        "name": "Hilton on Park Lane London",
        "location": "22 Park Lane, W1K 1BE, London",
        "pricePerNight": "180",
        "website": "http:\/\/www3.hilton.com\/en\/hotels\/united-kingdom\/london-hilton-on-park-lane-LONHITW\/index.html",
        "ameneties": "Wheelchair Access",
        "numRooms": "453",
        "rating": "5",
        "image": "http:\/\/imgec.trivago.com\/partnerimages\/66\/81\/66815204_x.jpeg",
        "events": [{
            "name": "Beatnik Events Presents...June 15th Sunday Social",
            "id": "11650538073",
            "url": "http:\/\/www.eventbrite.co.uk\/e\/beatnik-events-presentsjune-15th-sunday-social-tickets-11650538073?aff=ebapi",
            "img": "http:\/\/ebmedia.eventbrite.com\/s3-build\/images\/6251617\/85448162281\/1\/logo.jpg",
            "category": "Music"
        }, {
            "name": "French Musette Social Dance - Bal Musette \u00e0 La Guinguette aux Moineaux",
            "id": "11265949759",
            "url": "http:\/\/www.eventbrite.co.uk\/e\/french-musette-social-dance-bal-musette-a-la-guinguette-aux-moineaux-tickets-11265949759?aff=ebapi",
            "img": "http:\/\/ebmedia.eventbrite.com\/s3-build\/images\/5996169\/34392725550\/1\/logo.jpg",
            "category": "Music"
        }, {
            "name": "Mr Bojangles - New Orleans Blues Sunday 15 June - 15\/06\/2014",
            "id": "11358963967",
            "url": "http:\/\/www.eventbrite.co.uk\/e\/mr-bojangles-new-orleans-blues-sunday-15-june-15062014-tickets-11358963967?aff=ebapi",
            "img": "http:\/\/ebmedia.eventbrite.com\/s3-build\/images\/5853687\/95812796383\/1\/logo.JPG",
            "category": "Music"
        }, {
            "name": "BPSE Prizewinner Lunchtime Recital",
            "id": "11929253719",
            "url": "http:\/\/www.eventbrite.com\/e\/bpse-prizewinner-lunchtime-recital-tickets-11929253719?aff=ebapi",
            "img": "http:\/\/ebmedia.eventbrite.com\/s3-build\/images\/6585193\/94697310259\/1\/logo.jpg",
            "category": "Music"
        }, {
            "name": "Fulvio Sigurta & The Jason Lyon Trio Monday 16 June - 16\/06\/2014",
            "id": "11358342107",
            "url": "http:\/\/www.eventbrite.co.uk\/e\/fulvio-sigurta-the-jason-lyon-trio-monday-16-june-16062014-tickets-11358342107?aff=ebapi",
            "img": "http:\/\/ebmedia.eventbrite.com\/s3-build\/images\/5852813\/95812796383\/1\/logo.jpg",
            "category": "Music"
        }]
    }];
   

  var numHotels = 3;

  $scope.sliders = {
    'hc1' : {
      'curr' : 1,
      '1': true,
      '2': false,
      '3': false,
    },
    'hc2' : {
      'curr' : 2,
      '1': false,
      '2': true,
      '3': false
    },
    'hc3' : {
      'curr' : 3,
      '1': false,
      '2': false,
      '3': true
    }
  };

  var selectHotel = function (hotel) {
    $scope.selectedHotelIndex = hotel;
    Holiday.setHotel(hotel);
    $scope.next = true;
    $scope.$apply();
  };

  var goToFlights = function () {
    $state.go('bookFlights');
  }

  $scope.btnSelectHotel = function (n) {
    PN.pub('chooseHotel', 'selectHotel', n);
    selectHotel(n);
  };

  $scope.btnGoToFlights = function () {
    PN.pub('chooseHotel', 'goToFlights', Holiday.hotel());
    goToFlights();
  };

  $scope.doSwipe = function(direction, which) {
    alert('which: ' + which + ', direction: ' + direction);
    // var newnum = 0;
    // if (direction == 'up') {
    //    newnum = $scope.sliders[which].curr - 1;
    //   if (newnum == 0) newnum = numHotels;
    //   alert('nn: ' + newnum);
    // }
    // for (i = 0; i < numHotels; i++) {
    //   $scope.sliders[which][i+1] = false;
    // }
    // $scope.sliders[which][newnum] = true;
    // $scope.sliders[which].curr = newnum;
    // $scope.$apply();
  };

}).directive('detectGesturesHotel', function($ionicGesture) {
  return {
    link : function(scope, elem, attrs) {
      $ionicGesture.on('swipeup', function() {
        scope.doSwipe('up', angular.element(elem).attr('id'));
        scope.$apply();
      }, elem);
    }
   }
});
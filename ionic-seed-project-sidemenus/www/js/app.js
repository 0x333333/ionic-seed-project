angular.module('ionicApp', ['ionic', 'ionicApp.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    // .state('main', {
    //   url: '/main',
    //   abstract: true,
    //   templateUrl: 'templates/main.html'
    // })
    // .state('main.home', {
    //   url: '/home',
    //   view: {
    //     'menuContent' :{
    //       templateUrl: "templates/home.html"
    //     }
    //   }
    // })


    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('eventmenu.checkin', {
      url: "/check-in",
      views: {
        'menuContent' :{
          templateUrl: "templates/check-in.html",
          controller: "CheckinCtrl"
        }
      }
    })
    .state('eventmenu.attendees', {
      url: "/attendees",
      views: {
        'menuContent' :{
          templateUrl: "templates/attendees.html",
          controller: "AttendeesCtrl"
        }
      }
    });
  
  $urlRouterProvider.otherwise("/event/home");
});
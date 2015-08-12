'use strict'

angular.module('wtsApp')
.config(function($stateProvider) {

// Landing Page Route

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'client/main/main.view.ng.html',
    controller: 'MainCtrl'
  }),

// Leaderboard Route

  $stateProvider
  .state('leaderboard', {
    url: '/leaderboard',
    templateUrl: 'client/Leaderboard/leaderboard.view.ng.html',
    controller: 'leaderboardCtrl',
    resolve: {
    "currentUser": ["$meteor", function($meteor){
      return $meteor.requireUser();
	    }]
	  }
	}),

// Stats Page Route

	$stateProvider
  .state('stats', {
    url: '/stats',
    templateUrl: 'client/stats/stats.view.ng.html',
    controller: 'statsCtrl',
    resolve: {
    "currentUser": ["$meteor", function($meteor){
      return $meteor.requireUser();
	    }]
	  }
	});
});
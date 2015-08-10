'use strict'

angular.module('wtsApp')
.config(function($stateProvider) {
  $stateProvider
  .state('leaderboard', {
    url: '/leaderboard',
    templateUrl: 'client/Leaderboard/leaderboard.view.ng.html',
    controller: 'leaderboardCtrl'
  });
});
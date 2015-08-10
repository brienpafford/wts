'use strict'

angular.module('wtsApp')
.config(function($stateProvider) {
  $stateProvider
  .state('stats', {
    url: '/stats',
    templateUrl: 'client/stats/stats.view.ng.html',
    controller: 'statsCtrl'
  });
});
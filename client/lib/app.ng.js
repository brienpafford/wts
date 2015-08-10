angular.module('wtsApp', [
  'angular-meteor',
  'ui.router',
  'angularUtils.directives.dirPagination'
]);

onReady = function() {
  angular.bootstrap(document, ['wtsApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
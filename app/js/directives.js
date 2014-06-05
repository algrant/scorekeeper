'use strict';

/* Directives */


angular.module('scoreKeeperApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return {
    	restrict:'A',
    	template:version
    };
  }]);

'use strict';

angular.module('fullstackdemoApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });

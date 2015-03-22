'use strict';

angular.module('homeBudgetApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });



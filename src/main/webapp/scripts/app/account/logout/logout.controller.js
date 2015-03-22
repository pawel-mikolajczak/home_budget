'use strict';

angular.module('homeBudgetApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });

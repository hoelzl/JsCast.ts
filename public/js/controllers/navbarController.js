/**
 * Created by tc on 2/Mar/2014.
 */

define(['app', 'config'], function (app) {

    'use strict';

    app.controller('NavbarController', ['$scope', 'config', function ($scope, config) {
        $scope.appName = config.appName;
    }]);

});

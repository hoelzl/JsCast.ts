/**
 * Created by tc on 2/Mar/2014.
 */

/// <reference path="../../components/DefinitelyTyped/requirejs/require" />

define(['app', 'config'], function (app) {

    'use strict';

    app.controller('NavbarController', ['$scope', 'config', function ($scope, config) {
        $scope.appName = config.appName;
    }]);

});

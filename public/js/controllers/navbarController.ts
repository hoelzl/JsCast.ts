/**
 * Created by tc on 2/Mar/2014.
 */

/// <reference path="../references" />


import app = require('../app');
import config = require('../config');

var controller = app.controller('NavbarController', ['$scope', 'config', function ($scope, config) {
        $scope.appName = config.appName;
    }]);

export = controller;
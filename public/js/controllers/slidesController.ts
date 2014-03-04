/**
 * Created by tc on 3/Mar/2014.
 */

/// <reference path="../../components/DefinitelyTyped/requirejs/require" />

import app = require('../app');
import config = require('../config');

var controller = app.controller('SlidesController', ['$scope', 'config', function ($scope, config) {
    $scope.appName = config.appName;
}]);

export = controller;
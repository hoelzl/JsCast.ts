/// <reference path="../../components/DefinitelyTyped/requirejs/require" />

import app = require('../app');
import config = require('../config');

var controller = app.controller('PageController', ['$scope', 'config', function ($scope, config) {
    $scope.appName = config.appName;
    $scope.slides = [
        {thumbnail: '[thumbnail 1]', title: 'Slide 1'},
        {thumbnail: '[thumbnail 2]', title: 'Slide 2'}
    ]
}]);

export = controller;

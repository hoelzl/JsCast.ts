
/// <reference path="../../components/DefinitelyTyped/requirejs/require" />

define(['app', 'config'], function (app) {

    return app.controller('PageController', ['$scope', 'config', function ($scope, config) {
        $scope.appName = config.appName;
        $scope.slides = [
            {thumbnail: '[thumbnail 1]', title: 'Slide 1'},
            {thumbnail: '[thumbnail 2]', title: 'Slide 2'}
        ]
    }]);

});

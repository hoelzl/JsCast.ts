/**
 * Created by tc on 3/Mar/2014.
 */

/// <reference path="../../components/DefinitelyTyped/requirejs/require" />

define(['app', 'config'], function (app) {

    return app.controller('SlidesController', ['$scope', 'config', function ($scope, config) {
        $scope.appName = config.appName;
    }]);

});

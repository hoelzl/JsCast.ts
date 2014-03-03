/**
 * Created by tc on 3/Mar/2014.
 */
define(['app', 'config'], function (app) {

    'use strict';

    return app.controller('SlidesController', ['$scope', 'config', function ($scope, config) {
        $scope.appName = config.appName;
    }]);

});

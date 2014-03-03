
/// <reference path="../components/DefinitelyTyped/requirejs/require" />

define(['app', 'pageController'], function (app) {

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: './templates/page.html',
                controller: 'PageController'
            });
    }]);
});

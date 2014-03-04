/// <reference path="references" />
/// <amd-dependency path="controllers/pageController"/>

import app = require('app');

var routes = app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: './templates/page.html',
            controller: 'PageController'
        });
}]);

export = routes;

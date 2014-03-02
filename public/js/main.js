requirejs.config({

    baseUrl: '/',

    paths: {

        'jquery': 'components/jquery/dist/jquery',

        'angular': 'components/angular/angular',
        'angularRoute': 'components/angular-route/angular-route',
        'ui.bootstrap': 'components/angular-bootstrap/ui-bootstrap',

        'navbarController': 'js/controllers/navbarController',
        'pageController': 'js/controllers/pageController',

        'app': 'js/app',
        'config': 'js/config',
        'routes': 'js/routes',
        'controllers': 'js/controllers'
    },

    shim: {

        'jquery': {
            exports: 'jQuery'
        },
        'angular': {
            deps: [ 'jquery' ],
            exports: 'angular'
        },
        'angularRoute': {
            deps: [ 'angular' ]
        },
        'ui.bootstrap': {
            deps: [ 'jquery', 'angular' ]
        }
    }
});


require([

    'angular',
    'config',
    'routes',
    'controllers'

], function(angular) {

    'use strict';

    angular.bootstrap(document, ['jscast']);
    $('body').removeClass('hidden');
});

/// <reference path="references"/>
/// <amd-dependency path="app"/>
/// <amd-dependency path="config"/>
/// <amd-dependency path="controllers"/>

requirejs.config({

    baseUrl: '/',

    paths: {

        'domReady': 'components/requirejs-domready/domReady',

        'amd': 'js/amd',

        'jquery': 'components/jquery/dist/jquery',
        'underscore': 'components/underscore/underscore',

        'angular': 'components/angular/angular',
        'angularRoute': 'components/angular-route/angular-route',
        'ui.bootstrap': 'components/angular-bootstrap/ui-bootstrap',

        'navbarController': 'js/controllers/navbarController',
        'slidesController': 'js/controllers/slidesController',
        'jsCastController': 'js/controllers/jsCastController',
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

import angular = require('./amd/angular');
import domReady = require('./amd/domReady');

export function resizeCanvas() {

    var mainCanvas = <HTMLCanvasElement> $('#main-canvas')[0];
    var viewport = document.defaultView;
    var slidesWidth = $('#slide-list').width();
    var inspectorWidth = $('#inspector').width();
    var offsetTop = mainCanvas.offsetTop;
    var additionalOffset = 10;
    mainCanvas.height = viewport.innerHeight - offsetTop - additionalOffset;
    // Remove 4 times the offset to compensate for margins of slide list and inspector.
    mainCanvas.width = viewport.innerWidth - slidesWidth - inspectorWidth - 4 * additionalOffset;
}

domReady(function () {
    angular.bootstrap(document, ['app']);
    document.defaultView.addEventListener('resize', resizeCanvas);

    $('body').removeClass('hidden');

    resizeCanvas();
});

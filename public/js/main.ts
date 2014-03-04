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

// Cannot yet use the configured paths, since this code lives inside the same
// module as the config object.

import angular = require('./amd/angular');
import domReady = require('./amd/domReady');

export function computeMaxDimensions (canvas) {
    var slideList = $('#slide-list');

    if (slideList.length > 0) {
        var offsetLeft = slideList.offset().left + slideList.outerWidth(true);
        var offsetTop = slideList.offset().top;
    } else {
        offsetLeft = 0;
        offsetTop = canvas.offset().top;
    }

    var inspector = $('#inspector');
    var inspectorWidth = inspector.outerWidth(true) || 0;

    var additionalOffset = canvas.outerWidth(true) - canvas.outerWidth();
    var viewport = $(document.defaultView);

    // console.log(viewport.width(), offsetLeft, inspectorWidth, additionalOffset);

    return {
        height: viewport.height() - offsetTop - 10,
        width: viewport.width() - offsetLeft - inspectorWidth - additionalOffset
    }
}

export function resizeCanvas() {
    var mainCanvas = $('#main-canvas');
    var dimensions = computeMaxDimensions(mainCanvas);

    // Note: set the height and width of the underlying canvas element.  Using
    // the jQuery height and with leads to a CSS transform of the canvas in its
    // original size.  Maybe combine these two things to achieve scaling to
    // the screen proportions.
    // console.log('canvas dimensions', dimensions.height, dimensions.width);
    var canvasDom = mainCanvas.get(0);
    canvasDom.height = dimensions.height;
    canvasDom.width = dimensions.width;
}

domReady(function () {
    angular.bootstrap(document, ['app']);
    document.defaultView.addEventListener('resize', resizeCanvas);

    $('body').removeClass('hidden');

    resizeCanvas();
    setTimeout(resizeCanvas);
});

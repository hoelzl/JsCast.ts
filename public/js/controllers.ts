/**
 * Created by tc on 3/Mar/2014.
 */

/// <reference path="../components/DefinitelyTyped/requirejs/require" />

// Load all controllers used in the main page.
define(['app', 'jsCastController', 'navbarController', 'slidesController'],
    function (app, jsCastController) {
        return {
            app: app,
            jsCastController: jsCastController
        };
    });

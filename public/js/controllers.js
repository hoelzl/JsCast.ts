/**
 * Created by tc on 3/Mar/2014.
 */

// Load all controllers used in the main page.
define(['app', 'jsCastController', 'navbarController', 'slidesController'],
    function (app, jsCastController) {

        'use strict';
        return {
            app: app,
            jsCastController: jsCastController
        };

    });

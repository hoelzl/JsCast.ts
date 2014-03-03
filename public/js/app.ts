/**
 * Created by tc on 3/Mar/2014.
 */

/// <reference path="../components/DefinitelyTyped/requirejs/require" />

define(['angular', 'angularRoute', 'ui.bootstrap', 'underscore'],
    function (angular) {
        return angular.module('jscast', ['ngRoute', 'ui.bootstrap']);
    });

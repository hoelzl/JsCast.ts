/**
 * Created by tc on 3/Mar/2014.
 */

/// <reference path="references"/>
/// <amd-dependency path="./components/jquery/dist/jquery.js"/>
/// <amd-dependency path="./components/angular-bootstrap/ui-bootstrap.js"/>
/// <amd-dependency path="./components/angular-route/angular-route.js"/>

import angular = require('amd/angular');

var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);
export = app;



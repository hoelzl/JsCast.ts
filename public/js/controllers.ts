/**
 * Created by tc on 3/Mar/2014.
 */

/// <reference path="references"/>
import appModule = require('app');
import jsCast = require('./controllers/JsCastController');
import navbar = require('./controllers/NavbarController');
import page = require('./controllers/PageController');
import slides = require('./controllers/SlidesController');

export var app = appModule;
export var JsCastController = jsCast;
export var NavbarController = navbar;
export var PageController = page;
export var SlidesController = slides;

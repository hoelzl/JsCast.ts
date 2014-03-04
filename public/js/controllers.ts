/**
 * Created by tc on 3/Mar/2014.
 */

/// <reference path="references"/>
import app = require('app');
import jsCast = require('./controllers/jsCastController');
import navbar = require('./controllers/navbarController');
import page = require('./controllers/pageController');
import slides = require('./controllers/slidesController');

export var jscast = app;
export var jsCastController = jsCast;
export var navbarController = navbar;
export var pageController = page;
export var slidesController = slides;

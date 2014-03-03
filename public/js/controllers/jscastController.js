/**
 * Created by tc on 3/Mar/2014.
 */
define(['app', 'config'], function (app) {

    'use strict';

    return app.controller('JsCastController', ['$scope', 'config', function ($scope, config) {
        $scope.appName = config.appName;

        $scope.slides = [
            {id: 1, thumbnail: '[thumbnail 1]', title: 'Slide 1'},
            {id: 2, thumbnail: '[thumbnail 2]', title: 'Slide 2'}
        ];

        $scope.slideCounter = 3;
        $scope.currentSlideId = 1;

        $scope.setCurrentSlideId = function (id) {
            console.log('Setting slide id:', id);
            $scope.currentSlideId = id;
        };

        $scope.newSlide = function () {
            var slideId = $scope.slideCounter++;
            $scope.slides.push({
                id: slideId,
                thumbnail: '[thumbnail ' + slideId + ']',
                title: 'Slide ' + slideId
            });
            $scope.currentSlideId = slideId;
        };

        $scope.findSlide = function (id) {
            return _.find($scope.slides, function (slide) {
                return slide.id === id;
            });
        };

        // TODO: rewrite to search the array only once
        $scope.findSlideIndex = function (id) {
            return _.indexOf($scope.slides, $scope.findSlide(id));
        };

        $scope.insertAfterSlide = function (originalSlide, newSlide) {
            var slides = $scope.slides;
            if (originalSlide) {
                slides.splice(_.indexOf(slides, originalSlide) + 1, 0, newSlide);
                $scope.currentSlideId = newSlide.id;
            } else {
                throw Error('Cannot find slide to duplicate?');
            }
        };

        $scope.duplicateSlide = function () {
            var originalSlide = $scope.findSlide($scope.currentSlideId);
            var newSlideId = $scope.slideCounter++;
            var newSlide = {
                id: newSlideId,
                thumbnail: originalSlide.thumbnail,
                title: 'Slide ' + newSlideId + ' (-> ' + originalSlide.title + ')'
            }
            $scope.insertAfterSlide(originalSlide, newSlide);
        };

        $scope.deleteSlide = function () {
            console.log('Delete slide');
            var slideIndex = $scope.findSlideIndex($scope.currentSlideId);
            var slides = $scope.slides;
            slides.splice(slideIndex, 1);
            if (slideIndex >= slides.length) {
                $scope.currentSlideId = slides[slideIndex - 1].id;
            } else {
                $scope.currentSlideId = slides[slideIndex].id;
            }
        }
    }]);

});

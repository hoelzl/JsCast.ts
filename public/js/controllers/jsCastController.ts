/**
 * Created by tc on 3/Mar/2014.
 */

/// <reference path="../../components/DefinitelyTyped/requirejs/require" />
/// <reference path="../../components/DefinitelyTyped/underscore/underscore" />

interface ISlide {
    id: number;
    thumbnail: any;
    title: string;
    contents: {text: string};
}

define(['app', 'config'], function (app) {
    function getMainCanvas() :HTMLCanvasElement {
        return <HTMLCanvasElement> document.getElementById('main-canvas');
    }

    return app.controller('JsCastController', ['$scope', 'config', function ($scope, config) {

        $scope.appName = config.appName;

        $scope.slides = [
            { id: 1, thumbnail: '[thumbnail 1]',
                title: 'Slide 1', contents: { text: 'Some text' }},
            {id: 2, thumbnail: '[thumbnail 2]',
                title: 'Slide 2', contents: { text: 'Another text' }}
        ];

        $scope.slideCounter = 3;
        $scope.currentSlideId = 1;

        $scope.setCurrentSlideId = function (id) {
            $scope.currentSlideId = id;
            $scope.drawContents();
        };

        $scope.newSlide = function () {
            var slideId = $scope.slideCounter++;
            $scope.slides.push({
                id: slideId,
                thumbnail: '[thumbnail ' + slideId + ']',
                title: 'Slide ' + slideId,
                contents: { text: (Math.random() * 0xffffffffff).toString(36) }
            });
            $scope.setCurrentSlideId(slideId);
        };

        $scope.findSlide = function (id: number) {
            return _.find($scope.slides, function (slide: ISlide) {
                return slide.id === id;
            });
        };

        $scope.currentSlide = function () {
            return $scope.findSlide($scope.currentSlideId);
        };


        // TODO: rewrite to search the array only once
        $scope.findSlideIndex = function (id) {
            return _.indexOf($scope.slides, $scope.findSlide(id));
        };

        $scope.insertAfterSlide = function (originalSlide, newSlide) {
            var slides = $scope.slides;
            if (originalSlide) {
                slides.splice(_.indexOf(slides, originalSlide) + 1, 0, newSlide);
                $scope.setCurrentSlideId(newSlide.id);
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
                title: 'Slide ' + newSlideId + ' (-> ' + originalSlide.title + ')',
                // TODO: Should clone contents.
                contents: originalSlide.contents
            };
            $scope.insertAfterSlide(originalSlide, newSlide);
        };

        $scope.deleteSlide = function () {
            var slideIndex = $scope.findSlideIndex($scope.currentSlideId);
            var slides = $scope.slides;
            slides.splice(slideIndex, 1);
            if (slideIndex >= slides.length) {
                $scope.setCurrentSlideId(slides[slideIndex - 1].id);
            } else {
                $scope.setCurrentSlideId(slides[slideIndex].id);
            }
        }

        $scope.drawContents = function () {
            console.log('drawContents()');
            var slide = $scope.findSlide($scope.currentSlideId);
            var text = slide.contents.text;
            if (text) {
                var canvas = getMainCanvas();
                // Clear the canvas
                canvas.width = canvas.width;
                var context = canvas.getContext('2d');
                context.font = 'italic 40pt Calibri';
                context.fillText(slide.contents.text, 150, 100);
            }
        }
    }]);

});

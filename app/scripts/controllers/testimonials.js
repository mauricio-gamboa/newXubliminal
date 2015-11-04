'use strict';

/**
 * @ngdoc function
 * @name xubliminalApp.controller:TestimonialsCtrl
 * @description
 * # TestimonialsCtrl
 * Controller of the xubliminalApp
 */
angular.module('xubliminalApp')
  .controller('TestimonialsCtrl', ['$log', 'xubServices', function ($log, xubServices) {
    this.testimonialsData = angular.bind(this, function (testimonials) {
      if (!testimonials.length) return;
      this.testimonials = testimonials;
    });

    this.errorTestimonials = function (error) {
      $log.error('There was an error');
    };

    xubServices.getTestimonials(this.testimonialsData, this.errorTestimonials);
  }]);

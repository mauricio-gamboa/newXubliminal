'use strict';

/**
 * @ngdoc function
 * @name xubliminalApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the xubliminalApp
 */
angular.module('xubliminalApp')
  .controller('GalleryCtrl', ['$log', 'xubServices', function ($log, xubServices) {

    this.galleryItems = angular.bind(this, function (items) {
      if (!items.length) return;
      this.items = items;
    });

    this.errorGallery = function (error) {
      $log.error('There was an error');
    };

    xubServices.getGallery(this.galleryItems, this.errorGallery);
  }]);

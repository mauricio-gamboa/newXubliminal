'use strict';

/**
 * @ngdoc service
 * @name xubliminalApp.xubServices
 * @description
 * # xubServices
 * Factory in the xubliminalApp.
 */
angular.module('xubliminalApp')
  .factory('xubServices', ['$http', function ($http) {
    return {
      getServices: function (successCallback, errorCallback) {
        $http({
          method: 'GET',
          url: 'data/services.json'
        }).
          success(function (data, status, headers, config) {
            successCallback(data);
          }).
          error(function (data, status, headers, config) {
            errorCallback(data);
          });
      },

      getGallery: function (successCallback, errorCallback) {
        $http({
          method: 'GET',
          url: 'data/gallery.json'
        }).
          success(function (data, status, headers, config) {
            successCallback(data);
          }).
          error(function (data, status, headers, config) {
            errorCallback(data);
          });
      },

      getTestimonials: function (successCallback, errorCallback) {
        $http({
          method: 'GET',
          url: 'data/testimonials.json'
        }).
          success(function (data, status, headers, config) {
            successCallback(data);
          }).
          error(function (data, status, headers, config) {
            errorCallback(data);
          });
      },

      getRecentWork: function (successCallback, errorCallback) {
        $http({
          method: 'GET',
          url: 'data/recentWork.json'
        }).
          success(function (data, status, headers, config) {
            successCallback(data);
          }).
          error(function (data, status, headers, config) {
            errorCallback(data);
          });
      },

      submitGetQuote: function (data, successCallback, errorCallback) {
        $http({
          method: 'POST',
          url: 'process.php',
          data: $.param(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).
          success(function (data, status, headers, config) {
            successCallback(data);
          }).
          error(function (data, status, headers, config) {
            errorCallback(data);
          });
      }
    };
  }]);

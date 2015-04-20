'use strict';

angular.module('main').factory('books', function ($http) {
    return {
        search: function (title, authors) {
            return $http.get('books', {
                params: {
                    title: title,
                    authors: authors
                }
            }).then(function (response) {
                return response.data;
            });
        }
    };
});
'use strict';

angular.module('main').controller('SearchCtrl', function (books) {
    this.criteria = {};
    this.results = [];

    this.doSearch = function () {
        var that = this;
        books.search(this.criteria.title, this.criteria.authors).then(function (matchingBooks) {
            that.results = matchingBooks;
        });
    };

    this.resultsNotEmpty = function () {
        return this.results && this.results.length > 0;
    };
});
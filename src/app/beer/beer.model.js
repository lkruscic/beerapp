"use strict";
exports.__esModule = true;
var FilterBeers = (function () {
    function FilterBeers(page, name, styleId) {
        this.page = page;
        this.name = name;
        this.styleId = styleId;
    }
    FilterBeers.prototype.getParamsAsUrl = function () {
        var params = "p=" + this.page.toString();
        if (this.name != null)
            params += "&name=" + this.name.toString();
        if (this.styleId != null)
            params += "&styleId=" + this.styleId.toString();
        return params;
    };
    return FilterBeers;
}());
exports.FilterBeers = FilterBeers;
var Beer = (function () {
    function Beer() {
    }
    return Beer;
}());
exports.Beer = Beer;
var BeerPage = (function () {
    function BeerPage(currentPage, numberOfPages, totalResults, beers) {
        var _this = this;
        this.currentPage = currentPage;
        this.numberOfPages = numberOfPages;
        this.totalResults = totalResults;
        this.beers = beers;
        this.getNextPageNumber = function () {
            var nextPage = _this.currentPage < _this.numberOfPages ?
                _this.currentPage + 1 :
                _this.numberOfPages;
            return nextPage;
        };
        this.getPreviousPageNumber = function () {
            var previousPage = _this.currentPage > 1 ?
                _this.currentPage - 1 :
                1;
            return previousPage;
        };
    }
    BeerPage.CreateUndefined = function () {
        return new BeerPage(undefined, undefined, undefined, undefined);
    };
    return BeerPage;
}());
exports.BeerPage = BeerPage;

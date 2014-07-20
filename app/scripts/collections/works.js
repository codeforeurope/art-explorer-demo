/*global Explorer, Backbone*/

Explorer.Collections = Explorer.Collections || {};

(function () {
  'use strict';

  Explorer.Collections.Works = Backbone.Collection.extend({
    model: Explorer.Models.Work,
    url: 'http://data.manchestergalleries.asacalow.me/search',

    initialize: function(opts) {
      this._isLoading = false;
    },
    parse: function(response) {
      this._options = response.facets;
      this._count = response.total;

      return response.items;
    },
    search: function(q) {
      this._query = q;
      this.load();
    },
    reload: function() {
      this._query.resetPageCount();
      this.load();
    },
    loadMore: function() {
      this._query.nextPage();
      this.load();
    },
    load: function() {
      var works = this;

      works.startLoading();
      this.fetch({
        data: this._query.getQueryData(),
        reset: true,
        success: function(c, r, o) {
          works.finishLoading();
        }
      });
    },
    startLoading: function() {
      this._isLoading = true;
    },
    finishLoading: function() {
      this._isLoading = false;
      // first set of results, so trigger a search event
      if (this._query.isFirstPage()) {
        this.trigger('search');
      }
    },
    isLoading: function() {
      return this._isLoading;
    },

    getFilteredOptions: function(filters) {
      var options = _.reduce(this._options, function(o, option) {
        var title = option.title,
            terms = option.terms,
            filter = _.find(filters, function(f) {
              return (f.title == title);
            });

        if (filter) {
          terms = _.reject(terms, function(term) {
            return (_.contains(filter.terms, term.term));
          });
        }

        o.push({ title: title, terms: terms });
        return o;
      }, []);

      return options;
    },
    count: function() {
      return this._count;
    }
  });

})();

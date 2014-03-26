/*global Explorer, $*/

(function () {
    'use strict';

    Explorer.Query = function(q) {
      this._page = 1;
      this._perPage = 12;
      this._query = q;
      this._filters = {};
    }

    _.extend(Explorer.Query.prototype, {
      getQuery: function() {
        return this._query
      },
      getQueryData: function() {
        return { q: this._query, p: this._page, pp: this._perPage }
      },
      addFilter: function(option, term) {
        if (!this._filters[option]) {
          this._filters[option] = [];
        }
        this._filters[option].push(term);

        return true;
      },
      removeFilter: function(option, term) {
        var terms = this._filters[option];
        terms = _.without(terms, term);
        if (terms.length == 0) {
          delete this._filters[option];
        } else {
          this._filters[option] = terms;
        }
        
        return true;
      },
      getFilterOptions: function() {
        var filterOptions = _.map(this._filters, function(terms, title) {
          return { title: title, terms: terms };
        });

        return filterOptions;
      },
      nextPage: function() {
        this._page += 1;
        return true;
      },
      resetPageCount: function() {
        this._page = 1;
        return true;
      },
      isFirstPage: function() {
        return (this._page == 1);
      }
    });
})();

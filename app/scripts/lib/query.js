/*global Explorer, $*/

(function () {
    'use strict';

    Explorer.Query = function(q) {
      this._page = 1;
      this._perPage = 12;
      this._query = q;
      this._filters = {};

      this.setSortField('identifier');
    }

    _.extend(Explorer.Query.prototype, {
      getQuery: function() {
        return this._query
      },
      getQueryData: function() {
        var query = {
          q: this._query,
          p: this._page,
          pp: this._perPage,
          i: true,
          f: 'creator,type,subject',
          s: this.getSortField(),
          so: this.getSortOrder()
        };

        if (this._filters) {
          _.extend(query, this.getFilterData());
        }

        return query;
      },
      addFilter: function(option, term) {
        if (!this._filters[option]) {
          this._filters[option] = [];
        }
        this._filters[option].push(term);

        return true;
      },
      addFacets: function(facets) {
        this._facets = facets;
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
      getFilterData: function() {
        var filterData = _.reduce(this._filters, function(memo, terms, title) {
          memo[title] = terms.join(',');
          return memo;
        }, {});

        return filterData;
      },
      setSortField: function(sortField) {
        this._sortField = sortField;
      },
      getSortField: function() {
        return this._sortField;
      },
      getSortOrder: function() {
        return {
          'identifier': 'asc',
          'earliest': 'asc',
          'latest': 'desc'
        }[this.getSortField()];
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
      },
      isFiltered: function() {
        return !_.isEmpty(this._filters);
      }
    });
})();

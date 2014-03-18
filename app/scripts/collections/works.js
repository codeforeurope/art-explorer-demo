/*global Explorer, Backbone*/

Explorer.Collections = Explorer.Collections || {};

(function () {
  'use strict';

  Explorer.Collections.Works = Backbone.Collection.extend({
    model: Explorer.Models.Work,
    url: 'http://data.manchestergalleries.dev/search',

    initialize: function(opts) {
      this.page = 1;
      this._isLoading = false;
    },
    parse: function(response) {
      return response.items;
    },
    search: function(q) {
      this.reset();
      this.query = q;
      this.page = 1;

      this.load();
    },
    loadMore: function() {
      this.page += 1;
      this.load();
    },
    load: function() {
      var works = this;

      works._isLoading = true
      this.fetch({
        data: { q: this.query, page: this.page, pp: 12 },
        reset: true,
        success: function(c, r, o) {
          works._isLoading = false;
        }
      });
    },
    isLoading: function() {
      return this._isLoading;
    }
  });

})();

/*global Explorer, Backbone*/

Explorer.Collections = Explorer.Collections || {};

(function () {
  'use strict';

  Explorer.Collections.Works = Backbone.Collection.extend({
    model: Explorer.Models.Work,
    url: 'http://data.manchestergalleries.dev/search',

    fetch: function(opts) {
      var collection = this;
      $.get(this.url, opts.data, function(data) {
        collection.total = data.total;
        collection.add(data.items);
      });
    }
  });

})();

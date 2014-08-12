/*global Explorer, Backbone, JST*/

Explorer.Views = Explorer.Views || {};

(function () {
  'use strict';

  Explorer.Views.WorkView = Backbone.View.extend({
    events: {
      'click a.back-to-query': 'backToQuery'
    },

    template: JST["templates/work.hbs"],

    render: function(identifier, query) {
      var el = this.$el,
          template = this.template,
          work = new Explorer.Models.Work({identifier: identifier}),
          q;
      if (query) {
        this._query = query
        q = query.getQuery();
      }

      Explorer.showSpinner();
      work.fetch({
        success: function() {
          Explorer.hideSpinner();
          var html = template({query: q, work: work.attributes});
          el.empty();
          el.append(html);
        }
      });
      el.empty();

      return this;
    },

    backToQuery: function(e) {
      this._query.resetPageCount();
      Explorer.getAppRouter().navigate('/search/'+this._query.getQuery());
      Explorer.renderSearchResults(this._query);
      e.preventDefault();
    }
  });
})();

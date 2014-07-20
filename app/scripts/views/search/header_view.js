/*global Explorer, Backbone, JST*/

Explorer.Views = Explorer.Views || {};

(function () {
  'use strict';

  Explorer.Views.HeaderView = Backbone.View.extend({
    template: JST["templates/search/header.hbs"],

    events: {
      'click a.sort': 'sortOptionSelected'
    },

    initialize: function() {
      this._sortOptions = {
        'identifier': 'Accession No.',
        'earliest': 'Creation Date, earliest first',
        'latest': 'Creation Date, latest first'
      };
    },
    render: function(query, works) {
      var template = this.template,
          templateData = {count: works.count(), query: query.getQuery()},
          html,
          el = this.$el;

      templateData['sortedBy'] = this.sortedBy(query);
      templateData['additionalSortOptions'] = this.additionalSortOptions(query);

      if (query.isFiltered()) {
        templateData['filtered'] = true;
      }

      html = template(templateData);
      el.append(html);

      return this;
    },
    sortedBy: function(query) {
      return this._sortOptions[query.getSortField()];
    },
    additionalSortOptions: function(query) {
      var options = this._sortOptions,
          keys = _.keys(options);
      keys = _.without(keys, query.getSortField());
      return _.map(keys, function(key) {
        return { value: key, title: options[key] };
      });
    },
    sortOptionSelected: function(e) {
      var a = $(e.currentTarget),
          sortField = a.data('option');
      this.trigger('sortOptionSelected', sortField);
      e.preventDefault();

      return true;
    }
  });
})();

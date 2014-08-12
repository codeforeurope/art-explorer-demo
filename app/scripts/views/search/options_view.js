/*global Explorer, Backbone, JST*/

Explorer.Views = Explorer.Views || {};

(function () {
  'use strict';

  Explorer.Views.OptionsView = Backbone.View.extend({
    template: JST["templates/search/options.hbs"],

    events: {
      'click a.select-option': 'optionSelected',
      'click a.remove-option': 'optionDeselected'
    },

    render: function(query, works) {
      var el = this.$el,
          filters = query.getFilterOptions(),
          options = works.getFilteredOptions(filters),
          filtersToDisplay = this._addTitlesFromFacetMap(filters),
          optionsToDisplay = this._addTitlesFromFacetMap(options),
          html = this.template({ options: optionsToDisplay, filters: filtersToDisplay });

      el.empty();
      el.append(html);

      return this;
    },

    optionSelected: function(e) {
      this._triggerOptionEvent(e, 'optionSelected');
      e.preventDefault();
    },

    optionDeselected: function(e) {
      this._triggerOptionEvent(e, 'optionDeselected');
      e.preventDefault();
    },

    _triggerOptionEvent: function(e, type) {
      var a = $(e.currentTarget),
          term = a.data('term'),
          option = a.data('option');
      this.trigger(type, option, term);
      return true;
    },

    clear: function() {
      this.$el.empty();
      return true;
    },

    facetMap: function() {
      var facetMap = {
        'creator': 'Artist',
        'medium': 'Medium',
        'type': 'Type',
        'subject': 'Subject'
      };
      return facetMap;
    },

    _addTitlesFromFacetMap: function(options) {
      var optionsView = this,
          optionsWithTitles = _.map(options, function(o) {
            var title = optionsView.facetMap()[o.title];
            return {title: title, terms: o.terms, value: o.title}
          });
      return optionsWithTitles;
    }
  });
})();

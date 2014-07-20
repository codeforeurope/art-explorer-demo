/*global Explorer, Backbone, JST*/

Explorer.Views = Explorer.Views || {};

(function () {
  'use strict';

  Explorer.Views.SearchView = Backbone.View.extend({
    template: JST['templates/search.hbs'],

    render: function(query) {
      var searchView = this,
          el = this.$el,
          template = this.template,
          html = $(template()),
          works = this._works = new Explorer.Collections.Works(),
          headerView = new Explorer.Views.HeaderView({ el: html.find('header.main')}),
          worksView = new Explorer.Views.WorksView({ el: html.find('div.works')}),
          optionsView = new Explorer.Views.OptionsView({ el: html.find('div.options')});

      el.empty();
      el.append(html);
      works.search(query);

      Explorer.showSpinner();
      works.on('search', function() {
        Explorer.hideSpinner();
        headerView.render(query, this);
        optionsView.render(query, this);
      });
      works.on('sync', function() {
        worksView.render(this);
      });

      optionsView.on('optionSelected', function(option, term) {
        query.addFilter(option,term);
        searchView.render(query);
      });

      optionsView.on('optionDeselected', function(option, term) {
        query.removeFilter(option,term);
        searchView.render(query);
      });

      headerView.on('sortOptionSelected', function(sortField) {
        query.setSortField(sortField);
        searchView.render(query);
      });
    },

    isLoading: function() {
      return this._works.isLoading();
    },
    loadMore: function() {
      this._works.loadMore();
    },
    _removeSpinner: function() {
      this.$el.find('.spinner').remove();
    }
  });
})();

/*global Explorer, $*/

window.Explorer = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';

    var explorer = this,
        works = this._works = new Explorer.Collections.Works(),
        worksView = this._worksView = worksView = new Explorer.Views.WorksView({ el: $('div#works')}),
        optionsView = this._optionsView = new Explorer.Views.OptionsView({ el: $('div#options')}),
        query,
        searchForm = $('form#search'),
        router = new Explorer.Routers.AppRouter();

    Backbone.history.start();

    router.on('route:search', function(q) {
      query = new Explorer.Query(q);
      explorer.search(query);
    });

    searchForm.on('submit', function() {
      var searchInput = searchForm.find('input'),
          q = searchInput.val();
      searchInput.val('');
      router.navigate('/search/'+q, {trigger: true});

      return false; // prevent the form from doing its usual thing
    });

    works.on('search', function() {
      worksView.renderHeader(query, this);
      optionsView.render(query, this);
    });
    works.on('sync', function() {
      worksView.render(this);
    });

    optionsView.on('optionSelected', function(option, term) {
      query.addFilter(option,term);
      explorer.search(query);
    });

    optionsView.on('optionDeselected', function(option, term) {
      query.removeFilter(option,term);
      explorer.search(query);
    });

    $(window).on('scroll', function() {
      explorer.scrollCheck();
    });
  },

  search: function(query) {
    $(window).scrollTop(0);
    this._worksView.clear();
    this._optionsView.clear();
    this._works.search(query);
    return true;
  },

  scrollCheck: function() {
    if (this._works.isLoading()) {
      return false; // do nothing
    }

    var triggerPoint = 100,
        contentHeight = $('body').prop('scrollHeight'),
        viewed = $(window).scrollTop() + $(window).height();

    if (viewed+triggerPoint >= contentHeight) {
      this._works.loadMore();
    }
    return true;
  }
};

$(document).ready(function () {
  'use strict';
  Explorer.init();
});

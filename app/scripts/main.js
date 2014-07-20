/*global Explorer, $*/

window.Explorer = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';

    var explorer = this,
        query,
        mainContainer = this._mainContainer = $('div#main'),
        searchView = this._searchView = new Explorer.Views.SearchView({el: mainContainer}),
        workView = new Explorer.Views.WorkView({el: mainContainer}),
        searchForm = $('form#search'),
        appRouter = this._appRouter = new Explorer.Routers.AppRouter();

    Backbone.history.start();

    appRouter.on('route:search', function(q) {
      query = new Explorer.Query(q);
      explorer.renderSearchResults(query);
    });
    appRouter.on('route:showWork', function(irn) {
      workView.render(irn, query);
    });

    searchForm.on('submit', function(e) {
      var searchInput = searchForm.find('input'),
          q = searchInput.val();
      searchInput.val('');
      appRouter.navigate('/search/'+q, {trigger: true});

      e.preventDefault();
    });

    $(window).on('scroll', function() {
      explorer.scrollCheck(searchView);
    });
  },

  renderSearchResults: function(query) {
    this._searchView.render(query);
  },

  scrollCheck: function(searchView) {
    if (searchView.isLoading()) {
      return; // do nothing
    }

    var triggerPoint = 100,
        contentHeight = $('body').prop('scrollHeight'),
        viewed = $(window).scrollTop() + $(window).height();

    if (viewed+triggerPoint >= contentHeight) {
      searchView.loadMore();
    }
    return true;
  },

  getAppRouter: function() {
    return this._appRouter;
  },

  showSpinner: function() {
    var spinner = this._spinner = $('<div class="loader"><div class="spinner" /></div>');
    this._mainContainer.append(spinner);
  },

  hideSpinner: function() {
    this._spinner.remove();
  }
};

$(document).ready(function () {
  'use strict';
  Explorer.init();
});

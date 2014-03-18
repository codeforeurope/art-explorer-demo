/*global Explorer, $*/

window.Explorer = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    Backbone.history.start({pushState: true});

    var works = new Explorer.Collections.Works(),
        worksContainer = $('div#works'),
        worksView = new Explorer.Views.WorksView({ el: worksContainer, works: works});

    worksContainer.masonry({itemSelector: '.item', columnWidth: 10});
    works.search('*');

    $(window).on('scroll', function() {
      if (works.isLoading()) {
        return false; // do nothing
      }

      var triggerPoint = 100,
          contentHeight = $('body').prop('scrollHeight'),
          viewed = $(window).scrollTop() + $(window).height();

      if (viewed+triggerPoint >= contentHeight) {
        console.log('moarrr!');
        works.loadMore();
      }
    });
  }
};

$(document).ready(function () {
  'use strict';
  Explorer.init();
});

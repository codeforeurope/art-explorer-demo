/*global Explorer, $*/

window.Explorer = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    Backbone.history.start({pushState: true});

    var works = new Explorer.Collections.Works();

    works.on('add', function(work) {
      var workView = new Explorer.Views.WorkView({el: $('#works'), work: work});
      workView.render();
    });

    works.fetch({
      data: { q: '*', pp: 12 }
    });
  }
};

$(document).ready(function () {
  'use strict';
  Explorer.init();
});

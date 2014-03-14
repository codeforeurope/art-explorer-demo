/*global Explorer, $*/

window.Explorer = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    Backbone.history.start({pushState: true});

    var worksContainer = $('div#works');
    var works = new Explorer.Collections.Works();
    works.on('add', function(work) {
      // TODO: not this
      var r = Math.floor(Math.random() * 99)*4 + 96;
      work.set('imageURL','http://placekitten.com/320/'+r);

      var workView = new Explorer.Views.WorkView({el: worksContainer, work: work});
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

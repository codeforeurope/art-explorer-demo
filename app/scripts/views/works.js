/*global Explorer, Backbone, JST*/

Explorer.Views = Explorer.Views || {};

(function () {
  'use strict';

  Explorer.Views.WorksView = Backbone.View.extend({
    template: JST["templates/work.hbs"],

    initialize: function(opts) {
      var worksView = this;

      this.works = opts.works;
      this.works.on('sync', function(works, r) {
        worksView.render();
      });
    },

    render: function() {
      var el = this.$el,
          template = this.template,
          tempDiv = $('<div style="position:absolute;left: -999px" />');

      $('body').append(tempDiv);
      this.works.each(function(work) {
        var html = template(work.attributes);
        tempDiv.append(html);
      });
      tempDiv.imagesLoaded(function() {
        var newItems = tempDiv.children().detach();
        tempDiv.remove();
        el.append(newItems).masonry('appended', newItems);
      });

      return this;
    }
  });
})();

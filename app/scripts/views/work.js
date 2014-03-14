/*global Explorer, Backbone, JST*/

Explorer.Views = Explorer.Views || {};

(function () {
    'use strict';

    Explorer.Views.WorkView = Backbone.View.extend({
        template: JST[".tmp/scripts/templates/work.hbs"],

        initialize: function(opts) {
          this.work = opts.work;
        },

        render: function() {
          var html = $(this.template(this.work.attributes)),
              el = this.$el;
          el.imagesLoaded(function() {
            el.masonry({ itemSelector: 'div.item' });
          });
          el.append(html);
        }
    });
})();

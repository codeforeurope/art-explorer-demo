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
          console.log(this.work);
          var html = this.template(this.work.attributes);
          this.$el.append(html);
        }
    });

})();

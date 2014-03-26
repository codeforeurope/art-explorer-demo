/*global Explorer, Backbone, JST*/

Explorer.Views = Explorer.Views || {};

(function () {
  'use strict';

  Explorer.Views.WorksView = Backbone.View.extend({
    template: JST["templates/work.hbs"],
    headerTemplate: JST["templates/work_header.hbs"],

    initialize: function(opts) {
      this.headerTemplate = JST["templates/work_header.hbs"];
    },

    render: function(works) {
      var el = this.$el.find('.items'),
          template = this.template,
          tempDiv = $('<div style="position:absolute;left:-999px" />');

      $('body').append(tempDiv);
      works.each(function(work) {
        var html = template(work.attributes);
        tempDiv.append(html);
      });
      tempDiv.imagesLoaded(function() {
        var newItems = tempDiv.children().detach();
        tempDiv.remove();
        el.append(newItems).masonry('appended', newItems);
      });

      return this;
    },

    renderHeader: function(query, works) {
      var template = this.headerTemplate,
          html = template({count: works.count(), query: query.getQuery()}),
          el = this.$el;
      el.append(html);
      el.find('.items').masonry({itemSelector: '.item', columnWidth: 10});
    },

    clear: function() {
      this.$el.empty();
    }
  });
})();

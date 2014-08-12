/*global Explorer, Backbone, JST*/

Explorer.Views = Explorer.Views || {};

(function () {
  'use strict';

  Explorer.Views.WorksView = Backbone.View.extend({
    events: {
      'click a.show': 'showWork'
    },

    template: JST["templates/search/works.hbs"],

    render: function(works) {
      var el = this.$el,
          template = this.template,
          worksData = works.map(function(w) {
            return w.attributes;
          }),
          html = template({works: worksData}),
          tempDiv = $('<div style="position:absolute;left:-9999px" />');

      $('body').append(tempDiv);
      tempDiv.append(html);
      tempDiv.imagesLoaded(function() {
        var newItems = tempDiv.children().detach();
        tempDiv.remove();
        if (el.data('masonry')) {
          el.append(newItems).masonry('appended', newItems);
        } else {
          el.append(newItems).masonry({itemSelector: '.item', columnWidth: '.grid-sizer'});
        }
      });

      return this;
    },

    showWork: function(e) {
      var a = $(e.currentTarget),
          identifier = a.data('identifier');

      Explorer.getAppRouter().navigate('/work/'+identifier, {trigger: true});

      e.preventDefault();
    }
  });
})();

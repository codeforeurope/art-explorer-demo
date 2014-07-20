/*global Explorer, Backbone*/

Explorer.Models = Explorer.Models || {};

(function () {
  'use strict';

  Explorer.Models.Work = Backbone.Model.extend({
    initialize: function(opts) {
      console.log(opts);
      this._irn = opts.irn;
    },
    url: function() {
      return 'http://data.manchestergalleries.asacalow.me/i/' + this._irn;
    },
    parse: function(response, options)  {
      if (response.images) {
        response.imageURL = 'http://data.manchestergalleries.asacalow.me/assets/images/thumb/'+response.images[0];
      } else {
        // insert link to a stock 'no image' image
      }

      return response;
    }
  });
})();

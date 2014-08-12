/*global Explorer, Backbone*/

Explorer.Models = Explorer.Models || {};

(function () {
  'use strict';

  Explorer.Models.Work = Backbone.Model.extend({
    initialize: function(opts) {
      this._identifier = opts.identifier;
    },
    url: function() {
      return 'http://data.manchestergalleries.asacalow.me/i/' + this._identifier;
    },
    parse: function(response, options)  {
      if (response.images) {
        response.imageURL = 'http://data.manchestergalleries.asacalow.me/assets/images/thumb/'+response.images[0];
      } else {
        // insert link to a stock 'no image' image
      }

      // inject an 'on' date
      if (response.earliest == response.latest) {
        response.on = response.earliest
      }

      return response;
    }
  });
})();

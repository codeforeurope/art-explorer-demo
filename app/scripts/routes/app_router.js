/*global Explorer, Backbone*/

Explorer.Routers = Explorer.Routers || {};

(function () {
    'use strict';

    Explorer.Routers.AppRouter = Backbone.Router.extend({
      routes: {
        'search/:query': 'search',
        '*actions': 'default'
      }
    });

})();

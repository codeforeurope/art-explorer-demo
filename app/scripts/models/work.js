  /*global Explorer, Backbone*/

Explorer.Models = Explorer.Models || {};

(function () {
    'use strict';

    Explorer.Models.Work = Backbone.Model.extend({
        url: '',
        initialize: function() {
        },
        parse: function(response, options)  {
            return response;
        }
    });
})();

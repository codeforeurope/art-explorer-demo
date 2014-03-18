  /*global Explorer, Backbone*/

Explorer.Models = Explorer.Models || {};

(function () {
    'use strict';

    Explorer.Models.Work = Backbone.Model.extend({
        url: '',
        parse: function(response, options)  {
            // TODO: not this
            var r = Math.floor(Math.random() * 99)*4 + 96;
            response.imageURL = 'http://placekitten.com/320/'+r;

            return response;
        }
    });
})();

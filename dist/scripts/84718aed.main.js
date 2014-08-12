window.Explorer={Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";var a,b=this,c=this._mainContainer=$("div#main"),d=this._searchView=new Explorer.Views.SearchView({el:c}),e=new Explorer.Views.WorkView({el:c}),f=$("form#search"),g=this._appRouter=new Explorer.Routers.AppRouter;Backbone.history.start(),g.on("route:search",function(c){a=new Explorer.Query(c),b.renderSearchResults(a)}),g.on("route:showWork",function(b){e.render(b,a)}),f.on("submit",function(a){var b=f.find("input"),c=b.val();b.val(""),g.navigate("/search/"+c,{trigger:!0}),a.preventDefault()}),$(window).on("scroll",function(){b.scrollCheck(d)})},renderSearchResults:function(a){this._searchView.render(a)},scrollCheck:function(a){if(!a.isLoading()){var b=100,c=$("body").prop("scrollHeight"),d=$(window).scrollTop()+$(window).height();return d+b>=c&&a.loadMore(),!0}},getAppRouter:function(){return this._appRouter},showSpinner:function(){var a=this._spinner=$('<div class="loader"><div class="spinner" /></div>');this._mainContainer.append(a)},hideSpinner:function(){this._spinner.remove()}},$(document).ready(function(){"use strict";Explorer.init()}),this.JST=this.JST||{},this.JST["templates/intro.hbs"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<div id='intro'>\n<h2>Welcome to the Manchester Art Gallery Collection Explorer</h2>\n\n<p>Start by entering a keyword (or series of keywords) into the search box above.</p>\n\n<h2>About the Collcetion Explorer</h2>\n\n<p>This is the first service built on top of the new Manchester Art Gallery Open Data API (more details of which are <a href=\"http://foo\">here</a>), funded by the Eueopean Union as part of the <strong>Code for Europe</strong> project.</p>\n</div>\n"}),this.JST["templates/search.hbs"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<div class='row' id='search'>\n<div class='col-md-2'>\n<div class='options'></div>\n</div>\n<div class='col-md-9 col-md-offset-1'>\n<header class='main'></header>\n<div class='works'></div>\n</div>\n</div>\n"}),this.JST["templates/search/header.hbs"]=Handlebars.template(function(a,b,c,d,e){function f(){return"\nfiltered\n"}function g(a,b){var d,e,f="";return f+="\n<li>\n<a class='sort' data-option='",(e=c.value)?d=e.call(a,{hash:{},data:b}):(e=a&&a.value,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"' href='#'>",(e=c.title)?d=e.call(a,{hash:{},data:b}):(e=a&&a.title,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"</a>\n</li>\n"}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i,j="",k="function",l=this.escapeExpression,m=this;return j+="<div class='row'>\n<div class='info col-md-8'>\nShowing ",(i=c.count)?h=i.call(b,{hash:{},data:e}):(i=b&&b.count,h=typeof i===k?i.call(b,{hash:{},data:e}):i),j+=l(h)+"\n",h=c["if"].call(b,b&&b.filtered,{hash:{},inverse:m.noop,fn:m.program(1,f,e),data:e}),(h||0===h)&&(j+=h),j+="\nworks for\n<strong>",(i=c.query)?h=i.call(b,{hash:{},data:e}):(i=b&&b.query,h=typeof i===k?i.call(b,{hash:{},data:e}):i),j+=l(h)+"</strong>\n</div>\n<div class='actions col-md-4'>\nSort by\n<div class='btn-group'>\n<div class='btn btn-default dropdown-toggle' data-toggle='dropdown'>\n",(i=c.sortedBy)?h=i.call(b,{hash:{},data:e}):(i=b&&b.sortedBy,h=typeof i===k?i.call(b,{hash:{},data:e}):i),j+=l(h)+"\n<span class='caret'></span>\n</div>\n<ul class='dropdown-menu' role='menu'>\n",h=c.each.call(b,b&&b.additionalSortOptions,{hash:{},inverse:m.noop,fn:m.program(3,g,e),data:e}),(h||0===h)&&(j+=h),j+="\n</ul>\n</div>\n</div>\n</div>\n"}),this.JST["templates/search/options.hbs"]=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+="\n<ul class='list-unstyled' id='filters'>\n",d=c.each.call(a,a&&a.filters,{hash:{},inverse:o.noop,fn:o.program(2,g,b),data:b}),(d||0===d)&&(e+=d),e+="\n</ul>\n"}function g(a,b){var d,e,f="";return f+="\n<h3>",(e=c.title)?d=e.call(a,{hash:{},data:b}):(e=a&&a.title,d=typeof e===m?e.call(a,{hash:{},data:b}):e),f+=n(d)+"</h3>\n<ul class='list-unstyled'>\n",d=c.each.call(a,a&&a.terms,{hash:{},inverse:o.noop,fn:o.programWithDepth(3,h,b,a),data:b}),(d||0===d)&&(f+=d),f+="\n</ul>\n"}function h(a,b,c){var d,e="";return e+="\n<li>\n<a class='remove-option' data-option='"+n((d=c&&c.value,typeof d===m?d.apply(a):d))+"' data-term='"+n(typeof a===m?a.apply(a):a)+"' href='#'>"+n(typeof a===m?a.apply(a):a)+" &times;</a>\n</li>\n"}function i(a,b){var d,e,f="";return f+="\n<li>\n<h3>",(e=c.title)?d=e.call(a,{hash:{},data:b}):(e=a&&a.title,d=typeof e===m?e.call(a,{hash:{},data:b}):e),f+=n(d)+"</h3>\n<div class='windowed'>\n<ul class='list-unstyled'>\n",d=c.each.call(a,a&&a.terms,{hash:{},inverse:o.noop,fn:o.programWithDepth(6,j,b,a),data:b}),(d||0===d)&&(f+=d),f+="\n</ul>\n</div>\n</li>\n"}function j(a,b,d){var e,f,g="";return g+="\n<li>\n<a class='select-option' data-option='"+n((e=d&&d.value,typeof e===m?e.apply(a):e))+"' data-term='",(f=c.term)?e=f.call(a,{hash:{},data:b}):(f=a&&a.term,e=typeof f===m?f.call(a,{hash:{},data:b}):f),g+=n(e)+"' href='#'>\n",(f=c.term)?e=f.call(a,{hash:{},data:b}):(f=a&&a.term,e=typeof f===m?f.call(a,{hash:{},data:b}):f),g+=n(e)+"\n<span>",(f=c.count)?e=f.call(a,{hash:{},data:b}):(f=a&&a.count,e=typeof f===m?f.call(a,{hash:{},data:b}):f),g+=n(e)+"</span>\n</a>\n</li>\n"}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var k,l="",m="function",n=this.escapeExpression,o=this;return k=c["if"].call(b,b&&b.filters,{hash:{},inverse:o.noop,fn:o.program(1,f,e),data:e}),(k||0===k)&&(l+=k),l+="\n<h2>Options</h2>\n<ul class='list-unstyled' id='options'>\n",k=c.each.call(b,b&&b.options,{hash:{},inverse:o.noop,fn:o.program(5,i,e),data:e}),(k||0===k)&&(l+=k),l+="\n</ul>\n"}),this.JST["templates/search/works.hbs"]=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+="\n<div class='item'>\n<a class='show' data-identifier='",(e=c.identifier)?d=e.call(a,{hash:{},data:b}):(e=a&&a.identifier,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"' href='#'>\n<figure>\n<div class='img-container'>\n<img src='",(e=c.imageURL)?d=e.call(a,{hash:{},data:b}):(e=a&&a.imageURL,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"'>\n</div>\n<figcaption>\n",d=c["if"].call(a,a&&a.title,{hash:{},inverse:m.noop,fn:m.program(2,g,b),data:b}),(d||0===d)&&(f+=d),f+="\n",d=c["if"].call(a,a&&a.fullname,{hash:{},inverse:m.noop,fn:m.program(4,h,b),data:b}),(d||0===d)&&(f+=d),f+="\n</figcaption>\n</figure>\n</a>\n</div>\n"}function g(a,b){var d,e,f="";return f+="\n<h2>",(e=c.title)?d=e.call(a,{hash:{},data:b}):(e=a&&a.title,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"</h2>\n"}function h(a,b){var d,e,f="";return f+="\n<h3>",(e=c.fullname)?d=e.call(a,{hash:{},data:b}):(e=a&&a.fullname,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"</h3>\n"}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var i,j="",k="function",l=this.escapeExpression,m=this;return j+="<div class='grid-sizer'></div>\n",i=c.each.call(b,b&&b.works,{hash:{},inverse:m.noop,fn:m.program(1,f,e),data:e}),(i||0===i)&&(j+=i),j+="\n"}),this.JST["templates/work.hbs"]=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+="\n<a class='back-to-query' href='#'>\n&laquo;\nBack to\n<strong>",(e=c.query)?d=e.call(a,{hash:{},data:b}):(e=a&&a.query,d=typeof e===o?e.call(a,{hash:{},data:b}):e),f+=p(d)+"</strong>\n</a>\n"}function g(a){var b,c="";return c+="\n<div class='group'>\n<h3>Description</h3>\n<p>"+p((b=a&&a.work,b=null==b||b===!1?b:b.description,typeof b===o?b.apply(a):b))+"</p>\n</div>\n"}function h(a){var b,c="";return c+="\n<div class='group'>\n<h3>Medium</h3>\n<p>"+p((b=a&&a.work,b=null==b||b===!1?b:b.type,typeof b===o?b.apply(a):b))+"</p>\n</div>\n"}function i(a){var b,c="";return c+="\n<div class='group'>\n<h3>Tags</h3>\n<p>"+p((b=a&&a.work,b=null==b||b===!1?b:b.subject,typeof b===o?b.apply(a):b))+"</p>\n</div>\n"}function j(a){var b,c="";return c+="\n<div class='group'>\n<h3>Created</h3>\n<p>"+p((b=a&&a.work,b=null==b||b===!1?b:b.on,typeof b===o?b.apply(a):b))+"</p>\n</div>\n"}function k(a,b){var d,e="";return e+="\n",d=c["if"].call(a,(d=a&&a.work,null==d||d===!1?d:d.earliest),{hash:{},inverse:q.noop,fn:q.program(12,l,b),data:b}),(d||0===d)&&(e+=d),e+="\n"}function l(a){var b,c="";return c+="\n<div class='group'>\n<h3>Created</h3>\n<p>Between "+p((b=a&&a.work,b=null==b||b===!1?b:b.earliest,typeof b===o?b.apply(a):b))+" and "+p((b=a&&a.work,b=null==b||b===!1?b:b.latest,typeof b===o?b.apply(a):b))+"</p>\n</div>\n"}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var m,n="",o="function",p=this.escapeExpression,q=this;return n+="<div class='row' id='work'>\n<div class='query col-md-3'>\n",m=c["if"].call(b,b&&b.query,{hash:{},inverse:q.noop,fn:q.program(1,f,e),data:e}),(m||0===m)&&(n+=m),n+="\n&nbsp;\n</div>\n<div class='image col-md-6'>\n<img src='"+p((m=b&&b.work,m=null==m||m===!1?m:m.imageURL,typeof m===o?m.apply(b):m))+"'>\n</div>\n<div class='col-md-3 details'>\n<h1>"+p((m=b&&b.work,m=null==m||m===!1?m:m.title,typeof m===o?m.apply(b):m))+"</h1>\n<h2>"+p((m=b&&b.work,m=null==m||m===!1?m:m.creator,typeof m===o?m.apply(b):m))+"</h2>\n<hr>\n<div class='group'>\n<h3>Accession number</h3>\n<p>"+p((m=b&&b.work,m=null==m||m===!1?m:m.identifier,typeof m===o?m.apply(b):m))+"</p>\n</div>\n",m=c["if"].call(b,(m=b&&b.work,null==m||m===!1?m:m.description),{hash:{},inverse:q.noop,fn:q.program(3,g,e),data:e}),(m||0===m)&&(n+=m),n+="\n",m=c["if"].call(b,(m=b&&b.work,null==m||m===!1?m:m.type),{hash:{},inverse:q.noop,fn:q.program(5,h,e),data:e}),(m||0===m)&&(n+=m),n+="\n",m=c["if"].call(b,(m=b&&b.work,null==m||m===!1?m:m.subject),{hash:{},inverse:q.noop,fn:q.program(7,i,e),data:e}),(m||0===m)&&(n+=m),n+="\n",m=c["if"].call(b,(m=b&&b.work,null==m||m===!1?m:m.on),{hash:{},inverse:q.program(11,k,e),fn:q.program(9,j,e),data:e}),(m||0===m)&&(n+=m),n+="\n</div>\n</div>\n"}),Explorer.Models=Explorer.Models||{},function(){"use strict";Explorer.Models.Work=Backbone.Model.extend({initialize:function(a){this._identifier=a.identifier},url:function(){return"http://data.manchestergalleries.asacalow.me/i/"+this._identifier},parse:function(a){return a.images&&(a.imageURL="http://data.manchestergalleries.asacalow.me/assets/images/thumb/"+a.images[0]),a.earliest==a.latest&&(a.on=a.earliest),a}})}(),Explorer.Collections=Explorer.Collections||{},function(){"use strict";Explorer.Collections.Works=Backbone.Collection.extend({model:Explorer.Models.Work,url:"http://data.manchestergalleries.asacalow.me/search",initialize:function(){this._isLoading=!1},parse:function(a){return this._options=a.facets,this._count=a.total,a.items},search:function(a){this._query=a,this.load()},reload:function(){this._query.resetPageCount(),this.load()},loadMore:function(){this._query.nextPage(),this.load()},load:function(){var a=this;a.startLoading(),this.fetch({data:this._query.getQueryData(),reset:!0,success:function(){a.finishLoading()}})},startLoading:function(){this._isLoading=!0},finishLoading:function(){this._isLoading=!1,this._query.isFirstPage()&&this.trigger("search")},isLoading:function(){return this._isLoading},getFilteredOptions:function(a){var b=_.reduce(this._options,function(b,c){var d=c.title,e=c.terms,f=_.find(a,function(a){return a.title==d});return f&&(e=_.reject(e,function(a){return _.contains(f.terms,a.term)})),b.push({title:d,terms:e}),b},[]);return b},count:function(){return this._count}})}(),Explorer.Views=Explorer.Views||{},function(){"use strict";Explorer.Views.SearchView=Backbone.View.extend({template:JST["templates/search.hbs"],render:function(a){var b=this,c=this.$el,d=this.template,e=$(d()),f=this._works=new Explorer.Collections.Works,g=new Explorer.Views.HeaderView({el:e.find("header.main")}),h=new Explorer.Views.WorksView({el:e.find("div.works")}),i=new Explorer.Views.OptionsView({el:e.find("div.options")});c.empty(),c.append(e),f.search(a),Explorer.showSpinner(),f.on("search",function(){Explorer.hideSpinner(),g.render(a,this),i.render(a,this)}),f.on("sync",function(){h.render(this)}),i.on("optionSelected",function(c,d){a.addFilter(c,d),b.render(a)}),i.on("optionDeselected",function(c,d){a.removeFilter(c,d),b.render(a)}),g.on("sortOptionSelected",function(c){a.setSortField(c),b.render(a)})},isLoading:function(){return this._works.isLoading()},loadMore:function(){this._works.loadMore()},_removeSpinner:function(){this.$el.find(".spinner").remove()}})}(),Explorer.Views=Explorer.Views||{},function(){"use strict";Explorer.Views.WorksView=Backbone.View.extend({events:{"click a.show":"showWork"},template:JST["templates/search/works.hbs"],render:function(a){var b=this.$el,c=this.template,d=a.map(function(a){return a.attributes}),e=c({works:d}),f=$('<div style="position:absolute;left:-9999px" />');return $("body").append(f),f.append(e),f.imagesLoaded(function(){var a=f.children().detach();f.remove(),b.data("masonry")?b.append(a).masonry("appended",a):b.append(a).masonry({itemSelector:".item",columnWidth:".grid-sizer"})}),this},showWork:function(a){var b=$(a.currentTarget),c=b.data("identifier");Explorer.getAppRouter().navigate("/work/"+c,{trigger:!0}),a.preventDefault()}})}(),Explorer.Views=Explorer.Views||{},function(){"use strict";Explorer.Views.OptionsView=Backbone.View.extend({template:JST["templates/search/options.hbs"],events:{"click a.select-option":"optionSelected","click a.remove-option":"optionDeselected"},render:function(a,b){var c=this.$el,d=a.getFilterOptions(),e=b.getFilteredOptions(d),f=this._addTitlesFromFacetMap(d),g=this._addTitlesFromFacetMap(e),h=this.template({options:g,filters:f});return c.empty(),c.append(h),this},optionSelected:function(a){this._triggerOptionEvent(a,"optionSelected"),a.preventDefault()},optionDeselected:function(a){this._triggerOptionEvent(a,"optionDeselected"),a.preventDefault()},_triggerOptionEvent:function(a,b){var c=$(a.currentTarget),d=c.data("term"),e=c.data("option");return this.trigger(b,e,d),!0},clear:function(){return this.$el.empty(),!0},facetMap:function(){var a={creator:"Artist",medium:"Medium",type:"Type",subject:"Subject"};return a},_addTitlesFromFacetMap:function(a){var b=this,c=_.map(a,function(a){var c=b.facetMap()[a.title];return{title:c,terms:a.terms,value:a.title}});return c}})}(),Explorer.Views=Explorer.Views||{},function(){"use strict";Explorer.Views.HeaderView=Backbone.View.extend({template:JST["templates/search/header.hbs"],events:{"click a.sort":"sortOptionSelected"},initialize:function(){this._sortOptions={identifier:"Accession No.",earliest:"Creation Date, earliest first",latest:"Creation Date, latest first"}},render:function(a,b){var c,d=this.template,e={count:b.count(),query:a.getQuery()},f=this.$el;return e.sortedBy=this.sortedBy(a),e.additionalSortOptions=this.additionalSortOptions(a),a.isFiltered()&&(e.filtered=!0),c=d(e),f.append(c),this},sortedBy:function(a){return this._sortOptions[a.getSortField()]},additionalSortOptions:function(a){var b=this._sortOptions,c=_.keys(b);return c=_.without(c,a.getSortField()),_.map(c,function(a){return{value:a,title:b[a]}})},sortOptionSelected:function(a){var b=$(a.currentTarget),c=b.data("option");return this.trigger("sortOptionSelected",c),a.preventDefault(),!0}})}(),Explorer.Views=Explorer.Views||{},function(){"use strict";Explorer.Views.WorkView=Backbone.View.extend({events:{"click a.back-to-query":"backToQuery"},template:JST["templates/work.hbs"],render:function(a,b){var c,d=this.$el,e=this.template,f=new Explorer.Models.Work({identifier:a});return b&&(this._query=b,c=b.getQuery()),Explorer.showSpinner(),f.fetch({success:function(){Explorer.hideSpinner();var a=e({query:c,work:f.attributes});d.empty(),d.append(a)}}),d.empty(),this},backToQuery:function(a){this._query.resetPageCount(),Explorer.getAppRouter().navigate("/search/"+this._query.getQuery()),Explorer.renderSearchResults(this._query),a.preventDefault()}})}(),Explorer.Routers=Explorer.Routers||{},function(){"use strict";Explorer.Routers.AppRouter=Backbone.Router.extend({routes:{"search/:query":"search","work/*id":"showWork","*actions":"default"}})}(),function(){"use strict";Explorer.Query=function(a){this._page=1,this._perPage=12,this._query=a,this._filters={},this.setSortField("identifier")},_.extend(Explorer.Query.prototype,{getQuery:function(){return this._query},getQueryData:function(){var a={q:this._query,p:this._page,pp:this._perPage,i:!0,f:"creator,type,subject",s:this.getSortField(),so:this.getSortOrder()};return this._filters&&_.extend(a,this.getFilterData()),a},addFilter:function(a,b){return this._filters[a]||(this._filters[a]=[]),this._filters[a].push(b),!0},addFacets:function(a){this._facets=a},removeFilter:function(a,b){var c=this._filters[a];return c=_.without(c,b),0==c.length?delete this._filters[a]:this._filters[a]=c,!0},getFilterOptions:function(){var a=_.map(this._filters,function(a,b){return{title:b,terms:a}});return a},getFilterData:function(){var a=_.reduce(this._filters,function(a,b,c){return a[c]=b.join(","),a},{});return a},setSortField:function(a){this._sortField=a},getSortField:function(){return this._sortField},getSortOrder:function(){return{identifier:"asc",earliest:"asc",latest:"desc"}[this.getSortField()]},nextPage:function(){return this._page+=1,!0},resetPageCount:function(){return this._page=1,!0},isFirstPage:function(){return 1==this._page},isFiltered:function(){return!_.isEmpty(this._filters)}})}();
# Manchester Art Gallery, Collection Explorer

This app acts both as a usage demonstration for the Manchester Art Gallery Open Data API, as well as offering a visuals-first search of the gallery's collection. For the API and its documentation, please check the appropriate repositories on Github: http://github.com/manchesterartgallery/api and http://github.com/manchesterartgallery/api-docs.

## Working with the Explorer codebase

This app has been built to be compiled and then run entirely in the browser using Javascript. There is a [Gruntfile](GRUNT) which takes the various assets (HAML templates for generating HTML, SASS files for generating CSS &c. &c.) and compresses them through an assets pipeline to arrive at something which has been heavily optimised for serving as a static website. There are a stack of grunt plugins which run the appropriate parts of the asset pipeline in the correct order. For a full list of the plugins in use, please check [/package.json]. Of particular interest are those for compiling HAML templates into Handlebars templates (and into JST templates in turn), and usemin/useminPrepare which I encourage you to go and read the documentation for. If in doubt, check the grunt plugin documentation!

### Backbone, Bootstrap etc.

The application itself is built using the [Backbone](BONE) framework: There are models and collections, which are hooked into the _search_ and _item_ endpoints of the Open Data API respectively, and a set of views which use these to build the appropriate bits of the DOM. Finally, [app/main.js](app/main.js) co-ordinates the various parts of the framework to respond to user input. Within the views themselves, of note is the use of the Masonry plugin in [app/views/works_view.js](app/views/works_view.js) which is used to build the gallery-style stacking columns.

As one might expect Bootstrap has been used quite liberally throughout, via the sass-bootstrap Bower plugin. Rather than use the bootstrap classes themselves, Sass extensions have been used for proper semantic markup – check [app/styles/main.scss](app/styles/main.scss) for details.

## A quick TL;DR install

Required things:

  * ruby/bundler
  * node/npm

Then:

    $ bundle
    $ npm install
    $ bower install
    $ grunt serve

## To deploy:

There is a Dockerfile in the root folder from which a container can be built. It is reliant on having an up-to-date dist build of the app in the dist/ folder:

    $ grunt dist
    $ docker build -t=codeforeurope/explorer .
    $ docker run -d -p 80:80 --name explorer codeforeurope/explorer # <- or wherever the port is going.

[GRUNT]: http://gruntjs.com
[BONE]: http://backbonejs.org

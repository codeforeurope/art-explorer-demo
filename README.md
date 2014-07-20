# For development

Required things:

ruby/bundler
node/npm

Then:

    $ bundle
    $ npm install
    $ grunt serve

# To deploy:

    $ docker build -t=codeforeurope/explorer .
    $ docker run -d -p 8001:80 --name explorer codeforeurope/explorer

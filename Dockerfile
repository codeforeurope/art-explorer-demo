# Derived from https://github.com/tcnksm/docker-sinatra
FROM phusion/baseimage:0.9.10

MAINTAINER asacalow "https://github.com/asacalow"

# Set correct environment variables.
ENV HOME /root

# Regenerate SSH host keys. baseimage-docker does not contain any, so you
# have to do that yourself. You may also comment out this instruction; the
# init system will auto-generate one during boot.
RUN /etc/my_init.d/00_regen_ssh_host_keys.sh

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]

## Beginning of main build instructions

EXPOSE 80

# Install packages for ruby & node/npm
RUN apt-get update
RUN apt-get install -y --force-yes nginx

ADD dist /usr/share/nginx/html

RUN mkdir /etc/service/nginx
ADD bin/nginx.sh /etc/service/nginx/run
RUN chmod ugo+x /etc/service/nginx/run

## End of main build instructions

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

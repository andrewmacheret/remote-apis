from mhart/alpine-node:6.7

ADD node_modules/ node_modules/
ADD settings.js .
ADD remote-apis.js .

EXPOSE 80

CMD ["node", "remote-apis.js"]


var express = require('express');
var compression = require('compression');
var apicache = require('apicache').options({ debug: true }).middleware;
//var bodyParser = require('body-parser');
var app = express();
var request = require('request');
//var urlencode = require('urlencode');
//app.use(bodyParser.urlencoded({extended: true}));

//app.use(compression());
app.use(compression({
  threshold : 0, // or whatever you want the lower threshold to be
  filter    : function(req, res) {
    return true;
  }
}));

var settings = require('./settings.js');
var remoteApis = settings.remoteApis;

console.log('registering /');
app.get('/', apicache('5 minutes'), function(req, res) {
  console.log('GET ' + req.originalUrl);
  //res.setHeader('Access-Control-Allow-Origin', '*');

  res.set({
    'Content-Type': 'application/json'
  });

  res.send(JSON.stringify({apis: remoteApis}, 0, 4));
});

Object.keys(remoteApis).forEach(function(api) {
  var remoteOptions = remoteApis[api];
  console.log('registering ' + api);

  app.get(api, apicache('5 minutes'), function(req, res) {
    console.log('GET ' + req.originalUrl);
    //res.setHeader('Access-Control-Allow-Origin', '*');
    
    // build the remote url
    var remoteUrl = remoteOptions.url;
    Object.keys(req.params).forEach(function(param) {
      var value = encodeURIComponent(req.params[param]);
      remoteUrl = remoteUrl.replace('{' + param + '}', value);
    });
    
    request(remoteUrl, function(err, response, body) {
      res.status(response.statusCode);
      res.set({
        //'Content-Type': response.headers['content-type']
        'Content-Type': 'application/json'
      });
      res.send(body);
    });
  });
});

var port = settings.port;
app.listen(port);
console.log('listening on ' + port);


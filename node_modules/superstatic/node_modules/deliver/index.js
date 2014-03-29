var path = require('path');
var send = require('send');
var defaults = require('defaults');
var request = require('request');
var isUrl = require('is-url');

var defaultOptions = {
  statusCode: 200,
  root: ''
};

var deliver = function (req) {
  var options = defaults(arguments[1], defaultOptions);
  
  if (isUrl(req.url)) return request(req.url).on('response', function (res) {
    if (options.statusCode) res.statusCode = options.statusCode;
    if (options.contentType) res.headers['content-type'] = options.contentType;
  });
  
  req.url = path.join(options.root, req.url);
  
  return send(req, req.url);
};

module.exports = deliver;
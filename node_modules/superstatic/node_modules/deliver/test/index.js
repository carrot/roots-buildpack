var fs = require('fs');
var deliver = require('../');
var test = require('tape');
var connect = require('connect');
var http = require('http');
var request = require('request');
var PORT = 9876;

test('streams a static file', function (t) {
  var server = createServer(function (req, res) {
    req.url = __dirname + '/fixtures/testfile1.txt';
    
    deliver(req).pipe(res);
  }, function (err) {
    get('http://localhost:' + PORT, function (err, res, body) {
      t.equal(res.statusCode, 200, 'successful response');
      t.equal(body, 'testfile1', 'streamed file');
      server.close();
      t.end();
    });
  });
});

test('serves static files with root', function (t) {
  var server = createServer(function (req, res) {
    req.url = '/testfile1.txt';
    deliver(req, {
      root: __dirname + '/fixtures'
    }).pipe(res);
  }, function (err) {
    get('http://localhost:' + PORT, function (err, resp, body) {
      t.equal(resp.statusCode, 200, 'successful response');
      t.equal(body, 'testfile1', 'streamed file');
      server.close();
      t.end();
    });
  });
});

test('serves static with mime type', function (t) {
  var server = createServer(function (req, res) {
    req.url = __dirname + '/fixtures/testfile1.txt';
    deliver(req).pipe(res);
  }, function (err) {
    get('http://localhost:' + PORT, function (err, resp, body) {
      t.equal(resp.headers['content-type'], 'text/plain; charset=UTF-8', 'correct mime type');
      server.close();
      t.end();
    });
  });
});

test('serves a proxied remote file by url', function (t) {
  var fileServer = createServer(function (req, res) {
    res.setHeader('content-type', 'text/plain; charset=UTF-8');
    fs.createReadStream('test/fixtures/testfile1.txt').pipe(res);
  }, function () {
    var server = createServer(function (req, res) {
      req.url = 'http://localhost:9875/testfile1.txt';
      deliver(req).pipe(res);
    }, function (err) {
      get('http://localhost:' + PORT, function (err, resp, body) {
        t.equal(resp.statusCode, 200, '200 status code');
        t.equal(resp.headers['content-type'], 'text/plain; charset=UTF-8', 'correct mime type');
        t.equal(body, 'testfile1', 'streamed remote file');
        
        server.close();
        fileServer.close();
        t.end();
      });
    });
  }, 9875);
});

test('serves a proxied remote file with a custom response status code', function (t) {
  var fileServer = createServer(function (req, res) {
    fs.createReadStream('test/fixtures/testfile1.txt').pipe(res);
  }, function () {
    var server = createServer(function (req, res) {
      req.url = 'http://localhost:9875/testfile1.txt';
      res.statusCode = 404;
      
      deliver(req, {
        statusCode: 404
      }).pipe(res);
      
    }, function (err) {
      get('http://localhost:' + PORT, function (err, resp, body) {
        t.equal(resp.statusCode, 404, '404 status code');
        server.close();
        fileServer.close();
        t.end();
      });
    });
  }, 9875);
});

test('serves a proxied remote file with a custom content mime type', function (t) {
  var fileServer = createServer(function (req, res) {
    fs.createReadStream('test/fixtures/testfile1.txt').pipe(res);
  }, function () {
    var server = createServer(function (req, res) {
      req.url = 'http://localhost:9875/testfile1.txt';
      res.statusCode = 404;
      
      deliver(req, {
        contentType: 'text/html'
      }).pipe(res);
      
    }, function (err) {
      get('http://localhost:' + PORT, function (err, resp, body) {
        t.equal(resp.headers['content-type'], 'text/html', 'correct mime type');
        server.close();
        fileServer.close();
        t.end();
      });
    });
  }, 9875);
});

//
function createServer (testMiddleware, callback, _port) {
  var app = connect();
  app.use(testMiddleware);
  return http.createServer(app).listen(_port || PORT, callback);
}

function get (url, callback) {
  var body = '';
  return request(url, callback);
}
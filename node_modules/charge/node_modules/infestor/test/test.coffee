server   = null
port     = process.env['port'] || 4521

http     = require 'http'
assert   = require 'assert'
connect  = require 'connect'
request  = require 'request'
infestor = require '../index.js'

startServer = (opts, cb) ->
  app     = connect()
  app.use(infestor(opts)).use(connect.static("#{__dirname}/public"))
  server = http.createServer(app)
  server.listen port, cb

describe 'injection', ->
  it "should inject default content", (done) ->
    startServer {}, =>
      request.get "http://localhost:#{port}/index.html", (e, r, b)->
        assert.equal(b.replace(/\s/g,""), '<html><body><h2>hi</h2></body><h2>helloworld</h2></html>', "injects the default content")
        server.close => done()

  it "should inject custom content", (done) ->
    startServer {content: "noo"}, =>
      request.get "http://localhost:#{port}/index.html", (e, r, b)->
        assert.equal(b.replace(/\s/g,""), '<html><body><h2>hi</h2></body>noo</html>', "injects the default content")
        server.close => done()

  it "should inject custom content into the correct place", (done) ->
    startServer {content: "noo", injectAt: /<body>/}, =>
      request.get "http://localhost:#{port}/index.html", (e, r, b)->
        assert.equal(b.replace(/\s/g,""), '<html>noo<body><h2>hi</h2></body></html>', "injects the default content")
        server.close => done()

# Archivist Middleware

[![npm](http://img.shields.io/npm/v/archivist-middleware.svg?style=flat)](https://badge.fury.io/js/archivist-middleware) [![tests](http://img.shields.io/travis/carrot/archivist-middleware/master.svg?style=flat)](https://travis-ci.org/carrot/archivist-middleware) [![dependencies](http://img.shields.io/gemnasium/carrot/archivist-middleware.svg?style=flat)](https://david-dm.org/carrot/archivist-middleware)

Providing the highest quality browser cacheing since 1824.

> **Note:** This project is in early development, and versioning is a little different. [Read this](http://markup.im/#q4_cRZ1Q) for more details.

### Why should you care?

On the surface, it seems like it's the same situation as always. You know, you're serving a static site in production and nothing is out of the ordinary. But suddenly, your users start complaining that they haven't seen your latest update. What? You just deployed it!

Cacheing problems. We all have them. But if you're using archivist, at least you know the problems are entirely your own fault, because the options archivist provides are so clear and flexible, and it's so meticulous in enforcing them, that you simply *must* be the weak link in the chain.

### Installation

`npm i archivist-middleware`

### Usage

Archivist accepts an options object that takes globstar-compatible paths as keys and cacheing rules as values. Let's look at a simple example:

```js
var http = require('http'),
    connect = require('connect'),
    archivist = require('archivist-middleware');

var app = connect()
  .use(connect.static('public'))
  .use(archivist({
    '/assets/**': 3600000,
    '/private': 'no cache, no store',
    '/': false
  }));

http.createServer(app).listen(1111);
```

So here's the deal. If you pass an integer the cache control header is set to `public, max-age=XXX`. If you pass false, no cache control header is set. And if you pass a string, the cache control header is set to that string.

It should be noted that these settings mirror [divshot's](http://docs.divshot.io/guides/performance), which was purposely done to ensure that it interops cleanly with their wonderful hosting service. But it is by no means coupled to it in any way, and can be used in any environment.

### License & Contributing

- Details on the license [can be found here](LICENSE.md)
- Details on running tests and contributing [can be found here](contributing.md)

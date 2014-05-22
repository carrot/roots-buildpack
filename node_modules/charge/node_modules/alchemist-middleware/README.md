# alchemist-middleware

[![npm](http://img.shields.io/npm/v/alchemist-middleware.svg?style=flat)](https://badge.fury.io/js/alchemist-middleware) [![tests](http://img.shields.io/travis/carrot/alchemist-middleware/master.svg?style=flat)](https://travis-ci.org/carrot/alchemist-middleware) [![coverage](http://img.shields.io/coveralls/carrot/alchemist-middleware.svg?style=flat)](https://coveralls.io/r/carrot/alchemist-middleware) [![dependencies](http://img.shields.io/gemnasium/carrot/alchemist-middleware.svg?style=flat)](https://gemnasium.com/carrot/alchemist-middleware)

Procuring static files since 1802.

> **Note:** This project is in early development, and versioning is a little different. [Read this](http://markup.im/#q4_cRZ1Q) for more details.

### Why should you care?

So there are already a number of pieces of middleware intended for serving static files. The difference with alchemist is that this one is intended *only* for serving static files. The main difference is that when a file is not found, it throws an error rather than just passing the request on. This is because when you are serving a static site, a 404 is not recoverable, other than by an error page.

This module is a light wrapper over [send](https://github.com/visionmedia/send), that has static-style error handling.

### Installation

`npm install alchemist-middleware`

### Usage

Alchemist's API was designed to be quite straightforward to use. Here's a quick example:

```js
var http = require('http'),
    connect = require('connect'),
    alchemist = require('alchemist-middleware');

var app = connect().use(alchemist('public'));

http.createServer(app).listen(1111);
```

There are a few options you can use to configure alchemist's behavior. An example is shown below with all the options filled out as their default values:

```js
alchemist('public', {
  etag: true,          // toggle etag generation
  hidden: false,       // toggle serving of hidden/dotfiles
  index: 'index.html', // directory index filename, string or false
  maxage: 0            // max age in ms for http cacheing
});
```

### License & Contributing

- Details on the license [can be found here](LICENSE.md)
- Details on running tests and contributing [can be found here](contributing.md)

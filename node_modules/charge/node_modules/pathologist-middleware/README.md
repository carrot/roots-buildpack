# Pathologist Middleware

[![npm](http://img.shields.io/npm/v/pathologist-middleware.svg?style=flat)](https://badge.fury.io/js/pathologist-middleware) [![tests](http://img.shields.io/travis/carrot/pathologist-middleware/master.svg?style=flat)](https://travis-ci.org/carrot/pathologist-middleware) [![dependencies](http://img.shields.io/gemnasium/carrot/pathologist-middleware.svg?style=flat)](https://david-dm.org/carrot/pathologist-middleware)

Finding the right path since 1967

> **Note:** This project is in early development, and versioning is a little different. [Read this](http://markup.im/#q4_cRZ1Q) for more details.

### Why should you care?

Often when building a static app, you want to serve multiple routes with the same static file while keeping the URL structure intact for your app's routing logic. Or perhaps you just want to handle multiple routes for a directory of static files.

Pathologist is an easy to use [connect](https://github.com/senchalabs/connect) middleware for bringing your single page apps to life. You can define routes with supported [globstar](https://github.com/isaacs/node-glob) matching to serve your static files.

Pathologist simply rewrites the request url to a new static file path. It ___does not___ serve the static file for you, so you will need to use your preferred static server middleware with pathologist. We recommend [alchemist](https://github.com/carrot/alchemist-middleware).

### Installation

`$ npm install pathologist-middleware --save`

### Usage

Pathologist accepts an options object which takes globstar-compatible paths as keys and a static file path as values. Routes are matched in the order they are defined in the object. Here's an example that serves an admin client on any URLs starting with `/admin`, and serves the user client on all other routes.

```javascript
var http = require('http'),
      connect = require('connect'),
      pathologist = require('pathologist-middleware');

var app = connect().use(
  pathologist({
    '/admin/**/*': '/admin.html',
    '/**': '/index.html'
  })
);
```

You can also pass a base  path to be used with your file path values as the first argument.

```javascript
var http = require('http'),
    connect = require('connect'),
    path = require('path'),
    pathologist = require('pathologist-middleware');

var app = connect().use(
  pathologist(path.join(__dirname, 'browser'), {
    '/admin/**/*': 'admin.html',
    '/**': 'index.html'
  })
);
```

Without a base path, the path values passed into pathologist can be either absolute paths, or relative paths from `process.cwd()`.

### License & Contributing

- Details on the license [can be found here](LICENSE.md)
- Details on running tests and contributing [can be found here](contributing.md)

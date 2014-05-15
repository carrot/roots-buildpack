# Escapist Middleware

[![npm](http://img.shields.io/npm/v/escapist-middleware.svg?style=flat)](https://badge.fury.io/js/escapist-middleware) [![tests](http://img.shields.io/travis/carrot/escapist-middleware/master.svg?style=flat)](https://travis-ci.org/carrot/escapist-middleware) [![dependencies](http://img.shields.io/gemnasium/carrot/escapist-middleware.svg?style=flat)](https://gemnasium.com/carrot/escapist-middleware)

Making trapdoors for secret files since 1748.

> **Note:** This project is in early development, and versioning is a little different. [Read this](http://markup.im/#q4_cRZ1Q) for more details.

### Why should you care?

So you are serving a static site. You know, the usual. But you've got some files in your project you don't want to be publicly available. At the same time you don't want to have to remove them from your project. Escapist to the rescue!

### Installation

`npm install escapist-middleware`

### Usage

Escapist is pretty easy to use. You can feed it a string or array of string with paths to the files you'd like to prevent from being served. You can even use globstars, a la [minimatch](https://github.com/isaacs/minimatch)! Quick example:

```js
var http = require('http'),
    connect = require('connect'),
    escapist = require('escapist-middleware');

var app = connect()
            .use(escapist('path/to/secret.txt'))
            .use(connect.static('public'));

http.createServer(app).listen(1111);
```

Also, as noted, you can pass an array of string and use globstars, like this:

```js
escapist(['**/keys/id_rsa', 'plaintext_passwords/*'])
```

> **Note:** We do not endorse keeping ssh private keys and/or plaintext passwords in your repos.

Escapist does not actually serve files, so it's not a standalone solution. It should be used as part of a larger stack. For an example of an awesome static stack, check out [charge](https://github.com/carrot/charge).

### License & Contributing

- Details on the license [can be found here](LICENSE.md)
- Details on running tests and contributing [can be found here](contributing.md)

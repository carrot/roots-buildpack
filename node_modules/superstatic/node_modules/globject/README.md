# globject

Get values by glob-like keys

## Install

```
npm install globject --save
```

## Usage

```js
var globject = require('globject');
var routes = {
  '**/about/**': 'about.html',
  '**': 'index.html'
};

var routesObj = globject(routes);

console.log(routesObj('/about/somepage.html')); // OUTPUTS: about.html
console.log(routesObj('/any/route.html'')); // OUTPUTS: index.html
```

## Run Tests

```
npm install
npm test
```
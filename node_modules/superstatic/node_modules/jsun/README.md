# jsun

Error catching JSON methods.

Hides away the try/catch madness for parsing strings and stringifying JSON objects.

## Install

```
npm install jsun --save
```

## Usage

```js
var JSUN = require('jsun');

var validStr = JSUN.stringify({key: 'value'}).string;
var invalidStr = '<div></div>';

var validData = JSUN.parse(validStr);
console.log(validData.json) // {key: 'value'}
console.log(validData.err) // null

var invalidData = JSUN.parse(invalidStr);
console.log(invalidData.json) // null
console.log(invalidData.err) // error message from try/catch
```

## Methods

### parse(string)

Uses JSON.parse in a try/catch block

**Returns:**

```js
{
  json: {} // some parsed string
  err: null // not null if there is an error
}
```

### stringify(object)

Uses JSON.stringify in a try/catch block

**Returns:**

```js
{
  string: {} // some stringified object
  err: null // not null if there is an error
}
```

## Run Tests

```
npm install
npm test
```

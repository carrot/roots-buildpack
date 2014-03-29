var JSUN = require('../');
var test = require('tape');
var obj = {key: 'value'};
var str = JSON.stringify(obj);
var errorStr = "<>";

test('#parse() with valid input', function (t) {
  var parsed = JSUN.parse(str);
  
  t.deepEqual(parsed.json, obj);
  t.equal(parsed.err, null);
  t.end();
});

test('#parse() with invalid inpu', function (t) {
  var parsed = JSUN.parse(errorStr);
  
  t.equal(parsed.err, 'Unexpected token <');
  t.end();
});

test('#stringify() with valid input', function (t) {
  var parsed = JSUN.stringify(obj);
  
  t.equal(parsed.string, str);
  t.equal(parsed.err, null);
  t.end();
});

test('#stringify() with invalid input', function (t) {
  var parsed = JSUN.parse(errorStr);
  
  t.equal(parsed.err, 'Unexpected token <');
  t.end();
});
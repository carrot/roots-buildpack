var globject = require('../');
var test = require('tape');
var obj = globject({
  '**value': 'value',
  '**/index.html': 'about.html'
});

test('it partially applies the globbing function', function (t) {
  t.equal(typeof obj, 'function', 'applied');
  t.end();
});

test('it gets a value from the object of globs', function (t) {
  t.equal(obj('value'), 'value', 'got value for value');
  t.equal(obj('/index.html'), 'about.html', 'got value for index.html');
  t.end();
});

test('returns undefined if no matches found', function (t) {
  t.equal(obj('nothing'), undefined, 'no match for nothing');
  t.end();
});

test('undefined routes object', function (t) {
  var obj = globject();
  t.equal(obj('nothing'), undefined, 'no match with no routes');
  t.end();
});
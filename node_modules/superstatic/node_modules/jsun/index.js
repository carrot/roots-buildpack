var JSUN = {};

JSUN.parse = function (str) {
  var _parsed = {
    json: null,
    err: null
  };
  
  try{
    _parsed.json = JSON.parse(str);
  }
  catch(err) {
    _parsed.err = err.message;
  }
  
  return _parsed;
}

JSUN.stringify = function (obj) {
  var _parsed = {
    string: null,
    err: null
  };
  
  try{
    _parsed.string = JSON.stringify(obj);
  }
  catch (err) {
    _parsed.err = err.message;
  }
  
  return _parsed;
};

module.exports = JSUN;
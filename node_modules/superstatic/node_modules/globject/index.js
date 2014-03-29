var match = require('minimatch');

var globject = function (obj) {
  obj = obj || {};
  
  return function (val) {
    var keys = Object.keys(obj);
    var len = keys.length;
    var i = 0;
    var globKey;
    var key;
    
    for(i; i < len; i += 1) {
      key = keys[i];
      
      if (match(val, key)){
        globKey = obj[key];
        break;
      }
    }
    
    return globKey;
  };
};

module.exports = globject;
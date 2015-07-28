var assign = require('object-assign');

// https://speakerdeck.com/vjeux/react-css-in-js
module.exports = function m() {
  var res = {};
  for (var i = 0; i < arguments.length; ++i) {
    if (arguments[i]) {
      assign({}, res, arguments[i]);
    }
  }
  return res;
}

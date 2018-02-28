'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;
  //Primer condición: se quitan los ultimos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  if (str.toLowerCase().startsWith('z')) {
    translation = translation + 'pe';
  }

  if (translation.length >= 10) {
    var firstHalf = translation.slice(0, Math.round(translation.length) / 2);
    var lastHalf = translation.slice(Math.round(translation.length) / 2);

    translation = firstHalf + '-' + lastHalf;
  }

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;

    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}
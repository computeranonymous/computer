/*jslint indent: 2, browser: true */

(function () {
  'use strict';

  document.getElementById('accessibility').classList[document.cookie.indexOf('invert=yep') > -1 ? 'add' : 'remove']('inverted');

  if (document.addEventListener && document.documentElement.classList) {
    document.addEventListener('click', function (event) {
      var classes = event.target.classList;

      if (classes.contains('color-change')) {
        document.cookie = classes.contains('wob') ? 'invert=yep' : 'invert=nope';
        document.getElementById('accessibility').classList[classes.contains('wob') ? 'add' : 'remove']('inverted');
        event.preventDefault();
      }
    });
  }
}());

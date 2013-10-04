/*jslint indent: 2, browser: true */

(function () {
  'use strict';

  if (document.addEventListener && document.documentElement.classList) {
    document.addEventListener('click', function (event) {
      var classes = event.target.classList;

      if (classes.contains('color-change')) {
        document.getElementById('accessibility').classList[classes.contains('wob') ? 'add' : 'remove']('inverted');
        event.preventDefault();
      }
    });
  }
}());

"use strict";

var x = document.getElementById('side-img');
var i = 0;
setInterval(function () {
  x.setAttribute('style', "filter: hue-rotate(".concat(i, "deg)"));

  if (i < 360) {
    i++;
    deg.innerText = i;
  } else {
    i = 0;
  }
}, 50);
var deg = document.getElementById('deg');
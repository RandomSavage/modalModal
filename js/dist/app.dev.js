"use strict";

// console.log(window.document)
var funkyReg = '/\S+@\S+\.\S+/';
/* window.onload = function() {
   let emailModal = document.getElementsByClassName('email-modal')[0]
   console.log(emailModal)

   let closeModal = document.getElementsByClassName('email-modal__close-btn')[0]

   closeModal.addEventListener('click', () => {
      emailModal.classList.remove('email-modal--visible')
   })

   document.addEventListener('mouseleave', () => {
      emailModal.classList.add('email-modal--visible')
      console.log('mouse left')
   })
} */

var x = document.getElementById('side-img');
var z = document.getElementById('side-img1');
var i = 0;
setInterval(function () {
  x.setAttribute('style', "filter: hue-rotate(".concat(i, "deg)"));
  z.setAttribute('style', "filter: hue-rotate(".concat(i, "deg)"));

  if (i < 360) {
    i++;
    deg.innerText = i;
  } else {
    i = 0;
  }
}, 50);
var deg = document.getElementById('deg');
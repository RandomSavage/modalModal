"use strict";

// console.log(window.document)
var funkyReg = '/\S+@\S+\.\S+/';
console.log(navigator);

window.onload = function () {
  var emailState = false;
  var emailModal = document.getElementsByClassName('email-modal')[0]; // console.log(emailModal)

  var emailForm = document.getElementsByClassName('email-modal__form-group')[0];
  var emailError = document.getElementsByClassName('email-modal__error-message')[0];
  var emailInput = document.getElementsByClassName('email-modal__input')[0];
  var emailButton = document.getElementsByClassName('email-modal__button')[0];
  var thankContainer = document.getElementsByClassName('email-thank')[0];
  var declineOffer = document.getElementsByClassName('email-modal__decline-offer')[0];

  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  emailInput.addEventListener('click', function () {
    removeErrors();
    emailInput.value = "";
  });
  declineOffer.addEventListener('click', function () {
    closeModal();
  });

  var removeErrors = function removeErrors() {
    emailError.classList.remove('email-modal__error-message--active');
    emailForm.classList.remove('email-modal__form-group--error');
  };

  var addErrors = function addErrors() {
    emailError.classList.toggle('email-modal__error-message--active');
    emailForm.classList.toggle('email-modal__form-group--error');
  };

  var showThankMessage = function showThankMessage() {
    thankContainer.classList.add('email-thank--success');
    setTimeout(function () {
      closeModal();
    }, 3000);
  };

  emailButton.addEventListener('click', function () {
    if (emailIsValid(emailInput.value)) {
      showThankMessage();
      console.log(emailInput.value);
    } else {
      addErrors(); // emailError.innerText = "Nope, this is not a valid email"
      // alert('email not valid')
    } // console.log(emailInput.value)

  });

  var showModal = function showModal() {
    if (emailState === false) {
      emailModal.classList.add('email-modal--visible');
      console.log('mouse left');
      emailState = true;
    }
  };

  var closeModal = function closeModal() {
    emailModal.classList.remove('email-modal--visible');
    clearInterval(lizardEfx);
  };

  var closeButton = document.getElementsByClassName('email-modal__close-btn')[0];
  closeButton.addEventListener('click', function () {
    closeModal();
  });
  document.body.addEventListener('mouseleave', function () {
    showModal();
  });
};

var x = document.getElementById('side-img');
var z = document.getElementById('side-img1');
var i = 0;
var lizardEfx = setInterval(function () {
  x.setAttribute('style', "filter: hue-rotate(".concat(i, "deg)"));
  z.setAttribute('style', "filter: hue-rotate(".concat(i, "deg)"));

  if (i < 360) {
    i++;
    deg.innerText = i; // used this to debug the clear interval-> 
    // console.log(i)
  } else {
    i = 0;
  }
}, 50);
var deg = document.getElementById('deg');
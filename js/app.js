// console.log(window.document)
var funkyReg = '/\S+@\S+\.\S+/'

console.log(navigator)
window.onload = function() {
   let emailState = false

   let emailModal = document.getElementsByClassName('email-modal')[0]
   // console.log(emailModal)

   let emailForm = document.getElementsByClassName('email-modal__form-group')[0]

   let emailError = document.getElementsByClassName('email-modal__error-message')[0]

   let emailInput = document.getElementsByClassName('email-modal__input')[0]

   let emailButton = document.getElementsByClassName('email-modal__button')[0]

   let thankContainer = document.getElementsByClassName('email-thank')[0]

   let declineOffer = document.getElementsByClassName('email-modal__decline-offer')[0]

   function emailIsValid(email) {
      return /\S+@\S+\.\S+/.test(email)
   }

   emailInput.addEventListener('click', () => {
      removeErrors()
      emailInput.value = ""
   })

   declineOffer.addEventListener('click', () => {
      closeModal()
   })

   let removeErrors = () => {
      emailError.classList.remove('email-modal__error-message--active')
      emailForm.classList.remove('email-modal__form-group--error')
   }

   let addErrors = () => {
      emailError.classList.toggle('email-modal__error-message--active')
      emailForm.classList.toggle('email-modal__form-group--error')
   }

   let showThankMessage = () => {
      thankContainer.classList.add('email-thank--success')
      setTimeout(() => {
         closeModal()
      }, 3000)
   }

   emailButton.addEventListener('click', () => {
      if(emailIsValid(emailInput.value)) {
         showThankMessage()
         console.log(emailInput.value)
      }
      else{
         addErrors()
         // emailError.innerText = "Nope, this is not a valid email"
         // alert('email not valid')
      }
      // console.log(emailInput.value)
   })

   let showModal = () => {
      if(emailState === false) {
         emailModal.classList.add('email-modal--visible')
         console.log('mouse left')
         emailState = true
      }
   }

   let closeModal = () => {
      emailModal.classList.remove('email-modal--visible')
      clearInterval(lizardEfx)
   }

   let closeButton = document.getElementsByClassName('email-modal__close-btn')[0]

   closeButton.addEventListener('click', () => {
      closeModal()
   })
   
      document.body.addEventListener('mouseleave', () => {
         showModal()
      })
   }




let x = document.getElementById('side-img')
let z = document.getElementById('side-img1')
var i = 0;
let lizardEfx = setInterval(function() {
x.setAttribute('style', `filter: hue-rotate(${i}deg)`);
z.setAttribute('style', `filter: hue-rotate(${i}deg)`);

if(i < 360) {
   i++ 
   deg.innerText = i
   // used this to debug the clear interval-> 
   // console.log(i)
  } else {
     i = 0 
    }
}, 50)



var deg = document.getElementById('deg')



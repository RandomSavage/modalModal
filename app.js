let x = document.getElementById('side-img')
let z = document.getElementById('side-img1')
var i = 0;
setInterval(function() {
x.setAttribute('style', `filter: hue-rotate(${i}deg)`);
z.setAttribute('style', `filter: hue-rotate(${i}deg)`);

if(i < 360) {
   i++ 
   deg.innerText = i 
  } else {
     i = 0 
    }
}, 50)

var deg = document.getElementById('deg')



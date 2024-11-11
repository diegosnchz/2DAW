// var TxtType = function(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 2000;
//   this.txt = '';
//   this.tick();
//   this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//   var that = this;
//   var delta = 200 - Math.random() * 100;

//   if (this.isDeleting) { delta /= 2; }

//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//   }

//   setTimeout(function() {
//     that.tick();
//   }, delta);
// };

// window.onload = function() {
//   var elements = document.getElementsByClassName('typewrite');
//   for (var i=0; i<elements.length; i++) {
//     var toRotate = elements[i].getAttribute('data-type');
//     var period = elements[i].getAttribute('data-period');
//     if (toRotate) {
//       new TxtType(elements[i], JSON.parse(toRotate), period);
//     }
//   }
// };
document.addEventListener("DOMContentLoaded", function() {
  var app = document.querySelector('.typewrite');

  if (app) { // verifica que app no sea null
      var typewriter = new Typewriter(app, {
          loop: true,
          delay: 75,
      });

      typewriter
          .pauseFor(2500)
          .typeString("Hi, I'm Diego Sánchez")
          .pauseFor(300)
          .deleteChars(10)
          .start();
  } else {
      console.error("El elemento .typewrite no fue encontrado en el DOM.");
  }
});



// var app = document.getElementById('.typewrite');

// var typewriter = new Typewriter(typewrite, {
//   loop: true,
//   delay: 75,
// });

// typewriter
//   .pauseFor(2500)
//   .typeString('Hi, Im Diego Sánchez')
//   .pauseFor(300)
//   .deleteChars(10)
//   // .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
//   // .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
//   // .pauseFor(1000)
//   .start();
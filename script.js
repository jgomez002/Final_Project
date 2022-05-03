// AOS js libary for fade in effect: normal edu site
 AOS.init();
 // JS fade out effect: for decoy site
 // modified code from: https://codepen.io/bstonedev/pen/MWWZgKz
 let elementsArray = document.querySelectorAll(".decoyscroll");
console.log(elementsArray);
window.addEventListener('scroll', fadeOut );
window.addEventListener('scroll', fadeIn );
function fadeOut() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distoutView = elem.getBoundingClientRect().top + window.innerHeight + 20;
        if (distoutView < 0) {
            elem.classList.add("outView");
        } else {
            elem.classList.remove("outView");
        }
    }
}
fadeOut();
fadeIn();

function backButton(){
  window.history.back();
}


// window.onscroll = function() {myFunction()};
//
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
//
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


{
var app = document.getElementById('app');


var typewriter = new Typewriter(app,{
    loop: false

});

typewriter.typeString('Take Time To Understand The Digital Inequalities That Exacerbate:')
  .start();
}

function rotateElem() {
            document.querySelector('.container').style.transform
                       = 'rotate(90deg)';
}

var appear = document.getElementById('appear');

// function appear(){
// alert('need help??!, press the "o" in leo, its a shade darker');
// }
//
// setTimeout(function (appear) {
//
// }, 30s);
//
// appear();

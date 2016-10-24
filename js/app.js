document.addEventListener("DOMContentLoaded", function(){
    console.log("działa");

//hover menu code

 var anchor = document.querySelector(".hover-menu-anchor");
 var hiddenMenu = document.querySelector(".firm-options");

 anchor.addEventListener("mouseenter", function(){
   hiddenMenu.classList.remove("hidden");
 });

 hiddenMenu.addEventListener("mouseleave", function(){
   hiddenMenu.classList.add("hidden");
 });

//hidden caption code

 var chairPhoto = document.querySelectorAll(".chairs figure");

 for (var i = 0; i < chairPhoto.length; i++) {
   chairPhoto[i].addEventListener("mouseenter", function() {
     var caption = this.children[1];
     caption.classList.add("hidden");
   });
 }

 for (var i = 0; i < chairPhoto.length; i++) {
   chairPhoto[i].addEventListener("mouseleave", function() {
     var caption = this.children[1];
     caption.classList.remove("hidden");
   });
 }

//slider code

var btnPrev = document.querySelectorAll(".gallery-nav")[0];
var btnNext = document.querySelectorAll(".gallery-nav")[1];
var slides = document.querySelectorAll(".slider");
var counter = 0;

btnNext.addEventListener("click", function() {
  slides[counter].classList.add("hidden")
  counter += 1;
  if (counter > slides.length -1) {
    counter = 0;
  }
  slides[counter].classList.remove("hidden");
});

btnPrev.addEventListener("click", function() {
  slides[counter].classList.add("hidden")
  counter -= 1;
  if (counter === -1) {
    counter = slides.length -1;
  }
  slides[counter].classList.remove("hidden");

});

//calculator code

var calcListsAnchors = document.querySelectorAll(".list_arrow");

for (var i = 0; i < calcListsAnchors.length; i++){
  calcListsAnchors[i].addEventListener("click", function() {
    var listPanel = this.nextElementSibling;
    listPanel.classList.toggle("hidden");
    this.classList.toggle("rotate");
  });
}

calcListsAnchors[0].nextElementSibling.style.zIndex = "3";
calcListsAnchors[1].nextElementSibling.style.zIndex = "2";
calcListsAnchors[2].nextElementSibling.style.zIndex = "1";
//this 3 lines above will allow good display of panels when someone opens them starting from the lowest and do not hide the previous ones

var chairOptions = document.querySelectorAll(".application li");

//changing color of clicked li and reseting colors of the rest
for (var i = 0; i < chairOptions.length; i++) {
  chairOptions[i].addEventListener("click", function() {
    for (var j = 0; j < chairOptions.length; j++) {
        chairOptions[j].style.color = "#585858";
    }
    this.style.color = "#24ba9f";
  });
}

var chairsChoice = document.querySelectorAll(".chairs_choice li");
var chairField = document.querySelector(".panel_left .title");
var chairPriceField = document.querySelector(".panel_right .title");

for (var i= 0; i < chairsChoice.length; i++) {
  chairsChoice[i].addEventListener("click", function(){
    var chairName = this.innerText;
    chairField.innerText = "Chair " + chairName;
    chairPriceField.innerText = this.dataset.price;
    chairCost()
  });
}

var colorsChoice = document.querySelectorAll(".colors_choice li");
var colorField = document.querySelector(".panel_left .color");
var colorPriceField = document.querySelector(".panel_right .color");

for (var i= 0; i < colorsChoice.length; i++) {
  colorsChoice[i].addEventListener("click", function(){
    var colorName = this.innerText;
    colorField.innerText = colorName;
    colorPriceField.innerText = this.dataset.price;
    chairCost()
  });
}


var patternChoice = document.querySelectorAll(".pattern_choice li");
var patternField = document.querySelector(".panel_left .pattern");
var patternPriceField = document.querySelector(".panel_right .pattern");

for (var i= 0; i < patternChoice.length; i++) {
  patternChoice[i].addEventListener("click", function(){
    var patternName = this.innerText;
    patternField.innerText = patternName;
    patternPriceField.innerText = this.dataset.price;
    chairCost()
  });
}

var transport = document.getElementById('transport');
var transportField = document.querySelector(".panel_left .transport");
var transportPriceField = document.querySelector(".panel_right .transport");

transport.addEventListener("click", function(){
  if (transport.checked) {
    transportField.innerText = "transport";
    transportPriceField.innerText = this.dataset.transportPrice;
    chairCost()
  } else {
    transportField.innerText = " ";
    transportPriceField.innerText = " ";
    chairCost()
  }
});

var prices = document.querySelectorAll(".value");
var sum = document.querySelector(".sum");

function chairCost() {
  var finalPrice = 0;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i].innerText > 0) {
        finalPrice += parseInt(prices[i].innerText);
        sum.innerText = finalPrice;
    }
  }
}















});

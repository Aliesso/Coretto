'use stri t';
var sliderWidth = document.querySelector(".slider").clientWidth;
var sliderLength = document.querySelectorAll(".slider li ").length
var mySlideWidth = sliderWidth * sliderLength;
var sliderUl = document.querySelector(".slider ul")
var nextIco = document.querySelector(".next")
var prevIco = document.querySelector(".prev")
var c = 0;
sliderUl.style.width = mySlideWidth + "px"
prevIco.onclick = function() {
    clearInterval(myInt)
    myPrevSlider();
    setInterval(myNextSlider, 5000);
}
nextIco.onclick = function() {
    clearInterval(myInt)
    myNextSlider();
    setInterval(myNextSlider, 5000);
}

function myPrevSlider() {
    c--;
    if (c == -1) {
        c = sliderLength - 1;
    }
    sliderUl.style.left = -(c * sliderWidth) + "px"

}

function myNextSlider() {
    c++;
    if (c == sliderLength) {
        c = 0;
    }
    sliderUl.style.left = -(c * sliderWidth) + "px"

}
var myInt = setInterval(myNextSlider, 6000);
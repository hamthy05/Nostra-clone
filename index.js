// Closed Ad
var ad = document.querySelector(".ad");
var btn = document.getElementById("close btn");

btn.addEventListener("click", function () {
  ad.style.display = "none";
});

//  slide bar

var slidenav = document.querySelector(".slide-navbar");

function showNavbar() {
  slidenav.style.left = "0%";
}

function closeNavbar() {
  slidenav.style.left = "-60%";
}

// change image

var slide1_img = document.querySelector(".slide1-img");
var images = ["slide1.jpg", "slide2.jpg"];
var i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slide1_img.setAttribute("src", "images/" + images[i]);
}


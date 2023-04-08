var logoCarousel = document.querySelector(".logo-carousel");
var logos = logoCarousel.querySelectorAll("img");
var logoWidth = logos[0].offsetWidth;
var logoCount = logos.length;
var currentIndex = 0;

function nextLogo() {
  var nextIndex = (currentIndex + 1) % logoCount;
  var nextPosition = -nextIndex * logoWidth;
  logoCarousel.style.transform = "translateX(" + nextPosition + "px)";
  currentIndex = nextIndex;
}

setInterval(nextLogo, 2000);

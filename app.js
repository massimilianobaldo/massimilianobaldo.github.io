const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
  for (var element of lines) {
    element.classList.toggle("close");
  }
});
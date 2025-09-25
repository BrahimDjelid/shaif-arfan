const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const links = document.querySelectorAll(".header .nav-bar .nav-list a");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobile_menu.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    header.style.backgroundColor = "rgb(31, 30, 30)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

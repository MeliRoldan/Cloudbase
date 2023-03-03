var myNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 155 || document.documentElement.scrollTop >= 155) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};

$("indicator").hasClass("active").removeClass("indicator");
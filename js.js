var myNav = document.getElementById("nav");
window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 155 || document.documentElement.scrollTop >= 155) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};


$(".nav-link").on("click", function(){
  $(".nav-link.active").removeClass("active");
  $(this).addClass("active");
});
 
$("indicator").find("active").removeClass("indicator");


var myNav = document.getElementById("nav");
window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 155 || document.documentElement.scrollTop >= 155) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};

$( function() {  
 
  $(".navbar-nav").on("click", "a", function(){
    let id = $(this).attr("id");
    
    $("#pages").load(id + ".html");
    if ((id !== "about") && (id !=="contact")) {
      $('.jandaba').show();
    } else {
      $('.jandaba').hide();
    };
  });
 
  
  $("indicator").hasClass("active").removeClass("indicator");

 


}) 
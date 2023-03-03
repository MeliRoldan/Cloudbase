window.onload = function(){
  var myNav = document.getElementById("nav");

  window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 70 || document.documentElement.scrollTop >= 70) {
      myNav.classList.add("scroll");
    } else {
      myNav.classList.remove("scroll");
    }
  };
};

const locations = ["Gudauri","Svaneti","Tbilisi","Gonio","Sighnaghi"];
let options = document.getElementById("options");
for (let i=0; i<locations.length; i++){
  options.innerHTML += `<option value="${[i]}">${locations[i]}</option>`;
};



  /*i should add array with the locations and run foreach to add the loctaions as options to the select tag
   and i should create if conditions that will show the price in the corresponding tag based on the loctaions choosed.
   Gudauri - 250
   Svaneti - 350
   Tbilisi - 60
   Gonio - 120
   Signaghi - 90
   */

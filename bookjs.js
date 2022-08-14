var myNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};

const gudauri = {
  placeName: "Gudauri",
  placePrise: 250,
};

const svaneti = {
  placeName: "Svaneti",
  placePrise: 350,
};

const tbilisi = {
  placeName: "Tbilisi",
  placePrise: 60,
};

const gonio = {
  placeName: "Gonio",
  placePrise: 150,
};

const sighnaghi = {
  placeName: "Sighnaghi",
  placePrise: 80,
};


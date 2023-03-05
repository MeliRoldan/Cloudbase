const locations = ["Gudauri", "Svaneti", "Tbilisi", "Gonio", "Sighnaghi"];
let options = document.getElementById("options");
for (let i = 0; i < locations.length; i++) {
  options.innerHTML += `<option value="${[i]}">${locations[i]}</option>`;
};
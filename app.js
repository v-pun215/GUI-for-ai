document.getElementById("heading").innerHTML =
  localStorage["user"] || "Start"; // default text

setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["title"] = document.getElementById("new").innerHTML; // heading div
}, 1000);

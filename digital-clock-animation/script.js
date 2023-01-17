function updateClock() {
  var date = new Date(),
    hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ampm = date.getHours() >= 12 ? "PM" : "AM";

  document.getElementById("clock").innerHTML =
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds +
    " " +
    ampm;
}

setInterval(updateClock, 1000);

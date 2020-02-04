hljs.initHighlightingOnLoad();
updateDateTime(new Date());
window.setInterval(function() {
  updateDateTime(new Date());
  alternateColor();
}, 1000);

function alternateColor() {
  let segment1 = document.getElementById("segment-1")
  let segment2 = document.getElementById("segment-2")
  let temp = window.getComputedStyle(segment1).backgroundColor;
  segment1.style.backgroundColor = window.getComputedStyle(segment2).backgroundColor;
  segment2.style.backgroundColor = temp;
}

function updateDateTime(date) {
  let DEBUG = true;
  let spelledDate = getSpelledDate(date);
  let hours = date.getHours();
  hours = (hours > 12) ? hours - 12 :
    (hours == 0) ? 12 : hours;
  let am_pm = (date.getHours() > 12) ? "PM" :
    (date.getHours() == 12 && date.getMinutes() == 0) ? "NOON" :
    (date.getHours() == 12 && date.getMinutes() > 0) ? "PM" :
    (date.getHours() == 0 && date.getMinutes() == 0) ? "MIDNIGHT" : "AM";
  let minutes = date.getMinutes();
  minutes = (minutes.toString().length > 1) ? minutes.toString() : "0" + minutes;
  let seconds = date.getSeconds();
  seconds = (seconds.toString().length > 1) ? seconds.toString() : "0" + seconds;
  let currentTime = `${hours}:${minutes}:${seconds} ${am_pm}`;
  console.log(`spelledDate=${spelledDate}`);
  console.log(`currentTime=${currentTime}`);
  let headingDate = document.getElementById("current-date");
  if (headingDate != null) {
    headingDate.innerHTML = spelledDate;
  }
  let headingTime = document.getElementById("current-time");
  if (headingTime != null) {
    headingTime.innerHTML = currentTime;
  }

  function getSpelledMonth(numericMonth) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[numericMonth];
  }

  function getSpelledDate(date) {
    return `${getSpelledMonth(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
  }
}

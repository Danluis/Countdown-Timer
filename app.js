const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const textbox = document.querySelector(".textbox");

let newYears = "1 jan 2024";

function countdown() {
  let newYearsDate = new Date(newYears);
  let currentDate = new Date();

  let totalSeconds = (newYearsDate - currentDate) / 1000;

  daysEl.innerHTML = Math.floor(totalSeconds / 86400);
  hoursEl.innerHTML = Math.floor(totalSeconds / 3600 % 24);
  minsEl.innerHTML = Math.floor(totalSeconds / 60 % 60);
  secondsEl.innerHTML = Math.floor(totalSeconds % 60);
}

function changeDate() {
  if (textbox.value === "") {
    newYears = "1 jan 2024";
  } else {
    newYears = textbox.value;
  }
}

countdown();
setInterval(countdown, 1000);

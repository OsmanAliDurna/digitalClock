const timeTR = document.getElementById("TimeTR");
const dateTR = document.getElementById("DateTR");
const dayTR = document.getElementById("DayTR");
const timeEU = document.getElementById("TimeEU");
const dateEU = document.getElementById("DateEU");
const dayEU = document.getElementById("DayEU");
const timeUSA = document.getElementById("TimeUSA");
const dateUSA = document.getElementById("DateUSA");
const dayUSA = document.getElementById("DayUSA");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

setInterval(() => {
  const d = new Date();
  const hourTR = d.getHours();
  const hourEU = d.getHours() + 22;
  const hourUSA = d.getHours() + 17;
  const textTR = check(d.getDate());
  const textEU = hourTR < 2 ? check(d.getDate() - 1) : check(d.getDate());
  const textUSA = hourTR < 7 ? check(d.getDate() - 1) : check(d.getDate());

  FillText(timeTR, dateTR, hourTR, textTR);
  dayTR.textContent = days[d.getDay() - 1];

  FillText(timeEU, dateEU, hourEU, textEU);
  dayEU.textContent = hourTR < 2 ? days[d.getDay() - 2] : days[d.getDay() - 1];

  FillText(timeUSA, dateUSA, hourUSA, textUSA);
  dayUSA.textContent = hourTR < 7 ? days[d.getDay() - 2] : days[d.getDay() - 1];

  function FillText(time, date, hour, text) {
    time.textContent =
      check(hour % 12) +
      " : " +
      check(d.getMinutes()) +
      " : " +
      check(d.getSeconds()) +
      "  " +
      AMPM(hour);

    date.textContent =
      text + " / " + check(d.getMonth() + 1) + " / " + d.getFullYear();
  }

  function check(num) {
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  }

  function AMPM(h) {
    return h < 12 ? "AM" : "PM";
  }
}, 950);

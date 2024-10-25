import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

flatpickr("#datetime-picker", options);



const input = document.querySelector(".input-text")
const startBtn = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");
let userSelectedDate = null;
let timerId = null;

const options = {
    enableTime: true, 
    time_24hr: true, 
    defaulDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDates = selectedDates[0];
        if (selectedDates < new Data()) {
            iziToast.error({
                title: `Error`,
                message: `Please choose a date in the future`,
            });
            startBtn.disabled = true;
         } else {
                startBtn.disabled = false;
                userSelectedDate = selectedDates;
            }
        }
    }

    startBtn.addEventListener("click", startTimer);

    function startTimer () {
input.disabled = true;
startBtn.disabled = true;

timerId = setInterval(() => {
    const currentTime = new Date();
    const timeRemaining = userSelectedDate - currentTime;

    if (timeRemaining <= 0) {
      clearInterval(timerId);
      iziToast.success({
        title: 'Success',
        message: 'Countdown finished!',
      });
      return;
    }

    updateTimer(convertMs(timeRemaining));
  }, 1000);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
function addleadingZero(value) {
    return String(value).padStart(2, "0");
}
  


function updateTimer({ days, hours, minutes, seconds }) {
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
}
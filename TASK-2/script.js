const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let intervalId = null;

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(updateTime, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}

function pauseStopwatch() {
  clearInterval(intervalId);
  elapsedTime = Date.now() - startTime;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetStopwatch() {
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  display.textContent = '00:00:00.000';
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)));

  display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}

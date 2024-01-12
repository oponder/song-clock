const scrollArea = document.getElementById("scrollArea");
const circleArea = document.getElementById("circleArea");

// Circle of fifths
const circle = [
  ["C", "Am"],
  ["G", "Em"],
  ["D", "Bm"],
  ["A", "F#m"],
  ["E", "C#m"],
  ["B", "G#m"],
  ["F#", "D#m"],
  ["C#", "A#m"],
  ["Ab", "Fm"],
  ["Eb", "Cm"],
  ["Bb", "Gm"],
  ["F", "Dm"],
];

// Create a div for each key
circle.forEach((key, index) => {
  let div = document.createElement("div");
  div.classList.add("key");
  div.id = "key-" + index;
  div.innerHTML = key[0] + " / " + key[1];
  circleArea.appendChild(div);
});

// Set up an animation loop
const startTime = new Date().getTime();

function animate() {
  // Get time in utc milliseconds
  let time = new Date().getTime();

  // Call the scroll function to move the scroll area
  scroll(time);

  // Call the animate function again next time the browser is ready to draw
  requestAnimationFrame(animate);
}

let w = window.innerWidth;

let durationSeconds = 360;
let durationMilliseconds = durationSeconds * 1000;
let secondsInDay = 86400;

function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

addEventListener("resize", (event) => {
  w = window.innerWidth;
});

function scroll(time) {
  let offset = time;

  let offsetPercentage =
    ((offset % durationMilliseconds) * 2) / durationMilliseconds;

  scrollArea.style.right = offsetPercentage * w + "px";

  const currentKeyIndex = (getSecondsToday() / durationSeconds) % 12;

  // Remove active class from all keys
  document.querySelectorAll(".key").forEach((key) => {
    key.classList.remove("active");
  });

  document
    .getElementById("key-" + Math.floor(currentKeyIndex - 0.5))
    .classList.add("active");
}

// Call the animate function to start the animation loop
animate();

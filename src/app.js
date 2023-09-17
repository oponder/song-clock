scrollArea = document.getElementById("scrollArea");

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

let durationSeconds = 300;
let durationMilliseconds = durationSeconds * 1000;

addEventListener("resize", (event) => {
  w = window.innerWidth;
});

function scroll(time) {
  let offset = time;

  let offsetPercentage =
    ((offset % durationMilliseconds) * 2) / durationMilliseconds;

  scrollArea.style.right = offsetPercentage * w + "px";
}

// Call the animate function to start the animation loop
animate();

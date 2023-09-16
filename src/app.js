scrollArea = document.getElementById("scrollArea");

// Set up an animation loop

function animate() {
  // Get time in utc milliseconds
  var time = new Date().getTime();

  // Call the scroll function to move the scroll area
  scroll(time);

  // Call the animate function again next time the browser is ready to draw
  requestAnimationFrame(animate);
}

function scroll(time) {
  console.log(time);
  scrollArea.style.right = ((time / 50) % 3600) + "px";
}

// Call the animate function to start the animation loop

animate();

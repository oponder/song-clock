scrollArea=document.getElementById("scrollArea"),circleArea=document.getElementById("circleArea"),// Create a div for each key
[["C","Am"],["G","Em"],["D","Bm"],["A","F#m"],["E","C#m"],["B","G#m"],["F#","D#m"],["C#","A#m"],["Ab","Fm"],["Eb","Cm"],["Bb","Gm"],["F","Dm"]].forEach(e=>{let t=document.createElement("div");t.classList.add("key"),t.innerHTML=e[0]+" / "+e[1],circleArea.appendChild(t)}),new Date().getTime();let e=window.innerWidth;addEventListener("resize",t=>{e=window.innerWidth}),// Call the animate function to start the animation loop
function t(){var n;n=new Date().getTime(),scrollArea.style.right=n%3e5*2/3e5*e+"px",// Call the animate function again next time the browser is ready to draw
requestAnimationFrame(t)}();//# sourceMappingURL=index.074be422.js.map

//# sourceMappingURL=index.074be422.js.map

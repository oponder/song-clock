let e;scrollArea=document.getElementById("scrollArea"),circleArea=document.getElementById("circleArea"),// Create a div for each key
[["C","Am"],["G","Em"],["D","Bm"],["A","F#m"],["E","C#m"],["B","G#m"],["F#","D#m"],["C#","A#m"],["Ab","Fm"],["Eb","Cm"],["Bb","Gm"],["F","Dm"]].forEach((e,t)=>{let r=document.createElement("div");r.classList.add("key"),r.id="key-"+t,r.innerHTML=e[0]+" / "+e[1],circleArea.appendChild(r)}),new Date().getTime(),e=window.innerWidth,addEventListener("resize",t=>{e=window.innerWidth}),// Call the animate function to start the animation loop
function t(){var r;r=new Date().getTime(),scrollArea.style.right=r%36e4*2/36e4*e+"px",// Remove active class from all keys
document.querySelectorAll(".key").forEach(e=>{e.classList.remove("active")}),document.getElementById("key-"+Math.floor(r/360/240%12)).classList.add("active"),// Call the animate function again next time the browser is ready to draw
requestAnimationFrame(t)}();//# sourceMappingURL=index.11161016.js.map

//# sourceMappingURL=index.11161016.js.map

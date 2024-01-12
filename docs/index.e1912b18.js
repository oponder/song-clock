!function(){let e=document.getElementById("scrollArea"),t=document.getElementById("circleArea");// Create a div for each key
[["C","Am"],["G","Em"],["D","Bm"],["A","F#m"],["E","C#m"],["B","G#m"],["F#","D#m"],["C#","A#m"],["Ab","Fm"],["Eb","Cm"],["Bb","Gm"],["F","Dm"]].forEach((e,n)=>{let m=document.createElement("div");m.classList.add("key"),m.id="key-"+n,m.innerHTML=e[0]+" / "+e[1],t.appendChild(m)}),new Date().getTime();let n=window.innerWidth;addEventListener("resize",e=>{n=window.innerWidth}),// Call the animate function to start the animation loop
function t(){var m;m=new Date().getTime(),e.style.right=m%36e4*2/36e4*n+"px",// Remove active class from all keys
document.querySelectorAll(".key").forEach(e=>{e.classList.remove("active")}),document.getElementById("key-"+Math.floor(m/360/240%12)).classList.add("active"),// Call the animate function again next time the browser is ready to draw
requestAnimationFrame(t)}()}();//# sourceMappingURL=index.e1912b18.js.map

//# sourceMappingURL=index.e1912b18.js.map

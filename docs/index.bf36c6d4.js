!function(){let e=document.getElementById("scrollArea"),t=document.getElementById("circleArea");// Create a div for each key
[["C","Am"],["G","Em"],["D","Bm"],["A","F#m"],["E","C#m"],["B","G#m"],["F#","D#m"],["C#","A#m"],["Ab","Fm"],["Eb","Cm"],["Bb","Gm"],["F","Dm"]].forEach((e,n)=>{let i=document.createElement("div");i.classList.add("key"),i.id="key-"+n,i.innerHTML=e[0]+" / "+e[1],t.appendChild(i)}),new Date().getTime();let n=window.innerWidth;addEventListener("resize",e=>{n=window.innerWidth}),// Call the animate function to start the animation loop
function t(){// Call the scroll function to move the scroll area
(function(t){let i;e.style.right=t%36e4*2/36e4*n+"px";let m=(3600*(i=new Date).getHours()+60*i.getMinutes()+i.getSeconds())/360%12;// Remove active class from all keys
document.querySelectorAll(".key").forEach(e=>{e.classList.remove("active")}),document.getElementById("key-"+Math.floor(m-.5)).classList.add("active")})(new Date().getTime()),// Call the animate function again next time the browser is ready to draw
requestAnimationFrame(t)}()}();//# sourceMappingURL=index.bf36c6d4.js.map

//# sourceMappingURL=index.bf36c6d4.js.map

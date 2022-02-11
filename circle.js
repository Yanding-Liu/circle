/*
var ctx=document.getElementById("canvas").getContext("2d");
var radius=100;
for(var i=0;i<12;i++){
    ctx.beginPath();
    ctx.fillStyle=`hsl(${-30*(i+1)}, 100%,75%)`;
    ctx.moveTo(100,100);
   
    ctx.arc(100,100,radius,i*Math.PI/6,(i+1)*((Math.PI/6)),false); 
    ctx.closePath();
    ctx.fill();
}
*/
window.addEventListener("load", addListeners);
function addListeners() {
    document.addEventListener("keydown", function(e){
        e.preventDefault;
        if (e.key === 'f' || e.key === '\'') {
            document.getElementById('F').style.stroke = "hsl(90,100%,75%)";
        }
        if (e.key === 'a' || e.key === 'k') {
            document.getElementById('C').style.stroke = "hsl(60,100%,75%)";
        }
        if (e.key === 'g') {
            document.getElementById('G').style.stroke = "hsl(30,100%,75%)";
        }
        if (e.key === 's' || e.key === 'l') {
            document.getElementById('D').style.stroke = "hsl(0,100%,75%)";
        }
        if (e.key === 'h') {
            document.getElementById('A').style.stroke = "hsl(330,100%,75%)";
        }
        if (e.key === 'd' || e.key === ';') {
            document.getElementById('E').style.stroke = "hsl(300,100%,75%)";
        }
        if (e.key === 'j' || e.key === 'CapsLock') {
            document.getElementById('B').style.stroke = "hsl(270,100%,75%)";
        }
        if (e.key === 't' || e.key === ']') {
            document.getElementById('Gb').style.stroke = "hsl(240,100%,75%)";
        }
        if (e.key === 'w' || e.key === 'o') {
            document.getElementById('Db').style.stroke = "hsl(210,100%,75%)";
        }
        if (e.key === 'y') {
            document.getElementById('Ab').style.stroke = "hsl(180,100%,75%)";
        }
        if (e.key === 'e' || e.key === 'p') {
            document.getElementById('Eb').style.stroke = "hsl(150,100%,75%)";
        }
        if (e.key === 'u') {
            document.getElementById('Bb').style.stroke = "hsl(120,100%,75%)";
        }
    });
    document.addEventListener("keyup", function(e){
        e.preventDefault;
        if (e.key === 'f' || e.key === '\'') {
            document.getElementById('F').style.stroke = "hsl(90,0%,75%)";
        }
        if (e.key === 'a' || e.key === 'k') {
            document.getElementById('C').style.stroke = "hsl(60,0%,75%)";
        }
        if (e.key === 'g') {
            document.getElementById('G').style.stroke = "hsl(30,0%,75%)";
        }
        if (e.key === 's' || e.key === 'l') {
            document.getElementById('D').style.stroke = "hsl(0,0%,75%)";
        }
        if (e.key === 'h') {
            document.getElementById('A').style.stroke = "hsl(330,0%,75%)";
        }
        if (e.key === 'd' || e.key === ';') {
            document.getElementById('E').style.stroke = "hsl(300,0%,75%)";
        }
        if (e.key === 'j' || e.key === 'CapsLock') {
            document.getElementById('B').style.stroke = "hsl(270,0%,75%)";
        }
        if (e.key === 't' || e.key === ']') {
            document.getElementById('Gb').style.stroke = "hsl(240,0%,75%)";
        }
        if (e.key === 'w' || e.key === 'o') {
            document.getElementById('Db').style.stroke = "hsl(210,0%,75%)";
        }
        if (e.key === 'y') {
            document.getElementById('Ab').style.stroke = "hsl(180,0%,75%)";
        }
        if (e.key === 'e' || e.key === 'p') {
            document.getElementById('Eb').style.stroke = "hsl(150,0%,75%)";
        }
        if (e.key === 'u') {
            document.getElementById('Bb').style.stroke = "hsl(120,0%,75%)";
        }
    });
}

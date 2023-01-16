var MyCanvas = document.getElementById("MyCanvas"); // koppeling naar Canvas
var ctx = MyCanvas.getContext("2d"); // koppelen aan 2d modus
var height = MyCanvas.clientHeight;
var width = MyCanvas.clientWidth;
 
// variabelen definieren

// groene blokje
var Spr1PosX = 0;
var Spr1PosY = height-40;
var Spr1Formaat = 40;

var Spr2PosX = width-40;
var Spr2PosY = height-40;
var Spr2Formaat = 40;

var Sprx =[];
var Spry =[];
var Sprkleur =[];

var Score1 = 0;
var Score2 = 0;

var aantalspr = 80;



function randomGenerator() {
  const lHex = '0123456789ABCDEF';
  var kleur ="#";
  for (var i = 1; i < 7; i++) {
    kleur += lHex[Math.floor(Math.random() * 16 ) ];
  }
  return kleur;
}
 
function maakspr() {
for(i=0;i<aantalspr; i++) {
  Sprx[i]= Math.floor(Math.random()*width);
  Spry[i]= Math.floor(Math.random()*height);
  Sprkleur[i]= randomGenerator();
}

}
maakspr();


var ingedrukteToets = []; // in[0] = false; in[1] = true;

document.addEventListener("keydown", function(uitlezen){
    ingedrukteToets = ingedrukteToets || [];
    ingedrukteToets[uitlezen.keyCode] = true;
})
document.addEventListener("keyup", function(uitlezen){
    ingedrukteToets[uitlezen.keyCode] = false;
})

setInterval(speelVeldUpdate, 5);

function speelVeldUpdate() {
  if (ingedrukteToets && ingedrukteToets[38]) { // pijltje omhoog
    Spr1PosY--;
  }
  if (ingedrukteToets && ingedrukteToets[40]) { // pijltje beneden
    Spr1PosY++;
  }
  if (ingedrukteToets && ingedrukteToets[39]) {
    Spr1PosX++;
  }
  if (ingedrukteToets && ingedrukteToets[37]) {
    Spr1PosX--;
  }

  if (ingedrukteToets && ingedrukteToets[65]) {Spr2PosX -= 1; } //links
  if (ingedrukteToets && ingedrukteToets[83]) {Spr2PosX += 1; } // rechts
  if (ingedrukteToets && ingedrukteToets[87]) {Spr2PosY -= 1; } // omhoog
  if (ingedrukteToets && ingedrukteToets[90]) {Spr2PosY += 1; } // omlaag
  // aanroepen diverse functies om beeld te tekenen en voor beweging
  ctx.clearRect(0,0,MyCanvas.offsetWidth, MyCanvas.offsetHeight);
 Spr1();
 Spr2();
 Spr();
 botsing();
 document.getElementById("scoreid").innerHTML = "scorespeler1:"+ Score1+ " scorespeler2:"+ Score2;
 
}
  
function Spr1() {
  if (Spr1PosX < 0) {
    Spr1PosX = MyCanvas.offsetWidth - Spr1Formaat;
  }
  if (Spr1PosY < 0) {
    Spr1PosY = MyCanvas.offsetHeight - Spr1Formaat;
  }
  if (Spr1PosX > MyCanvas.offsetWidth - Spr1Formaat) {
    Spr1PosX = 0;
  }
  if (Spr1PosY > MyCanvas.offsetHeight - Spr1Formaat) {
    Spr1PosY = 0;
  }
  ctx.fillStyle = "green"; // kleur toekennen
  ctx.fillRect(Spr1PosX, Spr1PosY, Spr1Formaat, Spr1Formaat); // vierkant tekenen
 
}
 
function Spr2() {
  if (Spr2PosX < 0) {
    Spr2PosX = MyCanvas.offsetWidth - Spr2Formaat;
  }
  if (Spr2PosY < 0) {
    Spr2PosY = MyCanvas.offsetHeight - Spr2Formaat;
  }
  if (Spr2PosX > MyCanvas.offsetWidth - Spr2Formaat) {
    Spr2PosX = 0;
  }
  if (Spr2PosY > MyCanvas.offsetHeight - Spr2Formaat) {
    Spr2PosY = 0;
  }
  ctx.fillStyle = "aqua"; // kleur toekennen
  ctx.fillRect(Spr2PosX, Spr2PosY, Spr2Formaat, Spr2Formaat); // vierkant tekenen
 
}
// Spr2 - schrijf sprite 2

function Spr() {

for(i=0; i<aantalspr; i++) {
  ctx.fillStyle = Sprkleur[i];
  ctx.fillRect(Sprx[i], Spry[i], 10, 10);
}
  
  
}


function botsing() {
  // test voor botsing.
  
  var Spr2boven = Spr2PosY;
  var Spr2beneden = Spr2PosY + Spr2Formaat;
  var Spr2links = Spr2PosX;
  var Spr2rechts = Spr2PosX + Spr2Formaat;

  for(i=0;i<aantalspr; i++) {
    if (
    Spr2beneden < Spry[i] ||
    Spr2boven > Spry[i]+10 ||
    Spr2rechts < Sprx[i] ||
    Spr2links > Sprx[i]+10
  ) {
    // niets doen als ze elkaar niet raken
  } else {
    Spry[i]=700;
    Spr2Formaat+= 5;
    Score2++;
  }

  }

  var Spr1boven = Spr1PosY;
  var Spr1beneden = Spr1PosY + Spr1Formaat;
  var Spr1links = Spr1PosX;
  var Spr1rechts = Spr1PosX + Spr1Formaat;
  for(i=0;i<aantalspr; i++) {
    if (
    Spr1beneden < Spry[i] ||
    Spr1boven > Spry[i]+10 ||
    Spr1rechts < Sprx[i] ||
    Spr1links > Sprx[i]+10
  ) {
    // niets doen als ze elkaar niet raken
  } else {
    Spry[i]=700;
    Spr1Formaat+= 5;
    Score1++;
  }

  }


  if ((Score1+Score2)== aantalspr) {
    alert("GAME OVER!");
    Score1=0;
    Score2=0;
    maakspr();
    Spr1Formaat= 40;
    Spr2Formaat= 40; 
  }
    
  }
  



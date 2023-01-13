var MyCanvas = document.getElementById("MyCanvas"); // koppeling naar Canvas
var ctx = MyCanvas.getContext("2d"); // koppelen aan 2d modus
 
// variabelen definieren

// groene blokje
var Spr1PosX = 0;
var Spr1PosY = 640;
var Spr1Formaat = 40;
// gele blokje
var Spr2x = 1600; 
var Spr2y = 30;
var Spr2formaat = 10;
// rode blokje
var Spr3x = 300; 
var Spr3y = 220;
var Spr3formaat = 10;
// paarse blokje
var Spr4x = 800; 
var Spr4y = 30;
var Spr4formaat = 10;
// aqua blokje
var Spr5x = 800; 
var Spr5y = 270;
var Spr5formaat = 10;
// grijze blokje
var Spr6x = 30; 
var Spr6y = 30;
var Spr6formaat = 10;
// oranje blokje
var Spr7x = 990; 
var Spr7y = 420;
var Spr7formaat = 10;
// bruine blokje
var Spr8x = 1280; 
var Spr8y = 220;
var Spr8formaat = 10;
// zwarte blokje
var Spr9x = 800; 
var Spr9y = 600;
var Spr9formaat = 10;
// blauwe blokje
var Spr10x = 590; 
var Spr10y = 420;
var Spr10formaat = 10;

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
  // aanroepen diverse functies om beeld te tekenen en voor beweging
  ctx.clearRect(0,0,MyCanvas.offsetWidth, MyCanvas.offsetHeight);
 Spr1();
 Spr2();
 Spr3();
 Spr4();
 Spr5();
 Spr6();
 Spr7();
 Spr8();
 Spr9();
 Spr10();
 botsing();
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



 
// Spr2 - schrijf sprite 2
var telSpr2 = 0;
var maxSpr2 = 100;
var richtSpr2X = 1; // -1 = links, 0 = midden, 1 = rechts
var richtSpr2Y = 1; // -1 = omhoog, 0 = horiz, 1 = beneden
function Spr2() {

  
 // testen op rand
  if (Spr2x<0) {richtSpr2X = 1;}
  if (Spr2x>MyCanvas.offsetWidth-Spr2formaat) {richtSpr2X = -1;}
  if (Spr2y<0) {richtSpr2Y = 1;}
  if (Spr2y>MyCanvas.offsetHeight-Spr2formaat) {richtSpr2Y = -1;}
  ctx.fillStyle = "yellow";
  ctx.fillRect(Spr2x, Spr2y, Spr2formaat, Spr2formaat);
}


// Spr3 - schrijf sprite 3
var telSpr3 = 0;
var maxSpr3 = 100;
var richtSpr3X = 1; // -1 = links, 0 = midden, 1 = rechts
var richtSpr3Y = 1; // -1 = omhoog, 0 = horiz, 1 = beneden
function Spr3() {

  
 // testen op rand
  if (Spr3x<0) {richtSpr3X = 1;}
  if (Spr3x>MyCanvas.offsetWidth-Spr3formaat) {richtSpr3X = -1;}
  if (Spr3y<0) {richtSpr3Y = 1;}
  if (Spr3y>MyCanvas.offsetHeight-Spr3formaat) {richtSpr3Y = -1;}
  ctx.fillStyle = "red";
  ctx.fillRect(Spr3x, Spr3y, Spr3formaat, Spr3formaat);
}


// Spr4 - schrijf sprite 4
var telSpr4 = 0;
var maxSpr4 = 100;
var richtSpr4X = 1; // -1 = links, 0 = midden, 1 = rechts
var richtSpr4Y = 1; // -1 = omhoog, 0 = horiz, 1 = beneden
function Spr4() {

  
 // testen op rand
  if (Spr4x<0) {richtSpr4X = 1;}
  if (Spr4x>MyCanvas.offsetWidth-Spr4formaat) {richtSpr4X = -1;}
  if (Spr4y<0) {richtSpr4Y = 1;}
  if (Spr4y>MyCanvas.offsetHeight-Spr4formaat) {richtSpr4Y = -1;}
  ctx.fillStyle = "purple";
  ctx.fillRect(Spr4x, Spr4y, Spr4formaat, Spr4formaat);
}


// Spr5 - schrijf sprite 5
var telSpr5 = 0;
var maxSpr5 = 100;
var richtSpr5X = 1; // -1 = links, 0 = midden, 1 = rechts
var richtSpr5Y = 1; // -1 = omhoog, 0 = horiz, 1 = beneden
function Spr5() {

  
 // testen op rand
  if (Spr5x<0) {richtSpr5X = 1;}
  if (Spr5x>MyCanvas.offsetWidth-Spr5formaat) {richtSpr5X = -1;}
  if (Spr5y<0) {richtSpr5Y = 1;}
  if (Spr5y>MyCanvas.offsetHeight-Spr5formaat) {richtSpr5Y = -1;}
  ctx.fillStyle = "aqua";
  ctx.fillRect(Spr5x, Spr5y, Spr5formaat, Spr5formaat);
}


// Spr6 - schrijf sprite 6
var telSpr6 = 0;
var maxSpr6 = 100;
var richtSpr6X = 1; // -1 = links, 0 = midden, 1 = rechts
var richtSpr6Y = 1; // -1 = omhoog, 0 = horiz, 1 = beneden
function Spr6() {

  
 // testen op rand
  if (Spr6x<0) {richtSpr6X = 1;}
  if (Spr6x>MyCanvas.offsetWidth-Spr6formaat) {richtSpr6X = -1;}
  if (Spr6y<0) {richtSpr6Y = 1;}
  if (Spr6y>MyCanvas.offsetHeight-Spr6formaat) {richtSpr6Y = -1;}
  ctx.fillStyle = "gray";
  ctx.fillRect(Spr6x, Spr6y, Spr6formaat, Spr6formaat);
}


// Spr7 - schrijf sprite 7
var telSpr7 = 0;
var maxSpr7 = 100;
var richtSpr7X = 1; // -1 = links, 0 = midden, 1 = rechts
var richtSpr7Y = 1; // -1 = omhoog, 0 = horiz, 1 = beneden
function Spr7() {

  
 // testen op rand
  if (Spr7x<0) {richtSpr7X = 1;}
  if (Spr7x>MyCanvas.offsetWidth-Spr7formaat) {richtSpr7X = -1;}
  if (Spr7y<0) {richtSpr7Y = 1;}
  if (Spr7y>MyCanvas.offsetHeight-Spr7formaat) {richtSpr7Y = -1;}
  ctx.fillStyle = "orange";
  ctx.fillRect(Spr7x, Spr7y, Spr7formaat, Spr7formaat);
}


// Spr8 - schrijf sprite 8
var telSpr8 = 0;
var maxSpr8 = 100;
var richtSpr8X = 1; // -1 = links, 0 = midden, 1 = rechts
var richtSpr8Y = 1; // -1 = omhoog, 0 = horiz, 1 = beneden
function Spr8() {

  
 // testen op rand
  if (Spr8x<0) {richtSpr8X = 1;}
  if (Spr8x>MyCanvas.offsetWidth-Spr8formaat) {richtSpr8X = -1;}
  if (Spr8y<0) {richtSpr8Y = 1;}
  if (Spr8y>MyCanvas.offsetHeight-Spr8formaat) {richtSpr8Y = -1;}
  ctx.fillStyle = "brown";
  ctx.fillRect(Spr8x, Spr8y, Spr8formaat, Spr8formaat);
}


// Spr9 - schrijf sprite 9
var telSpr9 = 0;
var maxSpr9 = 100;
var richtSpr9X = 1; // -1 = links, 0 = midden, 1 = rechts
var richtSpr9Y = 1; // -1 = omhoog, 0 = horiz, 1 = beneden
function Spr9() {

  
 // testen op rand
  if (Spr9x<0) {richtSpr9X = 1;}
  if (Spr9x>MyCanvas.offsetWidth-Spr9formaat) {richtSpr9X = -1;}
  if (Spr9y<0) {richtSpr9Y = 1;}
  if (Spr9y>MyCanvas.offsetHeight-Spr9formaat) {richtSpr9Y = -1;}
  ctx.fillStyle = "black";
  ctx.fillRect(Spr9x, Spr9y, Spr9formaat, Spr9formaat);
}


// Spr10 - schrijf sprite 10
var telSpr10 = 0;
var maxSpr10 = 100;
var richtSpr10X = 1; // -1 = links, 0 = midden, 1 = rechts
var richtSpr10Y = 1; // -1 = omhoog, 0 = horiz, 1 = beneden
function Spr10() {

  
 // testen op rand
  if (Spr10x<0) {richtSpr10X = 1;}
  if (Spr10x>MyCanvas.offsetWidth-Spr10formaat) {richtSpr10X = -1;}
  if (Spr10y<0) {richtSpr10Y = 1;}
  if (Spr10y>MyCanvas.offsetHeight-Spr10formaat) {richtSpr10Y = -1;}
  ctx.fillStyle = "blue";
  ctx.fillRect(Spr10x, Spr10y, Spr10formaat, Spr10formaat);
}

// BLOKJES + POSITIE ZETTEN
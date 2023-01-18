const blokje1=document.querySelector("#blokje1");
const blokje2=document.querySelector("#blokje2");
const blokje3=document.querySelector("#blokje3");
const punten =document.getElementById('punten');

function spring(){

    if(blokje2.classList!="blokje2-animatie")
    {
        blokje2.classList.add("blokje2-animatie");
    }

    if(blokje3.classList!="blokje3-animatie")           // Als je klikt op de muis wordt de animatie van de groene blokjes toegevoegt.
    {
        blokje3.classList.add("blokje3-animatie");
    }

    punten.innerText++;                             // Telt de punten.

    blokje1.classList.add("blokje1-animatie");          // Zorgt voor dat de karakter springt als de animatie niet werkt. 
    setTimeout(function(){                              // Herhaalt de spring per 500 milliseconde bij elke klik.
        blokje1.classList.remove("blokje1-animatie");
    },500);
}

var botsingcontrole =setInterval(function(){        // Controleert botsing per 10 milliseconde.

    

    var karakterbottom =parseInt(window             // Berekent de positie van de karakter voor botsing.
        .getComputedStyle(blokje1)
        .getPropertyValue("bottom"));

    var blokje2left =parseInt(window             // Berekent de positie van de stenen voor botsing.
    .getComputedStyle(blokje2)
    .getPropertyValue("left"));

    var blokje3left =parseInt(window             // Berekent de positie van de stenen voor de botsing.
    .getComputedStyle(blokje3)
    .getPropertyValue("left"));

    if(blokje2left > 0 && blokje2left < 40 && karakterbottom < 40){
        alert("Game over!");
    }

    if(blokje3left > 0 && blokje3left < 40 && karakterbottom < 40){             // Zorgt voor botsing.
        alert("Game over!");
    }


},10);
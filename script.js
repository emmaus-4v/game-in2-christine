/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = UITLEG;

var KEY_LEFT = 37; // pijltje naar links
var KEY_RIGHT = 39; // pijltje naar recht
var KEY_DOWN = 40; // pijltje naar beneden
var ENTER = 13; // toets enter

var spelerX1 = 0; // random x-positie begin van speler
var spelerX = 600; // x-positie van speler
var spelerY = 20; // y-positie van speler
var spelerGrootte = 100; // groote van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 20;   // x-positie van vijand
var vijandY = 600;   // y-positie van vijand
var vijandXGrootte = 205; // x-grootte van vijand
var vijandYGrootte = 100; // y-groote van vijand

var score = 0; // aantal behaalde punten
var leven = 3; // aantal levens
var bgImg;





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */

var tekenVeld = function () {
  background("purple");
  fill(50,100, 255);
  rect(20, 20, width - 2 * 20, height - 2 * 20);
  fill("white");
  textSize(30);
  text("score "+ score, 100, 100, 200, 100)
  text("levens "+leven, 1100,100,200,200)
  
};




/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    fill(0,0,0);
    rect(vijandX, vijandY, vijandXGrootte, vijandYGrootte ); 
    rect(vijandX + 365, vijandY, vijandXGrootte, vijandYGrootte);
    rect(vijandX + 710, vijandY, vijandXGrootte, vijandYGrootte);
    rect(vijandX + 1035, vijandY, vijandXGrootte, vijandYGrootte);

};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill(253, 253, 150);
  rect(spelerX, spelerY, spelerGrootte, spelerGrootte);
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function(x, y) {
    spelerY = spelerY + 3;
    if (spelerY > 600) {
        spelerY = 600;
    }
    if(spelerX < 20){
        spelerX = 20;
    }
    if (spelerX > 1160) {
        spelerX = 1160;
    }
    if (keyIsDown(KEY_LEFT)){
        spelerX = spelerX-10;
    }
    if (keyIsDown(KEY_RIGHT)) {
        spelerX = spelerX+10;
    }
    if (keyIsDown(KEY_DOWN)){
        spelerY = spelerY+10;
    }

};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt1 = function() {
// check ofdat het blokje over een ander blokje zit 
// en als dat zo is dan return true;
        if (spelerY == vijandY && spelerX <= 225) {
        spelerX = 590; 
        spelerY = 20;
        leven = leven-1;
        
    }
    return false;
};
var checkVijandGeraakt2 = function() {
    if (spelerY == vijandY && spelerX >= 385 && spelerX <= 590) {
    spelerX = 590;
    spelerY = 20;
    leven = leven-1;
    }
    return false;
};
var checkVijandGeraakt3 = function() {
    if (spelerY == vijandY && spelerX >= 730 && spelerX <= 935) {
    spelerX = 590;
    spelerY = 20;
    leven = leven-1;
    }
    return false;
};
var checkVijandGeraakt4 = function() {
    if (spelerY == vijandY && spelerX >= 1055 && spelerX <= 1260) {
    spelerX = 590;
    spelerY = 20;
    leven = leven-1;
    }
    return false;
};
/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    if (leven <= 0) {
        return true;
    }


    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(50,100,255);
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case UITLEG:
        background("purple");
         textSize (30);
         fill("white");
         text("UITLEG",575,50,200,200)
         text("Gebruik de pijltjes om in de gaten te vallen", 300,300,700,500)
             text("Klik op enter om te starten",400,500,500,500)
             
             if (keyIsDown(ENTER)){
                 spelStatus = SPELEN
             }

             break;

    case SPELEN:

      
      beweegVijand();
      beweegKogel();
      beweegSpeler();

      
      if (checkVijandGeraakt1()) {
        // punten erbij
        // nieuwe vijand maken
      }
      if (checkVijandGeraakt2()) {

      }
      if (checkVijandGeraakt3()) {

      }
      if (checkVijandGeraakt4()) {

      }
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
    case GAMEOVER:
        textSize(30)
        background("purple");
        fill("white");
        text("GAME OVER!", 420, 300, 500, 500)
        text("Je score is:" + score, 400, 400, 500, 500)
        text("Klik op enter om terug naar het uitlegscherm te gaan", 420, 500, 500, 500)

        if (keyIsDown(ENTER)) {
            spelStatus = UITLEG
            score = 0
            leven = 3
        }
        break;
  }
}

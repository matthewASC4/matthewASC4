function setup(){
    createCanvas(1200, 1000)
    background(225, 225, 225)
}

function draw(){
    rect(90, 30, 1000, 700) 
    rect(90, 30, 100, 700)
    rect(1000, 30, 100, 700)
}
function setup(){
    createCanvas(1200, 1000)
    background(225, 225, 225)
}

var prompt = require('prompt-sync')();

var answer = prompt('What Pokemon do you want to choose');

function Pokemon(name, attacks, attacksTypes, hp, legendary, types){
    this.name = name;
    this.attacks = attacks;
    this.attacksTypes = attacksTypes;
    this.hp = hp;
    this.legendary = legendary;
    this.types = types;
}

var pikachu = new Pokemon ("Pikachu", ["Agility = -33Dmg", "Discharge= -37Dmg", "Thunder= -43Dmg", "Light Screen= -50Dmg"], ["Pyschic", "Electric", "Electric", "Pyschic"], 35, false, "electric");
var mewtwo = new  Pokemon ("Mewtwo", ["Amnesia", "Safeguard", "Aura Sphere", "Psystrike"], ["Pyschic", "Normal", "Fighting", "Pyschic"], 106 , true , "pyschic");


function draw(){
    rect(20, 60, 900, 500)
    rect(20, 560, 900, 200);

   textSize(32);
    
   text("ATTACKS:", 25, 600);

   textSize(16);
    text("Select one of the attack options from down below:", 25, 620);

   if(answer==="pikachu"){
    rect(25, 650, 200, 50);
    text(pikachu.attacks[0], 60, 675);
    text(pikachu.attacksTypes[0], 60, 695);

   rect(250, 650, 200, 50);
    text(pikachu.attacks[1], 280, 675);
    text(pikachu.attacksTypes[1], 300, 695);

   rect(475, 650, 200, 50);
    text(pikachu.attacks[2], 510, 675);
    text(pikachu.attacksTypes[2], 530, 695);

   rect(700, 650, 200, 50);
    text(pikachu.attacks[3], 725, 675);
    text(pikachu.attacksTypes[3], 750, 695);
    
   }

   else if(answer==="mewtwo"){
    rect(25, 650, 200, 50);
    text(mewtwo.attacks[0], 60, 675);
    text(mewtwo.attacksTypes[0], 60, 695);

   rect(250, 650, 200, 50);
    text(mewtwo.attacks[1], 280, 675);
    text(mewtwo.attacksTypes[1], 300, 695);

   rect(475, 650, 200, 50);
    text(mewtwo.attacks[2], 510, 675);
    text(mewtwo.attacksTypes[2], 530, 695);

   rect(700, 650, 200, 50);
    text(mewtwo.attacks[3], 725, 675);
    text(mewtwo.attacksTypes[3], 750, 695);

   }

}
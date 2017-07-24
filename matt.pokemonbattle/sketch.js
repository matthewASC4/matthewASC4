function setup(){
    createCanvas(1200, 1000)
    background(225, 225, 225)
}

function draw(){
    rect(90, 30, 1000, 700) 
    rect(90, 30, 100, 700)
    rect(1000, 30, 100, 700)
}
+// var window = ;
 +
  function setup(){
      createCanvas(1200, 1000)
      background(225, 225, 225)
 +    window.prompt("What pokemon do you want to use?");
  }
  
  var prompt = require('prompt-sync')();
  
 -var answer = prompt('What Pokemon do you want to choose');
 +
  
  function Pokemon(name, attacks, attacksTypes, hp, legendary, types){
      this.name = name;
 @@ -21,6 +24,7 @@ var mewtwo = new  Pokemon ("Mewtwo", ["Amnesia", "Safeguard", "Aura Sphere", "Ps
  
  
  function draw(){
 +
      rect(20, 60, 900, 500)
      rect(20, 560, 900, 200);
  
 @@ -31,7 +35,7 @@ function draw(){
      textSize(16);
      text("Select one of the attack options from down below:", 25, 620);
   
 -    if(answer==="pikachu"){
 +    if(window.toLowerCase()=="pikachu"){
      rect(25, 650, 200, 50);
      text(pikachu.attacks[0], 60, 675);
      text(pikachu.attacksTypes[0], 60, 695);
 @@ -50,7 +54,7 @@ function draw(){
      
      }
  
 -    else if(answer==="mewtwo"){
 +    else if(window.toLowerCase()=="mewtwo"){
      rect(25, 650, 200, 50);
      text(mewtwo.attacks[0], 60, 675);
      text(mewtwo.attacksTypes[0], 60, 695);
 @@ -70,3 +74,4 @@ function draw(){
      }
  
  }
 +
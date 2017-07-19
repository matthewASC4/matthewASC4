function Superhero(realName, ability,gender, archEnemy, age, weakness){
    this.realName = realness;
    this.ability = ability;
    this.gender = gender;
    this.archEnemy = archEnemy;
    this.age = age;
    this.weakness = weakness;

this.talk = function(){
    console.log("Yo! My name is " + realName);
}

    
    this.calForHelp = function(call){
        console.log(call);

}    
}


var superMan = new Superhero("Clark Kent", "Dat Money", "Male", "Lex Luger", 30, "Cryptonite");
var wonderWoman = new Superhero("Dianna Prince", "Super Strength", "Female", "Donald Trump", "20", "Guns");

superMan.ability = "lazer vision";
console.log(superMan);
wonderWoman.archEnemy = superMan.realName;

wonderWomen.callForHelp("I'm booling out!");

superMan.calForHelp("It's not looking good right now!");
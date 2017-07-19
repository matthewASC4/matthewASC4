function setup(){
    createCanvas(700, 700);
    background(0);
    stroke("white");
    strokeWeight(2);
}

function mouseDragged(){
    fill("Blue");
    fill(random(["purple","yellow", "green", "orange", "blue", "red", "teal",]));
    rect(mouseX, mouseY, random(100), random(100));
    ellipse(mouseX, mouseY, random(100), random(100));
    return false;
}

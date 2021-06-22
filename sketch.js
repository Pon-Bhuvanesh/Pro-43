var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave2.jpg")
  bg2= loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(25);
  fill("Orange");
  text("Tresure Amount Is : " + score, 380, 30);
  textSize(25);
  fill("white");
  text("This project is done by S.Pon Bhuvanesh 👨‍💻 ", 500, 480);
  textSize(25);
  fill("black");
  text("If you got the tresure your the god of galaxy", 500, 450);
  textSize(25);
  fill("orange");
  text("🩸 DEATH 🩸", 425, 330);

  if(score === 3) {
    clear()
    background(bg2)
    fill("Orange")
    textSize(45);
    text("you got the TREASURE🥇",250, 450);
    text("GOD OF GALAXY🌌",300, 488);
  }

  drawSprites()
}
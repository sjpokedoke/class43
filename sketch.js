var luna, pumpkins, pumpkingroup;

function preload() {
  
}
function setup() {
  createCanvas(1400, 800);

  pumpkingroup = new Group();

  luna = createSprite(700, 400);
}

function draw() {
  background("blue");

  pumpkinfunc();
  if (pumpkins!== undefined) {
    if (pumpkins.x<600) {
      pumpkins.x = pumpkins.x+10;
    }
  }
  if (pumpkins!== undefined) {
    if (pumpkins.x>800) {
      ghosts.x = ghosts.x-10;
    }
  }
  if (ghosts!== undefined) {
    if (ghosts.y>500) {
      ghosts.y = ghosts.y-10;
    }
  }
  drawSprites();
}

function ghostfunc() {
  if (frameCount%100===0) {
    var position = Math.round(random(1,3));
    console.log(position)

    if (position === 1) {
      ghosts = createSprite(30, random(100, 700));
      ghosts.shapeColor = "red";
    }

    if (position === 2) {
      ghosts = createSprite(1370, random(100, 700));
      ghosts.shapeColor = "red";
    }

    if (position === 3) {
      ghosts = createSprite(700, 750);
      ghosts.shapeColor = "red";
    }

    ghostgroup.add(ghosts);
  }
}



//link to game: https://www.google.com/doodles/halloween-2020
//Classes 43 onwards List of game ideas Thecodingtrain.com Codepen.io GitHub.com Gane assests Itch.io Shutter stock.com Vector stock.com Edit images Resize Webresizer.com Background to transparent Transparent.imageonline.co Photoscissors.com Cut sprite sheets Ezgif.com/sprite-cutter Sound 99sounds.org/free-sound-effects/ Soundable.com/royalty-free-sounds-1.html Freesound.org Game burp.com/free-game-sound-fx/
//Create variables here

var  hungrdog,happydog;
var food,foodstock;

function preload(){
dogimg =loadImage("images/dogImg.png");
dogImg1 = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(400, 400);
  database = firebase.database;
  rectMode(CENTER);
 hungrydog = createSprite(200,200,10,20);
 hungrydog.scale = 0.10;
 food = createSprite(200,190,50,20);
foodstock = database.ref('food');
foodstock.on("value",readstock);
  
}

function draw() {  
 background(45,137,86);
  drawSprites();
  //add styles here
  rectMode(CENTER);
 hungrydog.addImage(dogimg,200,200,10,20);


}




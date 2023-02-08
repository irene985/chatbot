/* Chatbots for Art's Sake - irene katakis - Creative Assignment #1
 
 this bot serves as a "get to know me", where you can as bot me simple questions about who i am so people can talk to real me with already knowing the general info about me, allowing me to avoid repetitive conversations

Adapted from "JSON chatbot optimized" by Carrie Wang - https://editor.p5js.org/re7l/sketches/Q0QjWZ_yz

*/



let width = 400;
let height = 400;

let data; //variable for the json data
let inputField; //the user input field
let sendBttn; //the button to send input to the bot

let answer = ""; //bot's output

function preload() {
  data = loadJSON("bot.json"); //load the json file
}
function setup() {
  createCanvas(400, 400);
  shapeColor = color(245, 10, 90);
  console.log(data);

  inputField = createInput(""); //create the input field
  inputField.size(width / 2, 40);
  inputField.position(width / 4, height / 4);
  sendBttn = createButton("SEND");
  sendBttn.size(100, 30);
  sendBttn.position(width / 4, height / 4 + 50);

  sendBttn.mousePressed(answerMe); //when the button is pressed, callback function will be triggered
}

function answerMe() {
  //get the input
  let inputStr = inputField.value().toLowerCase();
  console.log(inputStr);
  //loop through the brain array and through each triggers array
  //if there is a match, select randomly from the responses
  //break out of the loop
  loop1: for (let i = 0; i < data.brain.length; i++) {
    loop2: for (let j = 0; j < data.brain[i].triggers.length; j++) {
      //check if the user input contains the key phrase
      if (inputStr.indexOf(data.brain[i].triggers[j]) !== -1) {
        answer = random(data.brain[i].responses);
        break loop1;
      } else {
        answer = random(data.catchall);
      }
    }
  }
    inputField.value("");//clears the box
}

function keyPressed(){
  if(keyCode===ENTER){
    answerMe();
  }
}


function draw() {
  background("yellow");
  noStroke();
  fill(shapeColor);
  //fill();
  textAlign(CENTER);
  textStyle(BOLD);
  textFont("Georgia");
  fill(50);
  text(answer, 100, width / 2, height / 2, width);
}

function mouseClicked(){
	//background(240);
  
  for (var i=0; i <= 300; i = i + 1){
    var xPosition = random(0, width); 
    var yPosition = random(0, height); 
  	ellipse(xPosition,yPosition,20,20);
    shapeColor = color(random(255), random(255), random(255) );

  }
  
} 
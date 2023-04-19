x = 0;
y = 0;
draw_apple = "";
screenwidth = 0
screenheight = 0
apple = ""
speak_data=""
to_number=""
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
  document.getElementById("status").innerHTML = "We are listening.";  
  recognition.start();} 
recognition.onresult = function(event) {
  console.log(event); 
  content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "What you probably said: " + content;
  to_number = Number(content)
  if(Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "An apple is being created."
    draw_apple="set"
  }
  else{
    document.getElementById("status").innerHTML = "Houston, we have a problem."
  }
}
function setup() {
  screenwidth = window.innerWidth
  screenheight = window.innerHeight
  createCanvas(screenwidth, screenheight-150)
}
function preload() {
  apple = loadImage("apple.png")
}
function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apple has been created.";
    speak()
    draw_apple = "";
    for(var i = 0; i < to_number+1; i++) {
      x = Math.floor(Math.random()*screenwidth)
      y = Math.floor(Math.random()*screenheight)
      image(apple, x, y, 50, 50)
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

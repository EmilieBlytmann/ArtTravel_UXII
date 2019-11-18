let capture;
let myFrame; 

function setup() {
createCanvas(375, 812);
capture = createCapture(VIDEO);
//capture.size(375,812);    
capture.hide();
myFrame  = loadImage(''); 
}

function draw() {
  image(capture, 0, 0, width, width * capture.height / capture.width);
  if (myFrame == true){
    image(myFrame, 0, 480, width, width * myFrame.height / myFrame.width);
  } 
  
} 

function captureImage() {
  myFrame.copy(capture, capture.x, capture.y, capture.height, capture.width,capture.x, capture.y, capture.height, capture.width)  
  console.log(myFrame)
}

function keyPressed() {
  if (key == 'x') {
    captureImage()
  }
}

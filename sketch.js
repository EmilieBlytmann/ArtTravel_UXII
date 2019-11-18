let capture;
let myFrame; 
let croppedFrame;
let painting; 

function setup() {
createCanvas(375, 812);
capture = createCapture(VIDEO);
//capture.size(375,812);    
capture.hide();
myFrame  = createImage(320, 480)
croppedFrame = createImage(320, 480)
painting = loadImage ('KMS263.jpg');
}

function draw() {
  image(capture, 0, 0, width, width * capture.height / capture.width);
  if (myFrame){
    image(painting, 0, 480, width, width * myFrame.height / myFrame.width)
    image(croppedFrame, 0, 400, width, width * myFrame.height / myFrame.width);
    
  }
  
} 

function keyPressed() {
  if (key == 'x') {
    captureImage()
  }
}

function captureImage() {
  myFrame.copy(capture, capture.x, capture.y, capture.height, capture.width,capture.x, capture.y, capture.height, capture.width)  
  console.log(myFrame)
  cropFrame()
}

function cropFrame (){
  croppedFrame.copy(myFrame, 100, 100, myFrame.height-100, myFrame.width-100, 0, 0, myFrame.height-100, myFrame.width-100,)
  console.log(croppedFrame)
}

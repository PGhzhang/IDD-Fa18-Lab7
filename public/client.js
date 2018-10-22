/*
client.js

Author: Nikolas Martelaro (nmartelaro@gmail.com)
Extended: David Goeicke (da.goedicke@gmail.com)
Purpose: This run the interactivity and communication for the web app. This file
is served to the users web browser and executes on the browser.

Usage: This file is called automatically when the webpage is served.

//--Addition. Added a button handling for the `Take a picture` button.
*/
// import gifshot.js;

// WebSocket connection setup
var socket = io();
var state = 0;


// send out LedOn message over socket
function ledON() {
  socket.emit('ledON');
}

// send out ledOFF message over socket
function ledOFF() {
  socket.emit('ledOFF');
}

//-- Addition: Forward the `Take a picture` button-press to the webserver.
function takePicture(){
  socket.emit('takePicture');
}

function startRecording(){
  console.log("start recording")
  socket.emit('startRecording');
}

function stopRecording(){
  console.log("stopped recording")
  socket.emit('stopRecording');
};


//-- Addition: This function receives the new image name and applies it to html element.

socket.on('newPicture', function(msg) {
  document.getElementById('pictureContainer').src=msg;
});


socket.on('makegif',function(msg){
  console.log('gif in making');
  console.log(msg.toString());
  gifshot.createGIF({
    'gifWidth': 600,
    'gifHeight': 450,
    'images': msg,
    'interval': 0.3,
  },function(obj) {
  if(!obj.error) {
    var element = document. getElementById("pictureContainer");
    element.parentNode.removeChild(element);

    var image = obj.image,
    animatedImage = document.createElement('img');
    animatedImage.src = image;
    document.body.appendChild(animatedImage);
  }
  });
})
// read the data from the message that the server sent and change the
// background of the webpage based on the data in the message
socket.on('server-msg', function(msg) {
  msg = msg.toString();
  console.log('msg:', msg);
  switch (msg) {
    case "light":
      //document.body.style.backgroundColor = "white";
      console.log("white");
      if (state==0){
        startRecording();
        state+=1;
      }else if(state==1){
        stopRecording();
        state+=1;
      }
      break;
    case "dark":
      document.body.style.backgroundColor = "black";
      console.log("black");
      break;
    default:
      //console.log("something else");
      break;
  }
});

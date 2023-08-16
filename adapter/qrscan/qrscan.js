
loadScript=function(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
};

loadScript('addon/qrscan/qr_packed.js');
loadCSS=function(url) {
var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    head.appendChild(link);
};
// loadCSS('addon/qrscan/qrscan.css');

qrScan=function(id,callback){
mulai();
const video = document.createElement("video");
const canvasElement = document.getElementById(id);
const canvas = canvasElement.getContext("2d");

qrcode.callback=function(res){
  var sound = new Audio("addon/qrscan/barcode.wav");
  if (res) {
  scanning = false;
  video.srcObject.getTracks().forEach(track => {
  track.stop();
    });
  canvasElement.hidden = true;
  sound.play();
  callback(res);
  }
};

function mulai(){
  navigator.mediaDevices
  .getUserMedia({ video: { facingMode: "environment" } })
  .then(function(stream) {
  scanning = true;
  canvasElement.hidden = false;
  video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
  video.srcObject = stream;
  video.play();
  tick();
  scan();
  });
};

function tick() {
  canvasElement.height = video.videoHeight;
  canvasElement.width = video.videoWidth;
  canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
  scanning && requestAnimationFrame(tick);
}
function scan() {
  try { qrcode.decode();}
  catch (e) { setTimeout(scan, 300); }
}
};

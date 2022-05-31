function preload() {}

 function setup() {
     canvas = createCanvas(600, 480);
     canvas.position(200, 250);
     video = createCapture(VIDEO);
     video.hide();
 }

 function draw() {
     image(video, 0, 0, 600, 480);
     circle(50, 50, 60);
     circle(550, 50, 60);
     circle(50, 430, 60);
     circle(550, 430, 60);
     }

 function take_snapshot() {
   save("Filter_Image.png");
 }

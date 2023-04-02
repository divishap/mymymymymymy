function setup(){
canvas=createCanvas(500,400);
canvas.position(150,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}

function draw(){
    circle(50, 50, 20);
    ('white circle with black outline');
    ellipse(40, 46, 55, 55);
    ('blue ellipse with black outline');
    rect(80, 80, 80, 80);
    ('white rect with black outline');
    image(video,300,300,100,100);
    }
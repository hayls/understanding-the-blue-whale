let angle = 0;
var canvas;


function setup() {
    var cnv = createCanvas(windowWidth, windowHeight, WEBGL);

    cnv.style('z-index', '-99');
//    cnv.parent("canvas-container");
    cnv.position(0, 0);


    //    canvas = createCanvas (windowWidth, windowHeight, WEBGL);
    //    canv.position(0,0);
    //    canv.style('z-index', '99');
    
//    pixelDensity(1);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {

    background('#2a3b43');

//    loadPixels();
//
//    for (var y = 0; y < height; y++) {
//        for (var x = 0; x < width; x++) {
//            var index = (x + y * width) * 4;
//            pixels[index] = x;
//            pixels[index+1] = 0;
//            pixels[index+2] = y;
//            pixels[index+3] = 255;
//        }
//
//    }
//
//
//
//    updatePixels();




    translate(mouseX - windowWidth/2, mouseY - windowHeight/2);
    // rectMode(CENTER);
    strokeWeight(1.5);

    stroke(255);
    // noStroke();

    //normalMaterial();
     fill(255, 30);


    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 0.2);

    // rect(0, 0, 40, 40);

    box(20);

    angle += 0.06;
}

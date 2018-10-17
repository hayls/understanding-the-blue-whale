let angle = 0;
let heart;
var canvas;
var bg;

class Heart {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }

    rotate() {
        rotateX(angle);
        rotateY(angle * 0.3);
        rotateZ(angle * 0.2);
    }

    show() {
        strokeWeight(1.5);
        stroke(255);
        fill(255, 30);
        box(20);

    }


}

//function preload() {
//    bg = loadImage("images/background/paper-bg-01.png");
//}

function setup() {



    var cnv = createCanvas(windowWidth, windowHeight, WEBGL);

    cnv.style('z-index', '-99');
    cnv.parent("sec02-wrapper");
    cnv.position(0, 0);

    
    heart = new Heart(-400, -170);


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {

    background('#00334A');

    push();
    translate(heart.x, heart.y);
    heart1.rotate();
    heart1.show();
    pop();

    angle += 0.06;


}

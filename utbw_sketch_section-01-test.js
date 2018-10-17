let angle = 0;
let heart;
var canvas;
var bg;

var sketch = function (p) {

    p.setup = function () {
    p.createCanvas(windowWidth, windowHeight, WEBGL);
    p.style('z-index', '-99');
    //    cnv.parent("sec01");
    p.position(0, 0);

    pos = random(-300, 30);
    //    heart1 = new Heart(pos, -pos);
    heart1 = new Heart(-400, -170);

    pos = random(-255, 80);
    //    heart2 = new Heart(pos, pos);
    heart2 = new Heart(-475, 180);

    pos = random(-150, 70);
    //    heart3 = new Heart(pos, pos);
    heart3 = new Heart(-170, -80);

    pos = random(-155, 80);
    //    heart4 = new Heart(pos, pos);
    heart4 = new Heart(50, 80);

    pos = random(-140, 45);
    //    heart5 = new Heart(pos, pos);
    heart5 = new Heart(420, -200);

    pos = random(-100, 35);
    //    heart6 = new Heart(pos, pos);
    heart6 = new Heart(300, 15);

    pos = random(-90, 20);
    //    heart7 = new Heart(pos, pos);
    heart7 = new Heart(470, 250);
    }
    
    
    
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
    
    
    

    p.windowResized(){
        resizeCanvas(windowWidth, windowHeight);
    }
    
    
    p.draw(){
            background('#00334A');

    push();
    translate(heart1.x, heart1.y);
    heart1.rotate();
    heart1.show();
    pop();

    push();
    translate(heart2.x, heart2.y);
    heart2.rotate();
    heart2.show();
    pop();

    push();
    translate(heart3.x, heart3.y);
    heart3.rotate();
    heart3.show();
    pop();

    push();
    translate(heart4.x, heart4.y);
    heart4.rotate();
    heart4.show();
    pop();

    push();
    translate(heart5.x, heart5.y);
    heart5.rotate();
    heart5.show();
    pop();

    push();
    translate(heart6.x, heart6.y);
    heart6.rotate();
    heart6.show();
    pop();

    push();
    translate(heart7.x, heart7.y);
    heart7.rotate();
    heart7.show();
    pop();


    angle += 0.06;
    }
    
};

new p5(sketch, 'sec-01');



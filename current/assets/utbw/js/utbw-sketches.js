 // 01. INTRODUCTION

 let sketch1 = (sketch) => {
     let angle = 0;
     let opacity = 0.9;
     let down = true;
     let heart;
     let hearts;
     let canvas;
     var bg;
     let Y_AXIS = 1;
     let X_AXIS = 2;
     let b1, b2, c1, c2;

     class Heart {
         constructor(x, y) {
             this.x = x;
             this.y = y;

         }

         rotate() {
             sketch.rotateX(angle);
             sketch.rotateY(angle * 0.3);
             sketch.rotateZ(angle * 0.2);
         }

         show(opacity = 0.9) {
             sketch.strokeWeight(1.5);
             sketch.stroke(`rgba(255,255,255,${opacity})`);
             sketch.fill(255, opacity * 30);
             sketch.box(20);
         }


     }

     //sketch.preload function () {
     //    bg = loadImage("images/background/paper-bg-01.png");
     //}


     /*   LERP COLOR reference: p5.js 2018, Linear Gradient, viewed 16 October 2018 <https://p5js.org/examples/color-linear-gradient.html>. */

     //     function setGradient(x, y, w, h, c1, c2, axis) {
     //         sketch.noFill();
     //
     //         if (axis == Y_AXIS) { // Top to bottom gradient
     //             for (var i = y; i <= y + h; i++) {
     //                 var inter = sketch.map(i, y, y + h, 0, 1);
     //                 var c = sketch.lerpColor(c1, c2, inter);
     //                 sketch.stroke(c);
     //                 sketch.line(x, i, x + w, i);
     //             }
     //         } else if (axis == X_AXIS) { // Left to right gradient
     //             for (var i = x; i <= x + w; i++) {
     //                 var inter = sketch.map(i, x, x + w, 0, 1);
     //                 var c = sketch.lerpColor(c1, c2, inter);
     //                 sketch.stroke(c);
     //                 sketch.line(i, y, i, y + h);
     //             }
     //         }
     //
     //         //end setGradient
     //     }



     sketch.setup = function () {


         var cnv = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);

         cnv.style('z-index', '-99');
         //    cnv.parent("sec01");
         cnv.position(0, 0);

         //sketch 1 position hearts
         hearts = [new Heart(-400, -170), new Heart(-475, 180), new Heart(-170, -80), new Heart(50, 80), new Heart(420, -200), new Heart(300, 15), new Heart(470, 250)]


         //set gradient colours here
         //         c1 = sketch.color(0, 51, 74);
         //         c2 = sketch.color(0, 0, 0);

     }


     sketch.windowResized = function () {
         sketch.resizeCanvas(windowWidth, windowHeight);
     }


     sketch.draw = function () {

         sketch.background('#2a3b43');

         //lerpColor input here  
         //         setGradient(-sketch.width / 2, 0, sketch.width,
         //             sketch.height, c1, c2, Y_AXIS);


         //hearts = object with iteratable property
         for (let heart of hearts) {
             sketch.push();
             sketch.translate(heart.x, heart.y);
             heart.rotate();
             //pulse show
             heart.show(opacity);
             sketch.pop();
         }

         angle += 0.06;


         //opacity change

         if (down) {
             if (opacity <= 0.3)
                 down = false
             else
                 opacity -= 0.01
         } else {
             if (opacity >= 0.9)
                 down = true
             else
                 opacity += 0.02
         }



     }




     // 01. INTRODUCTION END
 }


 /*-------------------------------------------------------------*/


 // 02. FACTS PAGE


 let sketch2 = (sketch) => {
     let angle = 0;
     let heart;
     var canvas;
     var bg;
     let Y_AXIS = 1;
     let X_AXIS = 2;
     let b1, b2, c1, c2;

     class Heart {
         constructor(x, y) {
             this.x = x;
             this.y = y;

         }

         rotate() {
             sketch.rotateX(angle);
             sketch.rotateY(angle * 0.3);
             sketch.rotateZ(angle * 0.2);
         }

         show() {
             sketch.strokeWeight(1.5);
             sketch.stroke(255);
             sketch.fill(255, 30);
             sketch.box(20);

         }


     }


     /*   LERP COLOR reference: p5.js 2018, Linear Gradient, viewed 16 October 2018 <https://p5js.org/examples/color-linear-gradient.html>. */

     //     function setGradient(x, y, w, h, c1, c2, axis) {
     //         sketch.noFill();
     //
     //         if (axis == Y_AXIS) { // Top to bottom gradient
     //             for (var i = y; i <= y + h; i++) {
     //                 var inter = sketch.map(i, y, y + h, 0, 1);
     //                 var c = sketch.lerpColor(c1, c2, inter);
     //                 sketch.stroke(c);
     //                 sketch.line(x, i, x + w, i);
     //             }
     //         } else if (axis == X_AXIS) { // Left to right gradient
     //             for (var i = x; i <= x + w; i++) {
     //                 var inter = sketch.map(i, x, x + w, 0, 1);
     //                 var c = sketch.lerpColor(c1, c2, inter);
     //                 sketch.stroke(c);
     //                 sketch.line(i, y, i, y + h);
     //             }
     //         }
     //
     //         //end setGradient
     //     }


     sketch.setup = () => {
         var cnv = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);
         cnv.style('z-index', '-99');
         cnv.position(0, 0);


         heart1 = new Heart(-249, 8);

         //set gradient colours here
         c1 = sketch.color(0, 51, 74);
         c2 = sketch.color(0, 0, 0);



         //setup closing bracket
     }






     // sketch.windowResized = function() {
     //     sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
     // }

     sketch.draw = () => {


         sketch.background('#2b383f');

         //lerpColor input here  
         //         setGradient(-sketch.width / 2, 0, sketch.width,
         //             sketch.height, c1, c2, Y_AXIS);



         sketch.push();
         sketch.translate(heart1.x, heart1.y);
         heart1.rotate();
         heart1.show();
         sketch.pop();

         angle += 0.06;

     }
 }


 // 02. FACTS PAGE END



 /*-------------------------------------------------------------*/




 // 03. DIET PAGE


 // SWARM KRILL reference: p5.js 2018, Swarm Final, viewed 18 October 2018 <https://editor.p5js.org/mtchl/sketches/Sk5a2iIOe>.

 let sketch3 = (sketch) => {
     var swarm = [];
     var friction = 0.98;
     var swarmCount = 80;

     var avoidRadius = 15;
     var avoidStrength = 0.15;

     var cohereRadius = 30;
     var cohereStrength = 0.05;

     var alignRadius = 40;
     var alignStrength = 0.01;

     function Agent(xpos, ypos, xvel, yvel) {

         this.pos = new p5.Vector(xpos, ypos);
         this.vel = new p5.Vector(xvel, yvel);

         this.draw = function () {
             // sketch.fill(255);
             sketch.ellipse(this.pos.x, this.pos.y, 6, 6);
         }

         this.move = function () {
             this.pos.add(this.vel);
             this.vel.mult(friction); // decelerate
             // wrap
             if (this.pos.x > sketch.width) this.pos.x = 0;
             if (this.pos.y > sketch.height) this.pos.y = 0;
             if (this.pos.x < 0) this.pos.x = sketch.width;
             if (this.pos.y < 0) this.pos.y = sketch.height;
         }

         this.cohere = function () { // coherence - move towards the middle of your close neighbours
             var averagepos = sketch.createVector();
             var steervec = sketch.createVector();
             //track mouse position
             var mouseposition = sketch.createVector(sketch.mouseX, sketch.mouseY);
             var neighbourcount = 0;

             for (var neighbour of swarm) {
                 var nd = this.pos.dist(neighbour.pos); // neighbour distance
                 if (nd < cohereRadius && nd > 0) { // ignore neighbours that are far away
                     neighbourcount++;
                     averagepos.add(neighbour.pos); // add to average
                 }
             }

             if (neighbourcount > 0) averagepos.div(neighbourcount);

             steervec = p5.Vector.sub(mouseposition, averagepos); // head towards the mouse position
             steervec.normalize(); // scale to 1.0
             steervec.mult(cohereStrength); // scale down
             this.vel.add(steervec); // add to velocity
         }



         this.avoid = function () { // avoidance - don't get too close to your neighbours
             var avoidVec = sketch.createVector(); // vector to store avoid vector 
             for (var neighbour of swarm) {
                 var nd = this.pos.dist(neighbour.pos); // neighbour distance
                 if (nd < avoidRadius && nd > 0) { // ignore neighbours that are far away
                     var pushVec = p5.Vector.sub(this.pos, neighbour.pos); // repulsive push away from close neighbours
                     pushVec.normalize();
                     avoidVec.add(pushVec);
                 }
             }
             avoidVec.normalize(); //scale to 1.0
             avoidVec.mult(avoidStrength); // multiply by the strength variable
             this.vel.add(avoidVec); // add to velocity
         }

         this.align = function () { // alignment - move in a similar direction to your neighbours
             var averageVelocity = sketch.createVector(); // vector to store average velocity 
             for (var neighbour of swarm) { // run through the swarm
                 var nd = this.pos.dist(neighbour.pos); // neighbour distance
                 if (nd < alignRadius && nd > 0) { // ignore neighbours that are far away
                     averageVelocity.add(neighbour.vel); // add my neighbour's velocity
                 }
             }
             averageVelocity.normalize();
             averageVelocity.mult(alignStrength);
             this.vel.add(averageVelocity); // add to velocity
         }

     }

     sketch.setup = () => {
         let cnv = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
         cnv.style('z-index', '-99');
         cnv.position(0, 0);

         for (var i = 0; i < swarmCount; i++) {
             var newA = new Agent(sketch.random(100, 300), sketch.random(100, 300), sketch.random(-1, 1), sketch.random(-1, 1));
             swarm.push(newA);
         }
     }

     sketch.draw = () => {
         // change background
         sketch.background('#2b383f');

         for (agent of swarm) {
             agent.draw();
             agent.cohere();
             agent.avoid();
             agent.align();
             agent.move();
         }
     }

     // 03. DIET PAGE END

 }


 /*-------------------------------------------------------------*/


 // 04. HABITAT PAGE


 let sketch4 = (sketch) => {
     let angle = 0;
     let opacity = 0.7;
     let down = true;
     let heart;
     let hearts;
     let canvas;
     var bg;
     let Y_AXIS = 1;
     let X_AXIS = 2;
     let b1, b2, c1, c2;

     class Heart {
         constructor(x, y) {
             this.x = x;
             this.y = y;

         }

         rotate() {
             sketch.rotateX(angle);
             sketch.rotateY(angle * 0.3);
             sketch.rotateZ(angle * 0.2);
         }

         show(opacity = 0.7) {
             sketch.strokeWeight(1.5);
             sketch.stroke(`rgba(255,255,255,${opacity})`);
             sketch.fill(255, opacity * 30);
             sketch.box(17);
         }


     }

     //sketch.preload function () {
     //    bg = loadImage("images/background/paper-bg-01.png");
     //}


     /*   LERP COLOR reference: p5.js 2018, Linear Gradient, viewed 16 October 2018 <https://p5js.org/examples/color-linear-gradient.html>. */

     //     function setGradient(x, y, w, h, c1, c2, axis) {
     //         sketch.noFill();
     //
     //         if (axis == Y_AXIS) { // Top to bottom gradient
     //             for (var i = y; i <= y + h; i++) {
     //                 var inter = sketch.map(i, y, y + h, 0, 1);
     //                 var c = sketch.lerpColor(c1, c2, inter);
     //                 sketch.stroke(c);
     //                 sketch.line(x, i, x + w, i);
     //             }
     //         } else if (axis == X_AXIS) { // Left to right gradient
     //             for (var i = x; i <= x + w; i++) {
     //                 var inter = sketch.map(i, x, x + w, 0, 1);
     //                 var c = sketch.lerpColor(c1, c2, inter);
     //                 sketch.stroke(c);
     //                 sketch.line(i, y, i, y + h);
     //             }
     //         }
     //
     //         //end setGradient
     //     }



     sketch.setup = function () {


         var cnv = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);

         cnv.style('z-index', '-99');
         //    cnv.parent("sec01");
         cnv.position(0, 0);

         //sketch 4 position hearts
         hearts = [new Heart(-335, 35), new Heart(-261, -73), new Heart(-179, -46), new Heart(-122, 50), new Heart(-240, 73)]



     }


     sketch.windowResized = function () {
         sketch.resizeCanvas(windowWidth, windowHeight);
     }


     sketch.draw = function () {

         sketch.background('#2a343a');

         //hearts = object with iteratable property
         for (let heart of hearts) {
             sketch.push();
             sketch.translate(heart.x, heart.y);
             heart.rotate();
             //pulse show
             heart.show(opacity);
             sketch.pop();
         }

         angle += 0.06;


         if (down) {
             if (opacity <= 0.3)
                 down = false
             else
                 opacity -= 0.01
         } else {
             if (opacity >= 0.7)
                 down = true
             else
                 opacity += 0.02
         }



     }


     // 04. HABITAT PAGE END   
 }



 /*-------------------------------------------------------------*/



 // 05. COMMUNICATION PAGE


 let sketch5 = (sketch) => {
         let angle = 0;
         let canvas;


         sketch.setup = function () {
             var cnv = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);

             cnv.style('z-index', '-999999');
             //    cnv.parent("canvas-container");
             cnv.position(0, 0);

         }

         sketch.windowResized = function () {
             sketch.resizeCanvas(windowWidth, windowHeight);
         }

         sketch.draw = function () {

             sketch.background('#2a3b43');


             sketch.translate(mouseX - windowWidth / 2, mouseY - windowHeight / 2);
             sketch.strokeWeight(1.5);
             sketch.stroke(255);
             sketch.fill(255, 30);
             sketch.rotateX(angle);
             sketch.rotateY(angle * 0.3);
             sketch.rotateZ(angle * 0.2);


             sketch.box(20);

             angle += 0.06;

         }


         // 05. COMMUNCATION PAGE END



         /*-------------------------------------------------------------*/



         // 06. POPULATION PAGE

         let sketch6 = (sketch) => {

             let angle = 0;
             let heart;
             var canvas;
             var bg;
             let Y_AXIS = 1;
             let X_AXIS = 2;
             let b1, b2, c1, c2;



             class Heart {
                 constructor(x, y) {
                     this.x = x;
                     this.y = y;

                 }

                 rotate() {
                     sketch.rotateX(angle);
                     sketch.rotateY(angle * 0.3);
                     sketch.rotateZ(angle * 0.2);
                 }

                 show() {
                     sketch.strokeWeight(1.5);
                     sketch.stroke(255);
                     sketch.fill(255, 30);
                     sketch.box(20);
                 }



             }


             /*   LERP COLOR reference: p5.js 2018, Linear Gradient, viewed 16 October 2018 <https://p5js.org/examples/color-linear-gradient.html>. */

             //     function setGradient(x, y, w, h, c1, c2, axis) {
             //         sketch.noFill();
             //
             //         if (axis == Y_AXIS) { // Top to bottom gradient
             //             for (var i = y; i <= y + h; i++) {
             //                 var inter = sketch.map(i, y, y + h, 0, 1);
             //                 var c = sketch.lerpColor(c1, c2, inter);
             //                 sketch.stroke(c);
             //                 sketch.line(x, i, x + w, i);
             //             }
             //         } else if (axis == X_AXIS) { // Left to right gradient
             //             for (var i = x; i <= x + w; i++) {
             //                 var inter = sketch.map(i, x, x + w, 0, 1);
             //                 var c = sketch.lerpColor(c1, c2, inter);
             //                 sketch.stroke(c);
             //                 sketch.line(i, y, i, y + h);
             //             }
             //         }
             //
             //         //end setGradient
             //     }



             sketch.setup = () => {
                 var cnv = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);
                 cnv.style('z-index', '-99');
                 cnv.position(0, 0);


                 heart1 = new Heart(0, 0);

                 //set gradient colours here
                 //         c1 = sketch.color(0, 51, 74);
                 //         c2 = sketch.color(0, 0, 0);



                 //setup closing bracket
             }






             // sketch.windowResized = function() {
             //     sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
             // }

             sketch.draw = () => {


                 sketch.background('#2a3035');

                 //lerpColor input here  
                 //         setGradient(-sketch.width / 2, 0, sketch.width,
                 //             sketch.height, c1, c2, Y_AXIS);


                 sketch.push();
                 sketch.translate(heart1.x, heart1.y);
                 heart1.rotate();
                 heart1.show();
                 sketch.pop();

                 angle += 0.06;

             }



         }


         // 06. POPULATION PAGE END



         /*-------------------------------------------------------------*/





         // 07. CONSERVATION  PAGE

         let sketch7 = (sketch) => {
             let angle = 0;
             let heart;
             var canvas;
             var bg;
             let Y_AXIS = 1;
             let X_AXIS = 2;
             let b1, b2, c1, c2;



             class Heart {
                 constructor(x, y) {
                     this.x = x;
                     this.y = y;

                 }

                 rotate() {
                     sketch.rotateX(angle);
                     sketch.rotateY(angle * 0.3);
                     sketch.rotateZ(angle * 0.2);
                 }

                 show() {
                     sketch.strokeWeight(1.5);
                     sketch.stroke(255);
                     sketch.fill(255, 30);
                     sketch.box(20);
                 }



             }
             sketch.setup = () => {
                 var cnv = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);
                 cnv.style('z-index', '-99');
                 cnv.position(0, 0);


                 heart1 = new Heart(0, 0);

                 //set gradient colours here
                 //         c1 = sketch.color(0, 51, 74);
                 //         c2 = sketch.color(0, 0, 0);



                 //setup closing bracket
             }

             sketch.draw = () => {


                 sketch.background('#2a3035');

                 //lerpColor input here  
                 //         setGradient(-sketch.width / 2, 0, sketch.width,
                 //             sketch.height, c1, c2, Y_AXIS);


                 sketch.push();
                 sketch.translate(heart1.x, heart1.y);
                 heart1.rotate();
                 heart1.show();
                 sketch.pop();

                 angle += 0.06;

             }
         }


         // 07. CONSERVATION PAGE END



         /*-------------------------------------------------------------*/

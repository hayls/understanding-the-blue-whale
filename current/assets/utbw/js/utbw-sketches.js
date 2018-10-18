 let current_sketch


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


 let sketch3 = (sketch) => {
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



     sketch.draw = () => {


         sketch.background('#29363c');

         //         //lerpColor input here  
         //         setGradient(-sketch.width / 2, 0, sketch.width,
         //             sketch.height, c1, c2, Y_AXIS);
         //         
         //         
         //         
         //         sketch.push();
         //         sketch.translate(heart1.x, heart1.y);
         //         heart1.rotate();
         //         heart1.show();
         //         sketch.pop();
         //
         //         angle += 0.06;



     }


     /*   SWARMING reference: p5.js 2018, Linear Gradient, viewed 16 October 2018 <https://p5js.org/examples/color-linear-gradient.html>. */






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


         //set gradient colours here
         //         c1 = sketch.color(0, 51, 74);
         //         c2 = sketch.color(0, 0, 0);


     }


     sketch.windowResized = function () {
         sketch.resizeCanvas(windowWidth, windowHeight);
     }


     sketch.draw = function () {

         sketch.background('#2a343a');

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


         sketch.background('#293237');

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

    

 }


 // 07. CONSERVATION PAGE END



 /*-------------------------------------------------------------*/

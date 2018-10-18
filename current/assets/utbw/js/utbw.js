$(function () {

    //load sound here
        var bgmus = new Audio("assets/sounds/179927__yosarrian__underwater.wav");
        bgmus.currentTime = 0;
        bgmus.play();

//    var audio = document.getElementById('bgmus-audio');
//    audio.currentTime = 0;
//    audio.play();


    //arc text here

    //    const circleType = new CircleType(document.getElementById("arc1"));
    //    circleType.radius(135);
    //
    //
    //    $('#arc1').circleType({
    //        radius: 135
    //    });


    
    //import sketch area

    $(document).ready(function () {
        let current_sketch = false
        var myFullpage = new fullpage('#fullpage', {
            anchors: ['introduction', 'facts', 'diet', 'habitat', 'communication', 'population', 'conservation'],
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['Introduction', 'Facts', 'Diet', 'Habitat', 'Communication', 'Population', 'Conservation'],

            //multiple canvases
            onLeave: (origin, destination, direction) => {
                if (current_sketch) {
                    current_sketch.remove()
                }
                if (destination.anchor == "introduction") {
                    current_sketch = new p5(sketch1)
                } else if (destination.anchor == "facts") {
                    current_sketch = new p5(sketch2)
                } else if (destination.anchor == "diet") {
                    current_sketch = new p5(sketch3)
                } else if (destination.anchor == "habitat") {
                    current_sketch = new p5(sketch4)
                } else if (destination.anchor == "communication") {
                    current_sketch = new p5(sketch5)
                } else if (destination.anchor == "population") {
                    current_sketch = new p5(sketch6)
                } else if (destination.anchor == "conservation") {
                    current_sketch = new p5(sketch7)
                }
            }
        });
        if(window.location.hash){
            let location = window.location.hash.substr(1)
            if (location == "introduction") {
                current_sketch = new p5(sketch1)
            } else if (location == "facts") {
                current_sketch = new p5(sketch2)
            } else if (location == "diet") {
                current_sketch = new p5(sketch3)
            } else if (location == "habitat") {
                current_sketch = new p5(sketch4)
            } else if (location == "communication") {
                current_sketch = new p5(sketch5)
            } else if (location == "population") {
                current_sketch = new p5(sketch6)
            } else if (location == "conservation") {
                current_sketch = new p5(sketch7)
            }
        }
        else
            current_sketch = new p5(sketch1)
        console.log(myFullpage.getActiveSlide())
    })


    //    //hover over menu items js
    //
    //    document.getElementsByClassName("select").onmouseover = function () {
    //        mouseOver()
    //    };
    //    document.getElementsByClassName("select").onmouseout = function () {
    //        mouseOut()
    //    };
    //
    //    function mouseOver() {
    //        document.getElementbyClassName("select").style.color = "red";
    //    }
    //
    //    function mouseOut() {
    //        document.getElementbyClassName("select").style.color = "white";
    //    }



    //condensed new box navigation 

    $(".select").on('click', function () {

        let target = $(this).data("option")

        //specific to '.select' in FACTS, cannot be reassigned
        const options = ['average-size', 'features', 'lifespan', 'comparison']

        if (options.includes(target)) {

            $(`#${target}-text`).show()

            for (let option of options) {
                if (option != target)
                    $(`#${option}-text`).hide()
            }


        }

    })




    // var cata = document.getElementById("average-size");
    // cata.onclick = function () {
    //     document.getElementById("average-size-text").style.display = "flex";
    //     //        document.getElementById("comparison-text").style.display = "none";
    //     document.getElementById("features-text").style.display = "none";
    //     document.getElementById("lifespan-text").style.display = "none";
    // }

    //    var catb = document.getElementById("comparison");
    //    catb.onclick = function () {
    //        document.getElementById("comparison-text").style.display = "flex";
    //        document.getElementById("average-size-text").style.display = "none";
    //        document.getElementById("features-text").style.display = "none";
    //        document.getElementById("lifespan-text").style.display = "none";
    //    }


    // var catc = document.getElementById("features");
    // catc.onclick = function () {

    //     console.log(document.getElementById("features-text").style.display)

    //     document.getElementById("features-text").style.display = "flex";
    //     document.getElementById("average-size-text").style.display = "none";
    //     //        document.getElementById("comparison-text").style.display = "none";
    //     document.getElementById("lifespan-text").style.display = "none";
    // }


    // var catd = document.getElementById("lifespan");
    // catd.onclick = function () {
    //     document.getElementById("lifespan-text").style.display = "flex";
    //     document.getElementById("average-size-text").style.display = "none";
    //     document.getElementById("features-text").style.display = "none";
    //     //        document.getElementById("comparison-text").style.display = "none";
    // }



    //communication navigation

    var comm1 = document.getElementById("feeding");
    comm1.onclick = function () {
        document.getElementById("feeding-text").style.display = "flex";
        document.getElementById("courting-text").style.display = "none";
        document.getElementById("ship-text").style.display = "none";
    }

    var comm2 = document.getElementById("courting");
    comm2.onclick = function () {
        document.getElementById("courting-text").style.display = "flex";
        document.getElementById("feeding-text").style.display = "none";
        document.getElementById("ship-text").style.display = "none";
    }


    var comm3 = document.getElementById("ship");
    comm3.onclick = function () {
        document.getElementById("ship-text").style.display = "flex";
        document.getElementById("feeding-text").style.display = "none";
        document.getElementById("courting-text").style.display = "none";
    }






    //closing tag
});

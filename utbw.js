$(function () {


//    $.scrollify({
//        section: "section",
//        scrollbars: false,
//        before: function (i, panels) {
//
//            var ref = panels[i].attr("data-section-name");
//
//            $(".pagination .active").removeClass("active");
//
//            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
//        },
//        afterRender: function () {
//            var pagination = "<ul class=\"pagination\">";
//            var activeClass = "";
//            $("section").each(function (i) {
//                activeClass = "";
//                if (i === 0) {
//                    activeClass = "active";
//                }
//                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
//            });
//
//            pagination += "</ul>";
//
//            $(".home").append(pagination);
//            /*
//
//		  Tip: The two click events below are the same:
//
//		  $(".pagination a").on("click",function() {
//			$.scrollify.move($(this).attr("href"));
//		  });
//
//		  */
//            $(".pagination a").on("click", $.scrollify.move);
//        }
//    });


    //arc text here

//    const circleType = new CircleType(document.getElementById("arc1"));
//    circleType.radius(135);
//
//
//    $('#arc1').circleType({
//        radius: 135
//    });
    


    //
    //
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



    var cata = document.getElementById("average-size");
    cata.onclick = function () {
        document.getElementById("average-size-text").style.display = "flex";
        //        document.getElementById("comparison-text").style.display = "none";
        document.getElementById("features-text").style.display = "none";
        document.getElementById("lifespan-text").style.display = "none";
    }

    //    var catb = document.getElementById("comparison");
    //    catb.onclick = function () {
    //        document.getElementById("comparison-text").style.display = "flex";
    //        document.getElementById("average-size-text").style.display = "none";
    //        document.getElementById("features-text").style.display = "none";
    //        document.getElementById("lifespan-text").style.display = "none";
    //    }


    var catc = document.getElementById("features");
    catc.onclick = function () {
        
        console.log(document.getElementById("features-text").style.display)
        
        document.getElementById("features-text").style.display = "flex";
        document.getElementById("average-size-text").style.display = "none";
        //        document.getElementById("comparison-text").style.display = "none";
        document.getElementById("lifespan-text").style.display = "none";
    }


    var catd = document.getElementById("lifespan");
    catd.onclick = function () {
        document.getElementById("lifespan-text").style.display = "flex";
        document.getElementById("average-size-text").style.display = "none";
        document.getElementById("features-text").style.display = "none";
        //        document.getElementById("comparison-text").style.display = "none";
    }



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

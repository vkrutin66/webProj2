$( function() {

    $(".switch_link").on( "click", function (){
        $(".switch_link").removeClass("active");
        $(this).addClass("active");

        $(".switch_item").addClass("hide");
        if($(this).hasClass("switch_link1")){
            $(".switch_item1").removeClass("hide");
        } else if($(this).hasClass("switch_link2")){
            $(".switch_item2").removeClass("hide");
        } else if($(this).hasClass("switch_link3")){
            $(".switch_item3").removeClass("hide");
        }
    });

    $(".burger_button").on("click", function(){
        $(".mobile_nav").toggleClass("mobile_nav_show");
    });

    $(".lightSlider").lightSlider({
        item: 1
    });

    $( ".accord" ).accordion();
    $( ".accord h3" ).on( "click", function (){
        $(".with_img .img_accord").addClass("hide");
        if($(this).hasClass("accord1")){
            $(".with_img .accord1").removeClass("hide");
        } else if($(this).hasClass("accord2")){
            $(".with_img .accord2").removeClass("hide");
        } else if($(this).hasClass("accord3")){
            $(".with_img .accord3").removeClass("hide");
        }
    });
} );
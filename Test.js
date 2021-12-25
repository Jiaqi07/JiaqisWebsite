$( document ).ready(function() {
    var $window = $(window);
    function scroll_elements(){
        var scroll = $window.scrollTop();
        var scrollLayer1 = scroll/1.4;
        var scrollLayer2 = scroll/1.2;

        $(".layer1").css(
            "-webkit-transform","translate3d(0," +  scrollLayer1  + "px,0)",
            "transform","translate3d(0," +  scrollLayer1  + "px,0)"
        );
        $(".layer2").css(
            "-webkit-transform","translate3d(0," +  scrollLayer2  + "px,0)",
            "transform","translate3d(0," +  scrollLayer2  + "px,0)"
        );
    }

    $window.scroll(scroll_elements);
});
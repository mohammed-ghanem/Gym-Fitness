$(document).ready(function(){
    "use strict";


    var fullH = $(window).height ();
    $(".back").height  (fullH);


    $(window).on("resize", function(){
        var fullH = $(window).height ();
        $(" .back").height  (fullH);
    });

});
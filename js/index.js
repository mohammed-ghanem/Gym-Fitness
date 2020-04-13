$(document).ready(function(){

	// start select from gallary classes
	$("#select ul li").on('click',function () {
		$(this).addClass('active').siblings().removeClass('active');
    $("#select section").hide();
		$($(this).data('content')).fadeIn(1000).css("display","flex");
	});
	// end select from gallary classes
 // start move to classes
$(".move-to-classes").click(function(e){
	e.preventDefault();
	$("html , body").animate ({
			scrollTop: ($( "#" + $(this).data("scroll"))).offset().top },1000);
});
// end move to classes
//start scroll to top
	$(window).scroll(function(){
		var scrollup = 	$(".scrollup");
		if($(window).scrollTop() > 700 ) {
			scrollup.fadeIn();
		} else {
				scrollup.fadeOut();
		}
	});

	$(".scrollup").on("click", function(e){
		e.preventDefault();
	$("html , body").animate({
		scrollTop:0
		},1000);
	});
	//end scroll to top
//start slider skitter
			 $(".skitter-large").skitter({
				 dots: false,
				 focus: true,
				 navigation: true,
				 theme: "clean",
				 with_animations: ["paralell", "glassBlock", "swapBars","swapBarsBack","cut","label_skitter"]

			 });
//end slider skitter


});

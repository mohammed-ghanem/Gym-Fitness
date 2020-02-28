$(document).ready(function(){
	"use strict";
	
	
	// start functions for full window background
	 var fullH = $(window).height ();
     $(".back").height  (fullH);
	
	
	$(window).on("resize", function(){
		 var fullH = $(window).height ();
     $(" .back").height  (fullH);
	});
	


	
	// start functions for all button photos 


	$("#habiba ul li button").on('click',function () {


		$("#habiba .class .done").hide();

		$($(this).data('content')).fadeIn().css("display","flex");


	});

	// end functions for all button photos //
	// start function for all photo servises //
	
	$(".pic1").mouseenter(function(){
		$(".pic1 .one").show();
	});
	$(".pic1").mouseleave(function(){
		$(".pic1 .one").hide();
	});
	
		$(".pic2").mouseenter(function(){
		$(".pic2 .two").show();
	});
	$(".pic2").mouseleave(function(){
		$(".pic2 .two").hide();
	});
	
		$(".pic3").mouseenter(function(){
		$(".pic3 .three").show();
	});
	$(".pic3").mouseleave(function(){
		$(".pic3 .three").hide();
	});
	
		$(".pic4").mouseenter(function(){
		$(".pic4 .four").show();
	});
	$(".pic4").mouseleave(function(){
		$(".pic4 .four").hide();
	});
		// end function for all photo servises //
	
	
	
//	
//	$(window).scroll(function(){
//		
//		$(this).scrollTop();
//		console.log ($(".class").offset().top);
//		
//		
//		if($(window).scrollTop() >= $(".class").offset().top) {
//			
//			$(".class").animate({opacity: 1},1500);
//			
//		}
//		
//		
//		
//	});
//	


$(".start .start2 li .heba").click(function(e){
	e.preventDefault();
	
	$("html , body").animate ({
			scrollTop: ($( "#" + $(this).data("scroll"))).offset().top },1000);
		
		
		
	
});
	
	
	
	$(window).scroll(function(){
		
		
		var scrollup = 	$(".scrollup");
		
		if($(window).scrollTop() > 1000 ) {
			
			scrollup.fadeIn();
			
		} else {
			
				scrollup.fadeOut();
		}
		
	});
	
	$(".scrollup").on("click", function(e){
		
		e.preventDefault();
	$("html , body").animate({scrollTop:0},1000);	
		
	});
	
	
	
	
	
});



























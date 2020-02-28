$(document).ready(function(){
	"use strict";

	
	var fullW = $(window).height (),
		start = $(".start").innerHeight ();
		
   $(".team").height(fullW - start);
	
	$(window).on("resize" , function (){
		
			var fullW = $(window).height (),
		start = $(".start").innerHeight ();
		
   $(".team").height(fullW - start);
		
		
	} );
	
	
	
	
	
});
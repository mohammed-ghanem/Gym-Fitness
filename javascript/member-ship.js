$(document).ready(function(){
	"use strict";

			warning();
		function warning() {
			$(".app h1").fadeIn(800,function () {
			$(this).fadeOut(800);
			warning();
		});
	}
});
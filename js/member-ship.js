$(document).ready(function(){
	"use strict";

			warning();
		function warning() {
			$(".warning").fadeIn(800,function () {
			$(this).fadeOut(800);
			warning();
		});
	}
});

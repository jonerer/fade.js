/**
*  options: {
*  	fadeOutSpeed: 1000, //milliseconds
*	  fadeInSpeed: 300, //milliseconds
*      opacity: x //0 to 1
*  }
*d
*/
jQuery.fn.fadejs = function(options){
	var that = this;
	var fadeState = "in";

	var fadeOutSpeed = options.fadeOutSpeed || 10000;
	var fadeInSpeed = options.fadeInSpeed || 500;
	var opacity = options.opacity || 0.1;

	$(this.selector).on('mouseover', fadeIn);

	$(document).scroll(function(pos){
		if(pos.currentTarget.body.scrollTop <= 10){
			fadeIn();
		}else{
			fadeOut();
		}
	});

	function fadeOut(){
		if(fadeState === "in"){
			$(that).fadeTo(fadeOutSpeed, opacity);
			fadeState = "out";
		}
	}
	function fadeIn(){
		if(fadeState === "out"){
			$(that).fadeTo(fadeInSpeed, 1.0);
			fadeState = "in";
		}
	}
};

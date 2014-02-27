jQuery.fn.fadejs = function(options){
	var that = this;
	var fadeState = "in";
	
	var fadeOutSpeed = options.fadeOutSpeed || 10000;
	var fadeInSpeed = options.fadeInSpeed || 500;
	var opacity = options.opacity || 0.1;
	var fadeOnScroll = options.fadeOnScroll || true;
	var scrollContainerClass = options.scrollContainerClass;
	
	$(this.selector).on('mouseover', fadeIn);
	
	// $(this.selector).on('mouseleave', fadeIn);
	
	if(options.fadeOnScroll){
		$(document).scroll(function(pos){
			if(pos.currentTarget.body.scrollTop <= 10){
				fadeIn();
			}else{
				fadeOut();
			}
		});
	}
	
	
	
	$("."+scrollContainerClass).scroll(function(pos){
		
		console.log($(pos).find('.menu'));
		
		if(pos.currentTarget.scrollTop <= 10){
			fadeIn();
		}else{
			fadeOut();
		}
	});
	
	
	
	function fadeOut(){
		if(fadeState === "in"){
			console.log("out");
			$(that).fadeTo(fadeOutSpeed, opacity);
			fadeState = "out";
		}
	}
	function fadeIn(){
		if(fadeState === "out"){
			console.log("in");
			$(that).fadeTo(fadeInSpeed, 1.0);
			fadeState = "in";
		}
	}
};
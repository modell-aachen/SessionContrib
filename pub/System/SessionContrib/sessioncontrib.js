jQuery(function($){ 

	/*for showing the right panel between 
	MinutesViewTwmplate and WebHomeViewTemplate */
	
    var bar = $('.dataBar').attr("bar");
	if (bar) {
		$(bar).offcanvas({action: "open"});
	};
	

	$('.taskdetail-list li').on('click', function(e) {
 		e.preventDefault();
 		$(this).addClass('active').siblings().removeClass('active'); // for different background on clicked menu item
	});


});
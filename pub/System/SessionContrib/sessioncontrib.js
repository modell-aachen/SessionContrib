jQuery(function($){ 

	$('.qw-sessionbar').offcanvas({action: "open"});

	 	$('.taskdetail-list li').on('click', function(e) {
 		e.preventDefault();
 		$(this).addClass('active').siblings().removeClass('active'); // for different background on clicked menu item
	});


});
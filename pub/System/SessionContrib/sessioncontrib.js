jQuery(function($){ 

	/*for showing the upcomming meeting on session data panel */
	var d = $("#day").text();
	var x = 0;

	if (d === "Saturday") { 
	    var x = 6;
	};
	if (d === "Sunday") { 
	    var x = 0;
	};
	if (d === "Monday") { 
	    var x = 1;
	};

	if (d === "Tuesday") { 
	    var x = 2;
	};
	if (d === "Wednesday") { 
	    var x = 3;
	};
	if (d === "Thursday") { 
	    var x = 4;
	};
	if (d === "Friday") { 
	    var x = 5;
	};
	var b = new Date();
	var n = b.getDay();
	var c = n - x;
	var newDate = new Date();
	var m = moment(newDate.setDate(b.getDate() - c)).format("YYYY-MM-DD").toString();
	$("#date").text(m);

	/*for making the "tasks" from TasksAPIPlugin to Agenda */
	$(".qw-extra .title").text("Agenda,"); 
	

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
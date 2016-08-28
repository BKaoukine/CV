jQuery(document).ready(function($) {

	// $(".formation, .réalisations, .CCI").css('margin-left', 100);

	// $("#formation").click(function(event) {
		// $(".my_picture").animate({"margin-left": -1500,}, 3000);
		// $(".formation").animate({"margin-left": 270,}, 3000);
		// return false;
	// });
	/*$(".my_picture").fadeOut(2000, function() {
		
	});
	$(".formation").fadeOut(2000, function() {
		
	});

	$(".réalisations	").fadeOut(2000, function() {
		
	});*/
	// $(".my_picture").fadeIn(3000);
	$(".my_picture").addClass('scale');
	



	$("#2").click(function(event) {
		//$(".my_picture").addClass('shrink');
		$(".my_picture, .réalisations, .CCI").fadeOut('slow', function() {
				$(".formation").fadeIn("slow");
				$(".formation").addClass('scale');
				$(".my_picture, .réalisations, .CCI").removeClass('scale');
			});
		
		return false;
	});
	$("#3").click(function(event) {
		//$(".my_picture").addClass('shrink');
		$(".my_picture, .formation, .CCI").fadeOut('slow', function() {
				$(".réalisations").fadeIn("slow");
				$(".réalisations").addClass('scale');
				$(".my_picture, .formation, .CCI").removeClass('scale');
			});
		
		return false;
	});
	$("#4").click(function(event) {
		//$(".my_picture").addClass('shrink');
		$(".my_picture, .réalisations, .formation").fadeOut('slow', function() {
				$(".CCI").fadeIn("slow");
				$(".CCI").addClass('scale');
				$(".my_picture, .réalisations, .formation").removeClass('scale');
			});
		
		return false;
	});
	$("#1").click(function(event) {
		//$(".my_picture").addClass('shrink');
		$(".formation, .réalisations, .CCI").fadeOut('slow', function() {
				$(".my_picture").fadeIn("slow");
				$(".my_picture").addClass('scale');
				$(".formation, .réalisations, .CCI").removeClass('scale');
			});
		
		return false;
	});

		$("#réalisations").click(function(event) {
		$(".formation ,.my_picture ,.CCI").css('order', '8');
		$(".réalisations").addClass('scale');
		return false;
	});

		$("#CCI").click(function(event) {
		$(".formation, .my_picture ,.réalisations").css('order', '9');
		$(", .réalisations.CCI").addClass('scale');
		return false;
	});


	// $(".my_picture").css('transform', 'scale(1)');


/*
	var hasBeenClicked_1 = false;
	var hasBeenClicked_2 = false;
	var hasBeenClicked_3 = false;
	var hasBeenClicked_4 = false;
	
	$("#1").click(function(event) {
		hasBeenClicked_1 = true;
		alert("wsd");
	});
	$("#2").click(function(event) {
		hasBeenClicked_2 = true;
		if (hasBeenClicked_2 === true) {
		$(".formation").css('order', '1');
		$(".formation").addClass('scale');
		$(".réalisations").css('order', '2');
		return false;
	}

	});
	
	$("#3").click(function(event) {
		hasBeenClicked_3 = true;
		if (hasBeenClicked_3 === true) {
		$(".réalisations").css('order', '1');
		$(".réalisations").addClass('scale');
		$(".formation").css('order', '2');
		return false;
	}
	});
	$("#4").click(function(event) {
		hasBeenClicked_4 = true;
	});
	*/

			
	


	});
/*	$("#formation").click(function(event) {
		$(".my_picture").animate({"margin-right": 2500}, 2000);
		$(".formation").animatetoggle({"margin-top": -440}, 3000);
		return false;
	});
	$("#réalisations").click(function(event) {
		
		$(".formation").animate({"margin-right": 2500}, 1000);
		$(".réalisations").animate({"margin-top": -840}, 3000);
		return false;
	});*/
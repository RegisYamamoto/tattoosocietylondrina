$(document).ready(function() {
	$(".mobile_nav_1").click(function() {
		$(".mobile-portfolio-1").slideDown(1000);
	});

	$(".mobile_nav_2").click(function() {
		$(".mobile-portfolio-2").slideDown(1000);
	});

	$(".mobile_nav_3").click(function() {
		$(".mobile-portfolio-3").slideDown(1000);
	});

	$(".mobile_nav_4").click(function() {
		$(".mobile-portfolio-4").slideDown(1000);
	});

	$(".mobile_nav_5").click(function() {
		$(".mobile-portfolio-5").slideDown(1000);
	});

	$(".mobile_nav_6").click(function() {
		$(".mobile-portfolio-6").slideDown(1000);
	});

	$(".mobile_nav_7").click(function() {
		$(".mobile-portfolio-7").slideDown(1000);
	});

	$(".mobile_nav_8").click(function() {
		$(".mobile-portfolio-8").slideDown(1000);
	});

	$(".close").click(function() {
		$(".mobile-portfolio-1").slideUp(1000);
	});

	$(".close").click(function() {
		$(".mobile-portfolio-2").slideUp(1000);
	});

	$(".close").click(function() {
		$(".mobile-portfolio-3").slideUp(1000);
	});

	$(".close").click(function() {
		$(".mobile-portfolio-4").slideUp(1000);
	});

	$(".close").click(function() {
		$(".mobile-portfolio-5").slideUp(1000);
	});

	$(".close").click(function() {
		$(".mobile-portfolio-6").slideUp(1000);
	});

	$(".close").click(function() {
		$(".mobile-portfolio-7").slideUp(1000);
	});

	$(".close").click(function() {
		$(".mobile-portfolio-8").slideUp(1000);
	});
});

$(document).ready(function($) {
	$('#my_image-1').click(function() {
		var img = $(this).attr("src");
		var appear_image = "<div id='appear_image_div' onClick='closeImage()'></div>";
		appear_image = appear_image.concat("<img id='appear_image' src='"+img+"' />");
		$('body').append(appear_image);
	});

	$('#my_image-2').click(function() {
		var img = $(this).attr("src");
		var appear_image = "<div id='appear_image_div' onClick='closeImage()'></div>";
		appear_image = appear_image.concat("<img id='appear_image' src='"+img+"' />");
		$('body').append(appear_image);
	});

	$('#my_image-3').click(function() {
		var img = $(this).attr("src");
		var appear_image = "<div id='appear_image_div' onClick='closeImage()'></div>";
		appear_image = appear_image.concat("<img id='appear_image' src='"+img+"' />");
		$('body').append(appear_image);
	});

	$('#my_image-4').click(function() {
		var img = $(this).attr("src");
		var appear_image = "<div id='appear_image_div' onClick='closeImage()'></div>";
		appear_image = appear_image.concat("<img id='appear_image' src='"+img+"' />");
		$('body').append(appear_image);
	});

	$('#my_image-5').click(function() {
		var img = $(this).attr("src");
		var appear_image = "<div id='appear_image_div' onClick='closeImage()'></div>";
		appear_image = appear_image.concat("<img id='appear_image' src='"+img+"' />");
		$('body').append(appear_image);
	});

	$('#my_image-6').click(function() {
		var img = $(this).attr("src");
		var appear_image = "<div id='appear_image_div' onClick='closeImage()'></div>";
		appear_image = appear_image.concat("<img id='appear_image' src='"+img+"' />");
		$('body').append(appear_image);
	});

	$('#my_image-7').click(function() {
		var img = $(this).attr("src");
		var appear_image = "<div id='appear_image_div' onClick='closeImage()'></div>";
		appear_image = appear_image.concat("<img id='appear_image' src='"+img+"' />");
		$('body').append(appear_image);
	});

	$('#my_image-8').click(function() {
		var img = $(this).attr("src");
		var appear_image = "<div id='appear_image_div' onClick='closeImage()'></div>";
		appear_image = appear_image.concat("<img id='appear_image' src='"+img+"' />");
		$('body').append(appear_image);
	});
});

function closeImage() {
	$('#appear_image_div').remove();
	$('#appear_image').remove();
	$('#close_image').remove();
}
$(document).ready(function(){
	$("header").addClass("large");
	$("space").addClass("smaller");

	var headerX = $("header");

	$(document).on("scroll", function(e) {

		if ($(document).scrollTop() > 152){
			headerX.removeClass("large");
			headerX.addClass("small");
		} else {
			headerX.removeClass("small");
			headerX.addClass("large");
		}

	});

});
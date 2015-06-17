$(document).ready(function(){
	$("header").addClass("large");
	$("space").addClass("smaller");

	var headerX = $("header");

	$(document).on("scroll", function(e) {

		$("#P2").text($(document).scrollTop());
		if ($(document).scrollTop() > 152){

			headerX.removeClass("large");
			headerX.addClass("small");
			headerX.removeClass("ontransition");
		} else if($(document).scrollTop()>95){
			if(headerX.hasClass("small"))
			{
				headerX.removeClass("small");
				headerX.addClass("large");
			}
			headerX.addClass("ontransition");
		} else {
			headerX.removeClass("ontransition");
			headerX.removeClass("small");
			headerX.addClass("large");
		}

	});



});
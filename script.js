$(function(){

	var moveSlide = setInterval(moveCarousel, 3000);
	var carouselList = $("#carousel ul");
	
	function moveCarousel() {

		carouselList.animate({'marginLeft':-400}, 500, function(){
				var firstItem = carouselList.find("li:first");
				var lastItem = carouselList.find("li:last");
				lastItem.after(firstItem);
				carouselList.css({marginLeft:0});
			});
	}

	function stop() {
    	clearInterval(moveSlide);
  	}
    
    moveCarousel();

    $("#carousel").on('mouseenter', stop);
  	$("#carousel").on('mouseleave', function() {
  		moveSlide = setInterval(moveCarousel, 3000);
  	});


    $('#btn-right').on('click', function() {
    	carouselList.animate({'marginLeft':-400}, 500, function(){
				var firstItem = carouselList.find("li:first");
				var lastItem = carouselList.find("li:last");
				lastItem.after(firstItem);
				carouselList.css({marginLeft:0});
		});
    });

    $('#btn-left').on('click', function() {
    	carouselList.animate({'marginLeft': 0}, 500, function(){
				var firstItem = carouselList.find("li:first");
				var lastItem = carouselList.find("li:last");
				lastItem.after(firstItem);
				carouselList.css({marginLeft:-400});
		});
    });
});


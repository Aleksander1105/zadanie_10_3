$(function(){

	let moveSlide;
	
	function moveCarousel() {
		
		var carouselList = $("#carousel ul");

		moveSlide = setInterval(function() {
			carouselList.animate({'marginLeft':-400}, 500, function(){
				var firstItem = carouselList.find("li:first");
				var lastItem = carouselList.find("li:last");
				lastItem.after(firstItem);
				carouselList.css({marginLeft:0});
			}); 
		}, 3000);
	}

	function stop() {
    	clearInterval(moveCarousel);
  	}
    
    moveCarousel();

    $("#carousel").mouseenter(stop);
  	$("#carousel").mouseleave(moveSlide);


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


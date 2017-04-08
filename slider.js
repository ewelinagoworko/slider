'use strict';

//funkcja document.ready - wersja skrocona:

$ (function(){
	
	var slider = $('#slider');
	var slideshow = $('.slide-show');
	var slideCount = $('.slider-caption');
	var slideWidth = 100/slideCount;
	var slideIndex = 0;
	
	
	$('.slide-show').css(slideCount*100 + '%');
});
'use strict';

//funkcja document.ready - wersja skrocona:

$ (function(){
	
	var slider = $('#slider');
	var slideshow = $('.slide-show');
	var slideCount = $('.single-slide').length;
	var slideWidth = 100/slideCount;
	var slideIndex = 0;
	
	console.log(slideCount);
	
	$('.slide-show').css('width', slideCount*100 + '%');
});
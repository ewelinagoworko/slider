'use strict';

//funkcja document.ready - wersja skrocona, wszystkie funkcje muszą byc zlokalizowane w document.ready function:

$ (function(){
	
	//definiujemy zmienne: 
	
	var slider = $('#slider'); //odwolanie do calego slider'a
	var slideShow = $('.slide-show'); //odwolanie do kontenera wewnetrznego
	var slideCount = $('.single-slide').length; //odwolanie sie do pojedynczych slajdow w sliderze (tj. dzieci kontenera)
	var slideWidth = 100/slideCount;
	var slideIndex = 0;
	
	console.log(slideCount);
	
	//nadajemy szerokosc poprzez metodę css - zawsze jako pierwszy parametr dajemy to, czym chcemy manipulowac:
	
	$('.slide-show').css('width', slideCount*100 + '%'); 
	

	//przypisujemy elementowi single slide lewy margines w procentach (jako mnożenie szerokości slide i indeksu) oraz szerokość w procentach - zapis skrocony:
	
	slideShow.find('.single-slide').each(function(index) {
								
			$(this).css({
				'width' : slideWidth + '%',
				'margin-left': slideWidth * index + '%'
			});
		 });
			
	//na kliknięcie slajd ma sie przesunac do tylu:
		
	$('.prev-slide').click(function(e){
		e.preventDefault();
		slide(slideIndex - 1);	
		//console.log(newSlideIndex);
	});
	
	// na klikniecie slajd ma sie przesunac do przodu:
		
	$('.next-slide').click(function(e) {
		e.preventDefault();
		slide(slideIndex + 1);	
		//console.log(newSlideIndex);
	});

	//definiujemy funkcje slide:
		
 	function slide (newSlideIndex){ 
		console.log(newSlideIndex);
	 	if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
			return; //przerywamy dzialanie funkcji, gdy ten warunek sie spelni, to funkcja ma przerwac swoje dzialanie
		}
		
		var slideCaption = $('.slider-caption').eq(newSlideIndex);
		slideCaption.hide();
		
		var marginLeft = (newSlideIndex * (-100)) + '%';
		
		$('.slide-show').animate({'margin-left': marginLeft}, 800, indexNapis);
		
		function indexNapis() {
			slideIndex = newSlideIndex;
			slideCaption.fadeIn('slow');
		}
	};

});


//a teraz od prawego marginesu, zeby sie przesuwalo:

//var marginRight = (newSlideIndex * 100) * '%';
// i wszystkie margin-left zamienic na margin-right


//inny sposob zapisu: przypisujemy elementowi single slide lewy margines w procentach (jako mnożenie szerokości slide i indeksu) oraz szerokość w procentach:

//$('.slide-show').find('.single-slide').each(function(index) {
								
			//$(this).css('margin-left', slideWidth * index + '%');
			//$(this).css('width', 100/slideCount + '%');	




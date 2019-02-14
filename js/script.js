var slides = document.querySelectorAll(".slider__item");
var sliderToggles = document.querySelectorAll(".slider-toggles__button");
var sliderCurrentIndex = 0;
var sliderTimer = 3000;

console.log(slides);
console.log(sliderToggles);

var sliderInit = function() {
	if (!(slides[0].classList.contains('slider__item--show')) || !(sliderToggles[0].classList.contains('slider-toggles__button--active'))) {
		slides[0].classList.add('slider__item--show');
		sliderToggles[0].classList.add('slider-toggles__button--active');
	}
	sliderCurrentIndex = 0;
}

sliderInit();

var changeSlide = function (index) {
		sliderCurrentIndex = index;
		console.log(index);
		for (var j=0; j < slides.length; j++) {
			if (j == sliderCurrentIndex) {
				slides[j].classList.add("slider__item--show");
				sliderToggles[j].classList.add("slider-toggles__button--active");
			} else {
				slides[j].classList.remove("slider__item--show");
				sliderToggles[j].classList.remove("slider-toggles__button--active");		
			}	
		}			
	}
	
var sliderPlay = function() {
	setTimeout("sliderPlay()", sliderTimer);
	if (sliderCurrentIndex < slides.length-1 ) {
			sliderCurrentIndex++;
		} else {
			sliderCurrentIndex=0;
		}
	changeSlide(sliderCurrentIndex);	
}	

sliderPlay();

var moveIndex = function (slideToggle, index) {
	slideToggle.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(index);
		changeSlide(index);
	});	
}

for (var i=0; i < sliderToggles.length; i++) { 
	moveIndex(sliderToggles[i], i);	
}


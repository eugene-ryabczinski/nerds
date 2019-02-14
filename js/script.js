var overlay = document.querySelector(".overlay");
var modal = document.querySelectorAll(".modal");
var closeButton = document.querySelectorAll(".modal__close");

// Блок feedback
var feedbackButton = document.querySelector(".address__feedback-link");
var feedbackModal = document.querySelector(".feedback");
if(typeof(feedbackModal) != "undefined" && feedbackModal !== null) {
	var feedbackForm = feedbackModal.querySelector(".feedback__form");
	var feedbackInputs = feedbackForm.querySelectorAll(".feedback__input");
	var feedbackName = feedbackModal.querySelector("[name=name]");
	var feedbackEmail = feedbackModal.querySelector("[name=email]");
	
	feedbackButton.addEventListener("click", function(evt) { 
		evt.preventDefault();
		feedbackModal.classList.add("modal--show");
		overlay.classList.add("overlay--show");
		feedbackName.focus();
	});
	
	feedbackForm.addEventListener("submit", function(evt) {
		if (!feedbackName.value || !feedbackEmail.value) {
			evt.preventDefault();
			feedbackModal.classList.remove("modal--error");
			feedbackModal.offsetWidth = feedbackModal.offsetWidth;
			feedbackModal.classList.add("modal--error");
		}
	});		
}

// Закрытие модальнх окон при нажатии на крестик
var closeButtonArray = Array.prototype.slice.call(document.querySelectorAll(".modal__close"));
closeButtonArray.forEach(function(button, n) {
	button.addEventListener("click", function(evt) {
		modalClosing();	
	});
});

// Механизм закрытия модальных окон при нажатии на esc
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		modalClosing();	
	}		
});

// Механизм закрытия модальных окон при нажатии на overlay
overlay.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalClosing();
	
});	

var modalClosing = function() {
	for (var i=0; i < modal.length; i++) { 
		if (modal[i].classList.contains("modal--show")) {
			modal[i].classList.remove("modal--show");
		} 
		modal[i].classList.remove("modal--error");
	}
	if (overlay.classList.contains("overlay--show")) {
		overlay.classList.remove("overlay--show");
	}	
}

var slides = document.querySelectorAll(".slider__item");
if(typeof(slides) != "undefined" && slides !== null && slides.length !== 0) {
	
	var sliderContainer = document.querySelector(".slider__list");
	var sliderToggles = document.querySelectorAll(".slider-toggles__button");
	var sliderCurrentIndex = 0;
	var sliderTimer = 3000;
	
/*
	console.log(slides);
	console.log(sliderToggles);
*/

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
		if (sliderCurrentIndex < slides.length-1 ) {
				sliderCurrentIndex++;
			} else {
				sliderCurrentIndex=0;
			}
		changeSlide(sliderCurrentIndex);	
	}
	
	var startSliderPlay = setInterval(sliderPlay, sliderTimer);
	
	sliderContainer.onmouseover = function() {
		clearInterval(startSliderPlay);
	}
	
	sliderContainer.onmouseout = function() {
		startSliderPlay = setInterval(sliderPlay, sliderTimer)
	}
	
	var moveIndex = function (slideToggle, index) {
		slideToggle.addEventListener("click", function(evt) {
			evt.preventDefault();
			changeSlide(index);
			clearInterval(startSliderPlay);
		}); 
	}
	
	for (var i=0; i < sliderToggles.length; i++) { 
		moveIndex(sliderToggles[i], i); 
	}
}
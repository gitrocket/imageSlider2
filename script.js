// variables

var slides = document.querySelectorAll('.item');
var nextSlide = document.querySelector('.right-slide');
var prevSlide = document.querySelector('.left-slide');
var totalSlides = slides.length;

console.log(slides);
var index = 0;

function clickNext() {
    next('next');
}

function clickPrev() {
    next('prev')
}

function next(direction) {

    if(direction === 'next') {
        index++;
        if(index === totalSlides) {
            index=0;
            }
        } 
        
    else {
        if(index === 0) {
            index = totalSlides - 1;
        } else {
            index--;
        }
    }

    // remove active class from all items
    for(i = 0; i < slides.length; i++ ) {
        slides[i].classList.remove('active');
    }

    // add active class to current image
    slides[index].classList.add('active')
}



// Event Listeners
nextSlide.addEventListener('click', clickNext);
prevSlide.addEventListener('click', clickPrev);
// Slider functionality for main slider
let currentSlideIndex = 0;
const slides = document.querySelectorAll('#slider .item');

function showSlide(index) {
  const slider = document.querySelector('#slider .slide');
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function startSlideShow() {
  setInterval(nextSlide, 3000);
}

startSlideShow();

// Image slider functionality for event section
let eventSlideIndex = 0;
const eventSlides = document.querySelectorAll('.imgslider img');
const dots = document.querySelectorAll('.dot');

function changeSlide(index) {
  eventSlides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  eventSlideIndex = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => changeSlide(index));
});

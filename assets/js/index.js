let close = document.getElementById("header_nav_close");
let toggle = document.getElementById("header_toggle");
close.addEventListener("click", function () {
    document.querySelector(".header_nav").classList.remove("active");
});

toggle.addEventListener("click", function () {
    document.querySelector(".header_nav").classList.add("active");
});


let nbrOfSlides = document.querySelectorAll(".caroussel__slide").length;
let currentSlide = 0;
let dots = document.querySelector(".caroussel__dots");
//add dots
for (let i = 0; i < nbrOfSlides; i++) {
    let dot = document.createElement("div");
    // add class caroussel__dots__dot and caroussel__dots__dot__active for the active one
    dot.classList.add("caroussel__dots__dot");
    if (i === currentSlide) {
        dot.classList.add("caroussel__dots__dot__active");
    }
    dots.appendChild(dot);
}

setInterval(() => {
    currentSlide++;
    if (currentSlide > nbrOfSlides - 1) {
        currentSlide = 0;
    }
    document.querySelector(".caroussel__slide__active").classList.remove("caroussel__slide__active");
    document.querySelectorAll(".caroussel__slide")[currentSlide].classList.add("caroussel__slide__active");
    //dots
    document.querySelector(".caroussel__dots__dot__active").classList.remove("caroussel__dots__dot__active");
    document.querySelectorAll(".caroussel__dots__dot")[currentSlide].classList.add("caroussel__dots__dot__active");
}, 5000)

//dots




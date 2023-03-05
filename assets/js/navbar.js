let close = document.getElementById("header_nav_close");
let toggle = document.getElementById("header_toggle");
close.addEventListener("click", function () {
    document.querySelector(".header_nav").classList.remove("active");
});

toggle.addEventListener("click", function () {
    document.querySelector(".header_nav").classList.add("active");
});

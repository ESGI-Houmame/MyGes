let close = document.getElementById("header_nav_close");
let toggle = document.getElementById("header_toggle");
close.addEventListener("click", function () {
    document.querySelector(".header_nav").classList.remove("active");
});

toggle.addEventListener("click", function () {
    document.querySelector(".header_nav").classList.add("active");
});


$(document).ready(function(){
    // Changer page
    $(".header_nav_list_item_link").click(function(){
        let link = $(this).attr("data-link");
        
        let content = $(document.body).find('.content-box');

        content.html('<p class = "text-light font-bold p-5 text-center">Chargement de '+ $(this).text() +'...</p>');
        content.load("/html/"+link+".html");

    });

});
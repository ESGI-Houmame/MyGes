function navbar(){
    let close = document.getElementById("header_nav_close");
    let toggle = document.getElementById("header_toggle");
    close.addEventListener("click", function () {
        document.querySelector(".header_nav").classList.remove("active");
    });

    toggle.addEventListener("click", function () {
        document.querySelector(".header_nav").classList.add("active");
    });
    // Changer page
    $(".header_nav_list_item_link").click(function(){
        $(".header_nav").removeClass("active");

        let link = $(this).attr("data-link");
        
        let content = $(document.body).find('.content-box');

        content.html('<p class = "text-light font-bold p-5 text-center">Chargement de '+ $(this).text() +'...</p>');
        $.ajax({
            url: "/html/" + link + ".html",
            type: "GET",
            crossDomain: true,
            success: function(data) {
                content.html(data);
                switch(link){
                    case 'contact':
                        Contact();
                        break;
                    case 'support-cours':
                        SupportCours();
                        break;
                    case 'index':
                        Accueil();
                        break;
                }
            }
        });
      
    });

    $('.header_nav_list_item_link[data-link="index"]').click();
}
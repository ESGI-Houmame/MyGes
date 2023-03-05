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
});


function Contact(){
    const getUserList = function(){
            let contactBox = $('.contact-box .scroll-content').html('');
            $.get('https://dummyjson.com/users',function(data){
                    data = JSON.parse(JSON.stringify(data));
                    let item = '';
                    for(let key in data.users){
                        val = data.users[key];
                        item += `
                                <div data-linkedin="https://linkedin.com/in/`+val.username+`" data-phone="`+val.phone.trim()+`" data-email="`+val.email+`" class="contact-item">
                                <div class="p-5">
                                    <div class="contact-img-box justify-content-center flex">
                                            <img src="`+val.image+`" class="contact-img">
                                    </div>

                                    <div class="contact-info">
                                        <p class="contact-info-title">`+val.lastName + ' ' + val.firstName +`</p>
                                        <p class="contact-info-desc"> `+val.company.title+`</p>
                                    </div>

                                </div>
                                <div class="contact-action-box">
                                    <button class="contact-msg-btn border-0 xs:hover:bg-primary-darken transition-bg-color">Message</button>
                                    
                                </div>
                        
                            </div>
                        `;
                        

                    }
                    contactBox.append(item);
                    $('.contact-msg-btn').click(function(){
                        let contactItem = $(this).parent().parent();
                        let contactHeader = $('._contact-detail-header');
                        let valueContact = {
                            image : contactItem.find('.contact-img-box img').attr('src'),
                            names : contactItem.find('.contact-info-title').text(),
                            title : contactItem.find('.contact-info-desc').text(),
                            phone : contactItem.attr('data-phone'),
                            linkedin : contactItem.attr('data-linkedin'),
                            email : contactItem.attr('data-email'),
                        }

                        contactHeader.find('._contact-detail-picture .contact-img').attr('src',valueContact.image);
                        contactHeader.find('._contact-detail-user .contact-info-title').text(valueContact.names);
                        contactHeader.find('._contact-detail-user .contact-info-desc').text(valueContact.title);
                        
                        contactHeader.find('._contact-detail-social .phone-link .link-content').text(valueContact.phone);
                        contactHeader.find('._contact-detail-social .phone-link').attr('href',valueContact.phone);

                        contactHeader.find('._contact-detail-social .linkedin-link').attr('href',valueContact.linkedin);
                        contactHeader.find('._contact-detail-social .linkedin-link .link-content').text('Linkedin');

                        contactHeader.find('._contact-detail-social .email-link').attr('href',valueContact.email);
                        contactHeader.find('._contact-detail-social .email-link .link-content').text(valueContact.email);


                    });

                    $('.contact-msg-btn').first().click();
            });
    }
    getUserList();
}

function SupportCours(){
    for(let i = 0; i <= 4; i++){
        
        $('.support-cours-item').first().clone().appendTo('.support-cours-list');

    }
    $('.support-cours-item').find('.support-item-arrow').click(function(){
            let supportItemSub = $(this).parent().parent().find('.support-item-sub');
            
            if(supportItemSub.css('display') == 'none'){
                supportItemSub.css('display','flex');
                supportItemSub.css('animation','fadeInDown 0.5s ease-in-out');
                $(this).css('animation','rotateIn 0.2s ease-in-out');
                $(this).css('transform', 'rotate(90deg)');
                
            }
            else{
                    supportItemSub.css('display','none');
                    supportItemSub.css('animation','none');
                    $(this).css('animation','rotateOut 0.2s ease-in-out');
                    $(this).css('transform', 'rotate(0deg)');    
            }

    });


}

function Accueil(){
    let caroussel = function(){
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
        
    }
    caroussel();
}


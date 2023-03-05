

$(document).ready(function(){

    navbar();
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
    accordeon();

}

function Accueil(){
    caroussel();
}


$(document).ready(function(){

    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
    });

   

    let path = window.location.pathname.split("/").pop();

    if(path ==""){
        path = "index.html"
    }

    let target = $('.links a[href="'+path+'"]').parent();
    console.log(target)

    target.addClass('active');

    


    
     $(window).on("load scroll", function(){

        let y = $(window).scrollTop();
        
        if(y > 1480 && y < 1483){
            $('.counter').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 7000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                        
                    }
                });
            });
        }

    });
    



//Year for footer

let year = new Date();
let currentYear = year.getFullYear();
document.querySelector("#year").textContent = currentYear;

});


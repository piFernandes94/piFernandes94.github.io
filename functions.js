$(document).ready(function(){
    $('#formacao-btn').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#formacao-section").offset().top
        }, 1000);
    })

    $('#experiencia-btn').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#experiencia-section").offset().top
        }, 1000);
    })
})
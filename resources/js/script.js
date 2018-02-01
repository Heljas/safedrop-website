$(".faq-question:first .fa-angle-right").toggleClass('rotate');
$(".faq-answer:first").slideToggle();

$(".faq-question").on("click", function(){
    $(this).find(".fa-angle-right").toggleClass('rotate');
    $(this).find("+ .faq-answer").slideToggle();
});
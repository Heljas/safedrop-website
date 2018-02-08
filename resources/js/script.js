$(".faq-question:first .fa-angle-right").addClass('rotate');
$(".faq-answer:first").slideDown();

$(".faq-question").on("click", function(){
    $(this).find(".fa-angle-right").toggleClass('rotate');
    $(this).find("+ .faq-answer").slideToggle();
});

let scrollDuration = 600;
$("a[href='#top']").on("click", function(){
    $(window).scrollTo($('header'), {offset: -35, duration: scrollDuration});
});
$("a[href='#features']").on("click", function(){
    $(window).scrollTo($('.features-section'), {offset: -35, duration: scrollDuration});
});
$("a[href='#screenshots']").on("click", function(){
    $(window).scrollTo($('.screens-section'), {offset: -35, duration: scrollDuration});
});
$("a[href='#video']").on("click", function(){
    $(window).scrollTo($('.video-section'), {offset: -35, duration: scrollDuration});
});
$("a[href='#faq']").on("click", function(){
    $(window).scrollTo($('.faq-section'), {offset: -35, duration: scrollDuration});
});
$("a[href='#download']").on("click", function(){
    $(window).scrollTo($('.download-section'), {offset: -35, duration: scrollDuration});
});



$('header').waypoint(function(){
    $("nav").removeClass('fadeOut');
});
$('.features-section').waypoint(function(direction){
    let nav = $("nav");
    if(direction === "down"){
        nav.removeClass('fadeOut');
        nav.addClass('sticky-nav');
    } else {
        nav.addClass("fadeOut");
    }
}, {
    offset: '7%'
});

$('.features-section').waypoint(function(direction){
    if(direction === "up"){
        $("nav").removeClass("fadeOut sticky-nav");
    }
}, {
    offset: '20%'
});

$(".see-more-features").on("click", function() {
    $(".more-features").slideToggle(650);

    if($(this).html() === "<i class=\"fas fa-plus icon-sm\"></i><span>Show more features</span>"){
        $(this).html("<i class=\"fas fa-minus icon-sm\"></i><span>Hide more features</span>");
    } else {
        $(this).html("<i class=\"fas fa-plus icon-sm\"></i><span>Show more features</span>");
    }

});
$(".mobile-nav-bar").on("click", function() {
    console.log($(this).html());
    if($(this).html() === "<i class=\"fas fa-bars\"></i>"){
        $(this).html("<i class=\"fas fa-angle-up\"></i>");
        $(".nav-list").slideDown();
    } else {
        $(this).html("<i class=\"fas fa-bars\"></i>");
        $(".nav-list").slideUp(scrollDuration, function(){
            $(".nav-list").css("display", "");

        });
    }

});


$(".nav-list li, .nav-logo").on("click", function(){

    if($(".mobile-nav-bar").is(":visible")){
        $(".mobile-nav-bar").html("<i class=\"fas fa-bars\"></i>");
        $(".nav-list").slideUp(scrollDuration, function(){
            $(".nav-list").css("display", "");
        });
    }
});
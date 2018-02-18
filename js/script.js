//Nav
$('.features-section').waypoint(function(direction){
    if(direction === "up"){
        $("nav").removeClass("fadeOut sticky-nav");

    } else if ($(".mobile-nav-bar").is(":visible")){
        $(".nav-list").hide();
        $(".nav-list").css("display", "");
        $(".mobile-nav-bar").html("<i class=\"fas fa-bars\"></i>");
    }
}, {
    offset: '20%'
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

function createScroll(href, element) {
    $("a[href='" + href + "']").on("click", function(){
        $(window).scrollTo($(element), {offset: -35, duration: 600});
    });
}

createScroll("#top", "header");
createScroll("#features", ".features-section");
createScroll("#screenshots", ".screens-section");
createScroll("#video", ".video-section");
createScroll("#faq", ".faq-section");
createScroll("#download", ".download-section");

//Mobile nav
$(".mobile-nav-bar").on("click", function() {
    console.log($(this).html());
    if($(this).html() === "<i class=\"fas fa-bars\"></i>"){
        $(this).html("<i class=\"fas fa-angle-up\"></i>");
        $(".nav-list").slideDown();
    } else {
        $(this).html("<i class=\"fas fa-bars\"></i>");
        $(".nav-list").slideUp(600, function(){
            $(".nav-list").css("display", "");

        });
    }

});

$(".nav-list li, .nav-logo").on("click", function(){
    let navBar = $(".mobile-nav-bar");
    let navList = $(".nav-list");
    if(navBar.is(":visible")){
        navBar.html("<i class=\"fas fa-bars\"></i>");
        navList.slideUp(600, function(){
            navList.css("display", "");
        });
    }
});

//Features and FAQ section
$(".see-more-features").on("click", function() {
    $(".more-features").slideToggle(650);

    if($(this).html() === "<i class=\"fas fa-plus icon-sm\"></i><span>Show more features</span>"){
        $(this).html("<i class=\"fas fa-minus icon-sm\"></i><span>Hide more features</span>");
    } else {
        $(this).html("<i class=\"fas fa-plus icon-sm\"></i><span>Show more features</span>");
    }

});

$(".faq-question:first .fa-angle-right").addClass('rotate');
$(".faq-answer:first").slideDown();

$(".faq-question").on("click", function(){
    $(this).find(".fa-angle-right").toggleClass('rotate');
    $(this).find("+ .faq-answer").slideToggle();
});
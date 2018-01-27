let slideNumber = 0;
let pauseInterval = false;

for(let i = 0; i < $(".slide").length; i++){
    $("<i class='fas fa-circle slide-inactive'></i>").appendTo(".slide-index");
}

changeSlide(0);
// setInterval(function(){
//     if(!pauseInterval){
//         changeSlide(1);
//     }
// }, 2500);


function changeSlide(direction) {
    let slides = $(".slide");
    let slidesIndex =  $(".slide-index i");

    slideNumber += direction;

    if(slideNumber === slides.length){
        slideNumber = 0;
    } else if (slideNumber === -1){
        slideNumber = slides.length - 1;
    }

    slides.hide();
    slidesIndex.removeClass('slide-active');

    slides.eq(slideNumber).fadeIn();
    slidesIndex.eq(slideNumber).addClass('slide-active');
}

$(".left").on("click", function() { changeSlide(-1); });

$(".right").on("click", function() { changeSlide(1); });

$(".gallery").hover(function(){
    pauseInterval = true;
}, function(){
    pauseInterval = false;
});

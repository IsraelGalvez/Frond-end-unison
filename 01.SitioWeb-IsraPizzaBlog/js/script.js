/* Banner */
$(".fade-slider").jdSlider({
    isSliding: false,
    isAuto: true,
    isLoop: true,
    isDrag: false,
    interval: 5000,
    isCursor: false,
    speed: 3000
});

var alturaBanner = $(".fade-slider").height();
$("alturaBanner").css({"height":alturaBanner+"px"})
// ANIMACIONES SCROLL

$(window).scroll(function(){
    var posY = window.pageYOffset;

    if(posY > alturaBanner){
        $("header").css({"background":"white"})
        $(".fa-search, .fa-bars").css({"color":"black"})
    }else{
        $("header").css({"background":"rgba(0,0,0,.5)"})
        $(".fa-search, .fa-bars").css({"color":"white"})
    }
})

// MENU

$(".fa-bars").click(function(){
    $(".menu").css({"display":"block"})
})

$(".btnClose").click(function(){
    $(".menu").css({"display":"none"})
})
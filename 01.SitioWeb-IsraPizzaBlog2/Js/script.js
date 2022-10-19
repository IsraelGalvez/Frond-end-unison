/* Banner */
$(".fade-slider").jdSlider({
    isSliding: false,
    isAuto: true,
    isLoop: true,
    isDrag: false,
    interval: 5000,
    isCursor: false,
    speed: 1000
});

var alturaBanner = $(".fade-slider").height();

console.log("alturaBanner", alturaBanner);

$(".bannerEstatico").css({ "height": alturaBanner + "px" })

// ANIMACIONES SCROLL

$(window).scroll(function(){
    var posY = window.pageYOffset;

    if(posY > alturaBanner){
        $("header").css({"background":"rgba(0,0,0,.7)"})
        $(".fa-search, .fa-bars").css({"color":"white"})
    }else{
        $("header").css({"background":"rgba(0,0,0,.5)"})
        $(".fa-search, .fa-bars").css({"color":"white"})
    }
})

/* Menu */
$(".fa-bars").click(function () {
    /*$(".menu").fadeIn("fast");*/
    $(".menu").css({ "display": "block" })
})
$(".btnClose").click(function () {
    /*$(".menu").fadeOut("fast");*/
    $(".menu").css({ "display": "none" })
})

/* Grid categorias */
$(".grid figure").mouseover(function(){
    $(this).css({"background-position":"right bottom"})
})
$(".grid figure").mouseout(function(){
    $(this).css({"background-position":"left top"})
})

/* Paginacion */
$(".pagination").twbsPagination({
    totalPages: 10,
    visiblePages: 4,
    first: "Primera",
    last: "Última",
    prev: '<i class="fa-solid fa-angles-left"></i>',
    next: '<i class="fa-solid fa-angles-right"></i>',
});

/* Scrollrama */
var controler = $.superscrollorama();
controler.addTween(".contenidoInicio .container", TweenMax.from(
    $(".contenidoInicio .container"), .5, {css:{opacity: 0}}
))

/*=================================================
SCROLLUP
=================================================*/
$.scrollUp({
	scrollText: "",
	scrollSpeed: 2000,
    animSpeed: 2000,
	easingType: "easeOutQuint"
})
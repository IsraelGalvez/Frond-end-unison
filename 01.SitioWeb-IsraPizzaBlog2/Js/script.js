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
$(".grid figure").click(function(){
    var vinculo = $(this).attr("vinculo");
    window.location = vinculo;
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

/*=================================================
PRELOAD
=================================================*/

$("body").css({"overflow-y":"hidden"});

var cargarImg = $("img");
console.log("cargarImg", cargarImg);

var cargarScript = $("script");
console.log("cargarScript", cargarScript);

var cargarCSS = $("link");
console.log("cargarCSS", cargarCSS);

var cargarVideos = $("video");
console.log("cargarVideos", cargarVideos);

var cargarAudios = $("audio");
console.log("cargarAudios", cargarAudios);
var totalObjetos = [];
var numItem = 0;
var valorPorcentaje = 0;
var incremento = 0;
var numCarga = 0;

totalObjetos.push(cargarImg, cargarScript, cargarCSS, cargarVideos, cargarAudios);

totalObjetos.forEach(funcionForEach);

function funcionForEach(item, index){

    for(var i = 0; i < item.length; i++){
        numItem++;

        valorPorcentaje = 100/numItem;
    }

    for(var i = 0; i < item.length; i++){
        preload(i, item);
    }

}
function preload(i, item){
    setTimeout(function(){
        $(item[i]).ready(function(){
            numCarga++;
    
            incremento = Math.floor(numCarga * valorPorcentaje);
            $("#porcentajeCarga").html(incremento+"%");
            $("#rellenoCarga").css({"width":incremento+"%"})
    
            if(incremento >= 100){
                $("#preload").delay(350).fadeOut("slow");
                $("body").delay(350).css({"overflow-y":"scroll"})
            }
        })
    },i*100)
}

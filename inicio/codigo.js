// Variables
// var texto = "Esto es un texto"
// var numero = 1
// var arreglo = ["uno","dos", "tres"]
// var objetos = {"propiedades1": "valor1", "propiedades2": "valor2"}
// var etiqueta1 = document.querySelector(".etiqueta1")
// var igual = document.querySelectorAll(".igual")

// console.log("igual", igual)
// Funciones
    // function cambiarColor(){
    //     if(igual[0].innerHTML == "Adios"){
    //         igual[0].style.background = "purple";
    //         igual[0].style.color = "black";

    //         igual[1].style.background = "green";
    //         igual[1].style.color = "black";
    //     }else{
    //         igual[0].style.background = "green";
    //         igual[0].style.color = "black";

    //         igual[1].style.background = "green";
    //         igual[1].style.color = "black";
    //     }
        
    // }
//Eventos

var igual = $(".igual");

// etiqueta1.addEventListener("click", cambiarColor)

$(".etiqueta1").click(function(){
    if($(igual[0]).html() == "Adios"){
        // for(var i = 0; i < igual.length; i ++){
            $(igual[0]).css({"background": "purple", "color": "black"})

            $(igual[1]).css({"background": "green", "color": "black"})
        // }
    }
})
// Condiciones
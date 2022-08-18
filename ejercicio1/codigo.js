// Variables
var etiqueta1 = document.querySelector(".etiqueta1")
var igual = document.querySelectorAll(".igual")

console.log("igual", igual)
// Funciones
    function cambiarColor(){
        if(igual[0].innerHTML == "a" || igual[0].innerHTML == "e"){
            igual[0].style.background = "green";
            igual[0].style.color = "black";

            igual[1].style.background = "green";
            igual[1].style.color = "black";

            igual[2].style.background = "green";
            igual[2].style.color = "black";

            igual[3].style.background = "green";
            igual[3].style.color = "black";

            igual[4].style.background = "green";
            igual[4].style.color = "black";
        }else{
            igual[0].style.background = "green";
            igual[0].style.color = "black";

            igual[1].style.background = "green";
            igual[1].style.color = "black";
        }
        
    }
//Eventos
etiqueta1.addEventListener("click", cambiarColor)


// Condiciones
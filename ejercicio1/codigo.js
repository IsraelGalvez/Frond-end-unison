var vocales = document.querySelectorAll(".vocales")
var consonantes = document.querySelectorAll(".consonantes")

function cambiarColorVocales(){
    for (i=0; i < 5; i++){
        vocales[i].style.background = "green";
    }
}

function cambiarColorConsonantes(){
    for (i=0; i < 21; i++){
        consonantes[i].style.background = "red";
    }
}

for (j=0; j < 5; j++){
    vocales[j].addEventListener("click", cambiarColorVocales)
}
for (k=0; k < 21; k++){
    consonantes[k].addEventListener("click", cambiarColorConsonantes)
}

//
// SENAI - PFS - T2
// Ronald Kelley da Silva
// HomePage da Loja Game Mania

// Utilização do jQuery para utilização do menu:

$(document).ready(function(){

    $("#barras").click(function() {

        $("#menugamemania").toggleClass("menu-ativo")

    })
})

// Utilização do menu sem o jQuery:

// function abrirmenu() {

//    let menugamemania = document.getElementById("menugamemania");

//    if(getComputedStyle(menugamemania).display != "flex") {

//        menugamemania.style.display = "flex";

//    } else {
        
//        menugamemania.style.display = "none";
//    }
// }

function janelalogin(URL) {
    window.open(URL, 'janela', 'width=300, height=400, top=200, left=200, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no')
}

function janelacadastro(URL) {
    window.open(URL, 'janela', 'width=360, height=550, top=200, left=200, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no')
}
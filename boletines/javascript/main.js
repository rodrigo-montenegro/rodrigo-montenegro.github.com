//DOM
//querySelector
/*
let links = document.querySelectorAll("a");

links.forEach(function(link) {
    console.log(link)
});
*/
/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {
    td.addEventListener('click', function() {
        console.log(this)
    })
});
*/
let links = document.querySelectorAll(".close");

links.forEach(function(link) {

    link.addEventListener("click", function(evento) {
        evento.preventDefault();
        let content = document.querySelector('.content');


        //Quitar las clases de animacion
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");

        //Agregar clases para animar su salida
        content.classList.add("fadeOutUp");
        content.classList.add("animated");


        setTimeout(function() {
            location.href = "/";
        }, 1000);


        return false;
    });

});
var imagenesPopUp = $('.imagen-pop-up');
var contenedorPopUp = $('#contenedor-pop-up');
var botonCerrarPopUp = $('#cerrar-pop-up');

imagenesPopUp.click(function(){
    var rutaImagen = $(this).find('.lazyFull').attr("data-full-img");
    var dataAncho = $(this).find('.lazyFull').attr("data-ancho");
    var esVideo = $(this).hasClass("imagen-video");
    var posterVideo = $(this).find('.lazyFull').attr("data-full-img");
    console.log(rutaImagen);
    abrirPopUp(rutaImagen, dataAncho, esVideo, posterVideo);
});

contenedorPopUp.click(function(){
    cerrarPopUp();
});

botonCerrarPopUp.click(function(){
    cerrarPopUp();
});

var abrirPopUp = function (rutaImagen, dataAncho, esVideo, posterVideo){
    $('#contenedor-pop-up video').css("display", "none");
    $('body').css("overflow", "hidden");
    $('#imagen-pop-up').attr("src", rutaImagen);
    if(esVideo){
        $('#video-pop-up').attr("src", rutaImagen);
        $('#video-pop-up').attr("poster", posterVideo);
        $('#contenedor-pop-up video').css("display", "block");
    }
    if (dataAncho==="true"){
        console.log("PUTO")
        $('#imagen-pop-up').addClass("img-ancha-centrar");
    }
    $('#contenedor-pop-up').removeClass("pop-up-close");
    $('#contenedor-pop-up').addClass("pop-up-open");
    $('#contenedor-pop-up').scrollTop(0);
};

var cerrarPopUp = function (){
    $('body').css("overflow", "auto");
    $('#contenedor-pop-up').removeClass("pop-up-open");
    $('#contenedor-pop-up').addClass("pop-up-close");
    setTimeout(function () {
        $('#imagen-pop-up').removeClass("img-ancha-centrar")
    }, 200);;
};

var toggleNavbar = function (){
    var body = document.getElementsByTagName("body")[0];
    if(body.classList.contains('menu-open')){
        body.classList.remove('menu-open');
        $('html').css("overflow-y", "auto")
    } else{
        body.classList.add('menu-open');
        $('html').css("overflow-y", "hidden")
    }
};

var botonNav = $('.hamburger-button').click(function() {
    toggleNavbar();
});

var pageCover = document.getElementById('page-cover');
pageCover.addEventListener("click", toggleNavbar);

var headerScroll = document.getElementById('header-scroll');
var position = $(window).scrollTop(); 

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
        // console.log('scrollDown');
        var scrollPosition =  $(window).scrollTop();
        if (scrollPosition > 150){
            headerScroll.classList.remove('header-scrolled-up');
            headerScroll.classList.add('header-scrolled-down');
        }
    } else {
        //  console.log('scrollUp');
         headerScroll.classList.remove('header-scrolled-down');
         headerScroll.classList.add('header-scrolled-up');
    }
    position = scroll;
});

var paginaActual = $('.contenido-pagina').attr("pagina-actual");
switch (paginaActual) {
    case "works":
        $('#link-woks').addClass("link-activo");
        break;
    case "projects":
        $('#link-projects').addClass("link-activo");
        break;
    case "home": 
        $('#link-home').addClass("link-activo");
        break;
    case "about": 
        $('#link-about').addClass("link-activo");
        break;
    default:
  }
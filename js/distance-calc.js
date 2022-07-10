var distance = null;
var distanceMax = null;
var porcentaje = null;

function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
}

var calcDistMax = function(){
    $element  = $('#button-home');
    distanceMax = calculateDistance($element, 0, 0);
    // console.log("La distancia maxima es " + distanceMax);
}

var calcDistOnMov = function() {  
    var mX, mY,
        $element  = $('#button-home');
    $(document).mousemove(function(e) {  
        mX = e.pageX;
        mY = e.pageY;
        distance = calculateDistance($element, mX, mY);
        porcentajeDistancia();
    });
};

var porcentajeDistancia = function () {
    var calc1 = (distance * 100) / distanceMax;
    porcentajeRawCent = (100 - calc1).toFixed(2);
    porcentajeRawDec = porcentajeRawCent/100;
    porcentajeDec = Math.pow(porcentajeRawDec, 5);
    porcentaje=(porcentajeDec*100).toFixed(2);
    // console.log(porcentaje);
}

if(window.innerWidth > 992){
    // console.log('Mayor');
    calcDistMax();
    calcDistOnMov();
}else{
    // console.log('Menor');
    porcentaje = 15;
}

// $( window ).resize(function() {
//     console.log('resize distance');
//     if(window.innerWidth > 992){
//         console.log('Mayor');
//         calcDistMax();
//         calcDistOnMov();
//     }else{
//         console.log('Menor');
//         porcentaje = 15;
//     }
// });
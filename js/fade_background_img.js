
if(document.getElementsByClassName('imagen-bg') !== undefined){
    var imgElement = document.getElementsByClassName('imagen-bg');
    var bgCoverElement = document.getElementsByClassName('img-bg-cover');
    var imgElementUnique = imgElement[0];

    window.onscroll = function(){
        var alturaElement = imgElementUnique.offsetHeight;
        var valor;
        var valorOpacidad;
        var rect = imgElementUnique.getBoundingClientRect();
        var alturaDif = rect.top;
        var nuevaAlturaTop = alturaDif - 200;
    
        if(nuevaAlturaTop <= 0){
            valor = alturaElement + nuevaAlturaTop;
    
            if(valor > 0){
                valorOpacidad = ( valor * 100 ) / alturaElement;
                valorOpacidad = (valorOpacidad / 100).toFixed(2);
                bgCoverElement[0].style.opacity = 1 - valorOpacidad;
            }
    
        }
    }
}



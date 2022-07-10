var lazyImagesArr = document.getElementsByClassName("lazyThumb")

window.onscroll = function (ev){
    lazyImage();   
}

var lazyImage = function(){
    for (var i=0; i<lazyImagesArr.length; i++){
        if(lazyElementInViewPort(lazyImagesArr[i])){
            var src = lazyImagesArr[i].getAttribute('data-src')
            lazyImagesArr[i].src=src
            lazyImagesArr[i].className = "lazyFull"
        }
    }
}

function lazyElementInViewPort(el){
    var rect = el.getBoundingClientRect();
    return(
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
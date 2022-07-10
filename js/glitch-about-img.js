var glitchTimed = function () {
    var imgToHover = null;
    var srcRestore = null;
    var cleanIntervalId = null;
    var $hoverimg = $(".profile-img");
    srcRestore = $hoverimg.find(".img-glitch").attr("src");
    imgToHover = $hoverimg.find(".img-glitch");
    cleanIntervalId = glitchImg(imgToHover);
  
    setTimeout(function(){
      imgToHover.attr("src", srcRestore);
      window.clearInterval(cleanIntervalId);
    },500); //tiempo durante el cual se ejecuta el glitch "medio segundo"
    
  };
  
  var timer =  setInterval(glitchTimed, 4000); //tiempo que pasa hasta que se vuelve a ejecutar el glitch "4 segundos" 

  var glitchTimedb = function () {
    var imgToHover = null;
    var srcRestore = null;
    var cleanIntervalId = null;
    var $hoverimg = $(".trabajo-img");
    srcRestore = $hoverimg.find(".img-glitch").attr("src");
    imgToHover = $hoverimg.find(".img-glitch");
    cleanIntervalId = glitchImg(imgToHover);
  
    setTimeout(function(){
      imgToHover.attr("src", srcRestore);
      window.clearInterval(cleanIntervalId);
    },500); //tiempo durante el cual se ejecuta el glitch "medio segundo"
    
  };
  
  var timerb =  setInterval(glitchTimedb, 4000); //tiempo que pasa hasta que se vuelve a ejecutar el glitch "4 segundos" 
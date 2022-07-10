var glitchImg = function(imageToHover) {
    var $img = imageToHover;
    var data = $img.attr("src");
    var maxErrors = 100;
    var margin = 2200;

    function update() {
      var corrupted = data;
      if (Math.random() > 0.7) {
          var errors = Math.round(Math.random() * maxErrors)
          for (var i = 0; i < errors; i++) {
             var p = margin + Math.round(Math.random() * (corrupted.length - margin - 1));
             corrupted = corrupted.substr(0, p) + corrupted.charAt(p + 1) + corrupted.charAt(p) + corrupted.substr(p + 2);
           }
      }
      $img.attr("src", corrupted);

    }
    update();
    return setInterval(update, 26);
};

var glitchHover = function (){
    var $hoverimg = $(".proyecto-individual");
    var imgToHover = null;
    var srcRestore = null;
    var cleanIntervalId = null;
    $hoverimg.hover(
        function() {
            srcRestore = $(this).find(".img-glitch").attr("src");
            imgToHover = $(this).find(".img-glitch");
            cleanIntervalId = glitchImg(imgToHover);
          }, function() {
            imgToHover.attr("src", srcRestore);
            window.clearInterval(cleanIntervalId);
          }
    )};

glitchHover();
$(document).ready(function(){

    $(".codex-appear").codex({
        effect: "charbychar",
        keep_whitespaces: false, // sodomize also whitespaces
        speed: 50, // speed in which random chars will appear in letters not yet revelaed
        reveal: 100, // number of miliseconds that will take for a single char reveal
    });
    
    $(".codex-hover").hover(
        function() {
            $(".codex-hover").codex({
                effect: "charbychar",
                keep_whitespaces: false, // sodomize also whitespaces
                speed: 50, // speed in which random chars will appear in letters not yet revelaed
                reveal: 100 // number of miliseconds that will take for a single char reveal
            });
            $(".codex-hover").css("pointer-events", "none");
        }, function() {
            setTimeout(function(){  $(".codex-hover").css("pointer-events", "auto"); }, 4000);
        }
    );

    var intervalID = window.setInterval(codexInterval, 8000);
    
    

    function codexInterval() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        if ( document.hasFocus() ) {
            // console.log("ME EJECUTO " + dateTime);
            $(".codex-interval").codex({
                effect: "charbychar",
                keep_whitespaces: true, // sodomize also whitespaces
                speed: 20, // speed in which random chars will appear in letters not yet revelaed
                reveal: 100, // number of miliseconds that will take for a single char reveal
            });
        } else {
            // console.log("NO ME EJECUTO " + dateTime);
        }   
    }

});


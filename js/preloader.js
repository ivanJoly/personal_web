//  var progress = 0;

//  document.onreadystatechange = function ()
//  {
//      if(document.readyState == "interactive") {
        
//         var allElement = document.getElementsByTagName("*");
//         console.log(allElement);
//         var length = allElement.length;
//          console.log(length);       
//         for(var i=0; i<length;i++){
//             set_element(allElement[i], length);
//         }
//      }
//  }

//  function set_element (element, totalElement)
//  {
//      var percentage = 80 / totalElement;
//      if ($(element).length == 1) {
//         var nProgr = Number(progress.toFixed(2));
//         var nPerc = Number(percentage.toFixed(2));
//         var nFinal = nProgr+nPerc
//         var nFinalWidth = nFinal+'%';
//         console.log(nFinal+"%");
//         $("#fill-preload").animate({ width: nFinal+"%" })

//         progress = progress + percentage;
//      }
//  }

 document.onreadystatechange = function(e)
 {
   if(document.readyState=="interactive")
   {
     var all = document.getElementsByTagName("*");
     for (var i=0, max=all.length; i < max; i++) 
     {
       set_ele(all[i]);
     }
   }
 }

 function check_element(ele)
 {
   var all = document.getElementsByTagName("*");
   var totalele=all.length;
   var per_inc=80/all.length;

   if($(ele).on())
   {
     var prog_width=per_inc+Number(document.getElementById("progress_width").value);
     document.getElementById("progress_width").value=prog_width;
     $("#fill-preload").animate({width:prog_width+"%"},10,function(){
       if(document.getElementById("fill-preload").style.width=="100%")
       {

       }			
     });
   }

   else	
   {
     set_ele(ele);
   }
 }

 function set_ele(set_element)
 {
   check_element(set_element);
 }

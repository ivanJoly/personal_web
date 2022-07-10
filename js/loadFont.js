window.onload = function()
{
	WebFont.load(
	{
		// this event is triggered when the fonts have been rendered, see https://github.com/typekit/webfontloader
		active : function()
		{
            // console.log('Cargo fuente!');
            // console.log('Ejecuta pixijs!');

            // $('#loader-wrapper').fadeOut(); // will first fade out the loading animation
           
            $("#fill-preload").animate({ width:"100%"}, 400);  
           var animationFade = setTimeout(function(){  $('#preload-home').css({'transform': 'translateY(100%)', 'opacity': '0'}); }, 1200);
            
            // $('#demo-content').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 

            // console.log('Ejecuto el fadeOut!');

            container.addChild(noiseLines);
            container.addChild(noiseTv);
            container.addChild(noiseColorBG);
            container.addChild(text);
		},

		// multiple fonts can be passed here
		custom: {
            families: ['MontserratEB'],
            urls: ['/fonts.css']
        }
	});
};
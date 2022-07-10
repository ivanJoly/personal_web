window.onload = function()
{
	WebFont.load(
	{
		// this event is triggered when the fonts have been rendered, see https://github.com/typekit/webfontloader
		active : function()
		{
            var canvas = document.getElementById('myCanvas');
            window.addEventListener('resize', resize);

            var _w = window.innerWidth;
            var _h = window.innerHeight;

            var containerWidth = _w;
            var containerHeight = _h;
            var containerRatio = containerWidth / containerHeight;

            var textWidthContainer;
            var fSize;
            var yPosText;

            var app = new PIXI.Application({
                view: canvas,
                width: _w,
                height: _h,
                backgroundColor: 000000,
                resolution: window.devicePixelRatio,
                autoDensity: true
            });

            var container = new PIXI.Container();
            app.stage.addChild(container);

            /*NOISECOLOR*/

            var noiseColor = PIXI.Texture.from('assets/img/noiseColor2.jpg');
            var noiseColorBG = new PIXI.Sprite(noiseColor);

            var imageRatio = noiseColorBG.width / noiseColorBG.height;

            if(containerRatio > imageRatio) {
                noiseColorBG.height = noiseColorBG.height / (noiseColorBG.width / containerWidth);
                noiseColorBG.width = containerWidth;
                noiseColorBG.position.x = 0;
                noiseColorBG.position.y = (containerHeight - noiseColorBG.height) / 2;
            }else{
                noiseColorBG.width = noiseColorBG.width / (noiseColorBG.height / containerHeight);
                noiseColorBG.height = containerHeight;
                noiseColorBG.position.y = 0;
                noiseColorBG.position.x = (containerWidth - noiseColorBG.width) / 2;
            }

            noiseColorBG.alpha = 0.15;

            noiseColorBG.filters = [
                new PIXI.filters.GlitchFilter({
                    seed: 1,
                    slices: 15,
                    offset: -120,
                    fillMode: 2,
                    red: [-2,-2],
                    blue: [2,2],
                    green: [4,4]
                })
            ];

            /*NOISE*/

            var noise = PIXI.Texture.from('assets/img/noiseTv.jpg');
            var noiseTv = new PIXI.Sprite(noise);
            noiseTv.x = app.screen.width / 2;
            noiseTv.y = app.screen.height / 2;
            noiseTv.alpha = 1;

            noiseTv.anchor.x = 0.5;
            noiseTv.anchor.y = 0.5;

            noiseTv.filters = [
                new PIXI.filters.CRTFilter({
                    curvature: 4,
                    lineWidth: 3,
                    lineContrast: 0.5,
                    verticalLine: false,
                    noise: 0.3,
                    noiseSize: 1.1,
                    vignetting: 0.15,
                    vignettingAlpha: 0.7,
                    vignettingBlur: 0.5
                }),
                new PIXI.filters.GlitchFilter({
                    seed: 1,
                    slices: 15,
                    offset: -120,
                    fillMode: 2,
                    red: [-2,-2],
                    blue: [2,2],
                    green: [4,4]
                })
            ];


            /*NOISE LINES*/

            var noiseL = PIXI.Texture.from('assets/img/noiseLines.jpg');
            var noiseLines = new PIXI.Sprite(noiseL);

            noiseLines.alpha = 0.5;

            var imageRatioLines = noiseLines.width / noiseLines.height;

            if(containerRatio > imageRatioLines) {
                noiseLines.height = noiseLines.height / (noiseLines.width / containerWidth);
                noiseLines.width = containerWidth;
                noiseLines.position.x = 0;
                noiseLines.position.y = (containerHeight - noiseLines.height) / 2;
            }else{
                noiseLines.width = noiseLines.width / (noiseLines.height / containerHeight);
                noiseLines.height = containerHeight;
                noiseLines.position.y = 0;
                noiseLines.position.x = (containerWidth - noiseLines.width) / 2;
            }

            noiseLines.filters = [
                new PIXI.filters.CRTFilter({
                    curvature: 4,
                    lineWidth: 3,
                    lineContrast: 0.2,
                    verticalLine: false,
                    noise: 0.5,
                    noiseSize: 1.1,
                    vignetting: 0.15,
                    vignettingAlpha: 0.2,
                    vignettingBlur: 0.5
                }),
                new PIXI.filters.ReflectionFilter ({
                    mirror: true,
                    boundary: 0.5,
                    amplitude: [0,0],
                    waveLength: [10,10],
                    alpha: [1,1]
                }),
                new PIXI.filters.GlitchFilter({
                    seed: 1,
                    direction: 90,
                    slices: 2,
                    offset: -300,
                    fillMode: 2,
                    red: [-2,-2],
                    blue: [2,2],
                    green: [4,4]
                })
            ];

            /*TEXT*/

            if (app.screen.width > 1200){
                textWidthContainer = _w * 0.7
            }else{
                textWidthContainer = _w * 0.9
            }

            if(app.screen.width > 768){
                fSize = 65;
            }else{
                fSize =  50;
            }

            if(app.screen.width > 576){
                yPosText = app.screen.height / 2
            }else{
                yPosText = app.screen.height / 2.5
            }

            var style = {
                fill: "#fdfdfd",
                fontFamily: "MontserratEB",
                padding: 80,
                fontSize: fSize, 
                align : 'left',
                miterLimit: 5,
                wordWrap: true,
                wordWrapWidth : textWidthContainer
            };

            var text = new PIXI.Text('WELCOME TO MY PERSONAL PORTFOLIO.', style);

            text.filters = [
                new PIXI.filters.GlitchFilter({
                    seed: 1,
                    slices: 2,
                    offset: 0,
                    fillMode: 1,
                    red: [0,0],
                    blue: [0,0],
                    green: [0,0]
                })
            ]

            text.x = app.screen.width / 2;
            text.y = yPosText;

            text.anchor.x = 0.5;
            text.anchor.y = 0.5;

            console.log(text.filters);

            /*ADD TO CONTAINER*/

            container.addChild(noiseLines);
            container.addChild(noiseTv);
            container.addChild(noiseColorBG);

            container.addChild(text);

            /*ANIMATION*/

            app.ticker.add(animate);

            function animate (){

                var textSeedMIN = 1;
                var textSeedMAX = 1;
                var textOffsetMIN = 0;
                var textOffsetMAX = 20;
                var textDirectionMIN = -10;
                var textDirectionMAX = 10;

                var noiseTvAlphaMIN = 0.2;
                var noiseTvAlphaMAX = 0.4;

                var glitchSeedMIN = 1;
                var glitchSeedMAX = 2;
                var glitchSlicesMIN = 14;
                var glitchSlicesMAX = 20;
                var glitchOffsetMIN= 120;
                var glitchOffsetMAX=  200;

                var ctrNoiseMIN = 0.1;
                var ctrNoiseMAX = 0.2;
                var ctrNoiseSizeMIN = 1;
                var ctrNoiseSizeMAX = 1.3;
                var ctrVignettingMIN = 0.1;
                var ctrVignettingMAX = 0.15;
                var ctrVignettingAlphaMIN = 0.5;
                var ctrVignettingAlphaMAX = 0.6;

                /*TEXT GLITCH*/
                text.filters[0].offset = minmax(textOffsetMIN, textOffsetMAX, porcentaje);
                text.filters[0].slices = minmax(10, 20, porcentaje, true);

                text.filters[0].blue = [minmax(0, roundMinMax(-15, 15), porcentaje), minmax(0, roundMinMax(-15, 15), porcentaje)];
                text.filters[0].red = [minmax(0, roundMinMax(-15, 15), porcentaje), minmax(0, roundMinMax(-15, 15), porcentaje)];
                text.filters[0].green = [minmax(0, roundMinMax(-15, 15), porcentaje), minmax(0, roundMinMax(-15, 15), porcentaje)];

                /*CTR BACKGROUND*/
                noiseTv.filters[0].noise = minmax(ctrNoiseMIN, ctrNoiseMAX, porcentaje);
                noiseTv.filters[0].noiseSize = minmax(ctrNoiseSizeMIN, ctrNoiseSizeMAX, porcentaje);
                // noiseTv.filters[0].vignetting = minmax(ctrVignettingMIN, ctrVignettingMAX, porcentaje);
                // noiseTv.filters[0].vignettingAlpha = minmax(ctrVignettingAlphaMIN, ctrVignettingAlphaMAX, porcentaje);

                /*NOISETV  GLITCH BACKGROUND*/
                noiseTv.filters[1].seed = minmax(glitchSeedMIN, glitchSeedMAX, porcentaje);
                noiseTv.filters[1].slices = minmax(glitchSlicesMIN, glitchSlicesMAX, porcentaje, true);
                noiseTv.filters[1].offset = minmax(glitchOffsetMIN, glitchOffsetMAX, porcentaje);


                noiseTv.alpha = minmax(noiseTvAlphaMIN, noiseTvAlphaMAX, porcentaje);
                noiseLines.alpha = minmax(0.4, 0.8, porcentaje);

                noiseTv.filters[1].refresh();
                noiseLines.filters[2].refresh();
                noiseColorBG.filters[0].refresh();
                text.filters[0].refresh();

            }

            /*FUNCTIONS*/

            function resize() {
                _w = window.innerWidth;
                _h = window.innerHeight;

                containerWidth = _w;
                containerHeight = _h;
                containerRatio = containerWidth / containerHeight;
                
                console.log('resize')

                app.renderer.resize(_w, _h);
                textAjust(text);
                noiseAjust(noiseTv);
                resizeNoiseLines();
                resizeNoiseBG();
            }

            function resizeNoiseLines(){
                imageRatioLines = noiseLines.width / noiseLines.height;
            
                if(containerRatio > imageRatioLines) {
                    noiseLines.height = noiseLines.height / (noiseLines.width / containerWidth);
                    noiseLines.width = containerWidth;
                    noiseLines.position.x = 0;
                    noiseLines.position.y = (containerHeight - noiseLines.height) / 2;
                }else{
                    noiseLines.width = noiseLines.width / (noiseLines.height / containerHeight);
                    noiseLines.height = containerHeight;
                    noiseLines.position.y = 0;
                    noiseLines.position.x = (containerWidth - noiseLines.width) / 2;
                }
            }
            
            function resizeNoiseBG(){
                imageRatio = noiseColorBG.width / noiseColorBG.height;
            
                if(containerRatio > imageRatio) {
                    noiseColorBG.height = noiseColorBG.height / (noiseColorBG.width / containerWidth);
                    noiseColorBG.width = containerWidth;
                    noiseColorBG.position.x = 0;
                    noiseColorBG.position.y = (containerHeight - noiseColorBG.height) / 2;
                }else{
                    noiseColorBG.width = noiseColorBG.width / (noiseColorBG.height / containerHeight);
                    noiseColorBG.height = containerHeight;
                    noiseColorBG.position.y = 0;
                    noiseColorBG.position.x = (containerWidth - noiseColorBG.width) / 2;
                }
            }

            function start(container){
                console.log(container)
                container.addChild(text);
            }

            function textAjust(text){
                if(app.screen.width > 576){
                    yPosText = app.screen.height / 2
                }else{
                    yPosText = app.screen.height / 2.5
                }

                text.x = app.screen.width / 2;
                text.y = yPosText;
                
                text.anchor.x = 0.5;
                text.anchor.y = 0.5;

                if (app.screen.width > 1200){
                    console.log(app.screen.width);
                    textWidthContainer = _w * 0.7
                }else{
                    console.log(app.screen.width);
                    textWidthContainer = _w * 0.9
                }

                text.style.wordWrapWidth = textWidthContainer;
            }

            function noiseAjust(){
                noiseTv.x = app.screen.width / 2;
                noiseTv.y = app.screen.height / 2;

                noiseTv.anchor.x = 0.5;
                noiseTv.anchor.y = 0.5;
            }

            function minmax(min, max, porcentaje, bolean = false, menor = false){
                var valor = ((porcentaje*(max-min))/100) + min;

                if (bolean){
                    valor = Math.round(valor);
                }

                if(menor && porcentaje < 20){
                    valor = 0;
                }

                return valor
            }

            function roundMinMax(min, max){
                return Math.floor(Math.random() * (max-min) + min)
            }
		},

		// multiple fonts can be passed here
		custom: {
            families: ['MontserratEB'],
            urls: ['/fonts.css']
        }
	});
};
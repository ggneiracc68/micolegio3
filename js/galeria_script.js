// JavaScript Document
        jQuery(document).ready(function ($) {
            
            var jssor_1_SlideshowTransitions = [
              {$Duration:1000,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Easing:$Jease$.$OutQuad},
              {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1000,x:-1,y:2,$Rows:2,$Zoom:11,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Row:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.85}},
              {$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1000,x:4,y:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1500,x:0.3,y:-0.3,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}},
              {$Duration:1000,x:-3,y:1,$Rows:2,$Zoom:11,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Row:28},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,y:-1,$Cols:8,$Rows:4,$Clip:15,$During:{$Top:[0.5,0.5],$Clip:[0,0.5]},$Formation:$JssorSlideshowFormations$.$FormationStraight,$ChessMode:{$Column:12},$ScaleClip:0.5},
              {$Duration:1000,x:0.5,y:0.5,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1200,x:-0.6,y:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1500,y:-0.5,$Delay:60,$Cols:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationCircle,$Easing:$Jease$.$InWave,$Round:{$Top:1.5}},
              {$Duration:1000,$Delay:30,$Cols:8,$Rows:4,$Clip:15,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:$Jease$.$InQuad},
              {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
            ];
            
            var jssor_1_SlideoTransitions = [
              [{b:-1.0,d:1.0,o:-1.0,tZ:-200.0},{b:7500.0,d:1000.0,o:1.0,tZ:200.0},{b:8500.0,d:1000.0,o:-1.0,tZ:200.0}],
              [{b:-1.0,d:1.0,o:-1.0,tZ:-200.0},{b:6500.0,d:1000.0,o:1.0,tZ:200.0},{b:7500.0,d:1000.0,o:-1.0,tZ:200.0}],
              [{b:-1.0,d:1.0,o:-1.0,tZ:-200.0},{b:5500.0,d:1000.0,o:1.0,tZ:200.0},{b:6500.0,d:1000.0,o:-1.0,tZ:200.0}],
              [{b:-1.0,d:1.0,o:-1.0,tZ:-200.0},{b:4500.0,d:1000.0,o:1.0,tZ:200.0},{b:5500.0,d:1000.0,o:-1.0,tZ:200.0}],
              [{b:-1.0,d:1.0,o:-1.0,tZ:-200.0},{b:3500.0,d:1000.0,o:1.0,tZ:200.0},{b:4500.0,d:1000.0,o:-1.0,tZ:200.0}],
              [{b:-1.0,d:1.0,o:-1.0,tZ:-200.0},{b:2500.0,d:1000.0,o:1.0,tZ:200.0},{b:3500.0,d:1000.0,o:-1.0,tZ:200.0}],
              [{b:-1.0,d:1.0,o:-1.0,sX:-0.6,sY:-0.6},{b:2000.0,d:500.0,o:1.0,r:360.0,sX:0.6,sY:0.6},{b:8500.0,d:1000.0,y:-150.0}],
              [{b:-1.0,d:1.0,y:-250.0},{b:1500.0,d:500.0,y:250.0},{b:8500.0,d:1000.0,x:600.0}],
              [{b:-1.0,d:1.0,rY:90.0},{b:8500.0,d:1000.0,o:-1.0,rY:-90.0}],
              [{b:-1.0,d:1.0,x:300.0,o:-1.0,c:{}},{b:0.0,d:480.0,x:-300.0,o:1.0},{b:1000.0,d:500.0,x:-370.0,c:{x:0.0,t:0.0}}],
              [{b:-1.0,d:1.0,x:-100.0,y:320.0},{b:480.0,d:520.0,x:100.0,y:-320.0}],
              [{b:-1.0,d:1.0,x:400.0},{b:4500.0,d:500.0,x:-400.0},{b:5000.0,d:1000.0,x:400.0}],
              [{b:-1.0,d:1.0,x:400.0},{b:4000.0,d:500.0,x:-400.0},{b:5000.0,d:1000.0,x:400.0}],
              [{b:-1.0,d:1.0,x:400.0},{b:3520.0,d:480.0,x:-400.0},{b:5000.0,d:1000.0,x:400.0}],
              [{b:-1.0,d:1.0,y:-50.0},{b:3000.0,d:520.0,y:50.0},{b:5000.0,d:1000.0,y:-50.0}],
              [{b:-1.0,d:1.0,o:-1.0},{b:1000.0,d:1000.0,o:1.0},{b:5000.0,d:1000.0,y:280.0}],
              [{b:-1.0,d:1.0,y:-190.0},{b:2000.0,d:1000.0,y:190.0},{b:5000.0,d:1000.0,x:280.0}],
              [{b:-1.0,d:1.0,c:{x:250.0,t:-250.0}},{b:0.0,d:1000.0,c:{x:-250.0,t:250.0}},{b:5000.0,d:1000.0,y:100.0}]
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions,
                $Breaks: [
                  [{d:2000,b:8500}],
                  [{d:2000,b:5000}]
                ]
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 980);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
        });
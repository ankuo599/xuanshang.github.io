(function($,doc,$$)
{
    $.init();
    $.ready(function(){
            (function(){
                var againKnow=document.getElementByClassName("againKnow")[0];
                var num=2;
                againKnow.addEventListener("tap",function(){
                $$(".guideBox".hide)();
                    $$("guideBox"+num).show();
                    num++;
                    if(num>=4&&num<=6){
                        $('#offCanvasContentScroll').scroll().scrollTo(0,-160,500)};
                        $$(".headerMask,.footerMsk").show();
                }
                else{
                    $$(".footerMask").hide();
                }
                if(num>=8){
                    $$(".againKnow").css({backgroundImage:"url(images/b008.png)"});
                }
                if(num>=8){}
                )
            }
            )
        }
    )
})

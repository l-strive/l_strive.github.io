/*
**author:Beginner
**create:20190606
**email:BeginnerMind@163.com
*/
var vRem;
(function(win) {
    var def_w=720,def_px=100,doc = win.document,docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc=function(){
        var width = docEl.getBoundingClientRect().width;
        width=width>720?720:width;
        vRem=Math.floor(width/def_w*def_px);
        document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + vRem +"px";
    }
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(window);

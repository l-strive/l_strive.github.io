/*
**author:Beginner
**create:20180901
**revamp:20200419
**email:BeginnerMind@163.com
*/
var vRem;
(function(win) {
    var def_w=375,def_px=10,max_w=1024,doc = win.document,docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc=function(){
        var width = docEl.getBoundingClientRect().width;
        width=width>max_w?max_w:width;
        vRem=Math.floor(width/def_w*def_px);
        document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + vRem +"px";
    }
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(window);

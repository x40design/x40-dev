!function(){function navigation(){function pageAnim(){return pageCursor=pageCursor==pageAns.length-1?0:pageCursor+1,pageAns[pageCursor]}function imgAnim(){return imgCursor=imgCursor==imgAns.length-1?0:imgCursor+1,imgAns[imgCursor]}function bgImage(t){var e=$($(t).attr("data-bg")),a="undefined"!=typeof lastBackgrounds[t]&&lastBackgrounds[t]<e.length-1?lastBackgrounds[t]+1:0,i=$(".static-img");return i.length>0&&i[0].src===e[a].src&&(a=a<e.length-1?a+1:0),lastBackgrounds[t]=a,$(e[a])}function bgVideoUrl($img,func){var bandwReservRatio=1.3,dvStr=$img.attr("data-video");if(dvStr){var dv=eval("("+dvStr+")");bytesPS.get(function(t){for(var e=null,a=null,i=0;i<dv.urls.length;i++){(null===e||dv.urls[i].bytes<e.bytes)&&(e=dv.urls[i]);var n=bandwReservRatio*dv.urls[i].bytes/t;n<dv.sec&&(null===a||dv.urls[i].bytes>a.bytes)&&(a=dv.urls[i])}func(null===a?e.url:a.url)})}else func($img.attr("src").replace(/.jpg$/,".mp4"))}function nav(t){function e(){var t=pageAnim();$hash.css(t[0]),takeLayer($hash,"anim-page"),$hash.transition(t[1],duration,function(){takeLayer($hash,"static-page"),"none"!==$("nav").css("background-image")&&($("nav").css({"background-image":"none"}),$("#side-nav").css({"background-color":"#333"}),$("#side-nav").transition({"background-color":"rgba( 0, 0, 196, .8)"},1e3))})}if(t=t&&"#"!=t?t.replace("#!","#"):"#index",$hash=$(t),!($hash.length<1)){var a=bgImage(t);if($(".static-img").length>0&&$("nav").css({"background-image":"url(/images/fuzz.gif)"}),"visible"==a.css("visibility"))e();else{var i=imgAnim(),n=i[0];adjustImageCss(a,n,function(){a.css(n);var t=i[1];adjustImageCss(a,t,function(){takeLayer(a,"anim-img"),a.transition(t,duration,function(){adjustImageCss(a,t,function(){a.css(t)}),Modernizr.touch||(null===BV&&(BV=new $.BigVideo,BV.init()),bgVideoUrl(a,function(t){BV.show(t,{ambient:!0}),BV.getPlayer().on("playing",function(){$(".static-img").css({visibility:"hidden"})})})),cleanLayer("static-page"),takeLayer(a,"static-img"),e()})})})}}}function cleanLayer(t){$("."+t).each(function(){var e=$(this);e.css({visibility:"hidden"}),e.removeClass(t)})}function toLayer(t,e){t.css({visibility:"visible"}),t.removeClass("static-page static-img anim-page anim-img"),t.addClass(e)}function takeLayer(t,e){cleanLayer(e),toLayer(t,e)}function adjustImageCss(t,e,a){var i=new Image;i.onload=function(){var t,n,s=$(window).width(),o=$(window).height(),r=i.width,c=i.height,l=s/o,f=r/c;l>f?(t=s,n=t/f):(n=o,t=f*n),e.width=Math.round(t),e.height=Math.round(n),e["margin-top"]=0===parseInt(e.top)?Math.round((o-n)/2)+"px":"-100%"==e.top?Math.round(o-n)+"px":0,e["margin-left"]=0===parseInt(e.left)?Math.round((s-t)/2)+"px":"-100%"==e.left?Math.round(s-t)+"px":0,a(e)},i.src=t.attr("src")}var duration=1e3,topDelta="90px",leftDelta="25px",zOff=900,zStaticImg=500,zStaticPage=600,zAnimImg=700,zAnimPage=800,isOff=!1,isPreOff=!1,pageAns=[[{left:"-100%",top:topDelta},{left:leftDelta,top:topDelta}],[{left:leftDelta,top:"-100%"},{left:leftDelta,top:topDelta}],[{left:"100%",top:topDelta},{left:leftDelta,top:topDelta}],[{left:leftDelta,top:"100%"},{left:leftDelta,top:topDelta}]],imgAns=[[{left:0,top:"-100%"},{left:0,top:0}],[{left:"100%",top:0},{left:0,top:0}],[{left:0,top:"100%"},{left:0,top:0}],[{left:"-100%",top:0},{left:0,top:0}]],pageCursor=0,imgCursor=0,lastBackgrounds={},BV=null,clickHash=null,BytesPerSec=function(){var t=this;this.q=[];var e=$.cookie("bytesPerSec");this.bytesPerSec=e?e:null,null===this.bytesPerSec&&$(window).load(function(){var e,a,i,n,s=Math.random(),o="/images/bandwidth0.jpg?n="+s,r="/images/bandwidth1.jpg?n="+s,c=16614,l="/images/bandwidth2.jpg?n="+s,f=73214,h=new Image,g=new Image,u=new Image;h.onload=function(){g.onload=function(){a=(new Date).getTime();var s=(a-e)/1e3;u.onload=function(){n=(new Date).getTime();var e=(n-i)/1e3,a=e-s;t.bytesPerSec=a>0?(f-c)/a:0!==e?f/e:0!==s?c/s:f/.001,$.cookie("bytesPerSec",t.bytesPerSec),console.log("Bandwidth: "+Math.round(t.bytesPerSec/1024)+" KB/sec"),t.runQ()},i=(new Date).getTime(),u.src=l},e=(new Date).getTime(),g.src=r},console.log("Bandwidth test..."),h.src=o}),this.get=function(t){this.q.push(t),this.runQ()},this.runQ=function(){if(null!==this.bytesPerSec){for(var t=0;t<this.q.length;t++)this.q[t](this.bytesPerSec);this.q=[]}}},bytesPS=new BytesPerSec;$.support.transition||($.fn.transition=$.fn.animate),$("a").each(function(){this.hash&&(this.hash=this.hash.replace("#","#!"))}),nav(location.hash),$("nav a").click(function(t){function e(){isPreOff=!0,$("#on").addClass("inactive"),$("#off").css({display:"none"}),$("#on").css({display:"block"}),$("body").append('<div id="off-bg" style="z-index:'+zOff+';position:absolute;top:0;left:0;width:100%;height:100%;background-color:#222;"></div>'),Modernizr.opacity?($("#off-bg").css({opacity:0}),$("#off-bg").transition({opacity:1},300,function(){$("#off-bg").css("background-image","url(/images/fuzz.gif)"),isOff=!0,isPreOff=!1,$("#on").removeClass("inactive")})):($("#off-bg").css("background-image","url(/images/fuzz.gif)"),isOff=!0,isPreOff=!1,$("#on").removeClass("inactive")),clickHash=location.hash}function a(){$("#off").addClass("inactive"),$("#off").css({display:"block"}),$("#on").css({display:"none"}),Modernizr.opacity?$("#off-bg").css("background-image","none").transition({opacity:0},duration,function(){$("#off-bg").remove(),isOff=!1,$("#off").removeClass("inactive")}):($("#off-bg").remove(),isOff=!1,$("#off").removeClass("inactive"))}if("?off=1"===this.search)isOff||e(),t.preventDefault();else if("?on=1"==this.search)isOff&&a(),t.preventDefault();else if(isPreOff)t.preventDefault();else{isOff&&a();var i=location.hash?location.href.replace(location.hash,""):location.href.replace(/#$/,""),n=this.hash?this.href.replace(this.hash,""):this.href.replace(/#$/,"");this.hash&&n==i?(nav(this.hash),clickHash=this.hash,location.hash=this.hash,t.preventDefault()):n==i&&(nav(this.hash),clickHash="",location.hash="",t.preventDefault())}}),$(window).on("hashchange",function(){var t="#"==location.hash?"":location.hash;t!==clickHash&&nav(location.hash)}),$(window).on("resize",function(){$(".static-img").each(function(){$img=$(this),adjustImageCss($img,{top:0,left:0},function(t){$img.css(t)})})})}$(function(){$(".navbar-collapse").click("li",function(){$(".navbar-collapse.in, #side-padding.in").collapse("hide").css("height","")}),$(".page").wrapInner('<div class="col-sm-9 page-content"></div>'),$(".page").append('<div class="col-sm-3"></div>'),navigation()})}.call(this);
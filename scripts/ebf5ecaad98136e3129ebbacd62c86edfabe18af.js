!function(){$(function(){function design(){var a=function(){$(".navbar-collapse.in, #side-padding.in").collapse("hide"),$("#side-padding").css("height","")};$(".navbar-collapse").click("li",a),$(window).on("resize",a);var e=$(".page");e.wrapInner('<div class="col-sm-9 page-content"></div>'),$('<div class="col-sm-3"></div>').appendTo(e),e.wrapInner('<div class="page-paper"></div>'),$('<div class="film1"></div>').insertBefore($(".page-paper")),$('<div class="film2"></div>').insertAfter($(".page-paper")),$(".page-paper").scroll(function(){var a=Math.round($(this).scrollTop()/2);$(".film1, .film2").css("background-position","-"+a+"px 0");var e=Math.round($(this).scrollTop()/4),t=Math.abs((180+e)%360-180),i=Math.abs((360+e)%360-180),s=Math.abs((300+e)%360-180),n=Math.abs((400+e)%400-200),o=Math.abs((200+2*e)%400-200),r=Math.abs((200+e/2)%400-200);Modernizr.opacity?($("#side-nav").css({"background-color":"rgba("+t+", "+i+", "+s+", 0.7)"}),$(".nicescroll-rails div").css({"background-color":"rgba("+n+", "+o+", "+r+", 0.8)"})):($("#side-nav").css({"background-color":"rgb("+t+", "+i+", "+s+")"}),$(".nicescroll-rails div").css({"background-color":"rgb("+n+", "+o+", "+r+")"}))})}function navigation(){function pageAnim(){return pageCursor=pageCursor==pageAns.length-1?0:pageCursor+1,pageAns[pageCursor]}function imgAnim(){return imgCursor=imgCursor==imgAns.length-1?0:imgCursor+1,imgAns[imgCursor]}function bgImage(a){var e=$($(a).attr("data-bg")),t="undefined"!=typeof lastBackgrounds[a]&&lastBackgrounds[a]<e.length-1?lastBackgrounds[a]+1:0,i=$(".static-img");return i.length>0&&i[0].src===e[t].src&&(t=t<e.length-1?t+1:0),lastBackgrounds[a]=t,$(e[t])}function bgVideoUrl($img,func){var bandwReservRatio=1,dvStr=$img.attr("data-video");if(dvStr){var dv=eval("("+dvStr+")");bytesPS.get(function(a){for(var e=null,t=null,i=0;i<dv.urls.length;i++){(null===e||dv.urls[i].bytes<e.bytes)&&(e=dv.urls[i]);var s=bandwReservRatio*dv.urls[i].bytes/a;s<dv.sec&&(null===t||dv.urls[i].bytes>t.bytes)&&(t=dv.urls[i])}func(null===t?e.url:t.url)})}else func($img.attr("src").replace(/.jpg$/,".mp4"))}function nav(a){function e(){$(".page-paper").getNiceScroll().remove(),$(".film1, .film2").css({"background-position":"0 0"}),$.support.transition&&$(".film1, .film2").transition({"background-position":"-2016px 0"},5e3);var a=pageAnim(),e=a[0];$.support.transition&&(e.opacity=0),$hash.css(e),takeLayer($hash,"anim-page");var i;if(isIE8){var s=$("head");i=$('<style type="text/css">.page :before,.page :after{content:none !important}</style>'),s.append(i)}var n=a[1];$.support.transition&&(n.opacity=1),$hash.transition(n,duration,function(){takeLayer($hash,"static-page"),$(t+" .page-paper").niceScroll({zindex:1e5,autohidemode:!0,horizrailenabled:!1,cursoropacitymin:.6,cursoropacitymax:1,background:"transparent",cursorborder:"1px solid #fff",cursorwidth:"8px",cursorcolor:"rgb(200, 0, 0)"}),"none"!==$("nav").css("background-image")&&($("nav").css({"background-image":"none"}),Modernizr.opacity&&($sideNav.css({"background-color":"rgba(51, 51, 51,1)"}),$sideNav.transition({"background-color":sideNavBgColor},1e3))),isIE8&&i.remove()})}$("a").each(function(){$(this).parents("li").removeClass("active"),$(this).removeClass("active"),(this.href==a.href||this.href+"#"==a.href)&&($(this).parents("li").addClass("active"),$(this).addClass("active"))});var t=a.hash;if(t=t&&"#"!=t?t.replace("#!","#"):"#index",$hash=$(t),!($hash.length<1)){var i=bgImage(t);if($(".static-img").length>0&&$("nav").css({"background-image":"url(/images/fuzz.gif)"}),"none"!=i.css("display"))e();else{var s=imgAnim(),n=s[0];$.support.transition&&(n.opacity=0),adjustImageCss(i,n,function(){i.css(n);var a=s[1];$.support.transition&&(a.opacity=1),adjustImageCss(i,a,function(){takeLayer(i,"anim-img"),i.transition(a,duration,function(){adjustImageCss(i,a,function(){i.css(a)}),$("body").css("background-image","none"),Modernizr.touch||(null===BV&&(BV=new $.BigVideo,BV.init()),bgVideoUrl(i,function(a){BV.show(a,{ambient:!0}),BV.getPlayer().on("playing",function(){$(".static-img").css({display:"none"})})})),cleanLayer("static-page"),takeLayer(i,"static-img"),e()})})})}}}function cleanLayer(a){$("."+a).each(function(){var e=$(this);e.css({display:"none"}),e.removeClass(a)})}function toLayer(a,e){a.css({display:"block"}),a.removeClass("static-page static-img anim-page anim-img"),a.addClass(e)}function takeLayer(a,e){cleanLayer(e),toLayer(a,e)}function adjustImageCss(a,e,t){var i=new Image;i.onload=function(){var a,s,n=$(window).width(),o=$(window).height(),r=i.width,c=i.height,l=n/o,f=r/c;l>f?(a=n,s=a/f):(s=o,a=f*s),e.width=Math.round(a),e.height=Math.round(s),e["margin-top"]=0===parseInt(e.top)?Math.round((o-s)/2)+"px":"-100%"==e.top?Math.round(o-s)+"px":0,e["margin-left"]=0===parseInt(e.left)?Math.round((n-a)/2)+"px":"-100%"==e.left?Math.round(n-a)+"px":0,t(e)},i.src=a.attr("src")}var duration=800,zOff=900,zStaticImg=500,zStaticPage=600,zAnimImg=700,zAnimPage=800,isOff=!1,isPreOff=!1,pageAns=[[{left:"-100%",top:0},{left:0,top:0}],[{left:0,top:"-100%"},{left:0,top:0}],[{left:"100%",top:0},{left:0,top:0}],[{left:0,top:"100%"},{left:0,top:0}]],imgAns=[[{left:0,top:"-100%"},{left:0,top:0}],[{left:"100%",top:0},{left:0,top:0}],[{left:0,top:"100%"},{left:0,top:0}],[{left:"-100%",top:0},{left:0,top:0}]],pageCursor=0,imgCursor=0,lastBackgrounds={},BV=null,clickHash=null,$sideNav=$("#side-nav"),sideNavBgColor=$sideNav.css("background-color"),BytesPerSec=function(){var a=this;this.q=[];var e=$.cookie("bytesPerSec");this.bytesPerSec=e?e:null,null===this.bytesPerSec&&$(window).load(function(){var e,t="/bandwidth.xml?n="+Math.random(),i=104976,s=null,n=null;e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),e.onreadystatechange=function(){if(1==e.readyState&&null===s);else if(4===e.readyState&&null==n){n=(new Date).getTime();var t=(n-s)/1e3;0==t&&(t=.001),a.bytesPerSec=i/t,$.cookie("bytesPerSec",a.bytesPerSec),console.log("Bandwidth: "+(8*(a.bytesPerSec/1024/1024)).toFixed(2)+" Mb/sec ("+e.responseText.length+" bytes in "+t.toFixed(2)+" sec)."),a.runQ()}},s=(new Date).getTime(),console.log("Bandwidth test..."),e.open("GET",t,!0),e.send()}),this.get=function(a){this.q.push(a),this.runQ()},this.runQ=function(){if(null!==this.bytesPerSec){for(var a=0;a<this.q.length;a++)this.q[a](this.bytesPerSec);this.q=[]}}},bytesPS=new BytesPerSec;$("a").each(function(){this.hash&&(this.hash=this.hash.replace("#","#!"))}),nav(location),$("a").click(function(a){function e(){isPreOff=!0,$("#on").addClass("inactive"),$("#off").css({display:"none"}),$("#on").css({display:"block"}),$("body").append('<div id="off-bg" style="z-index:'+zOff+';"><i class="fa fa-smile-o fa-lg"></i></div>'),Modernizr.opacity?($("#off-bg").css({opacity:0}),$sideNav.transition({opacity:.3},200),$("#off-bg").transition({opacity:1},300,function(){$("#off-bg").css("background-image","url(/images/fuzz.gif)"),isOff=!0,isPreOff=!1,$("#on").removeClass("inactive")})):($("#off-bg").css("background-image","url(/images/fuzz.gif)"),isOff=!0,isPreOff=!1,$("#on").removeClass("inactive")),clickHash=location.hash}function t(){$("#off").addClass("inactive"),$("#off").css({display:"block"}),$("#on").css({display:"none"}),Modernizr.opacity?($sideNav.transition({opacity:1},duration/2),$("#off-bg").css("background-image","none").transition({opacity:0},duration,function(){$("#off-bg").remove(),isOff=!1,$("#off").removeClass("inactive")})):($("#off-bg").remove(),isOff=!1,$("#off").removeClass("inactive"))}if("?off=1"===this.search)isOff||e(),a.preventDefault();else if("?on=1"==this.search)isOff&&t(),a.preventDefault();else if(isPreOff)a.preventDefault();else{isOff&&t();var i=location.hash?location.href.replace(location.hash,""):location.href.replace(/#$/,""),s=this.hash?this.href.replace(this.hash,""):this.href.replace(/#$/,"");this.hash&&s==i?(nav(this),clickHash=this.hash,location.hash=this.hash,a.preventDefault()):s==i&&(nav(this),clickHash="",location.hash="",a.preventDefault())}}),$(window).on("hashchange",function(){var a="#"==location.hash?"":location.hash;a!==clickHash&&nav(location)}),$(window).on("resize",function(){$(".static-img").each(function(){$img=$(this),adjustImageCss($img,{top:0,left:0},function(a){$img.css(a)})})})}function opacityFix(){if(!Modernizr.opacity){for(var a=[["#top-nav",70],["#top-nav .navbar-toggle",80],["#top-nav .navbar-toggle:focus",20],["#top-nav li.navbar-text",80],["#side-nav",75],[".page-paper",90],[".page-content i",72],["#off-bg i",20],[".center-menu, .page-box",70]],e=$("head"),t='<style type="text/css">',i=0;i<a.length;i++)t+=a[i][0]+' {-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity='+a[i][1]+')";}';t+="</style>",e.append($(t))}}var isIE8=$("html").hasClass("ie8");$.support.transition||($.fn.transition=$.fn.animate),design(),navigation(),opacityFix()})}.call(this);
!function(){$(function(){function e(a,i,o){var n=$("#"+o+" .video-bg>video"),t=$("#"+i+" .img-bg>img"),s=o?n.length:t.length;if(s<a.length){var r=a[s],c=r.w,p=r.h,l=function(){var e,a,i=$(window).width(),o=$(window).height(),n=c/p,t=i/o;n>t?(a=o,e=Math.round(a*n)):(e=i,a=Math.round(e/n));var s=Math.round((o-a)/2),r=Math.round((i-e)/2);return{width:e+"px",height:a+"px",left:r+"px",top:s+"px"}},h=$('<div class="img-bg"></div>');h.appendTo("#"+i),h.css(l()),$(window).on("resize",function(){h.css(l())});var d=$("<img />");d.load(function(){if(d.appendTo(h),o){var n=$('<div class="video-bg"></div>');n.css(l()),$(window).on("resize",function(){n.css(l())}),n.appendTo("#"+o);var t=$("<video webkit-playsinline loop></video>");t[0].muted=r.audio?!1:!0,t.one("canplaythrough",function(){t.appendTo(n),r.videoLoadQ&&r.videoLoadQ(t),e(a,i,o)}),t[0].src=r.src,t[0].load()}r.imgLoadQ&&r.imgLoadQ(d),o||e(a,i,o)}),d[0].src=r.src.replace(/.mp4$/,".jpg")}}function a(e,i){var o=Processing.getInstanceById(e);o?i(o):setTimeout(function(){a(e,i)},100)}function i(){var e=function(){$(".navbar-collapse.in, #side-padding.in").collapse("hide"),$("#side-padding").css("height","")};$(".navbar-collapse").click("li",e),$(window).on("resize",function(){e(),$(".in .sketch").each(function(){a(this.id,function(e){var a=$(h+" .page-paper");e.size(a.width(),a.height())})})});var i=$(".page");i.wrapInner('<div class="col-sm-9 page-content"></div>'),$('<div class="col-sm-3 right"><div class="bg-author"></div></div>').appendTo(i),i.wrapInner('<div class="page-paper"></div>'),$('<div class="film1"></div>').insertBefore($(".page-paper")),$('<div class="film2"></div>').insertAfter($(".page-paper")),$(".page-paper").scroll(function(){var e=Math.round($(this).scrollTop()/4),a=Math.abs((180+e)%360-180),i=Math.abs((360+e)%360-180),o=Math.abs((300+e)%360-180);Modernizr.opacity?$("#side-nav").css({"background-color":"rgba("+a+", "+i+", "+o+", 0.7)"}):$("#side-nav").css({"background-color":"rgb("+a+", "+i+", "+o+")"})}),$("#side-nav a").each(function(){$(this).attr("data-hover",$(this).text())}),l&&($("#sketch-bg-wrap").addClass("layer").attr("data-depth","1"),$("#page-wrapper").parallax());var o,n,t=(new Date).getTime(),s=!1;$(window).mousemove(function(){var e=function(){var a=500,i=(new Date).getTime();i-t>a?($(".page-paper.move-out h1, .page-paper.move-out .bg-author, .page-paper.move-out .bg-author a, .page-paper.move-out i").cssAnOnly({color:""}),$(".page-paper.move-out").cssAnOnly({"background-color":""}).removeClass("move-out"),s=!1):(o&&clearTimeout(o),o=setTimeout(e,a))};if(!s||n!=h){s=!0;var a=$(h+" .page-paper");a.addClass("move-out"),a.cssAnOnly({"background-color":"rgba(0, 0, 0, .8)"}),$(h+" .page-paper h1, "+h+" .bg-author, "+h+" .bg-author a").cssAnOnly({color:"rgba(255, 255, 255, .5)"}),$(h+" .page-paper i").cssAnOnly({color:"rgba(140, 0, 30, 0.8)"}),e()}t=(new Date).getTime(),n=h})}function o(){function e(e){function o(a,i){function o(){if(i&&i(),$.support.transition){var o,n=$(r+" .film1, "+r+" .film2"),t=n.css("background-position");o=t?t.split(" ")[0].replace("%","").replace("px",""):"0",C=-1*C;var s="0"==o?4*504*C:"0";setTimeout(function(){n.css({"background-position":s+"px"+" 0"})},100)}var c=$(r+" .page-paper"),p=c.getNiceScroll(0);p?p.show():(c.niceScroll({zindex:1e5,autohidemode:!0,horizrailenabled:!1,cursoropacitymin:.6,cursoropacitymax:1,background:"transparent",cursorborder:"1px solid #fff",cursorwidth:"8px",cursorcolor:"rgb(200, 0, 0)"}),$(r+" .nicescroll-rails").detach().appendTo("body")),$("a").each(function(){$(this).parents("li").removeClass("active"),$(this).removeClass("active"),(this.href==e.href||this.href+"#"==e.href)&&($(this).parents("li").addClass("active"),$(this).addClass("active"))}),a&&a(),d&&d.startAutoPlay()}var n="fadeInDown",p="bounceOutRight",l="pulse";$("#side-nav a").css("color",""),Modernizr.opacity&&t.cssAn({"background-color":s}),$(".page-paper").each(function(){var e=$(this).getNiceScroll(0);e&&e.hide()}),Modernizr.cssanimations?($(".page.in").removeClass(n+" in").addClass(p+" out"),c.one(w,o),c.removeClass(p+" out").addClass("animated "+n+" in over"),$(".page-box").removeClass(l),$(r+" .page-box").addClass("animated "+l)):c.hasClass("sf-in")?o():($(".page.in").removeClass("sf-in"),c.addClass("sf-in over"),$(".page.in").each(function(){var e=$(this);e.hasClass("sf-in")||"100%"==e.css("left")||e.animate({left:"100%",top:0,opacity:0},f,function(){$(this).removeClass("in")})}),c.addClass("in"),c.css({left:0,top:"-100%",opacity:0}),c.animate({left:0,top:0,opacity:1},f,o))}function n(e,n,t,s){function c(a){var i=t?$("#"+t+" .video-bg>video"):null,o=$("#"+n+" .img-bg>img"),s=t?i.length:o.length;l>=s&&(l=0,$.cookie("last-cursor-"+n,0)),o.length<=l?e[l].imgLoadQ=function(i){e[l].imgLoadQ=!1,a(i,e[l].link,e[l].author)}:a($(o[l]),e[l].link,e[l].author)}function p(a){if(t){var i=$("#"+t+" .video-bg>video");i.length<=l?e[l].videoLoadQ=function(i){e[l].videoLoadQ=!1,a(i)}:a($(i[l]))}else a(null)}var l=function(){var a=y[n];return y[n]<e.length-1?y[n]++:y[n]=0,$.cookie("last-cursor-"+n,y[n]),a}(),h=function(){var e=b<m.length-1?b+1:0,a=m[b];return b=e,a}(),d="bounceOutDown";c(function(e,c,l){function g(){var e=t?"Видео:":"Фон:",a=$(r+" .bg-author");a.empty(),a.text(e+" ").append('<a target="_blank" href="'+c+'">'+l+"</a>"),$(".video-bg video").each(function(){$(this).removeClass("in"),this.currentTime=0}),o(function(){$(".page.over, #img-bg-wrap img.over").removeClass("over"),p(function(e){$(".video-bg video").each(function(){this.pause(),$(this).removeClass("in"),this.currentTime=0}),e&&(e.addClass("in"),i||e[0].play(),$("img.in").removeClass(m.join(" ")+" in"))})},s)}if($(".video-bg video").each(function(){this.pause()}),$(".sketch").each(function(){var e=this;a(this.id,function(a){a.noLoop(),$(e).css({visibility:"hidden",opacity:0})})}),Modernizr.cssanimations)$("img.in").removeClass(m.join(" ")+" in").addClass(d+" out"),e.one(w,g),e.removeClass(d+" out").addClass("animated "+h+" in over");else{$("img.in").removeClass("sf-in"),e.addClass("sf-in over");var u=e.css("top"),v=e.css("left"),b=e.css("width"),y=e.css("height");$("#"+n+" img").each(function(){var e=$(this);e.hasClass("sf-in")||e.css("top")==y||e.animate({left:v,top:y},f,function(){$(this).removeClass("in")})}),e.addClass("in"),e.css({left:"-"+b,top:u,opacity:0}),e.animate({left:v,top:u,opacity:1},f,g)}})}var r=e.hash;r=r&&"#"!=r?r.replace("#!","#"):"#index",h=r;var c=$(r);if(!(c.length<1)){$(".page.in").length>0&&($("#side-nav a").css("color","#FF7D8D"),Modernizr.opacity&&t.cssAn({"background-color":"rgba(0, 0, 0, 0.7)"}));var l=function(){var e=v[x].src;$.cookie("lastSketchCursor",x);var i,o=e.replace("/","-").replace(".","-")+"-"+x;if(0===$("#"+o).length){var i=$('<canvas id="'+o+'" class="sketch" tabindex="0"></canvas>');$(r+" .page-content").prepend(i),Processing.loadSketchFromSources(o,[e]),a(o,function(){i.cssAn({opacity:1})})}else{var n=$("#"+o);n.detach(),$(r+" .page-content").prepend(n),a(o,function(e){var a=$(r+" .page-paper");e.size(a.width(),a.height()),n.css({visibility:"visible"}).cssAn({opacity:1}),e.loop()})}x<v.length-1?x++:x=0},T=function(){var e=[],a=function(){p&&e.push(function(){n(g,"img-bg-wrap","video-bg-wrap",null)})},i=function(){e.push(function(){n(u,"sketch-bg-wrap",null,l)})};return i(),i(),a(),i(),a(),i(),a(),a(),e}();T[k](),k<T.length-1?k++:k=0,$.cookie("lastFxCursor",k)}}var i=!1,o=!1,n=null,t=$("#side-nav"),s=t.css("background-color");$("a").each(function(){this.hash&&(this.hash=this.hash.replace("#","#!"))}),$(window).on("resize",function(){$("#page-wrapper>img.in").each(function(){adjustImg(this)})}),e(location),$("a").click(function(a){function s(){$(".video-bg video").each(function(){this.pause()}),$("#off").css({display:"none"}),$("#on").css({display:"block"}),t.cssAn({opacity:.3});var e=$("#off-bg");e.css({display:"table","background-image":"url(/images/fuzz.gif)"}),setTimeout(function(){e.cssAn({opacity:1})}),i=!0,n=location.hash}function r(){$("#off").css({display:"block"}),$("#on").css({display:"none"});var e=$("#off-bg");e.cssAn({opacity:0}),t.cssAn({opacity:1}),setTimeout(function(){e.css({display:"none","background-image":"none"})},f);var a=$(".video-bg video.in");a.length>0&&($(".video-bg video").each(function(){this.pause()}),a[0].play()),i=!1}if("?off=1"===this.search)i||s(),a.preventDefault();else if("?on=1"==this.search)i&&r(),a.preventDefault();else if(o)a.preventDefault();else{i&&r();var c=location.hash?location.href.replace(location.hash,""):location.href.replace(/#$/,""),p=this.hash?this.href.replace(this.hash,""):this.href.replace(/#$/,"");this.hash&&p==c?(e(this),n=this.hash,location.hash=this.hash,a.preventDefault()):p==c&&(e(this),n="",location.hash="",a.preventDefault())}}),$(window).on("hashchange",function(){var a="#"==location.hash?"":location.hash;a!==n&&e(location)})}function n(){var e=$("#sequence");if(e.length>0){var a={nextButton:!0,prevButton:!0,pagination:!0,animateStartingFrameIn:!0,autoPlay:!0,pauseOnHover:!1,autoPlayDelay:3e3,preloader:!0,preloadTheseFrames:[1],preloadTheseImages:["images/newbigjob-t.png","images/newbigjob-m-t.png","images/mobivisor-t.png","images/surwave-t.png","images/surwave-m-t.png","images/vreggy-t.png","images/sigmahome-t.png","images/hitechhow-t.png","images/hth-crm-t.png","images/frescostudio-t.png"]},i=function(){$("#sequence>.sequence-canvas div[data-img]").each(function(){var e=$(this),a=e.attr("data-img"),i=$(window).width(),o=$(window).height();Modernizr.mq("only all")&&(580>=i||602>=o?a=a.replace(".png","-c.png"):925>=i||695>=o?a=a.replace(".png","-b.png"):(1199>=i||755>=o)&&(a=a.replace(".png","-a.png")));var n=e.find("img");(n.length<1||n.attr("src")!==a)&&(e.empty(),$('<img src="'+a+'" />').appendTo(e))})};$("#sequence .sequence-pagination .view").length<1&&($("#sequence>.sequence-canvas>li>.view").each(function(){var e=$(this).clone();e.find("div[data-img]").each(function(){var e=$(this);src=e.attr("data-img").replace(".png","-t.png"),$('<img src="'+src+'" />').appendTo(e)}),e.appendTo("#sequence .sequence-pagination")}),i(),$(window).on("resize",i)),d=$("#sequence").sequence(a).data("sequence"),d.pause()}}function t(){if(!Modernizr.opacity){for(var e=[["#top-nav",70],["#top-nav .navbar-toggle",80],["#top-nav .navbar-toggle:focus",20],["#top-nav li.navbar-text",80],["#side-nav",75],[".page-paper",90],[".page-content i",72],["#off-bg i",20],[".center-menu, .page-box",70],[".descr",70]],a=$("head"),i='<style type="text/css">',o=0;o<e.length;o++)i+=e[o][0]+' {-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity='+e[o][1]+')";}';i+="</style>",a.append($(i))}}$("html").hasClass("ie8"),$("html").hasClass("ie9"),$("html").hasClass("ie10");var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,r=-1!=navigator.appVersion.indexOf("Win"),c=function(){try{var e=document.createElement("canvas"),a=e.getContext("webgl")||e.getContext("experimental-webgl"),i=window.WebGLRenderingContext&&a?!0:!1,o=a.getSupportedExtensions(),n=r&&s&&-1==o.join().indexOf("compressed_texture");return i&&!n}catch(t){return!1}}(),p=function(){var e=document.createElement("video");return canMP4=e.canPlayType?e.canPlayType("video/mp4"):!1,canMP4&&c&&!Modernizr.touch}(),l=Modernizr.csstransforms;Modernizr.canvas&&l;var h,d,g=[{src:"video/cross6_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"video/lightgrid_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/datacity_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/29966720",author:"beeple"},{src:"video/rmx_(loop)_1280x560.mp4",w:1280,h:560,audio:!0,link:"http://vimeo.com/79293746",author:"beeple"}],u=[{src:"video/lightgrid_(loop)_1280x720.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/cross6_(loop)_1280x720.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"video/lightgrid_(loop)_1280x720-a.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/cross6_(loop)_1280x720-a.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"video/lightgrid_(loop)_1280x720-c.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/cross6_(loop)_1280x720-c.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"video/lightgrid_(loop)_1280x720-b.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/cross6_(loop)_1280x720-b.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"}],v=[{src:"pde/hello-processing.pde"},{src:"pde/swarming-circles.pde"},{src:"pde/motion-frequency.pde"}],f=800,m=["fadeInLeft","fadeInRight","fadeInDown","fadeInUp"],b=0,w="animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",y=function(){function e(e){var a="last-cursor-"+e,i=$.cookie(a);return i?i:($.cookie(a,0),0)}return{"img-bg-wrap":e("img-bg-wrap"),"sketch-bg-wrap":e("sketch-bg-wrap")}}(),k=function(){var e=$.cookie("lastFxCursor");return e?e:($.cookie("lastFxCursor",0),0)}(),x=function(){var e=$.cookie("lastSketchCursor");return e?e:($.cookie("lastSketchCursor",0),0)}(),C=1;i(),n(),e(u,"sketch-bg-wrap"),p&&e(g,"img-bg-wrap","video-bg-wrap"),o(),t(),$.fn.cssAn=function(e){return Modernizr.cssanimations?this.css(e):this.animate(e,f)},$.fn.cssAnOnly=function(e){return Modernizr.cssanimations?this.css(e):this}})}.call(this);
!function(){$(function(){function e(){var a=p?$(".video-bg>.loaded"):$(".video-bg>video"),i=$(".img-bg>img"),o=d?a.length:i.length;if(o<h.length){var n=h[o],t=n.w,s=n.h,r=function(){var e,a,i=$(window).width(),o=$(window).height(),n=t/s,r=i/o;n>r?(a=o,e=Math.round(a*n)):(e=i,a=Math.round(e/n));var c=Math.round((o-a)/2),l=Math.round((i-e)/2);return{width:e+"px",height:a+"px",left:l+"px",top:c+"px"}},c=$('<div class="img-bg"></div>');c.appendTo("#img-bg-wrap"),c.css(r()),$(window).on("resize",function(){c.css(r())});var l=$("<img />");l.load(function(){if(l.appendTo(c),d){var a=$('<div class="video-bg"></div>');a.css(r()),$(window).on("resize",function(){a.css(r())}),a.appendTo("#video-bg-wrap");var i=function(){var a=$.cookie("maxLoadedClip");(!a||o>a)&&$.cookie("maxLoadedClip",o),n.videoLoadQ&&n.videoLoadQ(),setTimeout(e,1e3)};if(p){n.src.replace("/","_").replace(".","_");var t=!1,s=$('<div class="video"></div>').appendTo(a).flowplayer("lib/flowplayer-flash-3.2.18/flowplayer-3.2.18.swf",{clip:{url:n.src,autoPlay:!1,autoBuffering:!0,accelerated:!0,bufferLength:120,onStart:function(){t||(t=!0,s.addClass("loaded"),i())}},plugins:{controls:null},onLoad:function(){}})}else{var h=$("<video webkit-playsinline loop></video>");h[0].muted=n.audio?!1:!0,h.one("canplaythrough",function(){h.appendTo(a),i()}),h[0].src=n.src,h[0].load()}}n.imgLoadQ&&n.imgLoadQ(),d||e()}),l[0].src=n.src.replace(/.mp4$/,".jpg")}}function a(e){var a=p?$(".video-bg>div.loaded"):$(".video-bg>video"),i=$(".img-bg>img"),n=$.cookie("maxLoadedClip"),t=d?a.length:i.length;f>=t&&(!n||f>n)&&(f=0,$.cookie("lastClipCursor",0)),i.length<=f?h[f].imgLoadQ=function(){h[f].imgLoadQ=!1,e($($(".img-bg>img")[f]),h[f].link,h[f].author),d||o()}:(e($(i[f]),h[f].link,h[f].author),d||o())}function i(e){if(d){var a=p?$(".video-bg>div.loaded"):$(".video-bg>video");a.length<=f?h[f].videoLoadQ=function(){h[f].videoLoadQ=!1,e(p?$($(".video-bg>div.loaded")[f]):$($(".video-bg>video")[f])),o()}:(e($(a[f])),o())}}function o(){f<h.length-1?f++:f=0,$.cookie("lastClipCursor",f)}function n(){var e=function(){$(".navbar-collapse.in, #side-padding.in").collapse("hide"),$("#side-padding").css("height","")};$(".navbar-collapse").click("li",e),$(window).on("resize",e);var a=$(".page");a.wrapInner('<div class="col-sm-9 page-content"></div>'),$('<div class="col-sm-3 right"><div class="bg-author"></div></div>').appendTo(a),a.wrapInner('<div class="page-paper"></div>'),$('<div class="film1"></div>').insertBefore($(".page-paper")),$('<div class="film2"></div>').insertAfter($(".page-paper")),$(".page-paper").scroll(function(){var e=Math.round($(this).scrollTop()/4),a=Math.abs((180+e)%360-180),i=Math.abs((360+e)%360-180),o=Math.abs((300+e)%360-180);Modernizr.opacity?$("#side-nav").css({"background-color":"rgba("+a+", "+i+", "+o+", 0.7)"}):$("#side-nav").css({"background-color":"rgb("+a+", "+i+", "+o+")"})}),$("#side-nav a").each(function(){$(this).attr("data-hover",$(this).text())}),d||($("#img-bg-wrap").addClass("layer").attr("data-depth","1"),$("#page-wrapper").parallax());var i,o,n=(new Date).getTime(),t=!1;$(window).on("mousemove",function(){var e=function(){var a=500,o=(new Date).getTime();o-n>a?($(".page-paper.move-out h1").css("color",""),$(".page-paper.move-out").css("background-color","").removeClass("move-out"),t=!1):(i&&clearTimeout(i),i=setTimeout(e,a))};if(!t||o!=l){t=!0;var a=$(l+" .page-paper");a.addClass("move-out"),a.css("background-color","rgba(0, 0, 0, .8)"),$(l+" .page-paper h1").css("color","rgba(255, 255, 255, .9)"),e()}n=(new Date).getTime(),o=l})}function t(){function e(e){var n=e.hash;n=n&&"#"!=n?n.replace("#!","#"):"#index",l=n;var t=$(n);if(!(t.length<1)){$(".page.in").length>0&&($("#side-nav a").css("color","#FF7D8D"),Modernizr.opacity&&s.css({"background-color":"rgba(0, 0, 0, 0.7)"}));var c=function(){var e=u<v.length-1?u+1:0,a=v[u];return u=e,a}(),h="bounceOutDown",f="fadeInDown",w="bounceOutRight",C="pulse";a(function(a,l,u){function y(){function a(){$(".page.over, #img-bg-wrap img.over").removeClass("over");var a=$(n+" .page-paper"),t=a.getNiceScroll(0);t?t.show():a.niceScroll({zindex:1e5,autohidemode:!0,horizrailenabled:!0,cursoropacitymin:.6,cursoropacitymax:1,background:"transparent",cursorborder:"1px solid #fff",cursorwidth:"8px",cursorcolor:"rgb(200, 0, 0)"}),i(function(a){p?$(".video-bg div.loaded").each(function(){$f(this).stop(),$(this).removeClass("in")}):$(".video-bg video").each(function(){this.pause(),$(this).removeClass("in"),this.currentTime=0}),a.addClass("in"),o||(p?$f(a[0]).play():a[0].play()),$("#img-bg-wrap img.in").removeClass(v.join(" ")+" in"),$("a").each(function(){$(this).parents("li").removeClass("active"),$(this).removeClass("active"),(this.href==e.href||this.href+"#"==e.href)&&($(this).parents("li").addClass("active"),$(this).addClass("active"))})})}$("#side-nav a").css("color",""),Modernizr.opacity&&s.css({"background-color":r});var c=d?"Фоновое видео:":"Фон:",h=$(n+" .bg-author");if(h.empty(),h.text(c+" ").append('<a target="_blank" href="'+l+'">'+u+"</a>"),p?$(".video-bg div.loaded").each(function(){$(this).removeClass("in")}):$(".video-bg video").each(function(){$(this).removeClass("in"),this.currentTime=0}),$(".page-paper").each(function(){var e=$(this).getNiceScroll(0);e&&e.hide()}),$.support.transition){var y,k=$(n+" .film1, "+n+" .film2"),x=k.css("background-position");y=x?x.split(" ")[0].replace("%","").replace("px",""):"0",b=-1*b;var _="0"==y?4*504*b:"0";setTimeout(function(){k.css({"background-position":_+"px"+" 0"})},100)}Modernizr.cssanimations?($(".page.in").removeClass(f+" in").addClass(w+" out"),t.one(m,a),t.removeClass(w+" out").addClass("animated "+f+" in over"),$(n+" .page-box").addClass("animated "+C)):t.hasClass("sf-in")?a():($(".page.in").removeClass("sf-in"),t.addClass("sf-in over"),$(".page.in").each(function(){var e=$(this);e.hasClass("sf-in")||"100%"==e.css("left")||e.animate({left:"100%",top:0,opacity:0},g,function(){$(this).removeClass("in")})}),t.addClass("in"),t.css({left:0,top:"-100%",opacity:0}),t.animate({left:0,top:0,opacity:1},g,a))}p?$(".video-bg div.loaded").each(function(){$f(this).pause()}):$(".video-bg video").each(function(){this.pause()}),Modernizr.cssanimations?($("#img-bg-wrap img.in").removeClass(v.join(" ")+" in").addClass(h+" out"),a.one(m,y),a.removeClass(h+" out").addClass("animated "+c+" in over"),$(".page-box").removeClass(C)):($("#img-bg-wrap img.in").removeClass("sf-in"),a.addClass("sf-in over"),$("#img-bg-wrap img").each(function(){var e=$(this);e.hasClass("sf-in")||"100%"==e.css("top")||e.animate({left:0,top:"100%"},g,function(){$(this).removeClass("in")})}),a.addClass("in"),a.css({left:"-100%",top:0,opacity:0}),a.animate({left:0,top:0,opacity:1},g,y))})}}var o=!1,n=!1,t=null,s=$("#side-nav"),r=s.css("background-color");$("a").each(function(){this.hash&&(this.hash=this.hash.replace("#","#!"))}),$(window).on("resize",function(){$("#page-wrapper>img.in").each(function(){adjustImg(this)})}),e(location),$("a").click(function(a){function i(){p?$(".video-bg div.loaded").each(function(){$f(this).pause()}):$(".video-bg video").each(function(){this.pause()}),$("#off").css({display:"none"}),$("#on").css({display:"block"}),s.css({opacity:.3});var e=$("#off-bg");e.css({display:"table","background-image":"url(/images/fuzz.gif)"}),setTimeout(function(){e.css({opacity:1})}),o=!0,t=location.hash}function r(){$("#off").css({display:"block"}),$("#on").css({display:"none"});var e=$("#off-bg");if(e.css({opacity:0}),s.css({opacity:1}),$.support.transition?setTimeout(function(){e.css({display:"none","background-image":"none"})},300):e.css({display:"none","background-image":"none"}),p){var a=$(".video-bg div.loaded.in");a.length>0&&($(".video-bg div.loaded").each(function(){$f(this).pause()}),$f(a[0]).play())}else{var i=$(".video-bg video.in");i.length>0&&($(".video-bg video").each(function(){this.pause()}),i[0].play())}o=!1}if("?off=1"===this.search)o||i(),a.preventDefault();else if("?on=1"==this.search)o&&r(),a.preventDefault();else if(n)a.preventDefault();else{o&&r();var c=location.hash?location.href.replace(location.hash,""):location.href.replace(/#$/,""),l=this.hash?this.href.replace(this.hash,""):this.href.replace(/#$/,"");this.hash&&l==c?(e(this),t=this.hash,location.hash=this.hash,a.preventDefault()):l==c&&(e(this),t="",location.hash="",a.preventDefault())}}),$(window).on("hashchange",function(){var a="#"==location.hash?"":location.hash;a!==t&&e(location)})}function s(){var e=$("#sequence");if(e.length>0){var a={nextButton:!0,prevButton:!0,pagination:!0,animateStartingFrameIn:!0,autoPlay:!0,autoPlayDelay:3e3,preloader:!0,preloadTheseFrames:[1],preloadTheseImages:["images/newbigjob-t.png","images/newbigjob-m-t.png","images/mobivisor-t.png","images/surwave-t.png","images/surwave-m-t.png","images/vreggy-t.png","images/sigmahome-t.png","images/hitechhow-t.png","images/hth-crm-t.png","images/frescostudio-t.png"]},i=function(){$("#sequence>.sequence-canvas div[data-img]").each(function(){var e=$(this),a=e.attr("data-img"),i=$(window).width(),o=$(window).height();Modernizr.mq("only all")&&(580>=i||602>=o?a=a.replace(".png","-c.png"):925>=i||695>=o?a=a.replace(".png","-b.png"):(1199>=i||755>=o)&&(a=a.replace(".png","-a.png")));var n=e.find("img");(n.length<1||n.attr("src")!==a)&&(e.empty(),$('<img src="'+a+'" />').appendTo(e))})};$("#sequence .sequence-pagination .view").length<1&&($("#sequence>.sequence-canvas>li>.view").each(function(){var e=$(this).clone();e.find("div[data-img]").each(function(){var e=$(this);src=e.attr("data-img").replace(".png","-t.png"),$('<img src="'+src+'" />').appendTo(e)}),e.appendTo("#sequence .sequence-pagination")}),i(),$(window).on("resize",i)),$("#sequence").sequence(a).data("sequence")}}function r(){if(!Modernizr.opacity){for(var e=[["#top-nav",70],["#top-nav .navbar-toggle",80],["#top-nav .navbar-toggle:focus",20],["#top-nav li.navbar-text",80],["#side-nav",75],[".page-paper",90],[".page-content i",72],["#off-bg i",20],[".center-menu, .page-box",70],[".descr",70]],a=$("head"),i='<style type="text/css">',o=0;o<e.length;o++)i+=e[o][0]+' {-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity='+e[o][1]+')";}';i+="</style>",a.append($(i))}}$("html").hasClass("ie8"),$("html").hasClass("ie9"),$("html").hasClass("ie10"),function(){try{var e=document.createElement("canvas");return window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl"))?!0:!1}catch(a){return!1}}();var c=function(e){var a=document.createElement("video");return a.canPlayType?a.canPlayType(e):!1};"undefined"!=typeof swfobject&&0!==swfobject.getFlashPlayerVersion().major,""!=c("video/mp4");var l,d=!1,p=!0,h=d?[{src:"video/cross6_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"video/lightgrid_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/datacity_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/29966720",author:"beeple"},{src:"video/rmx_(loop)_1280x560.mp4",w:1280,h:560,audio:!0,link:"http://vimeo.com/79293746",author:"beeple"}]:[{src:"video/lightgrid_(loop)_1280x720.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/cross6_(loop)_1280x720.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"video/lightgrid_(loop)_1280x720-a.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/cross6_(loop)_1280x720-a.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"video/lightgrid_(loop)_1280x720-c.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/cross6_(loop)_1280x720-c.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"video/lightgrid_(loop)_1280x720-b.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/cross6_(loop)_1280x720-b.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"}],g=800,v=["fadeInLeft","fadeInRight","fadeInDown","fadeInUp"],u=0,m="animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",f=function(){var e=$.cookie("lastClipCursor");return e?e:($.cookie("lastClipCursor",0),0)}(),b=1;n(),s(),e(),t(),r()})}.call(this);
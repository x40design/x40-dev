!function(){function t(){function t(){return d=d==u.length-1?0:d+1,u[d]}function i(){return v=v==g.length-1?0:v+1,g[v]}function n(t){var i=$($(t).attr("data-bg")),n="undefined"!=typeof m[t]&&m[t]<i.length-1?m[t]+1:0,a=$(".static-img");return a.length>0&&a[0].src===i[n].src&&(n=n<i.length-1?n+1:0),m[t]=n,i[n]}function a(t){return $(t).attr("src").replace(/.jpg$/,".mp4")}function e(e){function s(){var i=t();$(e).css(i[0]),h(e,"anim-page"),$(e).transition(i[1],r,function(){h(e,"static-page")})}e=e&&"#"!=e?e.replace("#!","#"):"#index";var l=n(e);if("visible"==$(l).css("visibility"))s();else{var f=i(),p=f[0];c(l,p,function(){$(l).css(p);var t=f[1];c(l,t,function(){h(l,"anim-img"),$(l).transition(t,r,function(){c(l,t,function(){$(l).css(t)}),Modernizr.touch||(null===w&&(w=new $.BigVideo,w.init()),w.show(a(l),{ambient:!0}),w.getPlayer().on("playing",function(){$(".static-img").css({visibility:"hidden"})})),o("static-page"),h(l,"static-img"),s()})})})}}function o(t){$("."+t).each(function(){$(this).css({visibility:"hidden"}),$(this).removeClass(t)})}function s(t,i){$(t).css({visibility:"visible"}),$(t).removeClass("static-page static-img anim-page anim-img"),$(t).addClass(i)}function h(t,i){o(i),s(t,i)}function c(t,i,n){var a=$(t),e=new Image;e.src=a.attr("src"),e.onload=function(){var t,a,o=$(window).width(),s=$(window).height(),h=e.width,c=e.height,l=o/s,r=h/c;l>r?(t=o,a=t/r):(a=s,t=r*a),i.width=Math.round(t),i.height=Math.round(a),i["margin-top"]=0==parseInt(i.top)?Math.round((s-a)/2)+"px":"-100%"==i.top?Math.round(s-a)+"px":0,i["margin-left"]=0==parseInt(i.left)?Math.round((o-t)/2)+"px":"-100%"==i.left?Math.round(o-t)+"px":0,n(i)}}var l,r=1e3,f="90px",p="25px",u=[[{left:"-100%",top:f},{left:p,top:f}],[{left:p,top:"-100%"},{left:p,top:f}],[{left:"100%",top:f},{left:p,top:f}],[{left:p,top:"100%"},{left:p,top:f}]],g=[[{left:0,top:"-100%"},{left:0,top:0}],[{left:"100%",top:0},{left:0,top:0}],[{left:0,top:"100%"},{left:0,top:0}],[{left:"-100%",top:0},{left:0,top:0}]],d=0,v=0,m={},w=null;$.support.transition||($.fn.transition=$.fn.animate),$("a").each(function(){this.hash&&(this.hash=this.hash.replace("#","#!"))}),e(location.hash),$("nav a").click(function(t){var i=location.hash?location.href.replace(location.hash,""):location.href.replace(/#$/,""),n=this.hash?this.href.replace(this.hash,""):this.href.replace(/#$/,"");this.hash&&n==i?(e(this.hash),l=this.hash,location.hash=this.hash,t.preventDefault()):n==i&&(e(this.hash),l="",location.hash="",t.preventDefault())}),$(window).on("hashchange",function(){location.hash!==l&&e(location.hash)}),$(window).on("resize",function(){$(".static-img").each(function(){img=this,c(img,{top:0,left:0},function(t){$(img).css(t)})})})}$(function(){$(".navbar-collapse").click("li",function(){$(".navbar-collapse.in, #side-padding.in").collapse("hide").css("height","")}),$(".page").wrapInner('<div class="col-sm-9 page-content"></div>'),$(".page").append('<div class="col-sm-3"></div>'),t()})}.call(this);
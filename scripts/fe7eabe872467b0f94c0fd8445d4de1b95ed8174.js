(function(){$(function(){function getModeCookie(e){return document.documentMode&&document.documentMode!=previosDocmode?null:$.cookie(e)}function loadClip(e,n){var t="video-bg-wrap"==n?!0:!1,i=$(t?"#"+n+" .video-bg>video":"#"+n+" .img-bg>img"),o=i.length;if(o<e.length){var a=e[o],r=a.w,s=a.h,d=function(){var e,n,t=$(window).width(),i=$(window).height(),o=r/s,a=t/i;o>a?(n=i,e=Math.round(n*o)):(e=t,n=Math.round(e/o));var d=Math.round((i-n)/2),c=Math.round((t-e)/2);return{width:e+"px",height:n+"px",left:c+"px",top:d+"px"}},c=$(t?'<div class="video-bg"></div>':'<div class="img-bg"></div>');c.appendTo("#"+n),c.css(d()),$(window).on("resize",function(){c.css(d())});var l;t?(l=$('<video class="bg" webkit-playsinline loop"></video>'),l[0].muted=a.audio?!1:!0):l=$('<img class="bg" />');var h=function(){l.appendTo(c),a.loadQ&&a.loadQ(l),loadClip(e,n)};t?l.one("canplaythrough",h):l.load(h),l[0].src=a.src,t&&l[0].load()}}function sketchExec(e,n){if(isProcessing){var t=Processing.getInstanceById(e);t?n(t):setTimeout(function(){sketchExec(e,n)},100)}}function moveClear(e){if(e)$(".page-paper.move-out").cssAnOnly({"background-color":""}).removeClass("move-out");else{var n=$(lastHash+" .page-paper");n.addClass("move-out"),n.cssAnOnly({"background-color":"rgba(0, 0, 0, 0)"})}}function design(){var e=function(){$(".navbar-collapse.in, #side-padding.in").collapse("hide"),$("#side-padding").css("height","")};$(".navbar-collapse").click("li",e),$(window).on("resize",function(){e(),isProcessing&&$(".in .sketch").each(function(){sketchExec(this.id,function(e){var n=$(lastHash+" .page-paper");e.size(n.width(),n.height())})})});var n=$(".page");n.wrapInner('<div class="col-sm-9 page-content"></div>'),$('<div class="col-sm-3 right"><div class="bg-author"></div></div>').appendTo(n),n.wrapInner('<div class="page-paper"></div>'),$('<div class="film1"></div>').insertBefore($(".page-paper")),$('<div class="film2"></div>').insertAfter($(".page-paper")),$(".page-paper").scroll(function(){var e=Math.round($(this).scrollTop()/4),n=Math.abs((180+e)%360-180),t=Math.abs((360+e)%360-180),i=Math.abs((300+e)%360-180);$("#side-nav").css(Modernizr.opacity?{"background-color":"rgba("+n+", "+t+", "+i+", 0.7)"}:{"background-color":"rgb("+n+", "+t+", "+i+")"})}),$("#side-nav a, #top-nav ul a").each(function(){$(this).attr("data-hover",$(this).text())}),isParallax&&(isWebgl||isPlayVideo?($("#video-bg-wrap").addClass("layer").attr("data-depth","0.5"),$("#move-fx-wrap").addClass("layer").attr("data-depth","1")):$("#sketch-bg-wrap, #move-fx-wrap").addClass("layer").attr("data-depth","1"),$scene=$("#page-wrapper").parallax());var t,i,o=(new Date).getTime(),a=!1;$(window).mousemove(function(){var e=function(){var n=500,i=(new Date).getTime();i-o>n?(moveFunc(!0),a=!1):(t&&clearTimeout(t),t=setTimeout(e,n))};a&&i==lastHash||(a=!0,moveFunc(),e()),o=(new Date).getTime(),i=lastHash})}function navigation(){function e(e){function n(){if(isProcessing){$(".sketch").each(function(){var e=this;sketchExec(this.id,function(n){n.noLoop(),$(e).css({visibility:"hidden"})})});var e=sketches[sketchCursor].src;$.cookie("lastSketchCursor",sketchCursor);var n,t=e.replace("/","-").replace(".","-")+"-"+sketchCursor;if(0===$("#"+t).length){var n=$('<canvas id="'+t+'" class="sketch" tabindex="0"></canvas>');$(m+" .page-content").prepend(n),Processing.loadSketchFromSources(t,[e]),sketchExec(t,function(){n.cssAn({opacity:1})})}else{var i=$("#"+t);i.detach(),$(m+" .page-content").prepend(i),sketchExec(t,function(e){var n=$(m+" .page-paper");e.size(n.width(),n.height()),i.css({visibility:"visible"}).cssAn({opacity:1}),e.loop()})}sketchCursor<sketches.length-1?sketchCursor++:sketchCursor=0}}function t(){var e=threeBgs[threeCursor];return threeCursor<threeBgs.length-1?threeCursor++:threeCursor=0,$.cookie("lastThreeCursor",threeCursor),moveFunc=moveClear,e.start(),e}function i(e,n,t){var i=$("#"+e+" .bg"),o=i.length;clipCursor[e]>=o&&(clipCursor[e]=0);var a=clipCursor[e];clipCursor[e]++,$.cookie("last-cursor-"+e,clipCursor[e]),a>=o?n[a].loadQ=function(e){n[a].loadQ=!1,t(e,a)}:t($(i[a]),a)}function r(){if(isPlayVideo&&$(".video-bg video").each(function(e){this.pause(),videoClips[e].fx&&videoClips[e].fx.stop()}),isWebgl){for(var e=0;e<threeBgs.length;e++)threeBgs[e].stop();for(var e=0;e<threeImgClips.length;e++)threeImgClips[e].fx&&threeImgClips[e].fx.stop()}isProcessing&&$(".sketch").each(function(){var e=this;sketchExec(this.id,function(n){n.noLoop(),$(e).css({opacity:0})})}),moveFx.stop()}function s(){function e(){var e=pgOutClassCur<pgOutClasses.length-1?pgOutClassCur+1:0,n=pgOutClasses[pgOutClassCur];return pgOutClassCur=e,n}$(".page.in").each(Modernizr.cssanimations?function(){var n=$(this);if("#"+n.attr("id")!=lastHash){var t=e();n.removeClass("in "+pgInClasses.join(" ")).addClass("animated out "+t),n.find(".page-box").removeClass(boxInClasses.join(" "))}}:function(){var e=$(this);"#"+e.attr("id")!=lastHash&&e.removeClass("in "+pgInClasses.join(" ")).addClass("out").animate({left:"-100%"},duration)})}function d(){function e(){var e=bgOutClassCur<bgOutClasses.length-1?bgOutClassCur+1:0,n=bgOutClasses[bgOutClassCur];return bgOutClassCur=e,n}$(".bg.in").each(Modernizr.cssanimations?function(){var n=e();$(this).removeClass("in "+bgInClasses.join(" ")).addClass("animated out "+n)}:function(){$(this);$(this).removeClass("in").addClass("out").animate({top:"-100%"},duration)})}function c(e,n){function t(){$(".page.in .bg-author").empty(),n&&n()}if($("#loading").css({display:"none"}),Modernizr.cssanimations){var i=function(){var e=bgInClassCur<bgInClasses.length-1?bgInClassCur+1:0,n=bgInClasses[bgInClassCur];return bgInClassCur=e,n}();s(),e.hasClass("in")?t():(d(),e.removeClass("out "+bgOutClasses.join(" ")).addClass("over in"),e.one(animationEnd,t),e.addClass("animated "+i))}else s(),e.hasClass("in")?t():(d(),e.removeClass("out").addClass("over in"),e.css({top:"-100%"}),e.animate({top:"0"},duration,t))}function l(n,t,i){function r(){if(t.removeClass("over"),n.removeClass("over"),n.find(".page-box").removeClass(c),"#"+n.attr("id")==lastHash){if($.support.transition){var o,a=$(m+" .film1, "+m+" .film2"),r=a.css("background-position");o=r?r.split(" ")[0].replace("%","").replace("px",""):"0",filmDirect=-1*filmDirect;var d="0"==o?504*filmDirect*4:"0";setTimeout(function(){a.css({"background-position":d+"px 0"})},100)}var l=$(m+" .page-paper"),h=l.getNiceScroll(0);h?h.show():(l.niceScroll({zindex:1e5,autohidemode:!0,horizrailenabled:!1,cursoropacitymin:.6,cursoropacitymax:1,background:"transparent",cursorborder:"1px solid #fff",cursorwidth:"8px",cursorcolor:"rgb(200, 0, 0)"}),$(m+" .nicescroll-rails").detach().appendTo("body")),$("a").each(function(){$(this).parents("li").removeClass("active"),$(this).removeClass("active"),(this.href==e.href||this.href+"#"==e.href)&&($(this).parents("li").addClass("active"),$(this).addClass("active"))}),seq&&seq.startAutoPlay(),i&&i()}s()}if($("#side-nav a").css("color",""),Modernizr.opacity&&($(m+" .page-paper").cssAnOnly({"background-color":""}),o.cssAn({"background-color":a})),$(".page-paper").each(function(){var e=$(this).getNiceScroll(0);e&&e.hide()}),Modernizr.cssanimations){var d=function(){var e=pgInClassCur<pgInClasses.length-1?pgInClassCur+1:0,n=pgInClasses[pgInClassCur];return pgInClassCur=e,n}(),c=function(){var e=boxInClassCur<boxInClasses.length-1?boxInClassCur+1:0,n=boxInClasses[boxInClassCur];return boxInClassCur=e,n}();n.find(".page-box").addClass("animated "+c),n.removeClass("out "+pgOutClasses.join(" ")).addClass("over in"),n.one(animationEnd,r),n.addClass("animated "+d)}else n.removeClass("out").addClass("over in"),n.css({left:"-100%"}),n.animate({left:"0"},duration,r)}function h(){r();var e="three-img-bg-wrap";i(e,threeImgClips,function(e,n){var t=threeImgClips[n];t.fx||(t.fx=new ThreeFx(e[0]));var i=$(t.fx.container);t.fx.start(),c(i,function(){t.link&&t.author&&$(m+" .bg-author").text("Фото: ").append('<a target="_blank" href="'+t.link+'">'+t.author+"</a>"),l(w,i)})})}function u(){r();var e="video-bg-wrap";i(e,videoClips,function(e,n){var t=videoClips[n];c(e,function(){t.link&&t.author&&$(m+" .bg-author").text("Видео: ").append('<a target="_blank" href="'+t.link+'">'+t.author+"</a>"),l(w,e,function(){e[0].play(),moveFx.start()})})})}function p(){r();var e=t(),n=$(e.container);c(n,function(){l(w,n)})}function g(){r();var e="sketch-bg-wrap";i(e,sketchClips,function(e,t){var i=sketchClips[t];c(e,function(){i.link&&i.author&&$(m+" .bg-author").text("Фон: ").append('<a target="_blank" href="'+i.link+'">'+i.author+"</a>"),l(w,e,function(){n()})})})}var m=e.hash;m=m&&"#"!=m?m.replace("#!","#"):"#index",lastHash=m;var w=$(m);if(!(w.length<1)){$(".page.in").length>0&&($("#side-nav a").css("color","#FF7D8D"),Modernizr.opacity&&o.cssAn({"background-color":"rgba(0, 0, 0, 0.7)"}));var f=function(){var e=[],n=function(){isPlayVideo&&e.push(u)},t=function(){isPlayVideo||isWebgl||e.push(g)},i=function(){isWebgl&&e.push(p)},o=function(){isWebgl&&e.push(h)};return isIE?(i(),i(),o(),n(),o(),n(),i(),n(),o(),i(),n(),i(),n(),t()):(i(),i(),i(),i(),o(),n(),i(),n(),o(),i(),n(),o(),i(),n(),i(),n(),i(),n(),t()),e}();f[fxCursor](),fxCursor<f.length-1?fxCursor++:fxCursor=0,$.cookie("lastFxCursor",fxCursor)}}var n=!1,t=!1,i=null,o=$("#side-nav"),a=o.css("background-color");$("a").each(function(){this.hash&&(this.hash=this.hash.replace("#","#!"))}),$(window).on("resize",function(){$("#page-wrapper>img.in").each(function(){adjustImg(this)})}),e(location),$("a").click(function(a){function r(){$(".video-bg video").each(function(){this.pause()}),$("#off").css({display:"none"}),$("#on").css({display:"block"}),o.cssAn({opacity:.3});var e=$("#off-bg");e.css({display:"table","background-image":"url(/images/fuzz.gif)"}),setTimeout(function(){e.cssAn({opacity:1})}),n=!0,i=location.hash}function s(){$("#off").css({display:"block"}),$("#on").css({display:"none"});var e=$("#off-bg");e.cssAn({opacity:0}),o.cssAn({opacity:1});var t=$.support.transition?300:duration;setTimeout(function(){e.css({display:"none","background-image":"none"})},t);var i=$(".video-bg video.in");i.length>0&&($(".video-bg video").each(function(){this.pause()}),i[0].play()),n=!1}if("?off=1"===this.search)n||r(),a.preventDefault();else if("?on=1"==this.search)n&&s(),a.preventDefault();else if(t)a.preventDefault();else{n&&s();var d=location.hash?location.href.replace(location.hash,""):location.href.replace(/#$/,""),c=this.hash?this.href.replace(this.hash,""):this.href.replace(/#$/,"");if(this.hash&&c==d)e(this),i=this.hash,location.hash=this.hash,a.preventDefault();else if(c==d)e(this),i="",location.hash="",a.preventDefault();else{var l=this.href;Modernizr.cssanimations?($(".page.in, .bg.in, #move-fx").one(transitionEnd,function(){window.location.href=l}),$(".page.in, .bg.in, #move-fx").css({top:"100%"})):$(".page.in, .bg.in, #move-fx").animate({left:"100%"},duration,function(){window.location.href=l}),a.preventDefault()}}}),$(window).on("hashchange",function(){var n="#"==location.hash?"":location.hash;n!==i&&e(location)})}function projects(){var e=$("#sequence");if(e.length>0){var n={nextButton:!0,prevButton:!0,pagination:!0,animateStartingFrameIn:!0,autoPlay:!0,pauseOnHover:!1,autoPlayDelay:3e3,preloader:!0,preloadTheseFrames:[1],preloadTheseImages:["images/newbigjob-t.png","images/newbigjob-m-t.png","images/mobivisor-t.png","images/surwave-t.png","images/surwave-m-t.png","images/vreggy-t.png","images/sigmahome-t.png","images/hitechhow-t.png","images/hth-crm-t.png","images/frescostudio-t.png"]},t=function(){$("#sequence>.sequence-canvas div[data-img]").each(function(){var e=$(this),n=e.attr("data-img"),t=$(window).width(),i=$(window).height();Modernizr.mq("only all")&&(580>=t||602>=i?n=n.replace(".png","-c.png"):925>=t||695>=i?n=n.replace(".png","-b.png"):(1199>=t||755>=i)&&(n=n.replace(".png","-a.png")));var o=e.find("img");(o.length<1||o.attr("src")!==n)&&(e.empty(),$('<img src="'+n+'" />').appendTo(e))})};$("#sequence .sequence-pagination .view").length<1&&($("#sequence>.sequence-canvas>li>.view").each(function(){var e=$(this).clone();e.find("div[data-img]").each(function(){var e=$(this);src=e.attr("data-img").replace(".png","-t.png"),$('<img src="'+src+'" />').appendTo(e)}),e.appendTo("#sequence .sequence-pagination")}),t(),$(window).on("resize",t)),seq=$("#sequence").sequence(n).data("sequence"),seq.pause()}}function opacityFix(){if(!Modernizr.opacity){for(var e=[["#top-nav",70],["#top-nav .navbar-toggle",80],["#top-nav .navbar-toggle:focus",20],["#top-nav li.navbar-text",80],["#side-nav",70],[".page-paper",70],[".page-content i",72],["#off-bg i",20],[".center-menu, .page-box",70],[".descr",70]],n=$("head"),t='<style type="text/css">',i=0;i<e.length;i++)t+=e[i][0]+' {-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity='+e[i][1]+')";}';t+="</style>",n.append($(t))}}function ThreeCubemapBalls(){function e(){p=window.innerWidth/2,g=window.innerHeight/2,i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}function n(e){h=10*(e.clientX-p),u=10*(e.clientY-g)}function t(){for(var e=1e-4*Date.now(),n=0,t=l.length;t>n;n++){var d=l[n];d.position.x=5e3*Math.cos(e+n),d.position.y=5e3*Math.sin(e+1.1*n)}i.position.x+=.05*(h-i.position.x),i.position.y+=.05*(-u-i.position.y),i.lookAt(o.position),r.rotation.copy(i.rotation),a.render(s,r),a.render(o,i)}var i,o,a,r,s,d,c,l=[],h=0,u=0,p=window.innerWidth/2,g=window.innerHeight/2;document.addEventListener("mousemove",n,!1);var m;this.container=document.createElement("div"),$(this.container).addClass("bg three"),$("#three-bg-wrap").append(this.container),i=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,1e5),i.position.z=3200,r=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,1e5),o=new THREE.Scene,s=new THREE.Scene;for(var c=new THREE.SphereGeometry(100,32,16),w="textures/cube/skybox-blue/",f=".jpg",v=[w+"px"+f,w+"nx"+f,w+"py"+f,w+"ny"+f,w+"pz"+f,w+"nz"+f],E=THREE.ImageUtils.loadTextureCube(v,new THREE.CubeRefractionMapping),b=new THREE.MeshBasicMaterial({color:16777215,envMap:E,refractionRatio:.95}),C=0;500>C;C++){var d=new THREE.Mesh(c,b);d.position.x=1e4*Math.random()-5e3,d.position.y=1e4*Math.random()-5e3,d.position.z=1e4*Math.random()-5e3,d.scale.x=d.scale.y=d.scale.z=3*Math.random()+1,o.add(d),l.push(d)}var T=THREE.ShaderLib.cube;T.uniforms.tCube.value=E;var b=new THREE.ShaderMaterial({fragmentShader:T.fragmentShader,vertexShader:T.vertexShader,uniforms:T.uniforms,depthWrite:!1,side:THREE.BackSide}),d=new THREE.Mesh(new THREE.CubeGeometry(100,100,100),b);s.add(d),a=new THREE.WebGLRenderer,a.setSize(window.innerWidth,window.innerHeight),a.autoClear=!1,this.container.appendChild(a.domElement),window.addEventListener("resize",e,!1),this.stop=function(){m=!1},this.start=function(){function e(){m&&(requestAnimationFrame(e),t())}m=!0,e()}}function ThreeParticlesBillboards(){function e(){f=window.innerWidth/2,v=window.innerHeight/2,a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}function n(e){m=e.clientX-f,w=e.clientY-v}function t(e){1==e.touches.length&&(e.preventDefault(),m=e.touches[0].pageX-f,w=e.touches[0].pageY-v)}function i(e){1==e.touches.length&&(e.preventDefault(),m=e.touches[0].pageX-f,w=e.touches[0].pageY-v)}function o(){var e=5e-5*Date.now();a.position.x+=.05*(m-a.position.x),a.position.y+=.05*(-w-a.position.y),a.lookAt(r.position),u=360*(1+e)%360/360,l.color.setHSL(u,.5,.5),s.render(r,a)}var a,r,s,d,c,l,h,u,p,g,m=0,w=0,f=window.innerWidth/2,v=window.innerHeight/2;for(this.container=document.createElement("div"),$(this.container).addClass("bg three"),$("#three-bg-wrap").append(this.container),a=new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,2,2e3),a.position.z=1e3,r=new THREE.Scene,r.fog=new THREE.FogExp2(0,.001),c=new THREE.Geometry,p=THREE.ImageUtils.loadTexture("textures/sprites/disc.png"),h=0;1e4>h;h++){var E=new THREE.Vector3;E.x=2e3*Math.random()-1e3,E.y=2e3*Math.random()-1e3,E.z=2e3*Math.random()-1e3,c.vertices.push(E)}l=new THREE.ParticleSystemMaterial({size:35,sizeAttenuation:!1,map:p,transparent:!0}),l.color.setHSL(1,.3,.7),d=new THREE.ParticleSystem(c,l),d.sortParticles=!0,r.add(d),s=new THREE.WebGLRenderer({clearAlpha:1}),s.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(s.domElement),document.addEventListener("mousemove",n,!1),document.addEventListener("touchstart",t,!1),document.addEventListener("touchmove",i,!1),window.addEventListener("resize",e,!1),this.stop=function(){g=!1},this.start=function(){function e(){g&&(requestAnimationFrame(e),o())}g=!0,e()}}function ThreeParticlesShapes(){function e(e,n,t){return new THREE.Vector3(e,n,t)}function n(){var e=document.createElement("canvas");e.width=128,e.height=128;var n=e.getContext("2d");n.beginPath(),n.arc(64,64,60,0,2*Math.PI,!1),n.lineWidth=.5,n.stroke(),n.restore();var t=n.createRadialGradient(e.width/2,e.height/2,0,e.width/2,e.height/2,e.width/2);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(200,200,200,1)"),t.addColorStop(1,"rgba(0,0,0,1)"),n.fillStyle=t,n.fill(),e}function t(){k=window.innerWidth/2,M=window.innerHeight/2,d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight),b.uniforms.h.value=1/window.innerWidth,C.uniforms.v.value=1/window.innerHeight;var e=15,n=e/window.innerWidth,t=e/window.innerHeight;v.uniforms.delta.value=new THREE.Vector2(n,0),E.uniforms.delta.value=new THREE.Vector2(0,t),f.reset()}function o(e){R=e.clientX-k,x=y+.02*(R-S)}function a(e){1===e.touches.length&&(e.preventDefault(),S=e.touches[0].pageX-k,y=x)}function r(e){1===e.touches.length&&(e.preventDefault(),R=e.touches[0].pageX-k,x=y+.05*(R-S))}function s(){I=H*P.getDelta(),m.geometry.verticesNeedUpdate=!0,attributes.size.needsUpdate=!0,attributes.pcolor.needsUpdate=!0,h.rotation.y+=.05*(x-h.rotation.y),l.clear(),f.render(.1)}var d,c,l,h,u,p,g,m,w,f,v,E,b,C,T,H=50,x=0,y=0,R=0,S=0,k=window.innerWidth/2,M=window.innerHeight/2,I=1,P=new THREE.Clock,z=0;this.container=document.createElement("div"),$(this.container).addClass("bg three"),$("#three-bg-wrap").append(this.container),d=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,2e3),d.position.set(0,150,400),c=new THREE.Scene;var W=new THREE.DirectionalLight(16777215,.5);W.position.set(0,-1,1),W.position.normalize(),c.add(W),p=new THREE.PointLight(16777215,2,300),p.position.set(0,0,0),c.add(p);var A="X40",_=new THREE.MeshFaceMaterial([new THREE.MeshLambertMaterial({color:16777215,shading:THREE.FlatShading,opacity:.95}),new THREE.MeshLambertMaterial({color:16777215})]),L=new THREE.TextGeometry(A,{size:70,height:25,curveSegments:4,font:"helvetiker",bevelEnabled:!0,bevelThickness:2,bevelSize:2,material:0,extrudeMaterial:1});L.computeVertexNormals(),L.computeBoundingBox();var O=-.5*(L.boundingBox.max.x-L.boundingBox.min.x);u=new THREE.Mesh(L,_),u.position.x=O,u.position.y=130,u.position.z=-50,u.rotation.x=0,u.rotation.y=2*Math.PI,h=new THREE.Object3D,h.add(u),c.add(h);var F=7e4,D=new THREE.Geometry,j={__pools:[],get:function(){return this.__pools.length>0?this.__pools.pop():(console.log("pool ran out!"),null)},add:function(e){this.__pools.push(e)}};for(i=0;F>i;i++)D.vertices.push(e(200*Math.random()-100,100*Math.random()+150,50*Math.random())),j.add(i);attributes={size:{type:"f",value:[]},pcolor:{type:"c",value:[]}};var B=n();texture=new THREE.Texture(B),texture.needsUpdate=!0,uniforms={texture:{type:"t",value:texture}};var q=new THREE.ShaderMaterial({uniforms:uniforms,attributes:attributes,vertexShader:document.getElementById("vertexshader").textContent,fragmentShader:document.getElementById("fragmentshader").textContent,blending:THREE.AdditiveBlending,depthWrite:!1,transparent:!0});m=new THREE.ParticleSystem(D,q),m.dynamic=!0;for(var V=m.geometry.vertices,N=attributes.size.value,G=attributes.pcolor.value,U=0;U<V.length;U++)N[U]=50,G[U]=new THREE.Color(0),D.vertices[U].set(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY);h.add(m),m.y=800;var Y=0,X=0;g=new THREE.Shape,g.moveTo(Y+25,X+25),g.bezierCurveTo(Y+25,X+25,Y+20,X,Y,X),g.bezierCurveTo(Y-30,X,Y-30,X+35,Y-30,X+35),g.bezierCurveTo(Y-30,X+55,Y-10,X+77,Y+25,X+95),g.bezierCurveTo(Y+60,X+77,Y+80,X+55,Y+80,X+35),g.bezierCurveTo(Y+80,X+35,Y+80,X,Y+50,X),g.bezierCurveTo(Y+35,X,Y+25,X+25,Y+25,X+25);var K=0,Q=function(){var e=j.get();return N[e]=200*Math.random()+100,e},J=function(e){var n=e.position;e.target.position=n;var t=e.target;if(t){K+=3e-4*I,K>1&&(K-=1),z+=35e-5*I,z>1&&(z-=1);var i=g.getPointAt(z);emitterpos.x=5*i.x-100,emitterpos.y=5*-i.y+400,p.position.x=emitterpos.x,p.position.y=emitterpos.y,p.position.z=100,D.vertices[t]=e.position,G[t].setHSL(K,.6,.1),p.color.setHSL(K,.8,.5)}},Z=function(e){var n=e.target;n&&(G[n].setRGB(0,0,0),D.vertices[n].set(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),j.add(e.target))};w=new SPARKS.Emitter(new SPARKS.SteadyCounter(500)),emitterpos=new THREE.Vector3(0,0,0),w.addInitializer(new SPARKS.Position(new SPARKS.PointZone(emitterpos))),w.addInitializer(new SPARKS.Lifetime(1,15)),w.addInitializer(new SPARKS.Target(null,Q)),w.addInitializer(new SPARKS.Velocity(new SPARKS.PointZone(new THREE.Vector3(0,-5,1)))),w.addAction(new SPARKS.Age),w.addAction(new SPARKS.Accelerate(0,0,-50)),w.addAction(new SPARKS.Move),w.addAction(new SPARKS.RandomDrift(90,100,2e3)),w.addCallback("created",J),w.addCallback("dead",Z),l=new THREE.WebGLRenderer,l.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(l.domElement);var en=new THREE.ShaderPass(THREE.FocusShader),nn=new THREE.ShaderPass(THREE.CopyShader);effectFilm=new THREE.FilmPass(.5,.25,2048,!1);var tn=THREE.TriangleBlurShader;v=new THREE.ShaderPass(tn,"texture"),E=new THREE.ShaderPass(tn,"texture");var on=15,an=on/window.innerWidth,rn=on/window.innerHeight;b=new THREE.ShaderPass(THREE.HorizontalBlurShader),C=new THREE.ShaderPass(THREE.VerticalBlurShader),b.uniforms.h.value=1/window.innerWidth,C.uniforms.v.value=1/window.innerHeight,v.uniforms.delta.value=new THREE.Vector2(an,0),E.uniforms.delta.value=new THREE.Vector2(0,rn),en.uniforms.sampleDistance.value=.99,en.uniforms.waveFactor.value=.003;var sn=new THREE.RenderPass(c,d);f=new THREE.EffectComposer(l),f.addPass(sn),f.addPass(b),f.addPass(C),C.renderToScreen=!0,E.renderToScreen=!0,en.renderToScreen=!0,nn.renderToScreen=!0,effectFilm.renderToScreen=!0,document.addEventListener("touchstart",a,!1),document.addEventListener("touchmove",r,!1),window.addEventListener("resize",t,!1),document.addEventListener("mousemove",o,!1),this.stop=function(){T=!1,w.stop()},this.start=function(){function e(){T&&(requestAnimationFrame(e),s())}T=!0,THREE.EffectComposer.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),THREE.EffectComposer.quad=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null),THREE.EffectComposer.scene=new THREE.Scene,THREE.EffectComposer.scene.add(THREE.EffectComposer.quad),w.start(),e()}}function ThreeFx(e){function n(){w=window.innerWidth/2,f=window.innerHeight/2,a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),h.reset()}function t(e,n,t,i,o){for(var a=e.faceVertexUvs[0],r=0;r<a.length;r++)for(var s=a[r],d=0;d<s.length;d++){var c=s[d];c.x=(c.x+i)*n,c.y=(c.y+o)*t}}function i(e){g=.5*(e.clientX-w),m=e.clientY-f}function o(){var n=5e-5*Date.now();for(a.position.x+=.05*(g-a.position.x),a.position.y+=.05*(-m-a.position.y),a.lookAt(r.position),e.readyState&&e.readyState!==e.HAVE_ENOUGH_DATA||d&&(d.needsUpdate=!0),x=0;u>x;x++)c=E[x],F=360*(c.hue+n)%360/360,c.color.setHSL(F,c.saturation,.5);if(D%1e3>200)for(x=0;u>x;x++)l=v[x],l.rotation.x+=10*l.dx,l.rotation.y+=10*l.dy,l.position.x+=200*l.dx,l.position.y+=200*l.dy,l.position.z+=400*l.dx;if(D%1e3===0)for(x=0;u>x;x++)l=v[x],l.dx*=-1,l.dy*=-1;D++,s.clear(),h.render()}var a,r,s,d,c,l,h,u,p,g=0,m=0,w=window.innerWidth/2,f=window.innerHeight/2,v=[],E=[],b=20,C=10,T=$(e);this.container=document.createElement("div"),$(this.container).addClass("bg three"),$("#three-bg-wrap").append(this.container),a=new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,1e4),a.position.z=500,r=new THREE.Scene;var H=new THREE.DirectionalLight(16777215);H.position.set(.5,1,1).normalize(),r.add(H),s=new THREE.WebGLRenderer({antialias:!1}),s.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(s.domElement),d=new THREE.Texture(e),d.minFilter=THREE.LinearFilter,d.magFilter=THREE.LinearFilter,d.format=THREE.RGBFormat,d.generateMipmaps=!1;var x,y,R,S,k,M,I,P,z;R=1/b,S=1/C,P=T.width()/1.5/b,z=T.height()/1.5/C;var W={color:16777215,map:d},A=new THREE.MeshLambertMaterial(W);for(s.initMaterial(A,r.__lights,r.fog),u=0,x=0;b>x;x++)for(y=0;C>y;y++)k=x,M=y,I=new THREE.CubeGeometry(P,z,P),t(I,R,S,k,M),E[u]=new THREE.MeshLambertMaterial(W),c=E[u],c.hue=x/b,c.saturation=1-y/C,c.color.setHSL(c.hue,c.saturation,.5),l=new THREE.Mesh(I,c),l.position.x=(x-b/2)*P,l.position.y=(y-C/2)*z,l.position.z=0,l.scale.x=l.scale.y=l.scale.z=1,r.add(l),l.dx=.001*(.5-Math.random()),l.dy=.001*(.5-Math.random()),v[u]=l,u+=1;s.autoClear=!1,document.addEventListener("mousemove",i,!1);var _=new THREE.RenderPass(r,a),L=new THREE.BloomPass(1.3),O=new THREE.ShaderPass(THREE.CopyShader);O.renderToScreen=!0,h=new THREE.EffectComposer(s),h.addPass(_),h.addPass(L),h.addPass(O),window.addEventListener("resize",n,!1),this.stop=function(){p=!1},this.start=function(){function e(){p&&(requestAnimationFrame(e),o())}p=!0,THREE.EffectComposer.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),THREE.EffectComposer.quad=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null),THREE.EffectComposer.scene=new THREE.Scene,THREE.EffectComposer.scene.add(THREE.EffectComposer.quad),e()};var F,D=1}function ThreeParticlesDynamic(){function e(e){mouseX=e.clientX-H,mouseY=e.clientY-x,c.rotation.y=.002*(-mouseX-H),c.rotation.x=.002*-mouseY}function n(){H=window.innerWidth/2,x=window.innerHeight/2,s.setSize(window.innerWidth,window.innerHeight),a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),a.lookAt(r.position),p.reset(),g.uniforms.screenWidth.value=window.innerWidth,g.uniforms.screenHeight.value=window.innerHeight}function t(e,n,t,i,o,a,r,s){var h,u,p=e.vertices,g=p.length,m=new THREE.Geometry,w=[];for(h=0;g>h;h++)l=p[h],m.vertices[h]=l.clone(),w[h]=[l.x,l.y,l.z,0,0];var f=[[6e3,0,-4e3],[5e3,0,0],[1e3,0,5e3],[1e3,0,-5e3],[4e3,0,2e3],[-4e3,0,1e3],[-5e3,0,-5e3],[0,0,0]];if(s){for(h=0;h<f.length;h++)u=h<f.length-1?2434341:r,d=new THREE.ParticleSystem(m,new THREE.ParticleSystemMaterial({size:3,color:u})),d.scale.x=d.scale.y=d.scale.z=t,d.position.x=i+f[h][0],d.position.y=o+f[h][1],d.position.z=a+f[h][2],c.add(d),E.push({mesh:d,speed:.5+Math.random()});C+=f.length,b+=f.length*g}else d=new THREE.ParticleSystem(m,new THREE.ParticleSystemMaterial({size:3,color:r})),d.scale.x=d.scale.y=d.scale.z=t,d.position.x=i,d.position.y=o,d.position.z=a,c.add(d),C+=1,b+=g;v.push({mesh:d,vertices:m.vertices,vertices_tmp:w,vl:g,down:0,up:0,direction:0,speed:35,delay:Math.floor(200+200*Math.random()),started:!1,start:Math.floor(100+200*Math.random()),dynamic:s})}function o(){for(delta=10*T.getDelta(),delta=2>delta?delta:2,M=0,I=E.length;I>M;M++)P=E[M],P.mesh.rotation.y+=-.1*delta*P.speed;for(M=0,I=v.length;I>M;M++)if(z=v[M],d=z.mesh,W=z.vertices,A=z.vertices_tmp,_=z.vl,z.dynamic){for(z.start>0?z.start-=1:z.started||(z.direction=-1,z.started=!0),i=0;_>i;i++)l=W[i],O=A[i],z.direction<0&&(l.y>0?(l.x+=1.5*(.5-Math.random())*z.speed*delta,l.y+=3*(.25-Math.random())*z.speed*delta,l.z+=1.5*(.5-Math.random())*z.speed*delta):O[3]||(O[3]=1,z.down+=1)),z.direction>0&&(L=Math.abs(l.x-O[0])+Math.abs(l.y-O[1])+Math.abs(l.z-O[2]),L>1?(l.x+=-(l.x-O[0])/L*z.speed*delta*(.85-Math.random()),l.y+=-(l.y-O[1])/L*z.speed*delta*(1+Math.random()),l.z+=-(l.z-O[2])/L*z.speed*delta*(.85-Math.random())):O[4]||(O[4]=1,z.up+=1));if(z.down===_)if(0===z.delay)for(z.direction=1,z.speed=10,z.down=0,z.delay=320,i=0;_>i;i++)A[i][3]=0;else z.delay-=1;if(z.up===_)if(0===z.delay)for(z.direction=-1,z.speed=35,z.up=0,z.delay=120,i=0;_>i;i++)A[i][4]=0;else z.delay-=1;d.geometry.verticesNeedUpdate=!0}s.clear(),p.render(.01)}var a,r,s,d,c,l,h,u,p,g,m,w=window.innerHeight,f=window.innerWidth,v=[],E=[],b=0,C=0,T=new THREE.Clock,H=window.innerWidth/2,x=window.innerHeight/2;this.container=document.createElement("div"),$(this.container).addClass("bg three"),$("#three-bg-wrap").append(this.container),a=new THREE.PerspectiveCamera(20,f/w,1,5e4),a.position.set(0,700,7e3),r=new THREE.Scene,r.fog=new THREE.FogExp2(260,675e-7),a.lookAt(r.position),h=new THREE.JSONLoader,u=new THREE.BinaryLoader(!0),h.load("obj/terrain.js",function(e){t(e,r,16.8,-11e3,-200,-5e3,65348,!1),t(e,r,16.8,11e3,-200,-15e3,65331,!1),t(e,r,16.8,0,-200,-15e3,65331,!1),t(e,r,16.8,0,-200,15e3,65331,!1),t(e,r,16.8,11e3,-200,15e3,65314,!1),t(e,r,16.8,-11e3,-200,5e3,65297,!1),t(e,r,16.8,13e3,-200,5e3,65365,!1),t(e,r,16.8,13e3,-200,-5e3,65382,!1)}),u.load("obj/veyron/VeyronNoUv_bin.js",function(e){t(e,r,6.8,2200,-200,-100,22015,!1)}),u.load("obj/female02/Female02_bin.js",function(e){t(e,r,4.05,-1e3,-350,0,16768324,!0),t(e,r,4.05,0,-350,0,16777215,!0),t(e,r,4.05,1e3,-350,400,16729122,!0),t(e,r,4.05,250,-350,1500,16750933,!0),t(e,r,4.05,250,-350,2500,16742365,!0)}),u.load("obj/male02/Male02_bin.js",function(e){t(e,r,4.05,-500,-350,600,16742212,!0),t(e,r,4.05,500,-350,0,16733474,!0),t(e,r,4.05,-250,-350,1500,16750882,!0),t(e,r,4.05,-250,-350,-1500,16751103,!0)}),s=new THREE.WebGLRenderer({antialias:!1}),s.setSize(f,w),s.autoClear=!1,s.sortObjects=!1,this.container.appendChild(s.domElement),s.setClearColor(r.fog.color,1),c=new THREE.Object3D,r.add(c);var y=new THREE.ParticleSystem(new THREE.PlaneGeometry(15e3,15e3,64,64),new THREE.ParticleSystemMaterial({color:16711680,size:10}));y.position.y=-400,y.rotation.x=-Math.PI/2,c.add(y),C+=1,b+=y.geometry.vertices.length;var R=new THREE.RenderPass(r,a),S=new THREE.BloomPass(.75),k=new THREE.FilmPass(.5,.5,1448,!1);g=new THREE.ShaderPass(THREE.FocusShader),g.uniforms.screenWidth.value=window.innerWidth,g.uniforms.screenHeight.value=window.innerHeight,g.renderToScreen=!0,p=new THREE.EffectComposer(s),p.addPass(R),p.addPass(S),p.addPass(k),p.addPass(g),document.addEventListener("mousemove",e,!1),window.addEventListener("resize",n,!1);var M,I,P,z,W,A,_,L,O;this.stop=function(){m=!1},this.start=function(){function e(){m&&(requestAnimationFrame(e),o())}m=!0,THREE.EffectComposer.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),THREE.EffectComposer.quad=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null),THREE.EffectComposer.scene=new THREE.Scene,THREE.EffectComposer.scene.add(THREE.EffectComposer.quad),e()}}$.fn.cssAn=function(e){return $.support.transition?this.css(e):this.animate(e,duration)},$.fn.cssAnOnly=function(e){return $.support.transition?this.css(e):this};var previosDocmode=$.cookie("docmode");document.documentMode&&$.cookie("docmode",document.documentMode);var isIE8=$("html").hasClass("ie8"),isIE9=$("html").hasClass("ie9"),isIE10=$("html").hasClass("ie10"),isIE11=function(){var e=document.documentMode;try{document.documentMode=""}catch(n){}res=11===document.documentMode;try{document.documentMode=e}catch(n){}return res}(),isIE=function(){var tmp=document.documentMode,e,isIE;try{document.documentMode=""}catch(e){}res="number"==typeof document.documentMode?!0:eval("/*@cc_on!@*/!1");try{document.documentMode=tmp}catch(e){}return res}(),isChrome=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,isWin=-1!=navigator.appVersion.indexOf("Win"),isWebgl=function(){try{var e=document.createElement("canvas"),n=e.getContext("webgl")||e.getContext("experimental-webgl"),t=window.WebGLRenderingContext&&n?!0:!1,i=n.getSupportedExtensions(),o=isWin&&isChrome&&-1==i.join().indexOf("compressed_texture");
return t&&!o}catch(a){return!1}}(),isPlayVideo=function(){var e=document.createElement("video");return canMP4=e.canPlayType?e.canPlayType("video/mp4"):!1,canMP4&&(isWebgl||isIE10)&&!Modernizr.touch}(),isParallax=Modernizr.csstransforms,$scene,isProcessing=Modernizr.canvas,duration=800,bgInClasses=["slideInDown","fadeInLeft","slideInLeft","fadeInRight","slideInRight","fadeInDown","fadeInUp"],bgInClassCur=0,pgInClasses=["fadeInLeft","fadeInDown","fadeInUp","fadeInRight"],pgInClassCur=0,boxInClasses=isIE?["bounceIn","pulse","bounce","shake","swing","bounceInLeft"]:["flipInX","bounceIn","pulse","bounce","shake","swing","bounceInLeft","flipInY"],boxInClassCur=0,pgOutClasses=["bounceOutRight","bounceOutLeft","bounceOutDown","bounceOutUp"],pgOutClassCur=0,bgOutClasses=["bounceOutRight","bounceOutLeft","bounceOutDown","bounceOutUp"],bgOutClassCur=0,animationEnd="animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",transitionEnd="webkitTransitionEnd oTransitionEnd transitionend",moveFunc=moveClear,clipCursor=function(){function e(e){var n="last-cursor-"+e,t=getModeCookie(n);return t?t:($.cookie(n,0),0)}return{"video-bg-wrap":e("video-bg-wrap"),"sketch-bg-wrap":e("sketch-bg-wrap"),"three-img-bg-wrap":e("three-img-bg-wrap")}}(),fxCursor=function(){var e=getModeCookie("lastFxCursor");return e?e:($.cookie("lastFxCursor",0),0)}(),sketchCursor=function(){var e=getModeCookie("lastSketchCursor");return e?e:($.cookie("lastSketchCursor",0),0)}(),threeCursor=function(){var e=getModeCookie("lastThreeCursor");return e?e:($.cookie("lastThreeCursor",0),0)}(),lastHash,loadedVideo=[],currentVideoUrl,filmDirect=1,seq,videoClips=[{src:"video/circ.hole_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/15533570",author:"beeple"},{src:"video/cross6_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"video/nodes_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/9936271",author:"beeple"},{src:"video/lightgrid_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"}],sketchClips=[{src:"video/lightgrid_(loop)_1280x720.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/cross6_(loop)_1280x720.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"video/lightgrid_(loop)_1280x720-a.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/cross6_(loop)_1280x720-a.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"video/lightgrid_(loop)_1280x720-c.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/cross6_(loop)_1280x720-c.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"video/lightgrid_(loop)_1280x720-b.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"video/cross6_(loop)_1280x720-b.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"}],threeImgClips=[{src:"images/bg/traffic-1600x1061.jpg",w:1600,h:1061,link:"http://www.flickr.com/photos/yakobusan/3566287076/in/set-72157622430175923",author:"Jakob Montrasio"},{src:"images/bg/android-1920x1274.jpg",w:1920,h:1274,link:"http://www.flickr.com/photos/peyotll/8378484980/",author:"Benjamin Lefebvre"},{src:"images/bg/shanghai-1920x1279.jpg",w:1920,h:1279,link:"http://www.flickr.com/photos/yakobusan/3986658544/in/set-72157622430175923",author:"Jakob Montrasio"}],sketches=[{src:"pde/hello-processing.pde"},{src:"pde/swarming-circles.pde"},{src:"pde/motion-frequency.pde"}],threeBgs=function(){return isWebgl?isIE?[new ThreeCubemapBalls,new ThreeParticlesDynamic]:[new ThreeCubemapBalls,new ThreeParticlesDynamic,new ThreeParticlesShapes,new ThreeParticlesBillboards]:null}(),moveFx=new function(){var e=$('<div id="move-fx"></div>');e.css({position:"absolute",top:"-10%",left:"-10%",width:"120%",height:"120%"}),$wrapper=$('<div id="move-fx-wrap"></div>'),$wrapper.css({position:"absolute !important",top:"0",left:"0",width:"100%",height:"100%","z-index":"700"}),$("#page-wrapper").append($wrapper),$wrapper.append(e);var n=["rgb(255,0,0)","rgb(127,128,0)","rgb(0,255,0)","rgb(0,127,128)","rgb(0,0,255)"],t=n.length,i=function(){for(var i=[],o=100/t,a="1s",r="opacity",s=0;t>s;s++)i[s]=$('<div class="bar"></div>'),i[s].css({position:"absolute",bottom:"0",left:s*o+"%",width:o+"%",height:"0",opacity:"0","background-color":n[s],"-webkit-transition-duration":a,"-moz-transition-duration":a,"-ms-transition-duration":a,"-o-transition-duration":a,"transition-duration":a,"-webkit-transition-property":r,"-moz-transition-property":r,"-ms-transition-property":r,"-o-transition-property":r,"transition-property":r}),e.append(i[s]);return i}();$(window).mousemove(function(e){for(var n=e.clientX,o=e.clientY,a=$(window).width(),r=$(window).height(),s=a/t,d=(Math.floor(n/s),r-o),c=0;t>c;c++){var l=c*s+s/2,h=Math.abs(l-n),u=a*(t-1)/t,p=1.3*(1-h/u);i[c].css({height:Math.round(d*p)+"px"})}}),this.start=function(){$("#move-fx .bar").css({opacity:"0.4"})},this.stop=function(){$("#move-fx .bar").css({opacity:"0"})}};design(),projects(),loadClip(sketchClips,"sketch-bg-wrap"),isWebgl&&loadClip(threeImgClips,"three-img-bg-wrap"),isPlayVideo&&loadClip(videoClips,"video-bg-wrap"),navigation(),opacityFix()})}).call(this);
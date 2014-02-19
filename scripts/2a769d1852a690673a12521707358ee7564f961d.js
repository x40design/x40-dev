(function(){$(function(){function getModeCookie(e){return document.documentMode&&document.documentMode!=previosDocmode?null:$.cookie(e)}function loadClip(e,n){var o="video-bg-wrap"==n?!0:!1,i=$(o?"#"+n+" .video-bg>video":"#"+n+" .img-bg>img"),t=i.length;if(t<e.length){var a=e[t],r=a.w,s=a.h,d=function(){var e,n,o=$(window).width(),i=$(window).height(),t=r/s,a=o/i;t>a?(n=i,e=Math.round(n*t)):(e=o,n=Math.round(e/t));var d=Math.round((i-n)/2),l=Math.round((o-e)/2);return{width:e+"px",height:n+"px",left:l+"px",top:d+"px"}},l=$(o?'<div class="video-bg"></div>':'<div class="img-bg"></div>');l.appendTo("#"+n),l.css(d()),$(window).on("resize",function(){l.css(d())});var c;o?(c=$('<video class="bg" webkit-playsinline loop></video>'),c[0].muted=a.audio?!1:!0):c=$('<img class="bg" />');var p=function(){loadedClips[n]=void 0===loadedClips[n]?0:loadedClips[n]+1,(void 0===maxLoadedClips[n]||null===maxLoadedClips[n]||""===maxLoadedClips[n]||loadedClips[n]>maxLoadedClips[n])&&(maxLoadedClips[n]=loadedClips[n],$.cookie("max-loaded-"+n,maxLoadedClips[n],{path:"/"})),c.appendTo(l),a.loadQ&&a.loadQ(c),loadClip(e,n)};o?c.one("canplaythrough",p):c.load(p),c[0].src=a.src,o&&c[0].load()}}function moveClear(e){if(e)$(".page-paper.move-out").cssAnOnly({"background-color":""}).removeClass("move-out");else{var n=$(lastHash+" .page-paper");n.addClass("move-out"),n.cssAnOnly({"background-color":$.Color({alpha:0})})}}function design(){var e=!0,n=function(){$(".navbar-collapse.in").collapse("hide"),$(".page-paper").css({overflow:"auto"}),e=!0};$(".navbar-collapse li a").click(n),$(window).on("resize",function(){$(window).width()>767&&n()}),$("#top-nav .navbar-toggle").click(function(){e?($(".page-paper").css({overflow:"hidden"}),e=!1):($(".page-paper").css({overflow:"auto"}),e=!0)});var o=$(".page");o.wrapInner('<div class="col-sm-9 page-content"></div>'),o.wrapInner('<div class="page-paper'+(isMobile?"":" scrollbar")+'"></div>'),$('<div class="film1"></div>').insertBefore($(".page-paper")),$('<div class="film2"><div class="bg-author"></div></div>').insertAfter($(".page-paper")),$("#side-nav a, #top-nav ul a").each(function(){$(this).attr("data-hover",$(this).text())}),isParallax&&(isWebgl||isPlayVideo?($("#video-bg-wrap").addClass("layer").attr("data-depth","0.5"),$("#move-fx-wrap").addClass("layer").attr("data-depth","1")):$("#sketch-bg-wrap, #move-fx-wrap").addClass("layer").attr("data-depth","1"),$scene=$("#page-wrapper").parallax(),$scene.parallax("disable"));var i,t,a=(new Date).getTime(),r=!1;isMobile||$(window).mousemove(function(){var e=function(){var n=500,o=(new Date).getTime();o-a>n?(moveFunc(!0),r=!1):(i&&clearTimeout(i),i=setTimeout(e,n))};r&&t==lastHash||(r=!0,moveFunc(),e()),a=(new Date).getTime(),t=lastHash})}function navigation(){function e(e){function n(){var e=threeBgs[threeCursor];return threeCursor<threeBgs.length-1?threeCursor++:threeCursor=0,$.cookie("lastThreeCursor",threeCursor,{path:"/"}),moveFunc=moveClear,e.start(),e}function o(e,n,o){var i=$("#"+e+" .bg"),t=maxLoadedClips[e],a=clipCursor[e];clipCursor[e]>=t?clipCursor[e]=0:clipCursor[e]++,$.cookie("last-cursor-"+e,clipCursor[e],{path:"/"}),i.length<=a?n[a].loadQ=function(e){n[a].loadQ=!1,o(e,a)}:o($(i[a]),a)}function i(){if(isPlayVideo&&$(".video-bg video").each(function(e){this.pause(),videoClips[e].fx&&videoClips[e].fx.stop()}),isWebgl){for(var e=0;e<threeBgs.length;e++)threeBgs[e].stop();for(var e=0;e<threeImgClips.length;e++)threeImgClips[e].fx&&threeImgClips[e].fx.stop();$(".page-paper").removeClass("black-bg")}moveFx&&moveFx.stop(),isParallax&&$scene.parallax("disable")}function r(){function e(){var e=pgOutClassCur<pgOutClasses.length-1?pgOutClassCur+1:0,n=pgOutClasses[pgOutClassCur];return pgOutClassCur=e,n}$(".page.in").each(Modernizr.cssanimations?function(){var n=$(this);if("#"+n.attr("id")!=lastHash){var o=e();n.removeClass("in "+pgInClasses.join(" ")).addClass("animated out "+o),n.find(".page-box").removeClass(boxInClasses.join(" "))}}:function(){var e=$(this);"#"+e.attr("id")!=lastHash&&e.removeClass("in "+pgInClasses.join(" ")).addClass("out").animate({left:"-"+($(window).width()+5)+"px"},duration,function(){e.css({visibility:"hidden"})})})}function s(){function e(){var e=bgOutClassCur<bgOutClasses.length-1?bgOutClassCur+1:0,n=bgOutClasses[bgOutClassCur];return bgOutClassCur=e,n}$(".bg.in").each(Modernizr.cssanimations?function(){var n=e();$(this).removeClass("in "+bgInClasses.join(" ")).addClass("animated out "+n)}:function(){$(this);$(this).removeClass("in").addClass("out").animate({top:"-100%"},duration)})}function d(e,n){function o(){n&&n()}if(windSnd(),boomSnd(),$("#loading").css({display:"none"}),Modernizr.cssanimations){var i=function(){var e=bgInClassCur<bgInClasses.length-1?bgInClassCur+1:0,n=bgInClasses[bgInClassCur];return bgInClassCur=e,n}();r(),e.hasClass("in")?o():(s(),e.removeClass("out "+bgOutClasses.join(" ")).addClass("over in"),e.one(animationEnd,o),e.addClass("animated "+i))}else if(r(),e.hasClass("in"))o();else{s(),e.removeClass("out").addClass("over in");var t;isParallax?(e.css({top:""}),t=e.css("top")):t=0,e.css({top:"-100%"}),e.animate({top:t},duration,o)}}function l(n,o,i){function s(){if(o.removeClass("over"),n.removeClass("over"),n.find(".page-box").removeClass(l),"#"+n.attr("id")==lastHash){if($.support.transition&&!isMobile){var t,a=$(m+" .film1, "+m+" .film2"),s=a.css("background-position");t=s?s.split(" ")[0].replace("%","").replace("px",""):"0",filmDirect=-1*filmDirect;var d="0"==t?504*filmDirect*4:"0";setTimeout(function(){a.css({"background-position":d+"px 0"})},100)}{$(m+" .page-paper")}$("a").each(function(){$t=$(this),$pli=$t.parents("li"),$pli.removeClass("active"),$t.removeClass("active"),$pli.hasClass("lang")?$t.attr("data-lang")==docLang&&($t.parents("li").addClass("active"),$t.addClass("active")):(this.href==e.href||this.href+"#"==e.href)&&($t.parents("li").addClass("active"),$t.addClass("active"))}),seq&&seq.startAutoPlay(),i&&i()}r()}if($("#side-nav a").css("color",""),Modernizr.opacity&&($(m+" .page-paper").cssAnOnly({"background-color":""}),t.cssAn({"background-color":a})),Modernizr.cssanimations){var d=function(){var e=pgInClassCur<pgInClasses.length-1?pgInClassCur+1:0,n=pgInClasses[pgInClassCur];return pgInClassCur=e,n}(),l=function(){var e=boxInClassCur<boxInClasses.length-1?boxInClassCur+1:0,n=boxInClasses[boxInClassCur];return boxInClassCur=e,n}();n.find(".page-box").addClass("animated "+l),n.removeClass("out "+pgOutClasses.join(" ")).addClass("over in"),n.one(animationEnd,s),n.addClass("animated "+d)}else n.removeClass("out").addClass("over in"),n.css({left:"-100%",visibility:"visible"}),n.animate({left:"0"},duration,s)}function c(){i();var e="three-img-bg-wrap";o(e,threeImgClips,function(e,n){var o=threeImgClips[n];o.fx||(o.fx=new ThreeFx(e[0]));var i=$(o.fx.container);o.fx.start(),o.link&&o.author?$(m+" .bg-author").text("Фото: ").append('<a target="_blank" href="'+o.link+'">'+o.author+"</a>"):$(m+" .bg-author").empty(),d(i,function(){l(g,i)})})}function p(){i(),isParallax&&$scene.parallax("enable");var e="video-bg-wrap";o(e,videoClips,function(e,n){var o=videoClips[n];o.link&&o.author?$(m+" .bg-author").text("Видео: ").append('<a target="_blank" href="'+o.link+'">'+o.author+"</a>"):$(m+" .bg-author").empty(),d(e,function(){l(g,e,function(){e[0].play(),moveFx&&moveFx.start()})})})}function u(){i();var e=n(),o=$(e.container);$(m+" .bg-author").empty(),d(o,function(){e.paperClass&&g.find(".page-paper").addClass(e.paperClass),l(g,o)})}function h(){i(),isParallax&&$scene.parallax("enable");var e="sketch-bg-wrap";o(e,sketchClips,function(e,n){var o=sketchClips[n];o.link&&o.author?$(m+" .bg-author").text("Фон: ").append('<a target="_blank" href="'+o.link+'">'+o.author+"</a>"):$(m+" .bg-author").empty(),d(e,function(){l(g,e,function(){moveFx&&moveFx.start()})})})}var m=e.hash;m=m&&"#"!=m?m.replace("#!","#"):"#index",lastHash=m;var g=$(m);if(!(g.length<1)){$(".page.in").length>0&&($("#side-nav a").css("color","#FF7D8D"),Modernizr.opacity&&t.cssAn({"background-color":"rgba(0, 0, 0, 0.7)"}));var w=function(){var e=[],n=function(){isPlayVideo&&e.push(p)},o=function(){isPlayVideo||isWebgl||e.push(h)},i=function(){isWebgl&&e.push(u)},t=function(){isWebgl&&e.push(c)};return isIE?(i(),i(),t(),n(),t(),n(),i(),n(),t(),i(),n(),i(),n(),o()):(i(),i(),i(),t(),n(),n(),t(),i(),n(),t(),i(),n(),t(),i(),n(),i(),n(),i(),n(),o()),e}();w[fxCursor](),fxCursor<w.length-1?fxCursor++:fxCursor=0,$.cookie("lastFxCursor",fxCursor,{path:"/"})}}var n=!1,o=!1,i=null,t=$("#side-nav"),a=t.css("background-color");$("a").each(function(){this.hash&&(this.hash=this.hash.replace("#","#!"))}),$(window).on("resize",function(){$("#page-wrapper>img.in").each(function(){adjustImg(this)})}),e(location),$("a").click(function(a){function r(){$(".video-bg video").each(function(){this.pause()}),$("#off").css({display:"none"}),$("#on").css({display:"block"}),t.cssAn({opacity:.3});var e=$("#off-bg");e.css({display:"table","background-image":"url(/images/fuzz.gif)"}),setTimeout(function(){e.cssAn({opacity:1})}),n=!0,i=location.hash}function s(){$("#off").css({display:"block"}),$("#on").css({display:"none"});var e=$("#off-bg");e.cssAn({opacity:0}),t.cssAn({opacity:1});var o=$.support.transition?300:duration;setTimeout(function(){e.css({display:"none","background-image":"none"})},o);var i=$(".video-bg video.in");i.length>0&&($(".video-bg video").each(function(){this.pause()}),i[0].play()),n=!1}if("?off=1"===this.search)n||r(),a.preventDefault();else if("?on=1"==this.search)n&&s(),a.preventDefault();else if(o)a.preventDefault();else{n&&s();var d=location.hash?location.href.replace(location.hash,""):location.href.replace(/#$/,""),l=this.hash?this.href.replace(this.hash,""):this.href.replace(/#$/,"");if(this.hash&&l==d)e(this),i=this.hash,location.hash=this.hash,a.preventDefault();else if(l==d)e(this),i="",location.hash="",a.preventDefault();else{var c=this.href;Modernizr.cssanimations?($(".page.in, .bg.in, #move-fx").one(transitionEnd,function(){window.location.href=c}),$(".page.in, .bg.in, #move-fx").css({top:"100%"})):$(".page.in, .bg.in, #move-fx").animate({left:"100%"},duration,function(){window.location.href=c}),a.preventDefault()}}}),$(window).on("hashchange",function(){var n="#"==location.hash?"":location.hash;n!==i&&e(location)})}function projects(){var e=$("#sequence");if(e.length>0){var n={nextButton:!0,prevButton:!0,pagination:!0,animateStartingFrameIn:!0,autoPlay:isMobile?!1:!0,pauseOnHover:!0,autoPlayDelay:3e3,preloader:isMobile?!1:!0,preloadTheseFrames:isMobile?void 0:[1]},o=function(){$("#sequence>.sequence-canvas div[data-img]").each(function(){var e=$(this),n=e.attr("data-img"),o=$(window).width(),i=$(window).height();Modernizr.mq("only all")&&!isMobile&&(580>=o||602>=i?n=n.replace(".png","-c.png"):925>=o||695>=i?n=n.replace(".png","-b.png"):(1199>=o||755>=i)&&(n=n.replace(".png","-a.png")));var t=e.find("img");(t.length<1||t.attr("src")!==n)&&(e.empty(),$('<img src="'+n+'" />').appendTo(e))})};$("#sequence .sequence-pagination .view").length<1&&($("#sequence>.sequence-canvas>li>.view").each(function(){var e=$(this).clone();e.find("div[data-img]").each(function(){var e=$(this);src=e.attr("data-img").replace(".png","-t.png"),$('<img src="'+src+'" />').appendTo(e)}),e.appendTo("#sequence .sequence-pagination")}),o(),$(window).on("resize",o)),seq=$("#sequence").sequence(n).data("sequence"),seq.pause()}}function opacityFix(){if(!Modernizr.opacity){for(var e=[["#top-nav",70],["#top-nav .navbar-toggle",80],["#top-nav li.navbar-text",80],["#side-nav",70],[".page-paper",85],[".page-content i",72],["#off-bg i",20],[".center-menu, .page-box",70],[".descr",70]],n=$("head"),o='<style type="text/css">',i=0;i<e.length;i++)o+=e[i][0]+' {-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity='+e[i][1]+')";}';o+="</style>",n.append($(o))}}function snd(e){if(!isPlayAudio)return function(){};var n={mp3:"audio/mpeg",mp4:"audio/mp4",ogg:"audio/ogg",wav:"audio/wav"},o=[],i=function(){var t=o.length;if(t<e.length){var a=document.createElement("audio");$(a).one("canplaythrough",function(){o.push(this),i()});for(var r=e[t],s=0;s<r.length;s++){var d=document.createElement("source");d.setAttribute("src",r[s]),r[s].match(/\.(\w+)$/i)&&d.setAttribute("type",n[RegExp.$1]),a.appendChild(d)}a.load()}};i();var t=0;return function(){if(o[t]){var e=o[t];t=t<o.length-1?t+1:0,e.pause(),e.currentTime=0,e.play()}}}function audio(){isPlayAudio&&($("a:not(.muted)").click(clickSnd),$("a:not(.muted)").mouseenter(enterSnd))}function ThreeCubemapBalls(){function e(){h=window.innerWidth/2,m=window.innerHeight/2,i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}function n(e){p=10*(e.clientX-h),u=10*(e.clientY-m)}function o(){for(var e=1e-4*Date.now(),n=0,o=c.length;o>n;n++){var d=c[n];d.position.x=5e3*Math.cos(e+n),d.position.y=5e3*Math.sin(e+1.1*n)}i.position.x+=.05*(p-i.position.x),i.position.y+=.05*(-u-i.position.y),i.lookAt(t.position),r.rotation.copy(i.rotation),a.render(s,r),a.render(t,i)}var i,t,a,r,s,d,l,c=[],p=0,u=0,h=window.innerWidth/2,m=window.innerHeight/2;document.addEventListener("mousemove",n,!1);var g;this.container=document.createElement("div"),$(this.container).addClass("bg three"),$("#three-bg-wrap").append(this.container),i=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,1e5),i.position.z=3200,r=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,1e5),t=new THREE.Scene,s=new THREE.Scene;for(var l=new THREE.SphereGeometry(100,32,16),w="/textures/cube/skybox-blue/",f=".jpg",v=[w+"px"+f,w+"nx"+f,w+"py"+f,w+"ny"+f,w+"pz"+f,w+"nz"+f],b=THREE.ImageUtils.loadTextureCube(v,new THREE.CubeRefractionMapping),E=new THREE.MeshBasicMaterial({color:16777215,envMap:b,refractionRatio:.95}),C=0;500>C;C++){var d=new THREE.Mesh(l,E);d.position.x=1e4*Math.random()-5e3,d.position.y=1e4*Math.random()-5e3,d.position.z=1e4*Math.random()-5e3,d.scale.x=d.scale.y=d.scale.z=3*Math.random()+1,t.add(d),c.push(d)}var _=THREE.ShaderLib.cube;_.uniforms.tCube.value=b;var E=new THREE.ShaderMaterial({fragmentShader:_.fragmentShader,vertexShader:_.vertexShader,uniforms:_.uniforms,depthWrite:!1,side:THREE.BackSide}),d=new THREE.Mesh(new THREE.CubeGeometry(100,100,100),E);s.add(d),a=new THREE.WebGLRenderer,a.setSize(window.innerWidth,window.innerHeight),a.autoClear=!1,this.container.appendChild(a.domElement),window.addEventListener("resize",e,!1),this.stop=function(){g=!1},this.start=function(){function e(){g&&(requestAnimationFrame(e),o())}g=!0,e()}}function ThreeParticlesBillboards(){function e(){f=window.innerWidth/2,v=window.innerHeight/2,a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}function n(e){g=e.clientX-f,w=e.clientY-v}function o(e){1==e.touches.length&&(e.preventDefault(),g=e.touches[0].pageX-f,w=e.touches[0].pageY-v)}function i(e){1==e.touches.length&&(e.preventDefault(),g=e.touches[0].pageX-f,w=e.touches[0].pageY-v)}function t(){var e=5e-5*Date.now();a.position.x+=.05*(g-a.position.x),a.position.y+=.05*(-w-a.position.y),a.lookAt(r.position),u=360*(1+e)%360/360,c.color.setHSL(u,.5,.5),s.render(r,a)}var a,r,s,d,l,c,p,u,h,m,g=0,w=0,f=window.innerWidth/2,v=window.innerHeight/2;for(this.paperClass="black-bg",this.container=document.createElement("div"),$(this.container).addClass("bg three"),$("#three-bg-wrap").append(this.container),a=new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,2,2e3),a.position.z=1e3,r=new THREE.Scene,r.fog=new THREE.FogExp2(0,.001),l=new THREE.Geometry,h=THREE.ImageUtils.loadTexture("/textures/sprites/disc.png"),p=0;1e4>p;p++){var b=new THREE.Vector3;b.x=2e3*Math.random()-1e3,b.y=2e3*Math.random()-1e3,b.z=2e3*Math.random()-1e3,l.vertices.push(b)}c=new THREE.ParticleSystemMaterial({size:35,sizeAttenuation:!1,map:h,transparent:!0}),c.color.setHSL(1,.3,.7),d=new THREE.ParticleSystem(l,c),d.sortParticles=!0,r.add(d),s=new THREE.WebGLRenderer({clearAlpha:1}),s.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(s.domElement),document.addEventListener("mousemove",n,!1),document.addEventListener("touchstart",o,!1),document.addEventListener("touchmove",i,!1),window.addEventListener("resize",e,!1),this.stop=function(){m=!1},this.start=function(){function e(){m&&(requestAnimationFrame(e),t())}m=!0,e()}}function ThreeParticlesShapes(){function e(e,n,o){return new THREE.Vector3(e,n,o)}function n(){var e=document.createElement("canvas");e.width=128,e.height=128;var n=e.getContext("2d");n.beginPath(),n.arc(64,64,60,0,2*Math.PI,!1),n.lineWidth=.5,n.stroke(),n.restore();var o=n.createRadialGradient(e.width/2,e.height/2,0,e.width/2,e.height/2,e.width/2);return o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.2,"rgba(255,255,255,1)"),o.addColorStop(.4,"rgba(200,200,200,1)"),o.addColorStop(1,"rgba(0,0,0,1)"),n.fillStyle=o,n.fill(),e}function o(){k=window.innerWidth/2,S=window.innerHeight/2,d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight),E.uniforms.h.value=1/window.innerWidth,C.uniforms.v.value=1/window.innerHeight;var e=15,n=e/window.innerWidth,o=e/window.innerHeight;v.uniforms.delta.value=new THREE.Vector2(n,0),b.uniforms.delta.value=new THREE.Vector2(0,o),f.reset()}function t(e){y=e.clientX-k,x=H+.02*(y-R)}function a(e){1===e.touches.length&&(e.preventDefault(),R=e.touches[0].pageX-k,H=x)}function r(e){1===e.touches.length&&(e.preventDefault(),y=e.touches[0].pageX-k,x=H+.05*(y-R))}function s(){M=T*I.getDelta(),g.geometry.verticesNeedUpdate=!0,attributes.size.needsUpdate=!0,attributes.pcolor.needsUpdate=!0,p.rotation.y+=.05*(x-p.rotation.y),c.clear(),f.render(.1)}var d,l,c,p,u,h,m,g,w,f,v,b,E,C,_,T=50,x=0,H=0,y=0,R=0,k=window.innerWidth/2,S=window.innerHeight/2,M=1,I=new THREE.Clock,P=0;this.paperClass="black-bg",this.container=document.createElement("div"),$(this.container).addClass("bg three"),$("#three-bg-wrap").append(this.container),d=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,2e3),d.position.set(0,150,400),l=new THREE.Scene;var z=new THREE.DirectionalLight(16777215,.5);z.position.set(0,-1,1),z.position.normalize(),l.add(z),h=new THREE.PointLight(16777215,2,300),h.position.set(0,0,0),l.add(h);var L="X40",A=new THREE.MeshFaceMaterial([new THREE.MeshLambertMaterial({color:16777215,shading:THREE.FlatShading,opacity:.95}),new THREE.MeshLambertMaterial({color:16777215})]),W=new THREE.TextGeometry(L,{size:70,height:25,curveSegments:4,font:"helvetiker",bevelEnabled:!0,bevelThickness:2,bevelSize:2,material:0,extrudeMaterial:1});W.computeVertexNormals(),W.computeBoundingBox();var F=-.5*(W.boundingBox.max.x-W.boundingBox.min.x);u=new THREE.Mesh(W,A),u.position.x=F,u.position.y=130,u.position.z=-50,u.rotation.x=0,u.rotation.y=2*Math.PI,p=new THREE.Object3D,p.add(u),l.add(p);var O=7e4,j=new THREE.Geometry,D={__pools:[],get:function(){return this.__pools.length>0?this.__pools.pop():(console.log("pool ran out!"),null)},add:function(e){this.__pools.push(e)}};for(i=0;O>i;i++)j.vertices.push(e(200*Math.random()-100,100*Math.random()+150,50*Math.random())),D.add(i);attributes={size:{type:"f",value:[]},pcolor:{type:"c",value:[]}};var q=n();texture=new THREE.Texture(q),texture.needsUpdate=!0,uniforms={texture:{type:"t",value:texture}};var B=new THREE.ShaderMaterial({uniforms:uniforms,attributes:attributes,vertexShader:document.getElementById("vertexshader").textContent,fragmentShader:document.getElementById("fragmentshader").textContent,blending:THREE.AdditiveBlending,depthWrite:!1,transparent:!0});g=new THREE.ParticleSystem(j,B),g.dynamic=!0;for(var V=g.geometry.vertices,N=attributes.size.value,G=attributes.pcolor.value,U=0;U<V.length;U++)N[U]=50,G[U]=new THREE.Color(0),j.vertices[U].set(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY);p.add(g),g.y=800;var Y=0,X=0;m=new THREE.Shape,m.moveTo(Y+25,X+25),m.bezierCurveTo(Y+25,X+25,Y+20,X,Y,X),m.bezierCurveTo(Y-30,X,Y-30,X+35,Y-30,X+35),m.bezierCurveTo(Y-30,X+55,Y-10,X+77,Y+25,X+95),m.bezierCurveTo(Y+60,X+77,Y+80,X+55,Y+80,X+35),m.bezierCurveTo(Y+80,X+35,Y+80,X,Y+50,X),m.bezierCurveTo(Y+35,X,Y+25,X+25,Y+25,X+25);var K=0,Q=function(){var e=D.get();return N[e]=200*Math.random()+100,e},J=function(e){var n=e.position;e.target.position=n;var o=e.target;if(o){K+=3e-4*M,K>1&&(K-=1),P+=35e-5*M,P>1&&(P-=1);var i=m.getPointAt(P);emitterpos.x=5*i.x-100,emitterpos.y=5*-i.y+400,h.position.x=emitterpos.x,h.position.y=emitterpos.y,h.position.z=100,j.vertices[o]=e.position,G[o].setHSL(K,.6,.1),h.color.setHSL(K,.8,.5)}},Z=function(e){var n=e.target;n&&(G[n].setRGB(0,0,0),j.vertices[n].set(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),D.add(e.target))};w=new SPARKS.Emitter(new SPARKS.SteadyCounter(500)),emitterpos=new THREE.Vector3(0,0,0),w.addInitializer(new SPARKS.Position(new SPARKS.PointZone(emitterpos))),w.addInitializer(new SPARKS.Lifetime(1,15)),w.addInitializer(new SPARKS.Target(null,Q)),w.addInitializer(new SPARKS.Velocity(new SPARKS.PointZone(new THREE.Vector3(0,-5,1)))),w.addAction(new SPARKS.Age),w.addAction(new SPARKS.Accelerate(0,0,-50)),w.addAction(new SPARKS.Move),w.addAction(new SPARKS.RandomDrift(90,100,2e3)),w.addCallback("created",J),w.addCallback("dead",Z),c=new THREE.WebGLRenderer,c.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(c.domElement);var en=new THREE.ShaderPass(THREE.FocusShader),nn=new THREE.ShaderPass(THREE.CopyShader);effectFilm=new THREE.FilmPass(.5,.25,2048,!1);var on=THREE.TriangleBlurShader;v=new THREE.ShaderPass(on,"texture"),b=new THREE.ShaderPass(on,"texture");var tn=15,an=tn/window.innerWidth,rn=tn/window.innerHeight;E=new THREE.ShaderPass(THREE.HorizontalBlurShader),C=new THREE.ShaderPass(THREE.VerticalBlurShader),E.uniforms.h.value=1/window.innerWidth,C.uniforms.v.value=1/window.innerHeight,v.uniforms.delta.value=new THREE.Vector2(an,0),b.uniforms.delta.value=new THREE.Vector2(0,rn),en.uniforms.sampleDistance.value=.99,en.uniforms.waveFactor.value=.003;var sn=new THREE.RenderPass(l,d);f=new THREE.EffectComposer(c),f.addPass(sn),f.addPass(E),f.addPass(C),C.renderToScreen=!0,b.renderToScreen=!0,en.renderToScreen=!0,nn.renderToScreen=!0,effectFilm.renderToScreen=!0,document.addEventListener("touchstart",a,!1),document.addEventListener("touchmove",r,!1),window.addEventListener("resize",o,!1),document.addEventListener("mousemove",t,!1),this.stop=function(){_=!1,w.stop()},this.start=function(){function e(){_&&(requestAnimationFrame(e),s())}_=!0,THREE.EffectComposer.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),THREE.EffectComposer.quad=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null),THREE.EffectComposer.scene=new THREE.Scene,THREE.EffectComposer.scene.add(THREE.EffectComposer.quad),w.start(),e()}}function ThreeFx(e){function n(){w=window.innerWidth/2,f=window.innerHeight/2,a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),p.reset()}function o(e,n,o,i,t){for(var a=e.faceVertexUvs[0],r=0;r<a.length;r++)for(var s=a[r],d=0;d<s.length;d++){var l=s[d];l.x=(l.x+i)*n,l.y=(l.y+t)*o}}function i(e){m=.5*(e.clientX-w),g=e.clientY-f}function t(){var n=5e-5*Date.now();for(a.position.x+=.05*(m-a.position.x),a.position.y+=.05*(-g-a.position.y),a.lookAt(r.position),e.readyState&&e.readyState!==e.HAVE_ENOUGH_DATA||d&&(d.needsUpdate=!0),x=0;u>x;x++)l=b[x],O=360*(l.hue+n)%360/360,l.color.setHSL(O,l.saturation,.5);if(j%1e3>200)for(x=0;u>x;x++)c=v[x],c.rotation.x+=10*c.dx,c.rotation.y+=10*c.dy,c.position.x+=200*c.dx,c.position.y+=200*c.dy,c.position.z+=400*c.dx;if(j%1e3===0)for(x=0;u>x;x++)c=v[x],c.dx*=-1,c.dy*=-1;j++,s.clear(),p.render()}var a,r,s,d,l,c,p,u,h,m=0,g=0,w=window.innerWidth/2,f=window.innerHeight/2,v=[],b=[],E=20,C=10,_=$(e);this.container=document.createElement("div"),$(this.container).addClass("bg three"),$("#three-bg-wrap").append(this.container),a=new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,1e4),a.position.z=500,r=new THREE.Scene;var T=new THREE.DirectionalLight(16777215);T.position.set(.5,1,1).normalize(),r.add(T),s=new THREE.WebGLRenderer({antialias:!1}),s.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(s.domElement),d=new THREE.Texture(e),d.minFilter=THREE.LinearFilter,d.magFilter=THREE.LinearFilter,d.format=THREE.RGBFormat,d.generateMipmaps=!1;var x,H,y,R,k,S,M,I,P;y=1/E,R=1/C,I=_.width()/1.5/E,P=_.height()/1.5/C;var z={color:16777215,map:d},L=new THREE.MeshLambertMaterial(z);for(s.initMaterial(L,r.__lights,r.fog),u=0,x=0;E>x;x++)for(H=0;C>H;H++)k=x,S=H,M=new THREE.CubeGeometry(I,P,I),o(M,y,R,k,S),b[u]=new THREE.MeshLambertMaterial(z),l=b[u],l.hue=x/E,l.saturation=1-H/C,l.color.setHSL(l.hue,l.saturation,.5),c=new THREE.Mesh(M,l),c.position.x=(x-E/2)*I,c.position.y=(H-C/2)*P,c.position.z=0,c.scale.x=c.scale.y=c.scale.z=1,r.add(c),c.dx=.001*(.5-Math.random()),c.dy=.001*(.5-Math.random()),v[u]=c,u+=1;s.autoClear=!1,document.addEventListener("mousemove",i,!1);var A=new THREE.RenderPass(r,a),W=new THREE.BloomPass(1.3),F=new THREE.ShaderPass(THREE.CopyShader);F.renderToScreen=!0,p=new THREE.EffectComposer(s),p.addPass(A),p.addPass(W),p.addPass(F),window.addEventListener("resize",n,!1),this.stop=function(){h=!1},this.start=function(){function e(){h&&(requestAnimationFrame(e),t())}h=!0,THREE.EffectComposer.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),THREE.EffectComposer.quad=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null),THREE.EffectComposer.scene=new THREE.Scene,THREE.EffectComposer.scene.add(THREE.EffectComposer.quad),e()};var O,j=1}function ThreeParticlesDynamic(){function e(e){mouseX=e.clientX-T,mouseY=e.clientY-x,l.rotation.y=.002*(-mouseX-T),l.rotation.x=.002*-mouseY}function n(){T=window.innerWidth/2,x=window.innerHeight/2,s.setSize(window.innerWidth,window.innerHeight),a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),a.lookAt(r.position),h.reset(),m.uniforms.screenWidth.value=window.innerWidth,m.uniforms.screenHeight.value=window.innerHeight}function o(e,n,o,i,t,a,r,s){var p,u,h=e.vertices,m=h.length,g=new THREE.Geometry,w=[];for(p=0;m>p;p++)c=h[p],g.vertices[p]=c.clone(),w[p]=[c.x,c.y,c.z,0,0];var f=[[6e3,0,-4e3],[5e3,0,0],[1e3,0,5e3],[1e3,0,-5e3],[4e3,0,2e3],[-4e3,0,1e3],[-5e3,0,-5e3],[0,0,0]];if(s){for(p=0;p<f.length;p++)u=p<f.length-1?2434341:r,d=new THREE.ParticleSystem(g,new THREE.ParticleSystemMaterial({size:3,color:u})),d.scale.x=d.scale.y=d.scale.z=o,d.position.x=i+f[p][0],d.position.y=t+f[p][1],d.position.z=a+f[p][2],l.add(d),b.push({mesh:d,speed:.5+Math.random()});C+=f.length,E+=f.length*m}else d=new THREE.ParticleSystem(g,new THREE.ParticleSystemMaterial({size:3,color:r})),d.scale.x=d.scale.y=d.scale.z=o,d.position.x=i,d.position.y=t,d.position.z=a,l.add(d),C+=1,E+=m;v.push({mesh:d,vertices:g.vertices,vertices_tmp:w,vl:m,down:0,up:0,direction:0,speed:35,delay:Math.floor(200+200*Math.random()),started:!1,start:Math.floor(100+200*Math.random()),dynamic:s})}function t(){for(delta=10*_.getDelta(),delta=2>delta?delta:2,S=0,M=b.length;M>S;S++)I=b[S],I.mesh.rotation.y+=-.1*delta*I.speed;for(S=0,M=v.length;M>S;S++)if(P=v[S],d=P.mesh,z=P.vertices,L=P.vertices_tmp,A=P.vl,P.dynamic){for(P.start>0?P.start-=1:P.started||(P.direction=-1,P.started=!0),i=0;A>i;i++)c=z[i],F=L[i],P.direction<0&&(c.y>0?(c.x+=1.5*(.5-Math.random())*P.speed*delta,c.y+=3*(.25-Math.random())*P.speed*delta,c.z+=1.5*(.5-Math.random())*P.speed*delta):F[3]||(F[3]=1,P.down+=1)),P.direction>0&&(W=Math.abs(c.x-F[0])+Math.abs(c.y-F[1])+Math.abs(c.z-F[2]),W>1?(c.x+=-(c.x-F[0])/W*P.speed*delta*(.85-Math.random()),c.y+=-(c.y-F[1])/W*P.speed*delta*(1+Math.random()),c.z+=-(c.z-F[2])/W*P.speed*delta*(.85-Math.random())):F[4]||(F[4]=1,P.up+=1));if(P.down===A)if(0===P.delay)for(P.direction=1,P.speed=10,P.down=0,P.delay=320,i=0;A>i;i++)L[i][3]=0;else P.delay-=1;if(P.up===A)if(0===P.delay)for(P.direction=-1,P.speed=35,P.up=0,P.delay=120,i=0;A>i;i++)L[i][4]=0;else P.delay-=1;d.geometry.verticesNeedUpdate=!0}s.clear(),h.render(.01)}var a,r,s,d,l,c,p,u,h,m,g,w=window.innerHeight,f=window.innerWidth,v=[],b=[],E=0,C=0,_=new THREE.Clock,T=window.innerWidth/2,x=window.innerHeight/2;this.paperClass="black-bg",this.container=document.createElement("div"),$(this.container).addClass("bg three"),$("#three-bg-wrap").append(this.container),a=new THREE.PerspectiveCamera(20,f/w,1,5e4),a.position.set(0,700,7e3),r=new THREE.Scene,r.fog=new THREE.FogExp2(260,675e-7),a.lookAt(r.position),p=new THREE.JSONLoader,u=new THREE.BinaryLoader(!0),p.load("/obj/terrain.js",function(e){o(e,r,16.8,-11e3,-200,-5e3,65348,!1),o(e,r,16.8,11e3,-200,-15e3,65331,!1),o(e,r,16.8,0,-200,-15e3,65331,!1),o(e,r,16.8,0,-200,15e3,65331,!1),o(e,r,16.8,11e3,-200,15e3,65314,!1),o(e,r,16.8,-11e3,-200,5e3,65297,!1),o(e,r,16.8,13e3,-200,5e3,65365,!1),o(e,r,16.8,13e3,-200,-5e3,65382,!1)}),u.load("/obj/veyron/VeyronNoUv_bin.js",function(e){o(e,r,6.8,2200,-200,-100,22015,!1)}),u.load("/obj/female02/Female02_bin.js",function(e){o(e,r,4.05,-1e3,-350,0,16768324,!0),o(e,r,4.05,0,-350,0,16777215,!0),o(e,r,4.05,1e3,-350,400,16729122,!0),o(e,r,4.05,250,-350,1500,16750933,!0),o(e,r,4.05,250,-350,2500,16742365,!0)}),u.load("/obj/male02/Male02_bin.js",function(e){o(e,r,4.05,-500,-350,600,16742212,!0),o(e,r,4.05,500,-350,0,16733474,!0),o(e,r,4.05,-250,-350,1500,16750882,!0),o(e,r,4.05,-250,-350,-1500,16751103,!0)}),s=new THREE.WebGLRenderer({antialias:!1}),s.setSize(f,w),s.autoClear=!1,s.sortObjects=!1,this.container.appendChild(s.domElement),s.setClearColor(r.fog.color,1),l=new THREE.Object3D,r.add(l);var H=new THREE.ParticleSystem(new THREE.PlaneGeometry(15e3,15e3,64,64),new THREE.ParticleSystemMaterial({color:16711680,size:10}));H.position.y=-400,H.rotation.x=-Math.PI/2,l.add(H),C+=1,E+=H.geometry.vertices.length;var y=new THREE.RenderPass(r,a),R=new THREE.BloomPass(.75),k=new THREE.FilmPass(.5,.5,1448,!1);m=new THREE.ShaderPass(THREE.FocusShader),m.uniforms.screenWidth.value=window.innerWidth,m.uniforms.screenHeight.value=window.innerHeight,m.renderToScreen=!0,h=new THREE.EffectComposer(s),h.addPass(y),h.addPass(R),h.addPass(k),h.addPass(m),document.addEventListener("mousemove",e,!1),window.addEventListener("resize",n,!1);var S,M,I,P,z,L,A,W,F;this.stop=function(){g=!1},this.start=function(){function e(){g&&(requestAnimationFrame(e),t())}g=!0,THREE.EffectComposer.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),THREE.EffectComposer.quad=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null),THREE.EffectComposer.scene=new THREE.Scene,THREE.EffectComposer.scene.add(THREE.EffectComposer.quad),e()}}var cLang=$.cookie("lang"),lang;if(cLang?lang=cLang:navigator.language?lang=navigator.language.substring(0,2):navigator.browserLanguage&&(lang=navigator.browserLanguage.substring(0,2)),"ru"===lang&&-1!=location.href.indexOf("/en/"))return void window.location.replace(location.href.replace("/en/","/"));if("ru"!==lang&&-1==location.href.indexOf("/en/"))return void window.location.replace(location.href.replace(location.host+location.pathname,location.host+"/en"+location.pathname));$(".lang a").click(function(){$.cookie("lang",$(this).attr("data-lang"),{path:"/"})}),$.fn.cssAn=function(e){return $.support.transition?this.css(e):this.animate(e,duration)},$.fn.cssAnOnly=function(e){return $.support.transition?this.css(e):this};var previosDocmode=$.cookie("docmode");document.documentMode&&$.cookie("docmode",document.documentMode,{path:"/"});var isIE8=$("html").hasClass("ie8"),isIE9=$("html").hasClass("ie9"),isIE10=$("html").hasClass("ie10"),isIE11=function(){var e=document.documentMode;try{document.documentMode=""}catch(n){}res=11===document.documentMode;try{document.documentMode=e}catch(n){}return res}(),isIE=function(){var tmp=document.documentMode,e,isIE;try{document.documentMode=""}catch(e){}res="number"==typeof document.documentMode?!0:eval("/*@cc_on!@*/!1");try{document.documentMode=tmp
}catch(e){}return res}();isWin=$("html").hasClass("win"),isChrome=$("html").hasClass("chrome"),isMobile=$("html").hasClass("mobile-device");var isWebgl=$("html").hasClass("do-webgl"),isPlayVideo=$("html").hasClass("play-video"),isPlayAudio=$("html").hasClass("play-audio"),isParallax=$("html").hasClass("parallax"),docLang=$("html").attr("data-doc-lang"),$scene,duration=800,bgInClasses=["slideInDown","fadeInLeft","slideInLeft","fadeInRight","slideInRight","fadeInDown","fadeInUp"],bgInClassCur=0,pgInClasses=["fadeInLeft","fadeInDown","fadeInUp","fadeInRight"],pgInClassCur=0,boxInClasses=isIE?["bounceIn","pulse","bounce","shake","swing","bounceInLeft"]:["flipInX","bounceIn","pulse","bounce","shake","swing","bounceInLeft","flipInY"],boxInClassCur=0,pgOutClasses=["bounceOutRight","bounceOutLeft","bounceOutDown","bounceOutUp"],pgOutClassCur=0,bgOutClasses=["bounceOutRight","bounceOutLeft","bounceOutDown","bounceOutUp"],bgOutClassCur=0,animationEnd="animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",transitionEnd="webkitTransitionEnd oTransitionEnd transitionend",moveFunc=moveClear,clipCursor=function(){function e(e){var n="last-cursor-"+e,o=getModeCookie(n);return o?o:($.cookie(n,0,{path:"/"}),0)}return{"video-bg-wrap":e("video-bg-wrap"),"sketch-bg-wrap":e("sketch-bg-wrap"),"three-img-bg-wrap":e("three-img-bg-wrap")}}(),loadedClips={},maxLoadedClips={"video-bg-wrap":$.cookie("max-loaded-video-bg-wrap"),"sketch-bg-wrap":$.cookie("max-loaded-sketch-bg-wrap"),"three-img-bg-wrap":$.cookie("max-loaded-three-img-bg-wrap")},getCursor=function(e){var n=getModeCookie(e);return n?n:($.cookie(e,0,{path:"/"}),0)},fxCursor=getCursor("lastFxCursor"),threeCursor=getCursor("lastThreeCursor"),lastHash,loadedVideo=[],currentVideoUrl,filmDirect=1,seq,videoClips=[{src:"/video/circ.hole_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/15533570",author:"beeple"},{src:"/video/cross6_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"/video/nodes_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/9936271",author:"beeple"},{src:"/video/lightgrid_(loop)_1280x720.mp4",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"}],sketchClips=isMobile?$(window).width()<=640?[{src:"/video/lightgrid_(loop)_m.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"/video/cross6_(loop)_m.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"}]:[{src:"/video/lightgrid_(loop)_1280x720.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"/video/cross6_(loop)_1280x720-b.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"}]:[{src:"/video/lightgrid_(loop)_1280x720.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"/video/cross6_(loop)_1280x720.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"/video/lightgrid_(loop)_1280x720-a.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"/video/cross6_(loop)_1280x720-a.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"/video/lightgrid_(loop)_1280x720-c.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"/video/cross6_(loop)_1280x720-c.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"},{src:"/video/lightgrid_(loop)_1280x720-b.jpg",w:1280,h:720,link:"http://vimeo.com/76432043",author:"beeple"},{src:"/video/cross6_(loop)_1280x720-b.jpg",w:1280,h:720,link:"http://vimeo.com/11162767",author:"beeple"}],threeImgClips=[{src:"/images/bg/traffic-1600x1061.jpg",w:1600,h:1061,link:"http://www.flickr.com/photos/yakobusan/3566287076/in/set-72157622430175923",author:"Jakob Montrasio"},{src:"/images/bg/android-1920x1274.jpg",w:1920,h:1274,link:"http://www.flickr.com/photos/peyotll/8378484980/",author:"Benjamin Lefebvre"},{src:"/images/bg/shanghai-1920x1279.jpg",w:1920,h:1279,link:"http://www.flickr.com/photos/yakobusan/3986658544/in/set-72157622430175923",author:"Jakob Montrasio"}],boomSnd=snd([["/audio/boom/195790__klankbeeld__cinematic-boom-130730-06.ogg","/audio/boom/195790__klankbeeld__cinematic-boom-130730-06.mp3"],["/audio/boom/199526__unfa__a-whole-cd-in-4-seconds-sci-fi-computer-working.ogg","/audio/boom/199526__unfa__a-whole-cd-in-4-seconds-sci-fi-computer-working.mp3"],["/audio/boom/93848__robinhood76__01551-low-boom.ogg","/audio/boom/93848__robinhood76__01551-low-boom.mp3"],["/audio/boom/195790__klankbeeld__cinematic-boom-130730-06.ogg","/audio/boom/195790__klankbeeld__cinematic-boom-130730-06.mp3"],["/audio/boom/93848__robinhood76__01551-low-boom.ogg","/audio/boom/93848__robinhood76__01551-low-boom.mp3"],["/audio/boom/93848__robinhood76__01551-low-boom.ogg","/audio/boom/93848__robinhood76__01551-low-boom.mp3"],["/audio/boom/195790__klankbeeld__cinematic-boom-130730-06.ogg","/audio/boom/195790__klankbeeld__cinematic-boom-130730-06.mp3"],["/audio/boom/93848__robinhood76__01551-low-boom.ogg","/audio/boom/93848__robinhood76__01551-low-boom.mp3"],["/audio/boom/199526__unfa__a-whole-cd-in-4-seconds-sci-fi-computer-working.ogg","/audio/boom/199526__unfa__a-whole-cd-in-4-seconds-sci-fi-computer-working.mp3"],["/audio/boom/195790__klankbeeld__cinematic-boom-130730-06.ogg","/audio/boom/195790__klankbeeld__cinematic-boom-130730-06.mp3"],["/audio/boom/195790__klankbeeld__cinematic-boom-130730-06.ogg","/audio/boom/195790__klankbeeld__cinematic-boom-130730-06.mp3"]]),clickSnd=snd([["/audio/click/213148__radiy__click.mp3","/audio/click/213148__radiy__click.ogg"]]),enterSnd=snd([["/audio/swipe/48185__rwm28__digitalhum1.ogg","/audio/swipe/48185__rwm28__digitalhum1.mp3"]]),windSnd=snd([["/audio/wind/148331__shapeshifter242__quiet.ogg","/audio/wind/148331__shapeshifter242__quiet.mp3"],["/audio/wind/158398__kennysvoice__wipenthump.ogg","/audio/wind/158398__kennysvoice__wipenthump.mp3"],["/audio/wind/77080__dj-chronos__giant-wing-flap-5.ogg","/audio/wind/77080__dj-chronos__giant-wing-flap-5.mp3"],["/audio/wind/30328__erh__radio-click-2.ogg","/audio/wind/30328__erh__radio-click-2.mp3"],["/audio/wind/64054__obct__b00-120.ogg","/audio/wind/64054__obct__b00-120.mp3"]]),threeBgs=function(){return isWebgl?isIE?[new ThreeCubemapBalls,new ThreeParticlesDynamic]:[new ThreeCubemapBalls,new ThreeParticlesDynamic,new ThreeParticlesShapes,new ThreeParticlesBillboards]:null}(),moveFx=!isParallax||isMobile?null:new function(){var e=$('<div id="move-fx"></div>');e.css({position:"absolute",top:"-10%",left:"-10%",width:"120%",height:"120%"}),$wrapper=$('<div id="move-fx-wrap"></div>'),$wrapper.css({position:"absolute !important",top:"0",left:"0",width:"100%",height:"100%","z-index":"700"}),$("#page-wrapper").append($wrapper),$wrapper.append(e);var n=["rgb(255,0,0)","rgb(127,128,0)","rgb(0,255,0)","rgb(0,127,128)","rgb(0,0,255)"],o=n.length,i=function(){for(var i=[],t=100/o,a="1s",r="opacity",s=0;o>s;s++)i[s]=$('<div class="bar"></div>'),i[s].css({position:"absolute",bottom:"0",left:s*t+"%",width:t+"%",height:"0",opacity:"0","background-color":n[s],"-webkit-transition-duration":a,"-moz-transition-duration":a,"-ms-transition-duration":a,"-o-transition-duration":a,"transition-duration":a,"-webkit-transition-property":r,"-moz-transition-property":r,"-ms-transition-property":r,"-o-transition-property":r,"transition-property":r}),e.append(i[s]);return i}();$(window).mousemove(function(e){for(var n=e.clientX,t=e.clientY,a=$(window).width(),r=$(window).height(),s=a/o,d=(Math.floor(n/s),r-t),l=0;o>l;l++){var c=l*s+s/2,p=Math.abs(c-n),u=a*(o-1)/o,h=1.3*(1-p/u);i[l].css({height:Math.round(d*h)+"px"})}}),this.start=function(){$("#move-fx .bar").css({opacity:"0.4"})},this.stop=function(){$("#move-fx .bar").css({opacity:"0"})}};opacityFix(),design(),isPlayAudio&&audio(),projects(),loadClip(sketchClips,"sketch-bg-wrap"),isWebgl&&loadClip(threeImgClips,"three-img-bg-wrap"),isPlayVideo&&loadClip(videoClips,"video-bg-wrap"),navigation()})}).call(this);
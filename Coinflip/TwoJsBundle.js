
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(c,k,m){c!=Array.prototype&&c!=Object.prototype&&(c[k]=m.value)};$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(c){return $jscomp.SYMBOL_PREFIX+(c||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var c=$jscomp.global.Symbol.iterator;c||(c=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[c]&&$jscomp.defineProperty(Array.prototype,c,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(c){var k=0;return $jscomp.iteratorPrototype(function(){return k<c.length?{done:!1,value:c[k++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(c){$jscomp.initSymbolIterator();c={next:c};c[$jscomp.global.Symbol.iterator]=function(){return this};return c};$jscomp.iteratorFromArray=function(c,k){$jscomp.initSymbolIterator();c instanceof String&&(c+="");var m=0,l={next:function(){if(m<c.length){var h=m++;return{value:k(h,c[h]),done:!1}}l.next=function(){return{done:!0,value:void 0}};return l.next()}};l[Symbol.iterator]=function(){return l};return l};
$jscomp.polyfill=function(c,k,m,l){if(k){m=$jscomp.global;c=c.split(".");for(l=0;l<c.length-1;l++){var h=c[l];h in m||(m[h]={});m=m[h]}c=c[c.length-1];l=m[c];k=k(l);k!=l&&null!=k&&$jscomp.defineProperty(m,c,{configurable:!0,writable:!0,value:k})}};$jscomp.polyfill("Array.prototype.keys",function(c){return c?c:function(){return $jscomp.iteratorFromArray(this,function(c){return c})}},"es6-impl","es3");
$jscomp.polyfill("Array.prototype.values",function(c){return c?c:function(){return $jscomp.iteratorFromArray(this,function(c,m){return m})}},"es6","es3");$jscomp.polyfill("Array.prototype.fill",function(c){return c?c:function(c,m,l){var h=this.length||0;0>m&&(m=Math.max(0,h+m));if(null==l||l>h)l=h;l=Number(l);0>l&&(l=Math.max(0,h+l));for(m=Number(m||0);m<l;m++)this[m]=c;return this}},"es6-impl","es3");
this.Two=function(c){function k(){var a=document.body.getBoundingClientRect(),c=this.width=a.width,a=this.height=a.height;this.renderer.setSize(c,a,this.ratio);this.trigger(p.Events.resize,c,a)}function m(){L(m);for(var a=0;a<p.Instances.length;a++){var c=p.Instances[a];c.playing&&c.update()}}var l="undefined"!=typeof window?window:"undefined"!=typeof global?global:null,h=Object.prototype.toString,d={_indexAmount:0,natural:{slice:Array.prototype.slice,indexOf:Array.prototype.indexOf,keys:Object.keys,
bind:Function.prototype.bind,create:Object.create},identity:function(a){return a},isArguments:function(a){return"[object Arguments]"===h.call(a)},isFunction:function(a){return"[object Function]"===h.call(a)},isString:function(a){return"[object String]"===h.call(a)},isNumber:function(a){return"[object Number]"===h.call(a)},isDate:function(a){return"[object Date]"===h.call(a)},isRegExp:function(a){return"[object RegExp]"===h.call(a)},isError:function(a){return"[object Error]"===h.call(a)},isFinite:function(a){return isFinite(a)&&
!isNaN(parseFloat(a))},isNaN:function(a){return d.isNumber(a)&&a!==+a},isBoolean:function(a){return!0===a||!1===a||"[object Boolean]"===h.call(a)},isNull:function(a){return null===a},isUndefined:function(a){return void 0===a},isEmpty:function(a){return null==a?!0:q&&(d.isArray(a)||d.isString(a)||d.isArguments(a))?0===a.length:0===d.keys(a).length},isElement:function(a){return!(!a||1!==a.nodeType)},isArray:Array.isArray||function(a){return"[object Array]"===h.call(a)},isObject:function(a){var c=typeof a;
return"function"===c||"object"===c&&!!a},toArray:function(a){return a?d.isArray(a)?x.call(a):q(a)?d.map(a,d.identity):d.values(a):[]},range:function(a,c,f){null==c&&(c=a||0,a=0);f=f||1;c=Math.max(Math.ceil((c-a)/f),0);for(var e=Array(c),d=0;d<c;d++,a+=f)e[d]=a;return e},indexOf:function(a,c){if(d.natural.indexOf)return d.natural.indexOf.call(a,c);for(var f=0;f<a.length;f++)if(a[f]===c)return f;return-1},has:function(a,c){return null!=a&&hasOwnProperty.call(a,c)},bind:function(a,c){var f=d.natural.bind;
if(f&&a.bind===f)return f.apply(a,x.call(arguments,1));var e=x.call(arguments,2);return function(){a.apply(c,e)}},extend:function(a){for(var c=x.call(arguments,1),f=0;f<c.length;f++){var e=c[f],d;for(d in e)a[d]=e[d]}return a},defaults:function(a){for(var c=x.call(arguments,1),f=0;f<c.length;f++){var e=c[f],d;for(d in e)void 0===a[d]&&(a[d]=e[d])}return a},keys:function(a){if(!d.isObject(a))return[];if(d.natural.keys)return d.natural.keys(a);var c=[],f;for(f in a)d.has(a,f)&&c.push(f);return c},values:function(a){for(var c=
d.keys(a),f=[],e=0;e<c.length;e++)f.push(a[c[e]]);return f},each:function(a,c,f){f=f||this;for(var e=!q(a)&&d.keys(a),g=(e||a).length,y=0;y<g;y++){var n=e?e[y]:y;c.call(f,a[n],n,a)}return a},map:function(a,c,f){f=f||this;for(var e=!q(a)&&d.keys(a),g=(e||a).length,n=[],y=0;y<g;y++){var t=e?e[y]:y;n[y]=c.call(f,a[t],t,a)}return n},once:function(a){var c=!1;return function(){if(c)return a;c=!0;return a.apply(this,arguments)}},after:function(a,c){return function(){for(;1>--a;)return c.apply(this,arguments)}},
uniqueId:function(a){var c=++d._indexAmount+"";return a?a+c:c}},e=Math.sin,a=Math.cos,g=Math.atan2,n=Math.sqrt,f=Math.PI,t=f/2,v=Math.pow,B=Math.min,z=Math.max,A=0,x=d.natural.slice,u=l.performance&&l.performance.now?l.performance:Date,r=Math.pow(2,53)-1,q=function(a){a=null==a?void 0:a.length;return"number"==typeof a&&0<=a&&a<=r},w={temp:l.document?l.document.createElement("div"):{},hasEventListeners:d.isFunction(l.addEventListener),bind:function(a,c,f,e){this.hasEventListeners?a.addEventListener(c,
f,!!e):a.attachEvent("on"+c,f);return w},unbind:function(a,c,f,e){w.hasEventListeners?a.removeEventListeners(c,f,!!e):a.detachEvent("on"+c,f);return w},getRequestAnimationFrame:function(){var a=0,c=["ms","moz","webkit","o"],f=l.requestAnimationFrame;if(!f){for(var e=0;e<c.length;e++)f=l[c[e]+"RequestAnimationFrame"]||f;f=f||function(c,f){var e=(new Date).getTime(),d=Math.max(0,16-(e-a));f=l.setTimeout(function(){c(e+d)},d);a=e+d;return f}}f.init=d.once(m);return f}},p=l.Two=function(a){a=d.defaults(a||
{},{fullscreen:!1,width:640,height:480,type:p.Types.svg,autostart:!1});d.each(a,function(a,c){"fullscreen"!==c&&"autostart"!==c&&(this[c]=a)},this);if(d.isElement(a.domElement)){var c=a.domElement.tagName.toLowerCase();/^(CanvasRenderer-canvas|WebGLRenderer-canvas|SVGRenderer-svg)$/.test(this.type+"-"+c)||(this.type=p.Types[c])}this.renderer=new p[this.type](this);p.Utils.setPlaying.call(this,a.autostart);this.frameCount=0;a.fullscreen?(a=d.bind(k,this),d.extend(document.body.style,{overflow:"hidden",
margin:0,padding:0,top:0,left:0,right:0,bottom:0,position:"fixed"}),d.extend(this.renderer.domElement.style,{display:"block",top:0,left:0,right:0,bottom:0,position:"fixed"}),w.bind(l,"resize",a),a()):d.isElement(a.domElement)||(this.renderer.setSize(a.width,a.height,this.ratio),this.width=a.width,this.height=a.height);this.scene=this.renderer.scene;p.Instances.push(this);L.init()};d.extend(p,{root:l,Array:l.Float32Array||Array,Types:{webgl:"WebGLRenderer",svg:"SVGRenderer",canvas:"CanvasRenderer"},
Version:"v0.7.0",Identifier:"two_",Properties:{hierarchy:"hierarchy",demotion:"demotion"},Events:{play:"play",pause:"pause",update:"update",render:"render",resize:"resize",change:"change",remove:"remove",insert:"insert",order:"order",load:"load"},Commands:{move:"M",line:"L",curve:"C",close:"Z"},Resolution:8,Instances:[],noConflict:function(){l.Two=c;return this},uniqueId:function(){var a=A;A++;return a},Utils:d.extend(d,{performance:u,defineProperty:function(a){var c="_"+a,f="_flag"+a.charAt(0).toUpperCase()+
a.slice(1);Object.defineProperty(this,a,{enumerable:!0,get:function(){return this[c]},set:function(a){this[c]=a;this[f]=!0}})},release:function(a){d.isObject(a)&&(d.isFunction(a.unbind)&&a.unbind(),a.vertices&&(d.isFunction(a.vertices.unbind)&&a.vertices.unbind(),d.each(a.vertices,function(a){d.isFunction(a.unbind)&&a.unbind()})),a.children&&d.each(a.children,function(a){p.Utils.release(a)}))},xhr:function(a,c){var f=new XMLHttpRequest;f.open("GET",a);f.onreadystatechange=function(){4===f.readyState&&
200===f.status&&c(f.responseText)};f.send();return f},Curve:{CollinearityEpsilon:v(10,-30),RecursionLimit:16,CuspLimit:0,Tolerance:{distance:.25,angle:0,epsilon:.01},abscissas:[[.5773502691896257],[0,.7745966692414834],[.33998104358485626,.8611363115940526],[0,.5384693101056831,.906179845938664],[.2386191860831969,.6612093864662645,.932469514203152],[0,.4058451513773972,.7415311855993945,.9491079123427585],[.1834346424956498,.525532409916329,.7966664774136267,.9602898564975363],[0,.3242534234038089,
.6133714327005904,.8360311073266358,.9681602395076261],[.14887433898163122,.4333953941292472,.6794095682990244,.8650633666889845,.9739065285171717],[0,.26954315595234496,.5190961292068118,.7301520055740494,.8870625997680953,.978228658146057],[.1252334085114689,.3678314989981802,.5873179542866175,.7699026741943047,.9041172563704749,.9815606342467192],[0,.2304583159551348,.44849275103644687,.6423493394403402,.8015780907333099,.9175983992229779,.9841830547185881],[.10805494870734367,.31911236892788974,
.5152486363581541,.6872929048116855,.827201315069765,.9284348836635735,.9862838086968123],[0,.20119409399743451,.3941513470775634,.5709721726085388,.7244177313601701,.8482065834104272,.937273392400706,.9879925180204854],[.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]],weights:[[1],[.8888888888888888,.5555555555555556],[.6521451548625461,.34785484513745385],[.5688888888888889,.47862867049936647,.23692688505618908],
[.46791393457269104,.3607615730481386,.17132449237917036],[.4179591836734694,.3818300505051189,.27970539148927664,.1294849661688697],[.362683783378362,.31370664587788727,.22238103445337448,.10122853629037626],[.3302393550012598,.31234707704000286,.26061069640293544,.1806481606948574,.08127438836157441],[.29552422471475287,.26926671930999635,.21908636251598204,.1494513491505806,.06667134430868814],[.2729250867779006,.26280454451024665,.23319376459199048,.18629021092773426,.1255803694649046,.05566856711617366],
[.24914704581340277,.2334925365383548,.20316742672306592,.16007832854334622,.10693932599531843,.04717533638651183],[.2325515532308739,.22628318026289723,.2078160475368885,.17814598076194574,.13887351021978725,.09212149983772845,.04048400476531588],[.2152638534631578,.2051984637212956,.18553839747793782,.15720316715819355,.12151857068790319,.08015808715976021,.03511946033175186],[.2025782419255613,.19843148532711158,.1861610000155622,.16626920581699392,.13957067792615432,.10715922046717194,.07036604748810812,
.03075324199611727],[.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.062253523938647894,.027152459411754096]]},devicePixelRatio:l.devicePixelRatio||1,getBackingStoreRatio:function(a){return a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||a.backingStorePixelRatio||1},getRatio:function(a){return p.Utils.devicePixelRatio/O(a)},setPlaying:function(a){this.playing=!!a;return this},
getComputedMatrix:function(a,c){c=c&&c.identity()||new p.Matrix;for(var f=[];a&&a._matrix;)f.push(a._matrix),a=a.parent;f.reverse();d.each(f,function(a){a=a.elements;c.multiply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9])});return c},deltaTransformPoint:function(a,c,f){return new p.Vector(c*a.a+f*a.c+0,c*a.b+f*a.d+0)},decomposeMatrix:function(a){var c=p.Utils.deltaTransformPoint(a,0,1),f=p.Utils.deltaTransformPoint(a,1,0),c=180/Math.PI*Math.atan2(c.y,c.x)-90;return{translateX:a.e,translateY:a.f,
scaleX:Math.sqrt(a.a*a.a+a.b*a.b),scaleY:Math.sqrt(a.c*a.c+a.d*a.d),skewX:c,skewY:180/Math.PI*Math.atan2(f.y,f.x),rotation:c}},applySvgAttributes:function(a,c){var f={},e={},g;if(getComputedStyle){var n=getComputedStyle(a);for(g=n.length;g--;){var t=n[g];var y=n[t];void 0!==y&&(e[t]=y)}}for(g=a.attributes.length;g--;)y=a.attributes[g],f[y.nodeName]=y.value;d.isUndefined(e.opacity)||(e["stroke-opacity"]=e.opacity,e["fill-opacity"]=e.opacity);d.extend(e,f);e.visible=!(d.isUndefined(e.display)&&"none"===
e.display)||d.isUndefined(e.visibility)&&"hidden"===e.visibility;for(t in e)switch(y=e[t],t){case "transform":if("none"===y)break;if(null===(a.getCTM?a.getCTM():null))break;f=p.Utils.decomposeMatrix(a.getCTM());c.translation.set(f.translateX,f.translateY);c.rotation=f.rotation;c.scale=f.scaleX;f=parseFloat((e.x+"").replace("px"));g=parseFloat((e.y+"").replace("px"));f&&(c.translation.x=f);g&&(c.translation.y=g);break;case "visible":c.visible=y;break;case "stroke-linecap":c.cap=y;break;case "stroke-linejoin":c.join=
y;break;case "stroke-miterlimit":c.miter=y;break;case "stroke-width":c.linewidth=parseFloat(y);break;case "stroke-opacity":case "fill-opacity":case "opacity":c.opacity=parseFloat(y);break;case "fill":case "stroke":/url\(\#.*\)/i.test(y)?c[t]=this.getById(y.replace(/url\(\#(.*)\)/i,"$1")):c[t]="none"===y?"transparent":y;break;case "id":c.id=y;break;case "class":c.classList=y.split(" ")}return c},read:{svg:function(){return p.Utils.read.g.apply(this,arguments)},g:function(a){var c=new p.Group;p.Utils.applySvgAttributes.call(this,
a,c);for(var f=0,e=a.childNodes.length;f<e;f++){var d=a.childNodes[f],g=d.nodeName;if(!g)return;g=g.replace(/svg\:/ig,"").toLowerCase();g in p.Utils.read&&(d=p.Utils.read[g].call(c,d),c.add(d))}return c},polygon:function(a,c){var f=[];a.getAttribute("points").replace(/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,function(a,c,e){f.push(new p.Anchor(parseFloat(c),parseFloat(e)))});c=(new p.Path(f,!c)).noStroke();c.fill="black";return p.Utils.applySvgAttributes.call(this,a,c)},polyline:function(a){return p.Utils.read.polygon.call(this,
a,!0)},path:function(a){var c=a.getAttribute("d"),f=new p.Anchor,e,g,n=!1,t=!1,y=c.match(/[a-df-z][^a-df-z]*/ig),h=y.length-1;d.each(y.slice(0),function(a,c){var f=a[0],e=f.toLowerCase(),g=a.slice(1).trim().split(/[\s,]+|(?=\s?[+\-])/),d=[],n;0>=c&&(y=[]);switch(e){case "h":case "v":1<g.length&&(n=1);break;case "m":case "l":case "t":2<g.length&&(n=2);break;case "s":case "q":4<g.length&&(n=4);break;case "c":6<g.length&&(n=6)}if(n){a=0;c=g.length;for(e=0;a<c;a+=n){var t=f;if(0<e)switch(f){case "m":t=
"l";break;case "M":t="L"}d.push([t].concat(g.slice(a,a+n)).join(" "));e++}y=Array.prototype.concat.apply(y,d)}else y.push(a)});var m=[];d.each(y,function(a,c){var y=a[0],D=y.toLowerCase();g=a.slice(1).trim();g=g.replace(/(-?\d+(?:\.\d*)?)[eE]([+\-]?\d+)/g,function(a,c,f){return parseFloat(c)*v(10,f)});g=g.split(/[\s,]+|(?=\s?[+\-])/);t=y===D;switch(D){case "z":if(c>=h)n=!0;else{a=f.x;c=f.y;var k=new p.Anchor(a,c,void 0,void 0,void 0,void 0,p.Commands.close)}break;case "m":case "l":a=parseFloat(g[0]);
c=parseFloat(g[1]);k=new p.Anchor(a,c,void 0,void 0,void 0,void 0,"m"===D?p.Commands.move:p.Commands.line);t&&k.addSelf(f);f=k;break;case "h":case "v":c="h"===D?"x":"y";D="x"===c?"y":"x";k=new p.Anchor(void 0,void 0,void 0,void 0,void 0,void 0,p.Commands.line);k[c]=parseFloat(g[0]);k[D]=f[D];t&&(k[c]+=f[c]);f=k;break;case "c":case "s":k=f.x;c=f.y;e||(e=new p.Vector);if("c"===D){y=parseFloat(g[0]);var B=parseFloat(g[1]);var l=parseFloat(g[2]);var z=parseFloat(g[3]);D=parseFloat(g[4]);a=parseFloat(g[5])}else D=
M(f,e,t),y=D.x,B=D.y,l=parseFloat(g[0]),z=parseFloat(g[1]),D=parseFloat(g[2]),a=parseFloat(g[3]);t&&(y+=k,B+=c,l+=k,z+=c,D+=k,a+=c);d.isObject(f.controls)||p.Anchor.AppendCurveProperties(f);f.controls.right.set(y-f.x,B-f.y);f=k=new p.Anchor(D,a,l-D,z-a,void 0,void 0,p.Commands.curve);e=k.controls.left;break;case "t":case "q":k=f.x;c=f.y;e||(e=new p.Vector);e.isZero()?(y=k,B=c):(y=e.x,c=e.y);"q"===D?(l=parseFloat(g[0]),z=parseFloat(g[1]),D=parseFloat(g[1]),a=parseFloat(g[2])):(D=M(f,e,t),l=D.x,z=D.y,
D=parseFloat(g[0]),a=parseFloat(g[1]));t&&(y+=k,B+=c,l+=k,z+=c,D+=k,a+=c);d.isObject(f.controls)||p.Anchor.AppendCurveProperties(f);f.controls.right.set(y-f.x,B-f.y);f=k=new p.Anchor(D,a,l-D,z-a,void 0,void 0,p.Commands.curve);e=k.controls.left;break;case "a":k=f.x;c=f.y;var J=parseFloat(g[0]),x=parseFloat(g[1]);B=parseFloat(g[2])*Math.PI/180;y=parseFloat(g[3]);l=parseFloat(g[4]);D=parseFloat(g[5]);a=parseFloat(g[6]);t&&(D+=k,a+=c);var u=(D-k)/2,A=(a-c)/2;z=u*Math.cos(B)+A*Math.sin(B);var u=-u*Math.sin(B)+
A*Math.cos(B),A=J*J,q=x*x,r=z*z,K=u*u,Q=r/A+K/q;1<Q&&(J*=Math.sqrt(Q),x*=Math.sqrt(Q));q=Math.sqrt((A*q-A*K-q*r)/(A*K+q*r));d.isNaN(q)?q=0:y!=l&&0<q&&(q*=-1);A=q*J*u/x;q=-q*x*z/J;k=A*Math.cos(B)-q*Math.sin(B)+(k+D)/2;var r=A*Math.sin(B)+q*Math.cos(B)+(c+a)/2,w=function(a,c){return(a[0]*c[0]+a[1]*c[1])/(Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2))*Math.sqrt(Math.pow(c[0],2)+Math.pow(c[1],2)))};c=function(a,c){return(a[0]*c[1]<a[1]*c[0]?-1:1)*Math.acos(w(a,c))};var S=c([1,0],[(z-A)/J,(u-q)/x]),K=[(z-
A)/J,(u-q)/x];z=[(-z-A)/J,(-u-q)/x];var C=c(K,z);-1>=w(K,z)&&(C=Math.PI);1<=w(K,z)&&(C=0);y&&(C=I(C,2*Math.PI));l&&0<C&&(C-=2*Math.PI);var R=p.Resolution,T=(new p.Matrix).translate(k,r).rotate(B);k=d.map(d.range(R),function(a){a=(1-a/(R-1))*C+S;a=T.multiply(J*Math.cos(a),x*Math.sin(a),1);return new p.Anchor(a.x,a.y,!1,!1,!1,!1,p.Commands.line)});k.push(new p.Anchor(D,a,!1,!1,!1,!1,p.Commands.line));f=k[k.length-1];e=f.controls.left}k&&(d.isArray(k)?m=m.concat(k):m.push(k))});if(!(1>=m.length)){c=
(new p.Path(m,n,void 0,!0)).noStroke();c.fill="black";var k=c.getBoundingClientRect(!0);k.centroid={x:k.left+k.width/2,y:k.top+k.height/2};d.each(c.vertices,function(a){a.subSelf(k.centroid)});c.translation.addSelf(k.centroid);return p.Utils.applySvgAttributes.call(this,a,c)}},circle:function(a){var c=parseFloat(a.getAttribute("cx")),f=parseFloat(a.getAttribute("cy")),e=parseFloat(a.getAttribute("r")),c=(new p.Circle(c,f,e)).noStroke();c.fill="black";return p.Utils.applySvgAttributes.call(this,a,
c)},ellipse:function(a){var c=parseFloat(a.getAttribute("cx")),f=parseFloat(a.getAttribute("cy")),e=parseFloat(a.getAttribute("rx")),g=parseFloat(a.getAttribute("ry")),c=(new p.Ellipse(c,f,e,g)).noStroke();c.fill="black";return p.Utils.applySvgAttributes.call(this,a,c)},rect:function(a){var c=parseFloat(a.getAttribute("x"))||0,f=parseFloat(a.getAttribute("y"))||0,e=parseFloat(a.getAttribute("width")),g=parseFloat(a.getAttribute("height")),c=(new p.Rectangle(c+e/2,f+g/2,e,g)).noStroke();c.fill="black";
return p.Utils.applySvgAttributes.call(this,a,c)},line:function(a){var c=parseFloat(a.getAttribute("x1")),f=parseFloat(a.getAttribute("y1")),e=parseFloat(a.getAttribute("x2")),g=parseFloat(a.getAttribute("y2")),c=(new p.Line(c,f,e,g)).noFill();return p.Utils.applySvgAttributes.call(this,a,c)},lineargradient:function(a){for(var c,f=parseFloat(a.getAttribute("x1")),e=parseFloat(a.getAttribute("y1")),g=parseFloat(a.getAttribute("x2")),n=parseFloat(a.getAttribute("y2")),t=(g+f)/2,h=(n+e)/2,y=[],v=0;v<
a.children.length;v++){c=a.children[v];var k=parseFloat(c.getAttribute("offset")),m=c.getAttribute("stop-color"),B=c.getAttribute("stop-opacity"),l=c.getAttribute("style");d.isNull(m)&&(m=(c=l?l.match(/stop\-color\:\s?([\#a-fA-F0-9]*)/):!1)&&1<c.length?c[1]:void 0);d.isNull(B)&&(B=(c=l?l.match(/stop\-opacity\:\s?([0-9\.\-]*)/):!1)&&1<c.length?parseFloat(c[1]):1);y.push(new p.Gradient.Stop(k,m,B))}f=new p.LinearGradient(f-t,e-h,g-t,n-h,y);return p.Utils.applySvgAttributes.call(this,a,f)},radialgradient:function(a){var c=
parseFloat(a.getAttribute("cx"))||0,f=parseFloat(a.getAttribute("cy"))||0,e=parseFloat(a.getAttribute("r")),g=parseFloat(a.getAttribute("fx")),n=parseFloat(a.getAttribute("fy"));d.isNaN(g)&&(g=c);d.isNaN(n)&&(n=f);for(var t=Math.abs(c+g)/2,h=Math.abs(f+n)/2,v=[],y=0;y<a.children.length;y++){var k=a.children[y];var m=parseFloat(k.getAttribute("offset")),B=k.getAttribute("stop-color"),l=k.getAttribute("stop-opacity"),z=k.getAttribute("style");d.isNull(B)&&(B=(k=z?z.match(/stop\-color\:\s?([\#a-fA-F0-9]*)/):
!1)&&1<k.length?k[1]:void 0);d.isNull(l)&&(l=(k=z?z.match(/stop\-opacity\:\s?([0-9\.\-]*)/):!1)&&1<k.length?parseFloat(k[1]):1);v.push(new p.Gradient.Stop(m,B,l))}c=new p.RadialGradient(c-t,f-h,e,v,g-t,n-h);return p.Utils.applySvgAttributes.call(this,a,c)}},subdivide:function(a,c,f,e,g,n,t,h,v){v=v||p.Utils.Curve.RecursionLimit;var y=v+1;return a===t&&c===h?[new p.Anchor(t,h)]:d.map(d.range(0,y),function(d){var v=d/y;d=N(v,a,f,g,t);v=N(v,c,e,n,h);return new p.Anchor(d,v)})},getPointOnCubicBezier:function(a,
c,f,e,g){var d=1-a;return d*d*d*c+3*d*d*a*f+3*d*a*a*e+a*a*a*g},getCurveLength:function(a,c,f,e,g,d,t,v,h){if(a===f&&c===e&&g===t&&d===v)return a=t-a,c=v-c,n(a*a+c*c);var y=9*(f-g)+3*(t-a),k=6*(a+g)-12*f,B=3*(f-a),m=9*(e-d)+3*(v-c),l=6*(c+d)-12*e,D=3*(e-c);return P(function(a){var c=(y*a+k)*a+B;a=(m*a+l)*a+D;return n(c*c+a*a)},0,1,h||p.Utils.Curve.RecursionLimit)},integrate:function(a,c,f,e){var g=p.Utils.Curve.abscissas[e-2],d=p.Utils.Curve.weights[e-2];f=.5*(f-c);c=f+c;var n=0,t=e+1>>1;for(e=e&1?
d[n++]*a(c):0;n<t;){var v=f*g[n];e+=d[n++]*(a(c+v)+a(c-v))}return f*e},getCurveFromPoints:function(a,c){for(var f=a.length,e=f-1,g=0;g<f;g++){var n=a[g];d.isObject(n.controls)||p.Anchor.AppendCurveProperties(n);var t=c?I(g-1,f):z(g-1,0),v=c?I(g+1,f):B(g+1,e);F(a[t],n,a[v]);n._command=0===g?p.Commands.move:p.Commands.curve;n.controls.left.x=d.isNumber(n.controls.left.x)?n.controls.left.x:n.x;n.controls.left.y=d.isNumber(n.controls.left.y)?n.controls.left.y:n.y;n.controls.right.x=d.isNumber(n.controls.right.x)?
n.controls.right.x:n.x;n.controls.right.y=d.isNumber(n.controls.right.y)?n.controls.right.y:n.y}},getControlPoints:function(c,g,n){var v=G(c,g),h=G(n,g);c=E(c,g);n=E(n,g);var k=(v+h)/2;g.u=d.isObject(g.controls.left)?g.controls.left:new p.Vector(0,0);g.v=d.isObject(g.controls.right)?g.controls.right:new p.Vector(0,0);if(.0001>c||.0001>n)return g._relative||(g.controls.left.copy(g),g.controls.right.copy(g)),g;c*=.33;n*=.33;k=h<v?k+t:k-t;g.controls.left.x=a(k)*c;g.controls.left.y=e(k)*c;k-=f;g.controls.right.x=
a(k)*n;g.controls.right.y=e(k)*n;g._relative||(g.controls.left.x+=g.x,g.controls.left.y+=g.y,g.controls.right.x+=g.x,g.controls.right.y+=g.y);return g},getReflection:function(a,c,f){return new p.Vector(2*a.x-(c.x+a.x)-(f?a.x:0),2*a.y-(c.y+a.y)-(f?a.y:0))},getAnchorsFromArcData:function(a,c,f,e,g,n,t){(new p.Matrix).translate(a.x,a.y).rotate(c);var v=p.Resolution;return d.map(d.range(v),function(a){a=(a+1)/v;t&&(a=1-a);a=a*n+g;a=new p.Anchor(f*Math.cos(a),e*Math.sin(a));p.Anchor.AppendCurveProperties(a);
a.command=p.Commands.line;return a})},ratioBetween:function(a,c){return(a.x*c.x+a.y*c.y)/(a.length()*c.length())},angleBetween:function(a,c){if(4<=arguments.length){var f=arguments[0]-arguments[2];var e=arguments[1]-arguments[3];return g(e,f)}f=a.x-c.x;e=a.y-c.y;return g(e,f)},distanceBetweenSquared:function(a,c){var f=a.x-c.x;a=a.y-c.y;return f*f+a*a},distanceBetween:function(a,c){return n(H(a,c))},lerp:function(a,c,f){return f*(c-a)+a},toFixed:function(a){return Math.floor(1E3*a)/1E3},mod:function(a,
c){for(;0>a;)a+=c;return a%c},Collection:function(){Array.call(this);1<arguments.length?Array.prototype.push.apply(this,arguments):arguments[0]&&Array.isArray(arguments[0])&&Array.prototype.push.apply(this,arguments[0])},Error:function(a){this.name="two.js";this.message=a},Events:{on:function(a,c){this._events||(this._events={});(this._events[a]||(this._events[a]=[])).push(c);return this},off:function(a,c){if(!this._events)return this;if(!a&&!c)return this._events={},this;for(var f=a?[a]:d.keys(this._events),
e=0,g=f.length;e<g;e++){a=f[e];var n=this._events[a];if(n){var t=[];if(c)for(var v=0,h=n.length;v<h;v++){var k=n[v],k=k.callback?k.callback:k;c&&c!==k&&t.push(k)}this._events[a]=t}}return this},trigger:function(a){if(!this._events)return this;var c=x.call(arguments,1),f=this._events[a];f&&C(this,f,c);return this},listen:function(a,c,f){var e=this;if(a){var g=function(){f.apply(e,arguments)};g.obj=a;g.name=c;g.callback=f;a.on(c,g)}return this},ignore:function(a,c,f){a.off(c,f);return this}}})});p.Utils.Events.bind=
p.Utils.Events.on;p.Utils.Events.unbind=p.Utils.Events.off;var C=function(a,c,f){switch(f.length){case 0:var e=function(e){c[e].call(a,f[0])};break;case 1:e=function(e){c[e].call(a,f[0],f[1])};break;case 2:e=function(e){c[e].call(a,f[0],f[1],f[2])};break;case 3:e=function(e){c[e].call(a,f[0],f[1],f[2],f[3])};break;default:e=function(e){c[e].apply(a,f)}}for(var g=0;g<c.length;g++)e(g)};p.Utils.Error.prototype=Error();p.Utils.Error.prototype.constructor=p.Utils.Error;p.Utils.Collection.prototype=[];
p.Utils.Collection.prototype.constructor=p.Utils.Collection;d.extend(p.Utils.Collection.prototype,p.Utils.Events,{pop:function(){var a=Array.prototype.pop.apply(this,arguments);this.trigger(p.Events.remove,[a]);return a},shift:function(){var a=Array.prototype.shift.apply(this,arguments);this.trigger(p.Events.remove,[a]);return a},push:function(){var a=Array.prototype.push.apply(this,arguments);this.trigger(p.Events.insert,arguments);return a},unshift:function(){var a=Array.prototype.unshift.apply(this,
arguments);this.trigger(p.Events.insert,arguments);return a},splice:function(){var a=Array.prototype.splice.apply(this,arguments);this.trigger(p.Events.remove,a);if(2<arguments.length){var c=this.slice(arguments[0],arguments[0]+arguments.length-2);this.trigger(p.Events.insert,c);this.trigger(p.Events.order)}return a},sort:function(){Array.prototype.sort.apply(this,arguments);this.trigger(p.Events.order);return this},reverse:function(){Array.prototype.reverse.apply(this,arguments);this.trigger(p.Events.order);
return this}});var E=p.Utils.distanceBetween,H=p.Utils.distanceBetweenSquared,G=p.Utils.angleBetween,F=p.Utils.getControlPoints,I=p.Utils.mod,O=p.Utils.getBackingStoreRatio,N=p.Utils.getPointOnCubicBezier,P=p.Utils.integrate,M=p.Utils.getReflection;d.extend(p.prototype,p.Utils.Events,{appendTo:function(a){a.appendChild(this.renderer.domElement);return this},play:function(){p.Utils.setPlaying.call(this,!0);return this.trigger(p.Events.play)},pause:function(){this.playing=!1;return this.trigger(p.Events.pause)},
update:function(){var a=!!this._lastFrame,c=u.now();this.frameCount++;a&&(this.timeDelta=parseFloat((c-this._lastFrame).toFixed(3)));this._lastFrame=c;var a=this.width,c=this.height,f=this.renderer;a===f.width&&c===f.height||f.setSize(a,c,this.ratio);this.trigger(p.Events.update,this.frameCount,this.timeDelta);return this.render()},render:function(){this.renderer.render();return this.trigger(p.Events.render,this.frameCount)},add:function(a){var c=a;c instanceof Array||(c=d.toArray(arguments));this.scene.add(c);
return this},remove:function(a){var c=a;c instanceof Array||(c=d.toArray(arguments));this.scene.remove(c);return this},clear:function(){this.scene.remove(d.toArray(this.scene.children));return this},makeLine:function(a,c,f,e){a=new p.Line(a,c,f,e);this.scene.add(a);return a},makeRectangle:function(a,c,f,e){a=new p.Rectangle(a,c,f,e);this.scene.add(a);return a},makeRoundedRectangle:function(a,c,f,e,g){a=new p.RoundedRectangle(a,c,f,e,g);this.scene.add(a);return a},makeCircle:function(a,c,f){a=new p.Circle(a,
c,f);this.scene.add(a);return a},makeEllipse:function(a,c,f,e){a=new p.Ellipse(a,c,f,e);this.scene.add(a);return a},makeStar:function(a,c,f,e,g){a=new p.Star(a,c,f,e,g);this.scene.add(a);return a},makeCurve:function(a){var c=arguments.length,f=a;if(!d.isArray(a))for(var f=[],e=0;e<c;e+=2){var g=arguments[e];if(!d.isNumber(g))break;f.push(new p.Anchor(g,arguments[e+1]))}c=arguments[c-1];f=new p.Path(f,!(d.isBoolean(c)&&c),!0);c=f.getBoundingClientRect();f.center().translation.set(c.left+c.width/2,
c.top+c.height/2);this.scene.add(f);return f},makePolygon:function(a,c,f,e){a=new p.Polygon(a,c,f,e);this.scene.add(a);return a},makeArcSegment:function(a,c,f,e,g,d,n){a=new p.ArcSegment(a,c,f,e,g,d,n);this.scene.add(a);return a},makePath:function(a){var c=arguments.length,f=a;if(!d.isArray(a))for(var f=[],e=0;e<c;e+=2){var g=arguments[e];if(!d.isNumber(g))break;f.push(new p.Anchor(g,arguments[e+1]))}c=arguments[c-1];f=new p.Path(f,!(d.isBoolean(c)&&c));c=f.getBoundingClientRect();f.center().translation.set(c.left+
c.width/2,c.top+c.height/2);this.scene.add(f);return f},makeText:function(a,c,f,e){a=new p.Text(a,c,f,e);this.add(a);return a},makeLinearGradient:function(a,c,f,e){var g=x.call(arguments,4),g=new p.LinearGradient(a,c,f,e,g);this.add(g);return g},makeRadialGradient:function(a,c,f){var e=x.call(arguments,3),e=new p.RadialGradient(a,c,f,e);this.add(e);return e},makeSprite:function(a,c,f,e,g,d,n){a=new p.Sprite(a,c,f,e,g,d);n&&a.play();this.add(a);return a},makeImageSequence:function(a,c,f,e,g){a=new p.ImageSequence(a,
c,f,e);g&&a.play();this.add(a);return a},makeTexture:function(a,c){return new p.Texture(a,c)},makeGroup:function(a){var c=a;c instanceof Array||(c=d.toArray(arguments));var f=new p.Group;this.scene.add(f);f.add(c);return f},interpret:function(a,c){var f=a.tagName.toLowerCase();if(!(f in p.Utils.read))return null;a=p.Utils.read[f].call(this,a);c&&a instanceof p.Group?this.add(a.children):this.add(a);return a},load:function(a,c){var f=[],e;if(/.*\.svg/ig.test(a))return p.Utils.xhr(a,d.bind(function(a){w.temp.innerHTML=
a;for(e=0;e<w.temp.children.length;e++)g=w.temp.children[e],f.push(this.interpret(g));c(1>=f.length?f[0]:f,1>=w.temp.children.length?w.temp.children[0]:w.temp.children)},this)),this;w.temp.innerHTML=a;for(e=0;e<w.temp.children.length;e++){var g=w.temp.children[e];f.push(this.interpret(g))}c(1>=f.length?f[0]:f,1>=w.temp.children.length?w.temp.children[0]:w.temp.children);return this}});var L=w.getRequestAnimationFrame();"function"===typeof define&&define.amd?define("two",[],function(){return p}):"undefined"!=
typeof module&&module.exports&&(module.exports=p);return p}(("undefined"!==typeof global?global:this).Two);(function(c){var k=c.Utils;c=c.Registry=function(){this.map={}};k.extend(c,{});k.extend(c.prototype,{add:function(c,k){this.map[c]=k;return this},remove:function(c){delete this.map[c];return this},get:function(c){return this.map[c]},contains:function(c){return c in this.map}})})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.Vector=function(c,a){this.x=c||0;this.y=a||0};k.extend(m,{zero:new c.Vector});k.extend(m.prototype,c.Utils.Events,{set:function(c,a){this.x=c;this.y=a;return this},copy:function(c){this.x=c.x;this.y=c.y;return this},clear:function(){this.y=this.x=0;return this},clone:function(){return new m(this.x,this.y)},add:function(c,a){this.x=c.x+a.x;this.y=c.y+a.y;return this},addSelf:function(c){this.x+=c.x;this.y+=c.y;return this},sub:function(c,a){this.x=c.x-a.x;this.y=c.y-
a.y;return this},subSelf:function(c){this.x-=c.x;this.y-=c.y;return this},multiplySelf:function(c){this.x*=c.x;this.y*=c.y;return this},multiplyScalar:function(c){this.x*=c;this.y*=c;return this},divideScalar:function(c){c?(this.x/=c,this.y/=c):this.set(0,0);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(c){return this.x*c.x+this.y*c.y},lengthSquared:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.lengthSquared())},normalize:function(){return this.divideScalar(this.length())},
distanceTo:function(c){return Math.sqrt(this.distanceToSquared(c))},distanceToSquared:function(c){var a=this.x-c.x;c=this.y-c.y;return a*a+c*c},setLength:function(c){return this.normalize().multiplyScalar(c)},equals:function(c,a){a="undefined"===typeof a?.0001:a;return this.distanceTo(c)<a},lerp:function(c,a){return this.set((c.x-this.x)*a+this.x,(c.y-this.y)*a+this.y)},isZero:function(c){c="undefined"===typeof c?.0001:c;return this.length()<c},toString:function(){return this.x+", "+this.y},toObject:function(){return{x:this.x,
y:this.y}},rotate:function(c){var a=Math.cos(c);c=Math.sin(c);this.x=this.x*a-this.y*c;this.y=this.x*c+this.y*a;return this}});var l={set:function(e,a){this._x=e;this._y=a;return this.trigger(c.Events.change)},copy:function(e){this._x=e.x;this._y=e.y;return this.trigger(c.Events.change)},clear:function(){this._y=this._x=0;return this.trigger(c.Events.change)},clone:function(){return new m(this._x,this._y)},add:function(e,a){this._x=e.x+a.x;this._y=e.y+a.y;return this.trigger(c.Events.change)},addSelf:function(e){this._x+=
e.x;this._y+=e.y;return this.trigger(c.Events.change)},sub:function(e,a){this._x=e.x-a.x;this._y=e.y-a.y;return this.trigger(c.Events.change)},subSelf:function(e){this._x-=e.x;this._y-=e.y;return this.trigger(c.Events.change)},multiplySelf:function(e){this._x*=e.x;this._y*=e.y;return this.trigger(c.Events.change)},multiplyScalar:function(e){this._x*=e;this._y*=e;return this.trigger(c.Events.change)},divideScalar:function(e){return e?(this._x/=e,this._y/=e,this.trigger(c.Events.change)):this.clear()},
negate:function(){return this.multiplyScalar(-1)},dot:function(c){return this._x*c.x+this._y*c.y},lengthSquared:function(){return this._x*this._x+this._y*this._y},length:function(){return Math.sqrt(this.lengthSquared())},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(c){return Math.sqrt(this.distanceToSquared(c))},distanceToSquared:function(c){var a=this._x-c.x;c=this._y-c.y;return a*a+c*c},setLength:function(c){return this.normalize().multiplyScalar(c)},equals:function(c,
a){a="undefined"===typeof a?.0001:a;return this.distanceTo(c)<a},lerp:function(c,a){return this.set((c.x-this._x)*a+this._x,(c.y-this._y)*a+this._y)},isZero:function(c){c="undefined"===typeof c?.0001:c;return this.length()<c},toString:function(){return this._x+", "+this._y},toObject:function(){return{x:this._x,y:this._y}},rotate:function(c){var a=Math.cos(c);c=Math.sin(c);this._x=this._x*a-this._y*c;this._y=this._x*c+this._y*a;return this}},h={enumerable:!0,get:function(){return this._x},set:function(e){this._x=
e;this.trigger(c.Events.change,"x")}},d={enumerable:!0,get:function(){return this._y},set:function(e){this._y=e;this.trigger(c.Events.change,"y")}};c.Vector.prototype.bind=c.Vector.prototype.on=function(){this._bound||(this._x=this.x,this._y=this.y,Object.defineProperty(this,"x",h),Object.defineProperty(this,"y",d),k.extend(this,l),this._bound=!0);c.Utils.Events.bind.apply(this,arguments);return this}})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Commands,m=c.Utils,l=c.Anchor=function(d,e,a,g,n,f,t){c.Vector.call(this,d,e);this._broadcast=m.bind(function(){this.trigger(c.Events.change)},this);this._command=t||k.move;this._relative=!0;if(!t)return this;l.AppendCurveProperties(this);m.isNumber(a)&&(this.controls.left.x=a);m.isNumber(g)&&(this.controls.left.y=g);m.isNumber(n)&&(this.controls.right.x=n);m.isNumber(f)&&(this.controls.right.y=f)};m.extend(l,{AppendCurveProperties:function(d){d.controls={left:new c.Vector(0,
0),right:new c.Vector(0,0)}}});var h={listen:function(){m.isObject(this.controls)||l.AppendCurveProperties(this);this.controls.left.bind(c.Events.change,this._broadcast);this.controls.right.bind(c.Events.change,this._broadcast);return this},ignore:function(){this.controls.left.unbind(c.Events.change,this._broadcast);this.controls.right.unbind(c.Events.change,this._broadcast);return this},clone:function(){var d=this.controls,d=new c.Anchor(this.x,this.y,d&&d.left.x,d&&d.left.y,d&&d.right.x,d&&d.right.y,
this.command);d.relative=this._relative;return d},toObject:function(){var c={x:this.x,y:this.y};this._command&&(c.command=this._command);this._relative&&(c.relative=this._relative);this.controls&&(c.controls={left:this.controls.left.toObject(),right:this.controls.right.toObject()});return c},toString:function(){return this.controls?[this._x,this._y,this.controls.left.x,this.controls.left.y,this.controls.right.x,this.controls.right.y].join(", "):[this._x,this._y].join(", ")}};Object.defineProperty(l.prototype,
"command",{enumerable:!0,get:function(){return this._command},set:function(d){this._command=d;this._command!==k.curve||m.isObject(this.controls)||l.AppendCurveProperties(this);return this.trigger(c.Events.change)}});Object.defineProperty(l.prototype,"relative",{enumerable:!0,get:function(){return this._relative},set:function(d){if(this._relative==d)return this;this._relative=!!d;return this.trigger(c.Events.change)}});m.extend(l.prototype,c.Vector.prototype,h);c.Anchor.prototype.bind=c.Anchor.prototype.on=
function(){c.Vector.prototype.bind.apply(this,arguments);m.extend(this,h)};c.Anchor.prototype.unbind=c.Anchor.prototype.off=function(){c.Vector.prototype.unbind.apply(this,arguments);m.extend(this,h)}})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=Math.cos,m=Math.sin,l=Math.tan,h=c.Utils,d=c.Matrix=function(e,a,g,d,f,t){this.elements=new c.Array(9);var n=e;h.isArray(n)||(n=h.toArray(arguments));this.identity().set(n)};h.extend(d,{Identity:[1,0,0,0,1,0,0,0,1],Multiply:function(e,a,g){if(3>=a.length){g=a[0]||0;var d=a[1]||0;a=a[2]||0;return{x:e[0]*g+e[1]*d+e[2]*a,y:e[3]*g+e[4]*d+e[5]*a,z:e[6]*g+e[7]*d+e[8]*a}}var d=e[0],f=e[1],t=e[2],v=e[3],h=e[4],k=e[5],m=e[6],l=e[7];e=e[8];var u=a[0],r=a[1],q=a[2],w=a[3],p=a[4],C=a[5],E=
a[6],H=a[7];a=a[8];g=g||new c.Array(9);g[0]=d*u+f*w+t*E;g[1]=d*r+f*p+t*H;g[2]=d*q+f*C+t*a;g[3]=v*u+h*w+k*E;g[4]=v*r+h*p+k*H;g[5]=v*q+h*C+k*a;g[6]=m*u+l*w+e*E;g[7]=m*r+l*p+e*H;g[8]=m*q+l*C+e*a;return g}});h.extend(d.prototype,c.Utils.Events,{set:function(e){var a=e;h.isArray(a)||(a=h.toArray(arguments));h.extend(this.elements,a);return this.trigger(c.Events.change)},identity:function(){this.set(d.Identity);return this},multiply:function(e,a,g,d,f,t,v,k,m){var n=arguments,B=n.length;if(1>=B)return h.each(this.elements,
function(a,c){this.elements[c]=a*e},this),this.trigger(c.Events.change);if(3>=B)return e=e||0,a=a||0,g=g||0,f=this.elements,{x:f[0]*e+f[1]*a+f[2]*g,y:f[3]*e+f[4]*a+f[5]*g,z:f[6]*e+f[7]*a+f[8]*g};var l=this.elements,B=l[0],z=l[1],q=l[2],w=l[3],p=l[4],C=l[5],E=l[6],H=l[7],l=l[8],G=n[0],F=n[1],I=n[2],O=n[3],N=n[4],P=n[5],M=n[6],L=n[7],n=n[8];this.elements[0]=B*G+z*O+q*M;this.elements[1]=B*F+z*N+q*L;this.elements[2]=B*I+z*P+q*n;this.elements[3]=w*G+p*O+C*M;this.elements[4]=w*F+p*N+C*L;this.elements[5]=
w*I+p*P+C*n;this.elements[6]=E*G+H*O+l*M;this.elements[7]=E*F+H*N+l*L;this.elements[8]=E*I+H*P+l*n;return this.trigger(c.Events.change)},inverse:function(e){var a=this.elements;e=e||new c.Matrix;var g=a[0],d=a[1],f=a[2],t=a[3],v=a[4],h=a[5],k=a[6],l=a[7],a=a[8],m=a*v-h*l,u=-a*t+h*k,r=l*t-v*k,q=g*m+d*u+f*r;if(!q)return null;q=1/q;e.elements[0]=m*q;e.elements[1]=(-a*d+f*l)*q;e.elements[2]=(h*d-f*v)*q;e.elements[3]=u*q;e.elements[4]=(a*g-f*k)*q;e.elements[5]=(-h*g+f*t)*q;e.elements[6]=r*q;e.elements[7]=
(-l*g+d*k)*q;e.elements[8]=(v*g-d*t)*q;return e},scale:function(c,a){1>=arguments.length&&(a=c);return this.multiply(c,0,0,0,a,0,0,0,1)},rotate:function(c){var a=k(c);c=m(c);return this.multiply(a,-c,0,c,a,0,0,0,1)},translate:function(c,a){return this.multiply(1,0,c,0,1,a,0,0,1)},skewX:function(c){c=l(c);return this.multiply(1,c,0,0,1,0,0,0,1)},skewY:function(c){c=l(c);return this.multiply(1,0,0,c,1,0,0,0,1)},toString:function(c){var a=[];this.toArray(c,a);return a.join(" ")},toArray:function(c,a){var g=
this.elements,e=!!a,f=parseFloat(g[0].toFixed(3)),d=parseFloat(g[1].toFixed(3)),v=parseFloat(g[2].toFixed(3)),h=parseFloat(g[3].toFixed(3)),k=parseFloat(g[4].toFixed(3)),l=parseFloat(g[5].toFixed(3));if(c){c=parseFloat(g[6].toFixed(3));var m=parseFloat(g[7].toFixed(3)),g=parseFloat(g[8].toFixed(3));if(e){a[0]=f;a[1]=h;a[2]=c;a[3]=d;a[4]=k;a[5]=m;a[6]=v;a[7]=l;a[8]=g;return}return[f,h,c,d,k,m,v,l,g]}if(e)a[0]=f,a[1]=h,a[2]=d,a[3]=k,a[4]=v,a[5]=l;else return[f,h,d,k,v,l]},clone:function(){var e=this.elements[0];
var a=this.elements[1];var g=this.elements[2];var d=this.elements[3];var f=this.elements[4];return new c.Matrix(e,a,g,d,f,this.elements[5],this.elements[6],this.elements[7],this.elements[8])}})})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils.mod,m=c.Utils.toFixed,l=c.Utils,h={version:1.1,ns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",alignments:{left:"start",center:"middle",right:"end"},createElement:function(c,a){var g=document.createElementNS(h.ns,c);"svg"===c&&(a=l.defaults(a||{},{version:h.version}));l.isEmpty(a)||h.setAttributes(g,a);return g},setAttributes:function(c,a){for(var g=Object.keys(a),e=0;e<g.length;e++)/href/.test(g[e])?c.setAttributeNS(h.xlink,g[e],a[g[e]]):c.setAttribute(g[e],
a[g[e]]);return this},removeAttributes:function(c,a){for(var g in a)c.removeAttribute(g);return this},toString:function(e,a){for(var g=e.length,d=g-1,f,t="",h=0;h<g;h++){var l=e[h],z=a?k(h-1,g):Math.max(h-1,0);a&&k(h+1,g);var A=e[z];var x=m(l._x);var u=m(l._y);switch(l._command){case c.Commands.close:var r=c.Commands.close;break;case c.Commands.curve:var q=A.controls&&A.controls.right||c.Vector.zero;r=l.controls&&l.controls.left||c.Vector.zero;A._relative?(z=m(q.x+A.x),A=m(q.y+A.y)):(z=m(q.x),A=m(q.y));
if(l._relative){q=m(r.x+l.x);var w=m(r.y+l.y)}else q=m(r.x),w=m(r.y);r=(0===h?c.Commands.move:c.Commands.curve)+" "+z+" "+A+" "+q+" "+w+" "+x+" "+u;break;case c.Commands.move:f=l;r=c.Commands.move+" "+x+" "+u;break;default:r=l._command+" "+x+" "+u}h>=d&&a&&(l._command===c.Commands.curve&&(u=f,A=l.controls&&l.controls.right||l,x=u.controls&&u.controls.left||u,l._relative?(z=m(A.x+l.x),A=m(A.y+l.y)):(z=m(A.x),A=m(A.y)),u._relative?(q=m(x.x+u.x),w=m(x.y+u.y)):(q=m(x.x),w=m(x.y)),x=m(u.x),u=m(u.y),r+=
" C "+z+" "+A+" "+q+" "+w+" "+x+" "+u),r+=" Z");t+=r+" "}return t},getClip:function(c){var a=c._renderer.clip;if(!a){for(var g=c;g.parent;)g=g.parent;a=c._renderer.clip=h.createElement("clipPath");g.defs.appendChild(a)}return a},group:{appendChild:function(c){var a=c._renderer.elem;if(a){var g=a.nodeName;!g||/(radial|linear)gradient/i.test(g)||c._clip||this.elem.appendChild(a)}},removeChild:function(c){var a=c._renderer.elem;a&&a.parentNode==this.elem&&a.nodeName&&(c._clip||this.elem.removeChild(a))},
orderChild:function(c){this.elem.appendChild(c._renderer.elem)},renderChild:function(c){h[c._renderer.type].render.call(c,this)},render:function(c){this._update();if(0===this._opacity&&!this._flagOpacity)return this;this._renderer.elem||(this._renderer.elem=h.createElement("g",{id:this.id}),c.appendChild(this._renderer.elem));var a={domElement:c,elem:this._renderer.elem};(this._matrix.manual||this._flagMatrix)&&this._renderer.elem.setAttribute("transform","matrix("+this._matrix.toString()+")");for(var g=
0;g<this.children.length;g++){var e=this.children[g];h[e._renderer.type].render.call(e,c)}this._flagOpacity&&this._renderer.elem.setAttribute("opacity",this._opacity);this._flagAdditions&&this.additions.forEach(h.group.appendChild,a);this._flagSubtractions&&this.subtractions.forEach(h.group.removeChild,a);this._flagOrder&&this.children.forEach(h.group.orderChild,a);this._flagMask&&(this._mask?this._renderer.elem.setAttribute("clip-path","url(#"+this._mask.id+")"):this._renderer.elem.removeAttribute("clip-path"));
return this.flagReset()}},path:{render:function(c){this._update();if(0===this._opacity&&!this._flagOpacity)return this;var a={};if(this._matrix.manual||this._flagMatrix)a.transform="matrix("+this._matrix.toString()+")";if(this._flagVertices){var g=h.toString(this._vertices,this._closed);a.d=g}this._fill&&this._fill._renderer&&(this._fill._update(),h[this._fill._renderer.type].render.call(this._fill,c,!0));this._flagFill&&(a.fill=this._fill&&this._fill.id?"url(#"+this._fill.id+")":this._fill);this._stroke&&
this._stroke._renderer&&(this._stroke._update(),h[this._stroke._renderer.type].render.call(this._stroke,c,!0));this._flagStroke&&(a.stroke=this._stroke&&this._stroke.id?"url(#"+this._stroke.id+")":this._stroke);this._flagLinewidth&&(a["stroke-width"]=this._linewidth);this._flagOpacity&&(a["stroke-opacity"]=this._opacity,a["fill-opacity"]=this._opacity);this._flagVisible&&(a.visibility=this._visible?"visible":"hidden");this._flagCap&&(a["stroke-linecap"]=this._cap);this._flagJoin&&(a["stroke-linejoin"]=
this._join);this._flagMiter&&(a["stroke-miterlimit"]=this._miter);this._renderer.elem?h.setAttributes(this._renderer.elem,a):(a.id=this.id,this._renderer.elem=h.createElement("path",a),c.appendChild(this._renderer.elem));this._flagClip&&(c=h.getClip(this),a=this._renderer.elem,this._clip?(a.removeAttribute("id"),c.setAttribute("id",this.id),c.appendChild(a)):(c.removeAttribute("id"),a.setAttribute("id",this.id),this.parent._renderer.elem.appendChild(a)));return this.flagReset()}},text:{render:function(c){this._update();
var a={};if(this._matrix.manual||this._flagMatrix)a.transform="matrix("+this._matrix.toString()+")";this._flagFamily&&(a["font-family"]=this._family);this._flagSize&&(a["font-size"]=this._size);this._flagLeading&&(a["line-height"]=this._leading);this._flagAlignment&&(a["text-anchor"]=h.alignments[this._alignment]||this._alignment);this._flagBaseline&&(a["alignment-baseline"]=a["dominant-baseline"]=this._baseline);this._flagStyle&&(a["font-style"]=this._style);this._flagWeight&&(a["font-weight"]=this._weight);
this._flagDecoration&&(a["text-decoration"]=this._decoration);this._fill&&this._fill._renderer&&(this._fill._update(),h[this._fill._renderer.type].render.call(this._fill,c,!0));this._flagFill&&(a.fill=this._fill&&this._fill.id?"url(#"+this._fill.id+")":this._fill);this._stroke&&this._stroke._renderer&&(this._stroke._update(),h[this._stroke._renderer.type].render.call(this._stroke,c,!0));this._flagStroke&&(a.stroke=this._stroke&&this._stroke.id?"url(#"+this._stroke.id+")":this._stroke);this._flagLinewidth&&
(a["stroke-width"]=this._linewidth);this._flagOpacity&&(a.opacity=this._opacity);this._flagVisible&&(a.visibility=this._visible?"visible":"hidden");this._renderer.elem?h.setAttributes(this._renderer.elem,a):(a.id=this.id,this._renderer.elem=h.createElement("text",a),c.defs.appendChild(this._renderer.elem));this._flagClip&&(c=h.getClip(this),a=this._renderer.elem,this._clip?(a.removeAttribute("id"),c.setAttribute("id",this.id),c.appendChild(a)):(c.removeAttribute("id"),a.setAttribute("id",this.id),
this.parent._renderer.elem.appendChild(a)));this._flagValue&&(this._renderer.elem.textContent=this._value);return this.flagReset()}},"linear-gradient":{render:function(c,a){a||this._update();a={};this._flagEndPoints&&(a.x1=this.left._x,a.y1=this.left._y,a.x2=this.right._x,a.y2=this.right._y);this._flagSpread&&(a.spreadMethod=this._spread);this._renderer.elem?h.setAttributes(this._renderer.elem,a):(a.id=this.id,a.gradientUnits="userSpaceOnUse",this._renderer.elem=h.createElement("linearGradient",a),
c.defs.appendChild(this._renderer.elem));if(this._flagStops){if(c=this._renderer.elem.childNodes.length!==this.stops.length)this._renderer.elem.childNodes.length=0;for(a=0;a<this.stops.length;a++){var g=this.stops[a],d={};g._flagOffset&&(d.offset=100*g._offset+"%");g._flagColor&&(d["stop-color"]=g._color);g._flagOpacity&&(d["stop-opacity"]=g._opacity);g._renderer.elem?h.setAttributes(g._renderer.elem,d):g._renderer.elem=h.createElement("stop",d);c&&this._renderer.elem.appendChild(g._renderer.elem);
g.flagReset()}}return this.flagReset()}},"radial-gradient":{render:function(c,a){a||this._update();a={};this._flagCenter&&(a.cx=this.center._x,a.cy=this.center._y);this._flagFocal&&(a.fx=this.focal._x,a.fy=this.focal._y);this._flagRadius&&(a.r=this._radius);this._flagSpread&&(a.spreadMethod=this._spread);this._renderer.elem?h.setAttributes(this._renderer.elem,a):(a.id=this.id,a.gradientUnits="userSpaceOnUse",this._renderer.elem=h.createElement("radialGradient",a),c.defs.appendChild(this._renderer.elem));
if(this._flagStops){if(c=this._renderer.elem.childNodes.length!==this.stops.length)this._renderer.elem.childNodes.length=0;for(a=0;a<this.stops.length;a++){var g=this.stops[a],d={};g._flagOffset&&(d.offset=100*g._offset+"%");g._flagColor&&(d["stop-color"]=g._color);g._flagOpacity&&(d["stop-opacity"]=g._opacity);g._renderer.elem?h.setAttributes(g._renderer.elem,d):g._renderer.elem=h.createElement("stop",d);c&&this._renderer.elem.appendChild(g._renderer.elem);g.flagReset()}}return this.flagReset()}},
texture:{render:function(d,a){a||this._update();a={};var g={x:0,y:0},e=this.image;if(this._flagLoaded&&this.loaded)switch(e.nodeName.toLowerCase()){case "canvas":g.href=g["xlink:href"]=e.toDataURL("image/png");break;case "img":case "image":g.href=g["xlink:href"]=this.src}if(this._flagOffset||this._flagLoaded||this._flagScale)a.x=this._offset.x,a.y=this._offset.y,e&&(a.x-=e.width/2,a.y-=e.height/2,this._scale instanceof c.Vector?(a.x*=this._scale.x,a.y*=this._scale.y):(a.x*=this._scale,a.y*=this._scale)),
0<a.x&&(a.x*=-1),0<a.y&&(a.y*=-1);if(this._flagScale||this._flagLoaded||this._flagRepeat)if(a.width=0,a.height=0,e){g.width=a.width=e.width;g.height=a.height=e.height;switch(this._repeat){case "no-repeat":a.width+=1,a.height+=1}this._scale instanceof c.Vector?(a.width*=this._scale.x,a.height*=this._scale.y):(a.width*=this._scale,a.height*=this._scale)}if(this._flagScale||this._flagLoaded)this._renderer.image?l.isEmpty(g)||h.setAttributes(this._renderer.image,g):this._renderer.image=h.createElement("image",
g);this._renderer.elem?l.isEmpty(a)||h.setAttributes(this._renderer.elem,a):(a.id=this.id,a.patternUnits="userSpaceOnUse",this._renderer.elem=h.createElement("pattern",a),d.defs.appendChild(this._renderer.elem));this._renderer.elem&&this._renderer.image&&!this._renderer.appended&&(this._renderer.elem.appendChild(this._renderer.image),this._renderer.appended=!0);return this.flagReset()}}},d=c[c.Types.svg]=function(d){this.domElement=d.domElement||h.createElement("svg");this.scene=new c.Group;this.scene.parent=
this;this.defs=h.createElement("defs");this.domElement.appendChild(this.defs);this.domElement.defs=this.defs;this.domElement.style.overflow="hidden"};l.extend(d,{Utils:h});l.extend(d.prototype,c.Utils.Events,{setSize:function(c,a){this.width=c;this.height=a;h.setAttributes(this.domElement,{width:c,height:a});return this},render:function(){h.group.render.call(this.scene,this.domElement);return this}})})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils.mod,m=c.Utils.toFixed,l=c.Utils.getRatio,h=c.Utils,d=function(a){return 1==a[0]&&0==a[3]&&0==a[1]&&1==a[4]&&0==a[2]&&0==a[5]},e={isHidden:/(none|transparent)/i,alignments:{left:"start",middle:"center",right:"end"},shim:function(a){a.tagName="canvas";a.nodeType=1;return a},group:{renderChild:function(a){e[a._renderer.type].render.call(a,this.ctx,!0,this.clip)},render:function(a){this._update();var c=this._matrix.elements,f=this.parent;this._renderer.opacity=this._opacity*
(f&&f._renderer?f._renderer.opacity:1);var f=d(c),g=this._mask;this._renderer.context||(this._renderer.context={});this._renderer.context.ctx=a;f||(a.save(),a.transform(c[0],c[3],c[1],c[4],c[2],c[5]));g&&e[g._renderer.type].render.call(g,a,!0);if(0<this.opacity&&0!==this.scale)for(c=0;c<this.children.length;c++)g=this.children[c],e[g._renderer.type].render.call(g,a);f||a.restore();return this.flagReset()}},path:{render:function(a,n,f){this._update();var g=this._matrix.elements;var v=this._stroke;
var l=this._linewidth;var z=this._fill;var A=this._opacity*this.parent._renderer.opacity;var x=this._visible;var u=this._cap;var r=this._join;var q=this._miter;var w=this._closed;var p=this._vertices;var C=p.length;var E=C-1;var H=d(g);var G=this._clip;if(!n&&(!x||G))return this;H||(a.save(),a.transform(g[0],g[3],g[1],g[4],g[2],g[5]));z&&(h.isString(z)?a.fillStyle=z:(e[z._renderer.type].render.call(z,a),a.fillStyle=z._renderer.effect));v&&(h.isString(v)?a.strokeStyle=v:(e[v._renderer.type].render.call(v,
a),a.strokeStyle=v._renderer.effect));l&&(a.lineWidth=l);q&&(a.miterLimit=q);r&&(a.lineJoin=r);u&&(a.lineCap=u);h.isNumber(A)&&(a.globalAlpha=A);a.beginPath();for(g=0;g<p.length;g++)switch(n=p[g],x=m(n._x),u=m(n._y),n._command){case c.Commands.close:a.closePath();break;case c.Commands.curve:A=w?k(g-1,C):Math.max(g-1,0);w&&k(g+1,C);r=p[A];q=r.controls&&r.controls.right||c.Vector.zero;var F=n.controls&&n.controls.left||c.Vector.zero;r._relative?(A=q.x+m(r._x),q=q.y+m(r._y)):(A=m(q.x),q=m(q.y));n._relative?
(r=F.x+m(n._x),F=F.y+m(n._y)):(r=m(F.x),F=m(F.y));a.bezierCurveTo(A,q,r,F,x,u);g>=E&&w&&(u=I,r=n.controls&&n.controls.right||c.Vector.zero,x=u.controls&&u.controls.left||c.Vector.zero,n._relative?(A=r.x+m(n._x),q=r.y+m(n._y)):(A=m(r.x),q=m(r.y)),u._relative?(r=x.x+m(u._x),F=x.y+m(u._y)):(r=m(x.x),F=m(x.y)),x=m(u._x),u=m(u._y),a.bezierCurveTo(A,q,r,F,x,u));break;case c.Commands.line:a.lineTo(x,u);break;case c.Commands.move:var I=n;a.moveTo(x,u)}w&&a.closePath();if(!G&&!f){if(!e.isHidden.test(z)){if(w=
z._renderer&&z._renderer.offset)a.save(),a.translate(-z._renderer.offset.x,-z._renderer.offset.y),a.scale(z._renderer.scale.x,z._renderer.scale.y);a.fill();w&&a.restore()}if(!e.isHidden.test(v)){if(w=v._renderer&&v._renderer.offset)a.save(),a.translate(-v._renderer.offset.x,-v._renderer.offset.y),a.scale(v._renderer.scale.x,v._renderer.scale.y),a.lineWidth=l/v._renderer.scale.x;a.stroke();w&&a.restore()}}H||a.restore();G&&!f&&a.clip();return this.flagReset()}},text:{render:function(a,c,f){this._update();
var g=this._matrix.elements,n=this._stroke,k=this._linewidth,l=this._fill,A=this._opacity*this.parent._renderer.opacity,x=this._visible,u=d(g),r=l._renderer&&l._renderer.offset&&n._renderer&&n._renderer.offset,q=this._clip;if(!c&&(!x||q))return this;u||(a.save(),a.transform(g[0],g[3],g[1],g[4],g[2],g[5]));r||(a.font=[this._style,this._weight,this._size+"px/"+this._leading+"px",this._family].join(" "));a.textAlign=e.alignments[this._alignment]||this._alignment;a.textBaseline=this._baseline;l&&(h.isString(l)?
a.fillStyle=l:(e[l._renderer.type].render.call(l,a),a.fillStyle=l._renderer.effect));n&&(h.isString(n)?a.strokeStyle=n:(e[n._renderer.type].render.call(n,a),a.strokeStyle=n._renderer.effect));k&&(a.lineWidth=k);h.isNumber(A)&&(a.globalAlpha=A);q||f||(e.isHidden.test(l)||(l._renderer&&l._renderer.offset?(c=m(l._renderer.scale.x),g=m(l._renderer.scale.y),a.save(),a.translate(-m(l._renderer.offset.x),-m(l._renderer.offset.y)),a.scale(c,g),c=this._size/l._renderer.scale.y,g=this._leading/l._renderer.scale.y,
a.font=[this._style,this._weight,m(c)+"px/",m(g)+"px",this._family].join(" "),c=l._renderer.offset.x/l._renderer.scale.x,l=l._renderer.offset.y/l._renderer.scale.y,a.fillText(this.value,m(c),m(l)),a.restore()):a.fillText(this.value,0,0)),e.isHidden.test(n)||(n._renderer&&n._renderer.offset?(c=m(n._renderer.scale.x),g=m(n._renderer.scale.y),a.save(),a.translate(-m(n._renderer.offset.x),-m(n._renderer.offset.y)),a.scale(c,g),c=this._size/n._renderer.scale.y,g=this._leading/n._renderer.scale.y,a.font=
[this._style,this._weight,m(c)+"px/",m(g)+"px",this._family].join(" "),c=n._renderer.offset.x/n._renderer.scale.x,l=n._renderer.offset.y/n._renderer.scale.y,n=k/n._renderer.scale.x,a.lineWidth=m(n),a.strokeText(this.value,m(c),m(l)),a.restore()):a.strokeText(this.value,0,0)));u||a.restore();q&&!f&&a.clip();return this.flagReset()}},"linear-gradient":{render:function(a){this._update();if(!this._renderer.effect||this._flagEndPoints||this._flagStops)for(this._renderer.effect=a.createLinearGradient(this.left._x,
this.left._y,this.right._x,this.right._y),a=0;a<this.stops.length;a++){var c=this.stops[a];this._renderer.effect.addColorStop(c._offset,c._color)}return this.flagReset()}},"radial-gradient":{render:function(a){this._update();if(!this._renderer.effect||this._flagCenter||this._flagFocal||this._flagRadius||this._flagStops)for(this._renderer.effect=a.createRadialGradient(this.center._x,this.center._y,0,this.focal._x,this.focal._y,this._radius),a=0;a<this.stops.length;a++){var c=this.stops[a];this._renderer.effect.addColorStop(c._offset,
c._color)}return this.flagReset()}},texture:{render:function(a){this._update();var d=this.image;if(!this._renderer.effect||(this._flagLoaded||this._flagImage||this._flagVideo||this._flagRepeat)&&this.loaded)this._renderer.effect=a.createPattern(this.image,this._repeat);if(this._flagOffset||this._flagLoaded||this._flagScale)this._renderer.offset instanceof c.Vector||(this._renderer.offset=new c.Vector),this._renderer.offset.x=-this._offset.x,this._renderer.offset.y=-this._offset.y,d&&(this._renderer.offset.x+=
d.width/2,this._renderer.offset.y+=d.height/2,this._scale instanceof c.Vector?(this._renderer.offset.x*=this._scale.x,this._renderer.offset.y*=this._scale.y):(this._renderer.offset.x*=this._scale,this._renderer.offset.y*=this._scale));if(this._flagScale||this._flagLoaded)this._renderer.scale instanceof c.Vector||(this._renderer.scale=new c.Vector),this._scale instanceof c.Vector?this._renderer.scale.copy(this._scale):this._renderer.scale.set(this._scale,this._scale);return this.flagReset()}}},a=c[c.Types.canvas]=
function(a){var d=!1!==a.smoothing;this.domElement=a.domElement||document.createElement("canvas");this.ctx=this.domElement.getContext("2d");this.overdraw=a.overdraw||!1;h.isUndefined(this.ctx.imageSmoothingEnabled)||(this.ctx.imageSmoothingEnabled=d);this.scene=new c.Group;this.scene.parent=this};h.extend(a,{Utils:e});h.extend(a.prototype,c.Utils.Events,{setSize:function(a,c,f){this.width=a;this.height=c;this.ratio=h.isUndefined(f)?l(this.ctx):f;this.domElement.width=a*this.ratio;this.domElement.height=
c*this.ratio;this.domElement.style&&h.extend(this.domElement.style,{width:a+"px",height:c+"px"});return this},render:function(){var a=1===this.ratio;a||(this.ctx.save(),this.ctx.scale(this.ratio,this.ratio));this.overdraw||this.ctx.clearRect(0,0,this.width,this.height);e.group.render.call(this.scene,this.ctx);a||this.ctx.restore();return this}})})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.root,m=c.Matrix.Multiply,l=c.Utils.mod,h=[1,0,0,0,1,0,0,0,1],d=new c.Array(9),e=c.Utils.getRatio,a=c.Utils.toFixed,g=c.Utils,n={isHidden:/(none|transparent)/i,canvas:k.document?k.document.createElement("canvas"):{getContext:g.identity},alignments:{left:"start",middle:"center",right:"end"},matrix:new c.Matrix,uv:new c.Array([0,0,1,0,0,1,0,1,1,0,1,1]),group:{removeChild:function(a,c){if(a.children)for(var f=0;f<a.children.length;f++)n.group.removeChild(a.children[f],c);else c.deleteTexture(a._renderer.texture),
delete a._renderer.texture},renderChild:function(a){n[a._renderer.type].render.call(a,this.gl,this.program)},render:function(a,g){this._update();var f=this.parent,e=f._matrix&&f._matrix.manual||f._flagMatrix,h=this._matrix.manual||this._flagMatrix;if(e||h)this._renderer.matrix||(this._renderer.matrix=new c.Array(9)),this._matrix.toArray(!0,d),m(d,f._renderer.matrix,this._renderer.matrix),this._renderer.scale=this._scale*f._renderer.scale,e&&(this._flagMatrix=!0);this._mask&&(a.enable(a.STENCIL_TEST),
a.stencilFunc(a.ALWAYS,1,1),a.colorMask(!1,!1,!1,!0),a.stencilOp(a.KEEP,a.KEEP,a.INCR),n[this._mask._renderer.type].render.call(this._mask,a,g,this),a.colorMask(!0,!0,!0,!0),a.stencilFunc(a.NOTEQUAL,0,1),a.stencilOp(a.KEEP,a.KEEP,a.KEEP));this._flagOpacity=f._flagOpacity||this._flagOpacity;this._renderer.opacity=this._opacity*(f&&f._renderer?f._renderer.opacity:1);if(this._flagSubtractions)for(f=0;f<this.subtractions.length;f++)n.group.removeChild(this.subtractions[f],a);this.children.forEach(n.group.renderChild,
{gl:a,program:g});this._mask&&(a.colorMask(!1,!1,!1,!1),a.stencilOp(a.KEEP,a.KEEP,a.DECR),n[this._mask._renderer.type].render.call(this._mask,a,g,this),a.colorMask(!0,!0,!0,!0),a.stencilFunc(a.NOTEQUAL,0,1),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.disable(a.STENCIL_TEST));return this.flagReset()}},path:{updateCanvas:function(f){var d=f._vertices;var e=this.canvas;var h=this.ctx;var k=f._renderer.scale;var m=f._stroke,x=f._linewidth,u=f._fill;var r=f._renderer.opacity||f._opacity;var q=f._cap;var w=f._join;
var p=f._miter;var C=f._closed,E=d.length,H=E-1;e.width=Math.max(Math.ceil(f._renderer.rect.width*k),1);e.height=Math.max(Math.ceil(f._renderer.rect.height*k),1);var G=f._renderer.rect.centroid,F=G.x,G=G.y;h.clearRect(0,0,e.width,e.height);u&&(g.isString(u)?h.fillStyle=u:(n[u._renderer.type].render.call(u,h,f),h.fillStyle=u._renderer.effect));m&&(g.isString(m)?h.strokeStyle=m:(n[m._renderer.type].render.call(m,h,f),h.strokeStyle=m._renderer.effect));x&&(h.lineWidth=x);p&&(h.miterLimit=p);w&&(h.lineJoin=
w);q&&(h.lineCap=q);g.isNumber(r)&&(h.globalAlpha=r);h.save();h.scale(k,k);h.translate(F,G);h.beginPath();for(f=0;f<d.length;f++)switch(b=d[f],k=a(b._x),r=a(b._y),b._command){case c.Commands.close:h.closePath();break;case c.Commands.curve:e=C?l(f-1,E):Math.max(f-1,0);C&&l(f+1,E);q=d[e];w=q.controls&&q.controls.right||c.Vector.zero;p=b.controls&&b.controls.left||c.Vector.zero;q._relative?(e=a(w.x+q._x),w=a(w.y+q._y)):(e=a(w.x),w=a(w.y));b._relative?(q=a(p.x+b._x),p=a(p.y+b._y)):(q=a(p.x),p=a(p.y));
h.bezierCurveTo(e,w,q,p,k,r);f>=H&&C&&(r=I,q=b.controls&&b.controls.right||c.Vector.zero,k=r.controls&&r.controls.left||c.Vector.zero,b._relative?(e=a(q.x+b._x),w=a(q.y+b._y)):(e=a(q.x),w=a(q.y)),r._relative?(q=a(k.x+r._x),p=a(k.y+r._y)):(q=a(k.x),p=a(k.y)),k=a(r._x),r=a(r._y),h.bezierCurveTo(e,w,q,p,k,r));break;case c.Commands.line:h.lineTo(k,r);break;case c.Commands.move:var I=b;h.moveTo(k,r)}C&&h.closePath();if(!n.isHidden.test(u)){if(d=u._renderer&&u._renderer.offset)h.save(),h.translate(-u._renderer.offset.x,
-u._renderer.offset.y),h.scale(u._renderer.scale.x,u._renderer.scale.y);h.fill();d&&h.restore()}if(!n.isHidden.test(m)){if(d=m._renderer&&m._renderer.offset)h.save(),h.translate(-m._renderer.offset.x,-m._renderer.offset.y),h.scale(m._renderer.scale.x,m._renderer.scale.y),h.lineWidth=x/m._renderer.scale.x;h.stroke();d&&h.restore()}h.restore()},getBoundingClientRect:function(a,c,d){var f=Infinity,e=-Infinity,n=Infinity,h=-Infinity;a.forEach(function(a){var c=a.x,d=a.y,g=a.controls;n=Math.min(d,n);f=
Math.min(c,f);e=Math.max(c,e);h=Math.max(d,h);if(a.controls){var k=g.left;var t=g.right;k&&t&&(g=a._relative?k.x+c:k.x,k=a._relative?k.y+d:k.y,c=a._relative?t.x+c:t.x,a=a._relative?t.y+d:t.y,g&&k&&c&&a&&(n=Math.min(k,a,n),f=Math.min(g,c,f),e=Math.max(g,c,e),h=Math.max(k,a,h)))}});g.isNumber(c)&&(n-=c,f-=c,e+=c,h+=c);d.top=n;d.left=f;d.right=e;d.bottom=h;d.width=e-f;d.height=h-n;d.centroid||(d.centroid={});d.centroid.x=-f;d.centroid.y=-n},render:function(a,g,e){if(!this._visible||!this._opacity)return this;
this._update();var f=this.parent,h=this._matrix.manual||this._flagMatrix,k=this._flagVertices||this._flagFill||this._fill instanceof c.LinearGradient&&(this._fill._flagSpread||this._fill._flagStops||this._fill._flagEndPoints)||this._fill instanceof c.RadialGradient&&(this._fill._flagSpread||this._fill._flagStops||this._fill._flagRadius||this._fill._flagCenter||this._fill._flagFocal)||this._fill instanceof c.Texture&&(this._fill._flagLoaded&&this._fill.loaded||this._fill._flagOffset||this._fill._flagScale)||
this._stroke instanceof c.LinearGradient&&(this._stroke._flagSpread||this._stroke._flagStops||this._stroke._flagEndPoints)||this._stroke instanceof c.RadialGradient&&(this._stroke._flagSpread||this._stroke._flagStops||this._stroke._flagRadius||this._stroke._flagCenter||this._stroke._flagFocal)||this._stroke instanceof c.Texture&&(this._stroke._flagLoaded&&this._stroke.loaded||this._stroke._flagOffset||this._fill._flagScale)||this._flagStroke||this._flagLinewidth||this._flagOpacity||f._flagOpacity||
this._flagVisible||this._flagCap||this._flagJoin||this._flagMiter||this._flagScale||!this._renderer.texture;if(f._matrix.manual||f._flagMatrix||h)this._renderer.matrix||(this._renderer.matrix=new c.Array(9)),this._matrix.toArray(!0,d),m(d,f._renderer.matrix,this._renderer.matrix),this._renderer.scale=this._scale*f._renderer.scale;k&&(this._renderer.rect||(this._renderer.rect={}),this._renderer.triangles||(this._renderer.triangles=new c.Array(12)),this._renderer.opacity=this._opacity*f._renderer.opacity,
n.path.getBoundingClientRect(this._vertices,this._linewidth,this._renderer.rect),n.getTriangles(this._renderer.rect,this._renderer.triangles),n.updateBuffer.call(n,a,this,g),n.updateTexture.call(n,a,this));if(!this._clip||e)return a.bindBuffer(a.ARRAY_BUFFER,this._renderer.textureCoordsBuffer),a.vertexAttribPointer(g.textureCoords,2,a.FLOAT,!1,0,0),a.bindTexture(a.TEXTURE_2D,this._renderer.texture),a.uniformMatrix3fv(g.matrix,!1,this._renderer.matrix),a.bindBuffer(a.ARRAY_BUFFER,this._renderer.buffer),
a.vertexAttribPointer(g.position,2,a.FLOAT,!1,0,0),a.drawArrays(a.TRIANGLES,0,6),this.flagReset()}},text:{updateCanvas:function(c){var f=this.canvas,d=this.ctx,e=c._renderer.scale,h=c._stroke,k=c._linewidth*e,l=c._fill,m=c._renderer.opacity||c._opacity;f.width=Math.max(Math.ceil(c._renderer.rect.width*e),1);f.height=Math.max(Math.ceil(c._renderer.rect.height*e),1);var r=c._renderer.rect.centroid,q=r.x,r=r.y,w=l._renderer&&l._renderer.offset&&h._renderer&&h._renderer.offset;d.clearRect(0,0,f.width,
f.height);w||(d.font=[c._style,c._weight,c._size+"px/"+c._leading+"px",c._family].join(" "));d.textAlign="center";d.textBaseline="middle";l&&(g.isString(l)?d.fillStyle=l:(n[l._renderer.type].render.call(l,d,c),d.fillStyle=l._renderer.effect));h&&(g.isString(h)?d.strokeStyle=h:(n[h._renderer.type].render.call(h,d,c),d.strokeStyle=h._renderer.effect));k&&(d.lineWidth=k);g.isNumber(m)&&(d.globalAlpha=m);d.save();d.scale(e,e);d.translate(q,r);n.isHidden.test(l)||(l._renderer&&l._renderer.offset?(f=a(l._renderer.scale.x),
e=a(l._renderer.scale.y),d.save(),d.translate(-a(l._renderer.offset.x),-a(l._renderer.offset.y)),d.scale(f,e),f=c._size/l._renderer.scale.y,e=c._leading/l._renderer.scale.y,d.font=[c._style,c._weight,a(f)+"px/",a(e)+"px",c._family].join(" "),f=l._renderer.offset.x/l._renderer.scale.x,l=l._renderer.offset.y/l._renderer.scale.y,d.fillText(c.value,a(f),a(l)),d.restore()):d.fillText(c.value,0,0));n.isHidden.test(h)||(h._renderer&&h._renderer.offset?(f=a(h._renderer.scale.x),e=a(h._renderer.scale.y),d.save(),
d.translate(-a(h._renderer.offset.x),-a(h._renderer.offset.y)),d.scale(f,e),f=c._size/h._renderer.scale.y,e=c._leading/h._renderer.scale.y,d.font=[c._style,c._weight,a(f)+"px/",a(e)+"px",c._family].join(" "),f=h._renderer.offset.x/h._renderer.scale.x,l=h._renderer.offset.y/h._renderer.scale.y,h=k/h._renderer.scale.x,d.lineWidth=a(h),d.strokeText(c.value,a(f),a(l)),d.restore()):d.strokeText(c.value,0,0));d.restore()},getBoundingClientRect:function(a,c){var f=n.ctx;f.font=[a._style,a._weight,a._size+
"px/"+a._leading+"px",a._family].join(" ");f.textAlign="center";f.textBaseline=a._baseline;var f=f.measureText(a._value).width,d=Math.max(a._size||a._leading);this._linewidth&&!n.isHidden.test(this._stroke)&&(d+=this._linewidth);var e=f/2,g=d/2;switch(n.alignments[a._alignment]||a._alignment){case n.alignments.left:c.left=0;c.right=f;break;case n.alignments.right:c.left=-f;c.right=0;break;default:c.left=-e,c.right=e}switch(a._baseline){case "bottom":c.top=-d;c.bottom=0;break;case "top":c.top=0;c.bottom=
d;break;default:c.top=-g,c.bottom=g}c.width=f;c.height=d;c.centroid||(c.centroid={});c.centroid.x=e;c.centroid.y=g},render:function(a,e,g){if(!this._visible||!this._opacity)return this;this._update();var f=this.parent,h=this._matrix.manual||this._flagMatrix,k=this._flagVertices||this._flagFill||this._fill instanceof c.LinearGradient&&(this._fill._flagSpread||this._fill._flagStops||this._fill._flagEndPoints)||this._fill instanceof c.RadialGradient&&(this._fill._flagSpread||this._fill._flagStops||this._fill._flagRadius||
this._fill._flagCenter||this._fill._flagFocal)||this._fill instanceof c.Texture&&this._fill._flagLoaded&&this._fill.loaded||this._stroke instanceof c.LinearGradient&&(this._stroke._flagSpread||this._stroke._flagStops||this._stroke._flagEndPoints)||this._stroke instanceof c.RadialGradient&&(this._stroke._flagSpread||this._stroke._flagStops||this._stroke._flagRadius||this._stroke._flagCenter||this._stroke._flagFocal)||this._texture instanceof c.Texture&&this._texture._flagLoaded&&this._texture.loaded||
this._flagStroke||this._flagLinewidth||this._flagOpacity||f._flagOpacity||this._flagVisible||this._flagScale||this._flagValue||this._flagFamily||this._flagSize||this._flagLeading||this._flagAlignment||this._flagBaseline||this._flagStyle||this._flagWeight||this._flagDecoration||!this._renderer.texture;if(f._matrix.manual||f._flagMatrix||h)this._renderer.matrix||(this._renderer.matrix=new c.Array(9)),this._matrix.toArray(!0,d),m(d,f._renderer.matrix,this._renderer.matrix),this._renderer.scale=this._scale*
f._renderer.scale;k&&(this._renderer.rect||(this._renderer.rect={}),this._renderer.triangles||(this._renderer.triangles=new c.Array(12)),this._renderer.opacity=this._opacity*f._renderer.opacity,n.text.getBoundingClientRect(this,this._renderer.rect),n.getTriangles(this._renderer.rect,this._renderer.triangles),n.updateBuffer.call(n,a,this,e),n.updateTexture.call(n,a,this));if(!this._clip||g)return a.bindBuffer(a.ARRAY_BUFFER,this._renderer.textureCoordsBuffer),a.vertexAttribPointer(e.textureCoords,
2,a.FLOAT,!1,0,0),a.bindTexture(a.TEXTURE_2D,this._renderer.texture),a.uniformMatrix3fv(e.matrix,!1,this._renderer.matrix),a.bindBuffer(a.ARRAY_BUFFER,this._renderer.buffer),a.vertexAttribPointer(e.position,2,a.FLOAT,!1,0,0),a.drawArrays(a.TRIANGLES,0,6),this.flagReset()}},"linear-gradient":{render:function(a,c){if(a.canvas.getContext("2d")){this._update();if(!this._renderer.effect||this._flagEndPoints||this._flagStops)for(this._renderer.effect=a.createLinearGradient(this.left._x,this.left._y,this.right._x,
this.right._y),a=0;a<this.stops.length;a++)c=this.stops[a],this._renderer.effect.addColorStop(c._offset,c._color);return this.flagReset()}}},"radial-gradient":{render:function(a,c){if(a.canvas.getContext("2d")){this._update();if(!this._renderer.effect||this._flagCenter||this._flagFocal||this._flagRadius||this._flagStops)for(this._renderer.effect=a.createRadialGradient(this.center._x,this.center._y,0,this.focal._x,this.focal._y,this._radius),a=0;a<this.stops.length;a++)c=this.stops[a],this._renderer.effect.addColorStop(c._offset,
c._color);return this.flagReset()}}},texture:{render:function(a,d){if(a.canvas.getContext("2d")){this._update();d=this.image;if(!this._renderer.effect||(this._flagLoaded||this._flagRepeat)&&this.loaded)this._renderer.effect=a.createPattern(d,this._repeat);if(this._flagOffset||this._flagLoaded||this._flagScale)this._renderer.offset instanceof c.Vector||(this._renderer.offset=new c.Vector),this._renderer.offset.x=this._offset.x,this._renderer.offset.y=this._offset.y,d&&(this._renderer.offset.x-=d.width/
2,this._renderer.offset.y+=d.height/2,this._scale instanceof c.Vector?(this._renderer.offset.x*=this._scale.x,this._renderer.offset.y*=this._scale.y):(this._renderer.offset.x*=this._scale,this._renderer.offset.y*=this._scale));if(this._flagScale||this._flagLoaded)this._renderer.scale instanceof c.Vector||(this._renderer.scale=new c.Vector),this._scale instanceof c.Vector?this._renderer.scale.copy(this._scale):this._renderer.scale.set(this._scale,this._scale);return this.flagReset()}}},getTriangles:function(a,
c){var f=a.top,d=a.left,e=a.right;a=a.bottom;c[0]=d;c[1]=f;c[2]=e;c[3]=f;c[4]=d;c[5]=a;c[6]=d;c[7]=a;c[8]=e;c[9]=f;c[10]=e;c[11]=a},updateTexture:function(a,c){this[c._renderer.type].updateCanvas.call(n,c);c._renderer.texture&&a.deleteTexture(c._renderer.texture);a.bindBuffer(a.ARRAY_BUFFER,c._renderer.textureCoordsBuffer);c._renderer.texture=a.createTexture();a.bindTexture(a.TEXTURE_2D,c._renderer.texture);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,
a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);0>=this.canvas.width||0>=this.canvas.height||a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,this.canvas)},updateBuffer:function(a,c,d){g.isObject(c._renderer.buffer)&&a.deleteBuffer(c._renderer.buffer);c._renderer.buffer=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,c._renderer.buffer);a.enableVertexAttribArray(d.position);a.bufferData(a.ARRAY_BUFFER,c._renderer.triangles,a.STATIC_DRAW);g.isObject(c._renderer.textureCoordsBuffer)&&
a.deleteBuffer(c._renderer.textureCoordsBuffer);c._renderer.textureCoordsBuffer=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,c._renderer.textureCoordsBuffer);a.enableVertexAttribArray(d.textureCoords);a.bufferData(a.ARRAY_BUFFER,this.uv,a.STATIC_DRAW)},program:{create:function(a,d){var f=a.createProgram();g.each(d,function(c){a.attachShader(f,c)});a.linkProgram(f);if(!a.getProgramParameter(f,a.LINK_STATUS))throw d=a.getProgramInfoLog(f),a.deleteProgram(f),new c.Utils.Error("unable to link program: "+
d);return f}},shaders:{create:function(a,d,e){e=a.createShader(a[e]);a.shaderSource(e,d);a.compileShader(e);if(!a.getShaderParameter(e,a.COMPILE_STATUS))throw d=a.getShaderInfoLog(e),a.deleteShader(e),new c.Utils.Error("unable to compile shader "+e+": "+d);return e},types:{vertex:"VERTEX_SHADER",fragment:"FRAGMENT_SHADER"},vertex:"attribute vec2 a_position;\nattribute vec2 a_textureCoords;\n\nuniform mat3 u_matrix;\nuniform vec2 u_resolution;\n\nvarying vec2 v_textureCoords;\n\nvoid main() {\n   vec2 projected \x3d (u_matrix * vec3(a_position, 1.0)).xy;\n   vec2 normal \x3d projected / u_resolution;\n   vec2 clipspace \x3d (normal * 2.0) - 1.0;\n\n   gl_Position \x3d vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);\n   v_textureCoords \x3d a_textureCoords;\n}",
fragment:"precision mediump float;\n\nuniform sampler2D u_image;\nvarying vec2 v_textureCoords;\n\nvoid main() {\n  gl_FragColor \x3d texture2D(u_image, v_textureCoords);\n}"},TextureRegistry:new c.Registry};n.ctx=n.canvas.getContext("2d");k=c[c.Types.webgl]=function(a){this.domElement=a.domElement||document.createElement("canvas");this.scene=new c.Group;this.scene.parent=this;this._renderer={matrix:new c.Array(h),scale:1,opacity:1};this._flagMatrix=!0;a=g.defaults(a||{},{antialias:!1,alpha:!0,premultipliedAlpha:!0,
stencil:!0,preserveDrawingBuffer:!0,overdraw:!1});this.overdraw=a.overdraw;a=this.ctx=this.domElement.getContext("webgl",a)||this.domElement.getContext("experimental-webgl",a);if(!this.ctx)throw new c.Utils.Error("unable to create a webgl context. Try using another renderer.");var d=n.shaders.create(a,n.shaders.vertex,n.shaders.types.vertex);var f=n.shaders.create(a,n.shaders.fragment,n.shaders.types.fragment);this.program=n.program.create(a,[d,f]);a.useProgram(this.program);this.program.position=
a.getAttribLocation(this.program,"a_position");this.program.matrix=a.getUniformLocation(this.program,"u_matrix");this.program.textureCoords=a.getAttribLocation(this.program,"a_textureCoords");a.disable(a.DEPTH_TEST);a.enable(a.BLEND);a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD);a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)};g.extend(k,{Utils:n});g.extend(k.prototype,c.Utils.Events,{setSize:function(a,c,d){this.width=a;this.height=c;this.ratio=g.isUndefined(d)?
e(this.ctx):d;this.domElement.width=a*this.ratio;this.domElement.height=c*this.ratio;g.extend(this.domElement.style,{width:a+"px",height:c+"px"});a*=this.ratio;c*=this.ratio;this._renderer.matrix[0]=this._renderer.matrix[4]=this._renderer.scale=this.ratio;this._flagMatrix=!0;this.ctx.viewport(0,0,a,c);d=this.ctx.getUniformLocation(this.program,"u_resolution");this.ctx.uniform2f(d,a,c);return this},render:function(){var a=this.ctx;this.overdraw||a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT);n.group.render.call(this.scene,
a,this.program);this._flagMatrix=!1;return this}})})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.Shape=function(){this._renderer={};this._renderer.flagMatrix=k.bind(m.FlagMatrix,this);this.isShape=!0;this.id=c.Identifier+c.uniqueId();this.classList=[];this._matrix=new c.Matrix;this.translation=new c.Vector;this.rotation=0;this.scale=1};k.extend(m,{FlagMatrix:function(){this._flagMatrix=!0},MakeObservable:function(k){Object.defineProperty(k,"translation",{enumerable:!0,get:function(){return this._translation},set:function(h){this._translation&&this._translation.unbind(c.Events.change,
this._renderer.flagMatrix);this._translation=h;this._translation.bind(c.Events.change,this._renderer.flagMatrix);m.FlagMatrix.call(this)}});Object.defineProperty(k,"rotation",{enumerable:!0,get:function(){return this._rotation},set:function(c){this._rotation=c;this._flagMatrix=!0}});Object.defineProperty(k,"scale",{enumerable:!0,get:function(){return this._scale},set:function(h){this._scale instanceof c.Vector&&this._scale.unbind(c.Events.change,this._renderer.flagMatrix);this._scale=h;this._scale instanceof
c.Vector&&this._scale.bind(c.Events.change,this._renderer.flagMatrix);this._flagScale=this._flagMatrix=!0}})}});k.extend(m.prototype,c.Utils.Events,{_flagMatrix:!0,_flagScale:!1,_rotation:0,_scale:1,_translation:null,addTo:function(c){c.add(this);return this},clone:function(){var c=new m;c.translation.copy(this.translation);c.rotation=this.rotation;c.scale=this.scale;k.each(m.Properties,function(h){c[h]=this[h]},this);return c._update()},_update:function(k){!this._matrix.manual&&this._flagMatrix&&
(this._matrix.identity().translate(this.translation.x,this.translation.y),this._scale instanceof c.Vector?this._matrix.scale(this._scale.x,this._scale.y):this._matrix.scale(this._scale),this._matrix.rotate(this.rotation));k&&this.parent&&this.parent._update&&this.parent._update();return this},flagReset:function(){this._flagMatrix=this._flagScale=!1;return this}});m.MakeObservable(m.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){function k(a,d,e){var f=d.controls&&d.controls.right,g=a.controls&&a.controls.left;var n=d.x;var h=d.y;var k=(f||d).x;var l=(f||d).y;var m=(g||a).x;var t=(g||a).y;var w=a.x;var p=a.y;f&&d._relative&&(k+=d.x,l+=d.y);g&&a._relative&&(m+=a.x,t+=a.y);return c.Utils.getCurveLength(n,h,k,l,m,t,w,p,e)}function m(a,d,e){var f=d.controls&&d.controls.right,g=a.controls&&a.controls.left;var h=d.x;var n=d.y;var k=(f||d).x;var l=(f||d).y;var m=(g||a).x;var t=(g||a).y;var w=a.x;var p=a.y;f&&d._relative&&
(k+=d.x,l+=d.y);g&&a._relative&&(m+=a.x,t+=a.y);return c.Utils.subdivide(h,n,k,l,m,t,w,p,e)}var l=Math.min,h=Math.max,d=Math.round,e=c.Utils.getComputedMatrix,a=c.Utils;a.each(c.Commands,function(a,c){});var g=c.Path=function(d,f,e,h){c.Shape.call(this);this._renderer.type="path";this._renderer.flagVertices=a.bind(g.FlagVertices,this);this._renderer.bindVertices=a.bind(g.BindVertices,this);this._renderer.unbindVertices=a.bind(g.UnbindVertices,this);this._renderer.flagFill=a.bind(g.FlagFill,this);
this._renderer.flagStroke=a.bind(g.FlagStroke,this);this._closed=!!f;this._curved=!!e;this.beginning=0;this.ending=1;this.fill="#fff";this.stroke="#000";this.opacity=this.linewidth=1;this.visible=!0;this.cap="butt";this.join="miter";this.miter=4;this._vertices=[];this.vertices=d;this.automatic=!h};a.extend(g,{Properties:"fill stroke linewidth opacity visible cap join miter closed curved automatic beginning ending".split(" "),FlagVertices:function(){this._flagLength=this._flagVertices=!0},BindVertices:function(a){for(var d=
a.length;d--;)a[d].bind(c.Events.change,this._renderer.flagVertices);this._renderer.flagVertices()},UnbindVertices:function(a){for(var d=a.length;d--;)a[d].unbind(c.Events.change,this._renderer.flagVertices);this._renderer.flagVertices()},FlagFill:function(){this._flagFill=!0},FlagStroke:function(){this._flagStroke=!0},MakeObservable:function(d){c.Shape.MakeObservable(d);a.each(g.Properties.slice(2,8),c.Utils.defineProperty,d);Object.defineProperty(d,"fill",{enumerable:!0,get:function(){return this._fill},
set:function(a){(this._fill instanceof c.Gradient||this._fill instanceof c.LinearGradient||this._fill instanceof c.RadialGradient||this._fill instanceof c.Texture)&&this._fill.unbind(c.Events.change,this._renderer.flagFill);this._fill=a;this._flagFill=!0;(this._fill instanceof c.Gradient||this._fill instanceof c.LinearGradient||this._fill instanceof c.RadialGradient||this._fill instanceof c.Texture)&&this._fill.bind(c.Events.change,this._renderer.flagFill)}});Object.defineProperty(d,"stroke",{enumerable:!0,
get:function(){return this._stroke},set:function(a){(this._stroke instanceof c.Gradient||this._stroke instanceof c.LinearGradient||this._stroke instanceof c.RadialGradient||this._stroke instanceof c.Texture)&&this._stroke.unbind(c.Events.change,this._renderer.flagStroke);this._stroke=a;this._flagStroke=!0;(this._stroke instanceof c.Gradient||this._stroke instanceof c.LinearGradient||this._stroke instanceof c.RadialGradient||this._stroke instanceof c.Texture)&&this._stroke.bind(c.Events.change,this._renderer.flagStroke)}});
Object.defineProperty(d,"length",{get:function(){this._flagLength&&this._updateLength();return this._length}});Object.defineProperty(d,"closed",{enumerable:!0,get:function(){return this._closed},set:function(a){this._closed=!!a;this._flagVertices=!0}});Object.defineProperty(d,"curved",{enumerable:!0,get:function(){return this._curved},set:function(a){this._curved=!!a;this._flagVertices=!0}});Object.defineProperty(d,"automatic",{enumerable:!0,get:function(){return this._automatic},set:function(c){if(c!==
this._automatic){var d=(this._automatic=!!c)?"ignore":"listen";a.each(this.vertices,function(a){a[d]()})}}});Object.defineProperty(d,"beginning",{enumerable:!0,get:function(){return this._beginning},set:function(a){this._beginning=a;this._flagVertices=!0}});Object.defineProperty(d,"ending",{enumerable:!0,get:function(){return this._ending},set:function(a){this._ending=a;this._flagVertices=!0}});Object.defineProperty(d,"vertices",{enumerable:!0,get:function(){return this._collection},set:function(a){var d=
this._renderer.bindVertices,e=this._renderer.unbindVertices;this._collection&&this._collection.unbind(c.Events.insert,d).unbind(c.Events.remove,e);this._collection=new c.Utils.Collection((a||[]).slice(0));this._collection.bind(c.Events.insert,d).bind(c.Events.remove,e);d(this._collection)}});Object.defineProperty(d,"clip",{enumerable:!0,get:function(){return this._clip},set:function(a){this._clip=a;this._flagClip=!0}})}});a.extend(g.prototype,c.Shape.prototype,{_flagVertices:!0,_flagLength:!0,_flagFill:!0,
_flagStroke:!0,_flagLinewidth:!0,_flagOpacity:!0,_flagVisible:!0,_flagCap:!0,_flagJoin:!0,_flagMiter:!0,_flagClip:!1,_length:0,_fill:"#fff",_stroke:"#000",_linewidth:1,_opacity:1,_visible:!0,_cap:"round",_join:"round",_miter:4,_closed:!0,_curved:!1,_automatic:!0,_beginning:0,_ending:1,_clip:!1,clone:function(d){d=d||this.parent;var e=a.map(this.vertices,function(a){return a.clone()}),h=new g(e,this.closed,this.curved,!this.automatic);a.each(c.Path.Properties,function(a){h[a]=this[a]},this);h.translation.copy(this.translation);
h.rotation=this.rotation;h.scale=this.scale;d&&d.add(h);return h},toObject:function(){var d={vertices:a.map(this.vertices,function(a){return a.toObject()})};a.each(c.Shape.Properties,function(a){d[a]=this[a]},this);d.translation=this.translation.toObject;d.rotation=this.rotation;d.scale=this.scale;return d},noFill:function(){this.fill="transparent";return this},noStroke:function(){this.stroke="transparent";return this},corner:function(){var c=this.getBoundingClientRect(!0);c.centroid={x:c.left+c.width/
2,y:c.top+c.height/2};a.each(this.vertices,function(a){a.addSelf(c.centroid)});return this},center:function(){var c=this.getBoundingClientRect(!0);c.centroid={x:c.left+c.width/2,y:c.top+c.height/2};a.each(this.vertices,function(a){a.subSelf(c.centroid)});return this},remove:function(){if(!this.parent)return this;this.parent.remove(this);return this},getBoundingClientRect:function(a){var c,d=Infinity,g=-Infinity,k=Infinity,n=-Infinity;this._update(!0);a=a?this._matrix:e(this);var m=this.linewidth/
2;var x=this._vertices.length;if(0>=x){var u=a.multiply(0,0,1);return{top:u.y,left:u.x,right:u.x,bottom:u.y,width:0,height:0}}for(c=0;c<x;c++){u=this._vertices[c];var r=u.x;u=u.y;u=a.multiply(r,u,1);k=l(u.y-m,k);d=l(u.x-m,d);g=h(u.x+m,g);n=h(u.y+m,n)}return{top:k,left:d,right:g,bottom:n,width:g-d,height:n-k}},getPointAt:function(d,e){var g,f;var h=this.length*Math.min(Math.max(d,0),1);var k=this.vertices.length;var n=k-1;var l=g=null;var m=0;var r=this._lengths.length;for(f=0;m<r;m++){if(f+this._lengths[m]>=
h){this._closed?(g=c.Utils.mod(m,k),l=c.Utils.mod(m-1,k),0===m&&(g=l,l=m)):(g=m,l=Math.min(Math.max(m-1,0),n));g=this.vertices[g];l=this.vertices[l];h-=f;0!==this._lengths[m]&&(d=h/this._lengths[m]);break}f+=this._lengths[m]}if(a.isNull(g)||a.isNull(l))return null;var q=l.controls&&l.controls.right;var w=g.controls&&g.controls.left;n=l.x;h=l.y;r=(q||l).x;m=(q||l).y;var p=(w||g).x;f=(w||g).y;var C=g.x;k=g.y;q&&l._relative&&(r+=l.x,m+=l.y);w&&g._relative&&(p+=g.x,f+=g.y);g=c.Utils.getPointOnCubicBezier(d,
n,r,p,C);d=c.Utils.getPointOnCubicBezier(d,h,m,f,k);return a.isObject(e)?(e.x=g,e.y=d,e):new c.Vector(g,d)},plot:function(){if(this.curved)return c.Utils.getCurveFromPoints(this._vertices,this.closed),this;for(var a=0;a<this._vertices.length;a++)this._vertices[a]._command=0===a?c.Commands.move:c.Commands.line;return this},subdivide:function(d){this._update();var e=this.vertices.length-1,g=this.vertices[e],h=this._closed||this.vertices[e]._command===c.Commands.close,k=[];a.each(this.vertices,function(f,
n){if(!(0>=n)||h)if(f.command===c.Commands.move)k.push(new c.Anchor(g.x,g.y)),0<n&&(k[k.length-1].command=c.Commands.line);else{var l=m(f,g,d);k=k.concat(l);a.each(l,function(a,d){a.command=0>=d&&g.command===c.Commands.move?c.Commands.move:c.Commands.line});n>=e&&(this._closed&&this._automatic?(g=f,l=m(f,g,d),k=k.concat(l),a.each(l,function(a,d){a.command=0>=d&&g.command===c.Commands.move?c.Commands.move:c.Commands.line})):h&&k.push(new c.Anchor(f.x,f.y)),k[k.length-1].command=h?c.Commands.close:
c.Commands.line)}g=f},this);this._curved=this._automatic=!1;this.vertices=k;return this},_updateLength:function(d){this._update();var e=this.vertices.length,g=e-1,h=this.vertices[g],n=this._closed||this.vertices[g]._command===c.Commands.close,l=0;a.isUndefined(this._lengths)&&(this._lengths=[]);a.each(this.vertices,function(a,f){0>=f&&!n||a.command===c.Commands.move?(h=a,this._lengths[f]=0):(this._lengths[f]=k(a,h,d),l+=this._lengths[f],f>=g&&n&&(h=this.vertices[(f+1)%e],this._lengths[f+1]=k(a,h,
d),l+=this._lengths[f+1]),h=a)},this);this._length=l;return this},_update:function(){if(this._flagVertices){var a=this.vertices.length-1;var e=d(this._beginning*a);a=d(this._ending*a);this._vertices.length=0;for(var g=e;g<a+1;g++)e=this.vertices[g],this._vertices.push(e);this._automatic&&this.plot()}c.Shape.prototype._update.apply(this,arguments);return this},flagReset:function(){this._flagVertices=this._flagFill=this._flagStroke=this._flagLinewidth=this._flagOpacity=this._flagVisible=this._flagCap=
this._flagJoin=this._flagMiter=this._flagClip=!1;c.Shape.prototype.flagReset.call(this);return this}});g.MakeObservable(g.prototype)})(("undefined"!==typeof global?global:this).Two);(function(c){var k=c.Path,m=c.Utils,l=c.Line=function(h,d,e,a){e=(e-h)/2;a=(a-d)/2;k.call(this,[new c.Anchor(-e,-a),new c.Anchor(e,a)]);this.translation.set(h+e,d+a)};m.extend(l.prototype,k.prototype);k.MakeObservable(l.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Path,m=c.Utils,l=c.Rectangle=function(h,d,e,a){k.call(this,[new c.Anchor,new c.Anchor,new c.Anchor,new c.Anchor],!0);this.width=e;this.height=a;this._update();this.translation.set(h,d)};m.extend(l,{Properties:["width","height"],MakeObservable:function(h){k.MakeObservable(h);m.each(l.Properties,c.Utils.defineProperty,h)}});m.extend(l.prototype,k.prototype,{_width:0,_height:0,_flagWidth:0,_flagHeight:0,_update:function(){if(this._flagWidth||this._flagHeight){var c=this._width/2,
d=this._height/2;this.vertices[0].set(-c,-d);this.vertices[1].set(c,-d);this.vertices[2].set(c,d);this.vertices[3].set(-c,d)}k.prototype._update.call(this);return this},flagReset:function(){this._flagWidth=this._flagHeight=!1;k.prototype.flagReset.call(this);return this}});l.MakeObservable(l.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Path,m=2*Math.PI,l=Math.cos,h=Math.sin,d=c.Utils,e=c.Ellipse=function(a,e,h,f){d.isNumber(f)||(f=h);var g=d.map(d.range(c.Resolution),function(a){return new c.Anchor},this);k.call(this,g,!0,!0);this.width=2*h;this.height=2*f;this._update();this.translation.set(a,e)};d.extend(e,{Properties:["width","height"],MakeObservable:function(a){k.MakeObservable(a);d.each(e.Properties,c.Utils.defineProperty,a)}});d.extend(e.prototype,k.prototype,{_width:0,_height:0,_flagWidth:!1,_flagHeight:!1,
_update:function(){if(this._flagWidth||this._flagHeight)for(var a=0,c=this.vertices.length;a<c;a++){var d=a/c*m,e=this._width*l(d)/2,d=this._height*h(d)/2;this.vertices[a].set(e,d)}k.prototype._update.call(this);return this},flagReset:function(){this._flagWidth=this._flagHeight=!1;k.prototype.flagReset.call(this);return this}});e.MakeObservable(e.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Path,m=2*Math.PI,l=Math.cos,h=Math.sin,d=c.Utils,e=c.Circle=function(a,e,h){var g=d.map(d.range(c.Resolution),function(a){return new c.Anchor},this);k.call(this,g,!0,!0);this.radius=h;this._update();this.translation.set(a,e)};d.extend(e,{Properties:["radius"],MakeObservable:function(a){k.MakeObservable(a);d.each(e.Properties,c.Utils.defineProperty,a)}});d.extend(e.prototype,k.prototype,{_radius:0,_flagRadius:!1,_update:function(){if(this._flagRadius)for(var a=0,c=this.vertices.length;a<
c;a++){var d=a/c*m,e=this._radius*l(d),d=this._radius*h(d);this.vertices[a].set(e,d)}k.prototype._update.call(this);return this},flagReset:function(){this._flagRadius=!1;k.prototype.flagReset.call(this);return this}});e.MakeObservable(e.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Path,m=2*Math.PI,l=Math.cos,h=Math.sin,d=c.Utils,e=c.Polygon=function(a,e,h,f){f=Math.max(f||0,3);var g=d.map(d.range(f),function(a){return new c.Anchor});k.call(this,g,!0);this.width=2*h;this.height=2*h;this.sides=f;this._update();this.translation.set(a,e)};d.extend(e,{Properties:["width","height","sides"],MakeObservable:function(a){k.MakeObservable(a);d.each(e.Properties,c.Utils.defineProperty,a)}});d.extend(e.prototype,k.prototype,{_width:0,_height:0,_sides:0,_flagWidth:!1,
_flagHeight:!1,_flagSides:!1,_update:function(){if(this._flagWidth||this._flagHeight||this._flagSides){var a=this._sides,d=this.vertices.length;d>a&&this.vertices.splice(a-1,d-a);for(var e=0;e<a;e++){var f=(e+.5)/a*m+Math.PI/2,t=this._width*l(f),f=this._height*h(f);e>=d?this.vertices.push(new c.Anchor(t,f)):this.vertices[e].set(t,f)}}k.prototype._update.call(this);return this},flagReset:function(){this._flagWidth=this._flagHeight=this._flagSides=!1;k.prototype.flagReset.call(this);return this}});
e.MakeObservable(e.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){function k(a,c){for(;0>a;)a+=c;return a%c}var m=c.Path,l=2*Math.PI,h=Math.PI/2,d=c.Utils,e=c.ArcSegment=function(a,e,h,f,k,l,B){B=d.map(d.range(B||3*c.Resolution),function(){return new c.Anchor});m.call(this,B,!1,!1,!0);this.innerRadius=h;this.outerRadius=f;this.startAngle=k;this.endAngle=l;this._update();this.translation.set(a,e)};d.extend(e,{Properties:["startAngle","endAngle","innerRadius","outerRadius"],MakeObservable:function(a){m.MakeObservable(a);d.each(e.Properties,c.Utils.defineProperty,
a)}});d.extend(e.prototype,m.prototype,{_flagStartAngle:!1,_flagEndAngle:!1,_flagInnerRadius:!1,_flagOuterRadius:!1,_startAngle:0,_endAngle:l,_innerRadius:0,_outerRadius:0,_update:function(){if(this._flagStartAngle||this._flagEndAngle||this._flagInnerRadius||this._flagOuterRadius){var a=this._startAngle,d=this._endAngle,e=this._innerRadius,f=this._outerRadius,t=k(a,l)===k(d,l),v=0<e,B=this.vertices,z=v?B.length/2:B.length,A=0;t?z--:v||(z-=2);for(var x=0,u=z-1;x<z;x++){var r=x/u;var q=B[A];r=r*(d-
a)+a;var w=(d-a)/z;var p=f*Math.cos(r);var C=f*Math.sin(r);switch(x){case 0:var E=c.Commands.move;break;default:E=c.Commands.curve}q.command=E;q.x=p;q.y=C;q.controls.left.clear();q.controls.right.clear();q.command===c.Commands.curve&&(C=f*w/Math.PI,q.controls.left.x=C*Math.cos(r-h),q.controls.left.y=C*Math.sin(r-h),q.controls.right.x=C*Math.cos(r+h),q.controls.right.y=C*Math.sin(r+h),1===x&&q.controls.left.multiplyScalar(2),x===u&&q.controls.right.multiplyScalar(2));A++}if(v)for(t?(B[A].command=c.Commands.close,
A++):(z--,u=z-1),x=0;x<z;x++)r=x/u,q=B[A],r=(1-r)*(d-a)+a,w=(d-a)/z,p=e*Math.cos(r),C=e*Math.sin(r),E=c.Commands.curve,0>=x&&(E=t?c.Commands.move:c.Commands.line),q.command=E,q.x=p,q.y=C,q.controls.left.clear(),q.controls.right.clear(),q.command===c.Commands.curve&&(C=e*w/Math.PI,q.controls.left.x=C*Math.cos(r+h),q.controls.left.y=C*Math.sin(r+h),q.controls.right.x=C*Math.cos(r-h),q.controls.right.y=C*Math.sin(r-h),1===x&&q.controls.left.multiplyScalar(2),x===u&&q.controls.right.multiplyScalar(2)),
A++;else t||(B[A].command=c.Commands.line,B[A].x=0,B[A].y=0,A++);B[A].command=c.Commands.close}m.prototype._update.call(this);return this},flagReset:function(){m.prototype.flagReset.call(this);this._flagStartAngle=this._flagEndAngle=this._flagInnerRadius=this._flagOuterRadius=!1;return this}});e.MakeObservable(e.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Path,m=2*Math.PI,l=Math.cos,h=Math.sin,d=c.Utils,e=c.Star=function(a,e,h,f,l){d.isNumber(f)||(f=h/2);if(!d.isNumber(l)||0>=l)l=5;var g=d.map(d.range(2*l),function(a){return new c.Anchor});k.call(this,g,!0);this.innerRadius=f;this.outerRadius=h;this.sides=l;this._update();this.translation.set(a,e)};d.extend(e,{Properties:["innerRadius","outerRadius","sides"],MakeObservable:function(a){k.MakeObservable(a);d.each(e.Properties,c.Utils.defineProperty,a)}});d.extend(e.prototype,k.prototype,
{_innerRadius:0,_outerRadius:0,_sides:0,_flagInnerRadius:!1,_flagOuterRadius:!1,_flagSides:!1,_update:function(){if(this._flagInnerRadius||this._flagOuterRadius||this._flagSides){var a=2*this._sides,d=this.vertices.length;d>a&&this.vertices.splice(a-1,d-a);for(var e=0;e<a;e++){var f=(e+.5)/a*m,t=e%2?this._innerRadius:this._outerRadius,v=t*l(f),f=t*h(f);e>=d?this.vertices.push(new c.Anchor(v,f)):this.vertices[e].set(v,f)}}k.prototype._update.call(this);return this},flagReset:function(){this._flagInnerRadius=
this._flagOuterRadius=this._flagSides=!1;k.prototype.flagReset.call(this);return this}});e.MakeObservable(e.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Path,m=c.Utils,l=c.RoundedRectangle=function(h,d,e,a,g){m.isNumber(g)||(g=Math.floor(Math.min(e,a)/12));var l=m.map(m.range(10),function(a){return new c.Anchor(0,0,0,0,0,0,0===a?c.Commands.move:c.Commands.curve)});l[l.length-1].command=c.Commands.close;k.call(this,l,!1,!1,!0);this.width=e;this.height=a;this.radius=g;this._update();this.translation.set(h,d)};m.extend(l,{Properties:["width","height","radius"],MakeObservable:function(h){k.MakeObservable(h);m.each(l.Properties,c.Utils.defineProperty,
h)}});m.extend(l.prototype,k.prototype,{_width:0,_height:0,_radius:0,_flagWidth:!1,_flagHeight:!1,_flagRadius:!1,_update:function(){if(this._flagWidth||this._flagHeight||this._flagRadius){var c=this._width,d=this._height,e=Math.min(Math.max(this._radius,0),Math.min(c,d)),c=c/2,a=d/2,d=this.vertices[0];d.x=-(c-e);d.y=-a;d=this.vertices[1];d.x=c-e;d.y=-a;d.controls.left.clear();d.controls.right.x=e;d.controls.right.y=0;d=this.vertices[2];d.x=c;d.y=-(a-e);d.controls.right.clear();d.controls.left.clear();
d=this.vertices[3];d.x=c;d.y=a-e;d.controls.left.clear();d.controls.right.x=0;d.controls.right.y=e;d=this.vertices[4];d.x=c-e;d.y=a;d.controls.right.clear();d.controls.left.clear();d=this.vertices[5];d.x=-(c-e);d.y=a;d.controls.left.clear();d.controls.right.x=-e;d.controls.right.y=0;d=this.vertices[6];d.x=-c;d.y=a-e;d.controls.left.clear();d.controls.right.clear();d=this.vertices[7];d.x=-c;d.y=-(a-e);d.controls.left.clear();d.controls.right.x=0;d.controls.right.y=-e;d=this.vertices[8];d.x=-(c-e);
d.y=-a;d.controls.left.clear();d.controls.right.clear();d=this.vertices[9];d.copy(this.vertices[8])}k.prototype._update.call(this);return this},flagReset:function(){this._flagWidth=this._flagHeight=this._flagRadius=!1;k.prototype.flagReset.call(this);return this}});l.MakeObservable(l.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.root,m=c.Utils.getComputedMatrix,l=c.Utils;(k.document?k.document.createElement("canvas"):{getContext:l.identity}).getContext("2d");var h=c.Text=function(d,e,a,g){c.Shape.call(this);this._renderer.type="text";this._renderer.flagFill=l.bind(h.FlagFill,this);this._renderer.flagStroke=l.bind(h.FlagStroke,this);this.value=d;l.isNumber(e)&&(this.translation.x=e);l.isNumber(a)&&(this.translation.y=a);if(!l.isObject(g))return this;l.each(c.Text.Properties,function(a){a in g&&(this[a]=
g[a])},this)};l.extend(c.Text,{Properties:"value family size leading alignment linewidth style weight decoration baseline opacity visible fill stroke".split(" "),FlagFill:function(){this._flagFill=!0},FlagStroke:function(){this._flagStroke=!0},MakeObservable:function(d){c.Shape.MakeObservable(d);l.each(c.Text.Properties.slice(0,12),c.Utils.defineProperty,d);Object.defineProperty(d,"fill",{enumerable:!0,get:function(){return this._fill},set:function(d){(this._fill instanceof c.Gradient||this._fill instanceof
c.LinearGradient||this._fill instanceof c.RadialGradient||this._fill instanceof c.Texture)&&this._fill.unbind(c.Events.change,this._renderer.flagFill);this._fill=d;this._flagFill=!0;(this._fill instanceof c.Gradient||this._fill instanceof c.LinearGradient||this._fill instanceof c.RadialGradient||this._fill instanceof c.Texture)&&this._fill.bind(c.Events.change,this._renderer.flagFill)}});Object.defineProperty(d,"stroke",{enumerable:!0,get:function(){return this._stroke},set:function(d){(this._stroke instanceof
c.Gradient||this._stroke instanceof c.LinearGradient||this._stroke instanceof c.RadialGradient||this._stroke instanceof c.Texture)&&this._stroke.unbind(c.Events.change,this._renderer.flagStroke);this._stroke=d;this._flagStroke=!0;(this._stroke instanceof c.Gradient||this._stroke instanceof c.LinearGradient||this._stroke instanceof c.RadialGradient||this._stroke instanceof c.Texture)&&this._stroke.bind(c.Events.change,this._renderer.flagStroke)}});Object.defineProperty(d,"clip",{enumerable:!0,get:function(){return this._clip},
set:function(c){this._clip=c;this._flagClip=!0}})}});l.extend(c.Text.prototype,c.Shape.prototype,{_flagValue:!0,_flagFamily:!0,_flagSize:!0,_flagLeading:!0,_flagAlignment:!0,_flagBaseline:!0,_flagStyle:!0,_flagWeight:!0,_flagDecoration:!0,_flagFill:!0,_flagStroke:!0,_flagLinewidth:!0,_flagOpacity:!0,_flagVisible:!0,_flagClip:!1,_value:"",_family:"sans-serif",_size:13,_leading:17,_alignment:"center",_baseline:"middle",_style:"normal",_weight:500,_decoration:"none",_fill:"#000",_stroke:"transparent",
_linewidth:1,_opacity:1,_visible:!0,_clip:!1,remove:function(){if(!this.parent)return this;this.parent.remove(this);return this},clone:function(d){d=d||this.parent;var e=new c.Text(this.value);e.translation.copy(this.translation);e.rotation=this.rotation;e.scale=this.scale;l.each(c.Text.Properties,function(a){e[a]=this[a]},this);d&&d.add(e);return e},toObject:function(){var d={translation:this.translation.toObject(),rotation:this.rotation,scale:this.scale};l.each(c.Text.Properties,function(c){d[c]=
this[c]},this);return d},noStroke:function(){this.stroke="transparent";return this},noFill:function(){this.fill="transparent";return this},getBoundingClientRect:function(c){this._update(!0);c=(c?this._matrix:m(this)).multiply(0,0,1);return{top:c.x,left:c.y,right:c.x,bottom:c.y,width:0,height:0}},flagReset:function(){this._flagValue=this._flagFamily=this._flagSize=this._flagLeading=this._flagAlignment=this._flagFill=this._flagStroke=this._flagLinewidth=this._flagOpaicty=this._flagVisible=this._flagClip=
this._flagDecoration=this._flagBaseline=!1;c.Shape.prototype.flagReset.call(this);return this}});c.Text.MakeObservable(c.Text.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.Stop=function(c,d,e){this._renderer={};this._renderer.type="stop";this.offset=k.isNumber(c)?c:0>=m.Index?0:1;this.opacity=k.isNumber(e)?e:1;this.color=k.isString(d)?d:0>=m.Index?"#fff":"#000";m.Index=(m.Index+1)%2};k.extend(m,{Index:0,Properties:["offset","opacity","color"],MakeObservable:function(c){k.each(m.Properties,function(c){var d="_"+c,a="_flag"+c.charAt(0).toUpperCase()+c.slice(1);Object.defineProperty(this,c,{enumerable:!0,get:function(){return this[d]},set:function(c){this[d]=
c;this[a]=!0;this.parent&&(this.parent._flagStops=!0)}})},c)}});k.extend(m.prototype,c.Utils.Events,{clone:function(){var c=new m;k.each(m.Properties,function(d){c[d]=this[d]},this);return c},toObject:function(){var c={};k.each(m.Properties,function(d){c[d]=this[d]},this);return c},flagReset:function(){this._flagOffset=this._flagColor=this._flagOpacity=!1;return this}});m.MakeObservable(m.prototype);var l=c.Gradient=function(h){this._renderer={};this._renderer.type="gradient";this.id=c.Identifier+
c.uniqueId();this.classList=[];this._renderer.flagStops=k.bind(l.FlagStops,this);this._renderer.bindStops=k.bind(l.BindStops,this);this._renderer.unbindStops=k.bind(l.UnbindStops,this);this.spread="pad";this.stops=h};k.extend(l,{Stop:m,Properties:["spread"],MakeObservable:function(h){k.each(l.Properties,c.Utils.defineProperty,h);Object.defineProperty(h,"stops",{enumerable:!0,get:function(){return this._stops},set:function(d){var e=this._renderer.bindStops,a=this._renderer.unbindStops;this._stops&&
this._stops.unbind(c.Events.insert,e).unbind(c.Events.remove,a);this._stops=new c.Utils.Collection((d||[]).slice(0));this._stops.bind(c.Events.insert,e).bind(c.Events.remove,a);e(this._stops)}})},FlagStops:function(){this._flagStops=!0},BindStops:function(h){for(var d=h.length;d--;)h[d].bind(c.Events.change,this._renderer.flagStops),h[d].parent=this;this._renderer.flagStops()},UnbindStops:function(h){for(var d=h.length;d--;)h[d].unbind(c.Events.change,this._renderer.flagStops),delete h[d].parent;
this._renderer.flagStops()}});k.extend(l.prototype,c.Utils.Events,{_flagStops:!1,_flagSpread:!1,clone:function(h){h=h||this.parent;var d=k.map(this.stops,function(a){return a.clone()}),e=new l(d);k.each(c.Gradient.Properties,function(a){e[a]=this[a]},this);h&&h.add(e);return e},toObject:function(){var c={stops:k.map(this.stops,function(c){return c.toObject()})};k.each(l.Properties,function(d){c[d]=this[d]},this);return c},_update:function(){(this._flagSpread||this._flagStops)&&this.trigger(c.Events.change);
return this},flagReset:function(){this._flagSpread=this._flagStops=!1;return this}});l.MakeObservable(l.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.LinearGradient=function(l,h,d,e,a){c.Gradient.call(this,a);this._renderer.type="linear-gradient";a=k.bind(m.FlagEndPoints,this);this.left=(new c.Vector).bind(c.Events.change,a);this.right=(new c.Vector).bind(c.Events.change,a);k.isNumber(l)&&(this.left.x=l);k.isNumber(h)&&(this.left.y=h);k.isNumber(d)&&(this.right.x=d);k.isNumber(e)&&(this.right.y=e)};k.extend(m,{Stop:c.Gradient.Stop,MakeObservable:function(k){c.Gradient.MakeObservable(k)},FlagEndPoints:function(){this._flagEndPoints=
!0}});k.extend(m.prototype,c.Gradient.prototype,{_flagEndPoints:!1,clone:function(l){l=l||this.parent;var h=k.map(this.stops,function(c){return c.clone()}),d=new m(this.left._x,this.left._y,this.right._x,this.right._y,h);k.each(c.Gradient.Properties,function(c){d[c]=this[c]},this);l&&l.add(d);return d},toObject:function(){var k=c.Gradient.prototype.toObject.call(this);k.left=this.left.toObject();k.right=this.right.toObject();return k},_update:function(){(this._flagEndPoints||this._flagSpread||this._flagStops)&&
this.trigger(c.Events.change);return this},flagReset:function(){this._flagEndPoints=!1;c.Gradient.prototype.flagReset.call(this);return this}});m.MakeObservable(m.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.RadialGradient=function(l,h,d,e,a,g){c.Gradient.call(this,e);this._renderer.type="radial-gradient";this.center=(new c.Vector).bind(c.Events.change,k.bind(function(){this._flagCenter=!0},this));this.radius=k.isNumber(d)?d:20;this.focal=(new c.Vector).bind(c.Events.change,k.bind(function(){this._flagFocal=!0},this));k.isNumber(l)&&(this.center.x=l);k.isNumber(h)&&(this.center.y=h);this.focal.copy(this.center);k.isNumber(a)&&(this.focal.x=a);k.isNumber(g)&&(this.focal.y=
g)};k.extend(m,{Stop:c.Gradient.Stop,Properties:["radius"],MakeObservable:function(l){c.Gradient.MakeObservable(l);k.each(m.Properties,c.Utils.defineProperty,l)}});k.extend(m.prototype,c.Gradient.prototype,{_flagRadius:!1,_flagCenter:!1,_flagFocal:!1,clone:function(l){l=l||this.parent;var h=k.map(this.stops,function(c){return c.clone()}),d=new m(this.center._x,this.center._y,this._radius,h,this.focal._x,this.focal._y);k.each(c.Gradient.Properties.concat(m.Properties),function(c){d[c]=this[c]},this);
l&&l.add(d);return d},toObject:function(){var l=c.Gradient.prototype.toObject.call(this);k.each(m.Properties,function(c){l[c]=this[c]},this);l.center=this.center.toObject();l.focal=this.focal.toObject();return l},_update:function(){(this._flagRadius||this._flatCenter||this._flagFocal||this._flagSpread||this._flagStops)&&this.trigger(c.Events.change);return this},flagReset:function(){this._flagRadius=this._flagCenter=this._flagFocal=!1;c.Gradient.prototype.flagReset.call(this);return this}});m.MakeObservable(m.prototype)})(("undefined"!==
typeof global?global:this).Two);
(function(c){var k=c.Utils,m,l=/\.(mp4|webm)$/i;this.document&&(m=document.createElement("a"));var h=c.Texture=function(d,e){this._renderer={};this._renderer.type="texture";this._renderer.flagOffset=k.bind(h.FlagOffset,this);this._renderer.flagScale=k.bind(h.FlagScale,this);this.id=c.Identifier+c.uniqueId();this.classList=[];this.offset=new c.Vector;if(k.isFunction(e)){var a=k.bind(function(){this.unbind(c.Events.load,a);k.isFunction(e)&&e()},this);this.bind(c.Events.load,a)}k.isString(d)?this.src=
d:k.isElement(d)&&(this.image=d);this._update()};k.extend(h,{Properties:["src","loaded","repeat"],ImageRegistry:new c.Registry,getAbsoluteURL:function(c){if(!m)return c;m.href=c;return m.href},getImage:function(c){c=h.getAbsoluteURL(c);if(h.ImageRegistry.contains(c))return h.ImageRegistry.get(c);c=l.test(c)?document.createElement("video"):document.createElement("img");c.crossOrigin="anonymous";return c},Register:{canvas:function(c,e){c._src="#"+c.id;h.ImageRegistry.add(c.src,c.image);k.isFunction(e)&&
e()},img:function(d,e){var a=function(c){d.image.removeEventListener("load",a,!1);d.image.removeEventListener("error",g,!1);k.isFunction(e)&&e()},g=function(e){d.image.removeEventListener("load",a,!1);d.image.removeEventListener("error",g,!1);throw new c.Utils.Error("unable to load "+d.src);};k.isNumber(d.image.width)&&0<d.image.width&&k.isNumber(d.image.height)&&0<d.image.height?a():(d.image.addEventListener("load",a,!1),d.image.addEventListener("error",g,!1));d._src=h.getAbsoluteURL(d._src);d.image&&
d.image.getAttribute("two-src")||(d.image.setAttribute("two-src",d.src),h.ImageRegistry.add(d.src,d.image),d.image.src=d.src)},video:function(d,e){var a=function(c){d.image.removeEventListener("load",a,!1);d.image.removeEventListener("error",g,!1);d.image.width=d.image.videoWidth;d.image.height=d.image.videoHeight;d.image.play();k.isFunction(e)&&e()},g=function(e){d.image.removeEventListener("load",a,!1);d.image.removeEventListener("error",g,!1);throw new c.Utils.Error("unable to load "+d.src);};
d._src=h.getAbsoluteURL(d._src);d.image.addEventListener("canplaythrough",a,!1);d.image.addEventListener("error",g,!1);d.image&&d.image.getAttribute("two-src")||(d.image.setAttribute("two-src",d.src),h.ImageRegistry.add(d.src,d.image),d.image.src=d.src,d.image.loop=!0,d.image.load())}},load:function(c,e){var a=c.image,d=a&&a.nodeName.toLowerCase();c._flagImage&&(/canvas/i.test(d)?h.Register.canvas(c,e):(c._src=a.getAttribute("two-src")||a.src,h.Register[d](c,e)));c._flagSrc&&(a||(c.image=h.getImage(c.src)),
d=c.image.nodeName.toLowerCase(),h.Register[d](c,e))},FlagOffset:function(){this._flagOffset=!0},FlagScale:function(){this._flagScale=!0},MakeObservable:function(d){k.each(h.Properties,c.Utils.defineProperty,d);Object.defineProperty(d,"image",{enumerable:!0,get:function(){return this._image},set:function(c){switch(c&&c.nodeName.toLowerCase()){case "canvas":var a="#"+c.id;break;default:a=c.src}h.ImageRegistry.contains(a)?this._image=h.ImageRegistry.get(c.src):this._image=c;this._flagImage=!0}});Object.defineProperty(d,
"offset",{enumerable:!0,get:function(){return this._offset},set:function(d){this._offset&&this._offset.unbind(c.Events.change,this._renderer.flagOffset);this._offset=d;this._offset.bind(c.Events.change,this._renderer.flagOffset);this._flagOffset=!0}});Object.defineProperty(d,"scale",{enumerable:!0,get:function(){return this._scale},set:function(d){this._scale instanceof c.Vector&&this._scale.unbind(c.Events.change,this._renderer.flagScale);this._scale=d;this._scale instanceof c.Vector&&this._scale.bind(c.Events.change,
this._renderer.flagScale);this._flagScale=!0}})}});k.extend(h.prototype,c.Utils.Events,c.Shape.prototype,{_flagSrc:!1,_flagImage:!1,_flagVideo:!1,_flagLoaded:!1,_flagRepeat:!1,_flagOffset:!1,_flagScale:!1,_src:"",_image:null,_loaded:!1,_repeat:"no-repeat",_scale:1,_offset:null,clone:function(){return new h(this.src)},toObject:function(){return{src:this.src,image:this.image}},_update:function(){if(this._flagSrc||this._flagImage||this._flagVideo)if(this.trigger(c.Events.change),this._flagSrc||this._flagImage)this.loaded=
!1,h.load(this,k.bind(function(){this.loaded=!0;this.trigger(c.Events.change).trigger(c.Events.load)},this));this._image&&4<=this._image.readyState&&(this._flagVideo=!0);return this},flagReset:function(){this._flagSrc=this._flagImage=this._flagLoaded=this._flagVideo=this._flagScale=this._flagOffset=!1;return this}});h.MakeObservable(h.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.Path,l=c.Rectangle,h=c.Sprite=function(d,e,a,g,h,f){m.call(this,[new c.Anchor,new c.Anchor,new c.Anchor,new c.Anchor],!0);this.noStroke();this.noFill();d instanceof c.Texture?this.texture=d:k.isString(d)&&(this.texture=new c.Texture(d));this._update();this.translation.set(e||0,a||0);k.isNumber(g)&&(this.columns=g);k.isNumber(h)&&(this.rows=h);k.isNumber(f)&&(this.frameRate=f)};k.extend(h,{Properties:["texture","columns","rows","frameRate","index"],MakeObservable:function(d){l.MakeObservable(d);
k.each(h.Properties,c.Utils.defineProperty,d)}});k.extend(h.prototype,l.prototype,{_flagTexture:!1,_flagColumns:!1,_flagRows:!1,_flagFrameRate:!1,flagIndex:!1,_amount:1,_duration:0,_startTime:0,_playing:!1,_firstFrame:0,_lastFrame:0,_loop:!0,_texture:null,_columns:1,_rows:1,_frameRate:0,_index:0,play:function(c,e,a){this._playing=!0;this._firstFrame=0;this._lastFrame=this.amount-1;this._startTime=k.performance.now();k.isNumber(c)&&(this._firstFrame=c);k.isNumber(e)&&(this._lastFrame=e);k.isFunction(a)?
this._onLastFrame=a:delete this._onLastFrame;this._index!==this._firstFrame&&(this._startTime-=1E3*Math.abs(this._index-this._firstFrame)/this._frameRate);return this},pause:function(){this._playing=!1;return this},stop:function(){this._playing=!1;this._index=0;return this},clone:function(c){c=c||this.parent;var d=new h(this.texture,this.translation.x,this.translation.y,this.columns,this.rows,this.frameRate);this.playing&&(d.play(this._firstFrame,this._lastFrame),d._loop=this._loop);c&&c.add(d);return d},
_update:function(){var c=this._texture,e=this._columns,a=this._rows;if(this._flagColumns||this._flagRows)this._amount=this._columns*this._rows;this._flagFrameRate&&(this._duration=1E3*this._amount/this._frameRate);this._flagTexture&&(this.fill=this._texture);if(this._texture.loaded){var g=c.image.width;var h=c.image.height;var f=g/e;a=h/a;var m=this._amount;this.width!==f&&(this.width=f);this.height!==a&&(this.height=a);if(this._playing&&0<this._frameRate){k.isNaN(this._lastFrame)&&(this._lastFrame=
m-1);m=k.performance.now()-this._startTime;var v=this._lastFrame+1;var B=1E3*(v-this._firstFrame)/this._frameRate;m=this._loop?m%B:Math.min(m,B);m=k.lerp(this._firstFrame,v,m/B);m=Math.floor(m);m!==this._index&&(this._index=m,m>=this._lastFrame-1&&this._onLastFrame&&this._onLastFrame())}f=this._index%e*-f+(g-f)/2;e=-a*Math.floor(this._index/e)+(h-a)/2;f!==c.offset.x&&(c.offset.x=f);e!==c.offset.y&&(c.offset.y=e)}l.prototype._update.call(this);return this},flagReset:function(){this._flagTexture=this._flagColumns=
this._flagRows=this._flagFrameRate=!1;l.prototype.flagReset.call(this);return this}});h.MakeObservable(h.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.Path,l=c.Rectangle,h=c.ImageSequence=function(d,e,a,g){m.call(this,[new c.Anchor,new c.Anchor,new c.Anchor,new c.Anchor],!0);this._renderer.flagTextures=k.bind(h.FlagTextures,this);this._renderer.bindTextures=k.bind(h.BindTextures,this);this._renderer.unbindTextures=k.bind(h.UnbindTextures,this);this.noStroke();this.noFill();this.textures=k.map(d,h.GenerateTexture,this);this._update();this.translation.set(e||0,a||0);k.isNumber(g)?this.frameRate=g:this.frameRate=h.DefaultFrameRate};
k.extend(h,{Properties:["frameRate","index"],DefaultFrameRate:30,FlagTextures:function(){this._flagTextures=!0},BindTextures:function(d){for(var e=d.length;e--;)d[e].bind(c.Events.change,this._renderer.flagTextures);this._renderer.flagTextures()},UnbindTextures:function(d){for(var e=d.length;e--;)d[e].unbind(c.Events.change,this._renderer.flagTextures);this._renderer.flagTextures()},MakeObservable:function(d){l.MakeObservable(d);k.each(h.Properties,c.Utils.defineProperty,d);Object.defineProperty(d,
"textures",{enumerable:!0,get:function(){return this._textures},set:function(d){var a=this._renderer.bindTextures,e=this._renderer.unbindTextures;this._textures&&this._textures.unbind(c.Events.insert,a).unbind(c.Events.remove,e);this._textures=new c.Utils.Collection((d||[]).slice(0));this._textures.bind(c.Events.insert,a).bind(c.Events.remove,e);a(this._textures)}})},GenerateTexture:function(d){if(d instanceof c.Texture)return d;if(k.isString(d))return new c.Texture(d)}});k.extend(h.prototype,l.prototype,
{_flagTextures:!1,_flagFrameRate:!1,_flagIndex:!1,_amount:1,_duration:0,_index:0,_startTime:0,_playing:!1,_firstFrame:0,_lastFrame:0,_loop:!0,_textures:null,_frameRate:0,play:function(c,e,a){this._playing=!0;this._firstFrame=0;this._lastFrame=this.amount-1;this._startTime=k.performance.now();k.isNumber(c)&&(this._firstFrame=c);k.isNumber(e)&&(this._lastFrame=e);k.isFunction(a)?this._onLastFrame=a:delete this._onLastFrame;this._index!==this._firstFrame&&(this._startTime-=1E3*Math.abs(this._index-this._firstFrame)/
this._frameRate);return this},pause:function(){this._playing=!1;return this},stop:function(){this._playing=!1;this._index=0;return this},clone:function(c){c=c||this.parent;var d=new h(this.textures,this.translation.x,this.translation.y,this.frameRate);d._loop=this._loop;this._playing&&d.play();c&&c.add(d);return d},_update:function(){var d=this._textures;this._flagTextures&&(this._amount=d.length);this._flagFrameRate&&(this._duration=1E3*this._amount/this._frameRate);if(this._playing&&0<this._frameRate){var e=
this._amount;k.isNaN(this._lastFrame)&&(this._lastFrame=e-1);e=k.performance.now()-this._startTime;var a=this._lastFrame+1;var g=1E3*(a-this._firstFrame)/this._frameRate;e=this._loop?e%g:Math.min(e,g);e=k.lerp(this._firstFrame,a,e/g);e=Math.floor(e);e!==this._index&&(this._index=e,a=d[this._index],a.loaded&&(d=a.image.width,g=a.image.height,this.width!==d&&(this.width=d),this.height!==g&&(this.height=g),this.fill=a,e>=this._lastFrame-1&&this._onLastFrame&&this._onLastFrame()))}else!this._flagIndex&&
this.fill instanceof c.Texture||(a=d[this._index],a.loaded&&(d=a.image.width,g=a.image.height,this.width!==d&&(this.width=d),this.height!==g&&(this.height=g)),this.fill=a);l.prototype._update.call(this);return this},flagReset:function(){this._flagTextures=this._flagFrameRate=!1;l.prototype.flagReset.call(this);return this}});h.MakeObservable(h.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){function k(a,c){var d=a.parent;if(d===c)this.additions.push(a),this._flagAdditions=!0;else{if(d&&d.children.ids[a.id]){var e=h.indexOf(d.children,a);d.children.splice(e,1);e=h.indexOf(d.additions,a);0<=e?d.additions.splice(e,1):(d.subtractions.push(a),d._flagSubtractions=!0)}c?(a.parent=c,this.additions.push(a),this._flagAdditions=!0):(e=h.indexOf(this.additions,a),0<=e?this.additions.splice(e,1):(this.subtractions.push(a),this._flagSubtractions=!0),delete a.parent)}}var m=Math.min,l=
Math.max,h=c.Utils,d=function(){c.Utils.Collection.apply(this,arguments);Object.defineProperty(this,"_events",{value:{},enumerable:!1});this.ids={};this.on(c.Events.insert,this.attach);this.on(c.Events.remove,this.detach);d.prototype.attach.apply(this,arguments)};d.prototype=new c.Utils.Collection;d.prototype.constructor=d;h.extend(d.prototype,{attach:function(a){for(var c=0;c<a.length;c++)this.ids[a[c].id]=a[c];return this},detach:function(a){for(var c=0;c<a.length;c++)delete this.ids[a[c].id];return this}});
var e=c.Group=function(){c.Shape.call(this,!0);this._renderer.type="group";this.additions=[];this.subtractions=[];this.children=arguments};h.extend(e,{Children:d,InsertChildren:function(a){for(var c=0;c<a.length;c++)k.call(this,a[c],this)},RemoveChildren:function(a){for(var c=0;c<a.length;c++)k.call(this,a[c])},OrderChildren:function(a){this._flagOrder=!0},MakeObservable:function(a){var g=c.Path.Properties.slice(0),k=h.indexOf(g,"opacity");0<=k&&(g.splice(k,1),Object.defineProperty(a,"opacity",{enumerable:!0,
get:function(){return this._opacity},set:function(a){this._flagOpacity=this._opacity!=a;this._opacity=a}}));c.Shape.MakeObservable(a);e.MakeGetterSetters(a,g);Object.defineProperty(a,"children",{enumerable:!0,get:function(){return this._children},set:function(a){var g=h.bind(e.InsertChildren,this),f=h.bind(e.RemoveChildren,this),k=h.bind(e.OrderChildren,this);this._children&&this._children.unbind();this._children=new d(a);this._children.bind(c.Events.insert,g);this._children.bind(c.Events.remove,
f);this._children.bind(c.Events.order,k)}});Object.defineProperty(a,"mask",{enumerable:!0,get:function(){return this._mask},set:function(a){this._mask=a;this._flagMask=!0;a.clip||(a.clip=!0)}})},MakeGetterSetters:function(a,c){h.isArray(c)||(c=[c]);h.each(c,function(c){e.MakeGetterSetter(a,c)})},MakeGetterSetter:function(a,c){var d="_"+c;Object.defineProperty(a,c,{enumerable:!0,get:function(){return this[d]},set:function(a){this[d]=a;h.each(this.children,function(d){d[c]=a})}})}});h.extend(e.prototype,
c.Shape.prototype,{_flagAdditions:!1,_flagSubtractions:!1,_flagOrder:!1,_flagOpacity:!0,_flagMask:!1,_fill:"#fff",_stroke:"#000",_linewidth:1,_opacity:1,_visible:!0,_cap:"round",_join:"round",_miter:4,_closed:!0,_curved:!1,_automatic:!0,_beginning:0,_ending:1,_mask:null,clone:function(a){a=a||this.parent;var c=new e,d=h.map(this.children,function(a){return a.clone(c)});c.add(d);c.opacity=this.opacity;this.mask&&(c.mask=this.mask);c.translation.copy(this.translation);c.rotation=this.rotation;c.scale=
this.scale;a&&a.add(c);return c},toObject:function(){var a={children:[],translation:this.translation.toObject(),rotation:this.rotation,scale:this.scale,opacity:this.opacity,mask:this.mask?this.mask.toObject():null};h.each(this.children,function(c,d){a.children[d]=c.toObject()},this);return a},corner:function(){var a=this.getBoundingClientRect(!0),c={x:a.left,y:a.top};this.children.forEach(function(a){a.translation.subSelf(c)});return this},center:function(){var a=this.getBoundingClientRect(!0);a.centroid=
{x:a.left+a.width/2,y:a.top+a.height/2};this.children.forEach(function(c){c.isShape&&c.translation.subSelf(a.centroid)});return this},getById:function(a){var c=function(a,d){if(a.id===d)return a;if(a.children)for(var e=a.children.length;e--;){var f=c(a.children[e],d);if(f)return f}};return c(this,a)||null},getByClassName:function(a){var c=[],d=function(a,e){-1!=a.classList.indexOf(e)?c.push(a):a.children&&a.children.forEach(function(a){d(a,e)});return c};return d(this,a)},getByType:function(a){var d=
[],e=function(a,g){for(var f in a.children)a.children[f]instanceof g?d.push(a.children[f]):a.children[f]instanceof c.Group&&e(a.children[f],g);return d};return e(this,a)},add:function(a){a=a instanceof Array?a.slice():h.toArray(arguments);for(var c=0;c<a.length;c++)a[c]&&a[c].id&&this.children.push(a[c]);return this},remove:function(a){var c=this.parent;if(0>=arguments.length&&c)return c.remove(this),this;a=a instanceof Array?a.slice():h.toArray(arguments);for(c=0;c<a.length;c++)a[c]&&this.children.ids[a[c].id]&&
this.children.splice(h.indexOf(this.children,a[c]),1);return this},getBoundingClientRect:function(a){var c;this._update(!0);var d=Infinity,e=-Infinity,k=Infinity,v=-Infinity;this.children.forEach(function(f){/(linear-gradient|radial-gradient|gradient)/.test(f._renderer.type)||(c=f.getBoundingClientRect(a),h.isNumber(c.top)&&h.isNumber(c.left)&&h.isNumber(c.right)&&h.isNumber(c.bottom)&&(k=m(c.top,k),d=m(c.left,d),e=l(c.right,e),v=l(c.bottom,v)))},this);return{top:k,left:d,right:e,bottom:v,width:e-
d,height:v-k}},noFill:function(){this.children.forEach(function(a){a.noFill()});return this},noStroke:function(){this.children.forEach(function(a){a.noStroke()});return this},subdivide:function(){var a=arguments;this.children.forEach(function(c){c.subdivide.apply(c,a)});return this},flagReset:function(){this._flagAdditions&&(this.additions.length=0,this._flagAdditions=!1);this._flagSubtractions&&(this.subtractions.length=0,this._flagSubtractions=!1);this._flagOrder=this._flagMask=this._flagOpacity=
!1;c.Shape.prototype.flagReset.call(this);return this}});e.MakeObservable(e.prototype)})(("undefined"!==typeof global?global:this).Two);
class Tween {
    static TweenVector = async function(Obj, Property, NewValue, TimeInSeconds) {
        var TimeInMilliseconds = TimeInSeconds * 1000
        var OldValueX = Obj[Property].x
        var OldValueY = Obj[Property].y
        var NewValueX = NewValue.x - OldValueX
        var NewValueY = NewValue.y - OldValueY
        var i;
        for (i = 0; i < TimeInSeconds * 100; i++) {
            Obj[Property] = Vector2.new(Obj[Property].x + (NewValueX / (TimeInSeconds * 100)), Obj[Property].y + (NewValueY / (TimeInSeconds * 100)))
            await sleep(TimeInMilliseconds / (TimeInSeconds * 100))
        }
    }
    static TweenColor = async function(Obj, Property, NewValue, TimeInSeconds) {
        var TimeInMilliseconds = TimeInSeconds * 1000
        var OldValueRed = Obj[Property].red
        var OldValueGreen = Obj[Property].green
        var OldValueBlue = Obj[Property].blue
        var NewValueRed = NewValue.red - OldValueRed
        var NewValueGreen = NewValue.green - OldValueGreen
        var NewValueBlue = NewValue.blue - OldValueBlue
        var i;
        for (i = 0; i < TimeInSeconds * 100; i++) {
            Obj[Property] = Color3.fromRGB(Obj[Property].red + (NewValueRed / (TimeInSeconds * 100)), Obj[Property].green + (NewValueGreen / (TimeInSeconds * 100)), Obj[Property].blue + (NewValueBlue / (TimeInSeconds * 100)))
            await sleep(TimeInMilliseconds / (TimeInSeconds * 100))
        }
    }
    static TweenNumber = async function(Obj, Property, NewValue, TimeInSeconds) {
        var TimeInMilliseconds = TimeInSeconds * 1000
        var OldValue = Obj[Property]
        var NewValue = NewValue - OldValue
        var i;
        for (i = 0; i < TimeInSeconds * 100; i++) {
            Obj[Property] = Obj[Property] + (NewValue / (TimeInSeconds * 100))
            await sleep(TimeInMilliseconds / (TimeInSeconds * 100))
        }
    }
}
class Mouse {
  static isInitialized = false;
  static MouseDownFunctions = [];
  static MouseUpFunctions = [];
  static ClickFunctions = [];
  static MouseMoveFunctions = [];
  static MousePos = null
  static init() {
    document.addEventListener("mousedown", function(e) {
      Mouse.MouseDownFunctions.forEach(function(func) {
        func(e);
      });
    });
    document.addEventListener("mouseup", function(e) {
      Mouse.MouseUpFunctions.forEach(function(func) {
        func(e);
      });
    });
    document.addEventListener("click", function(e) {
      Mouse.ClickFunctions.forEach(function(func) {
        func(e);
      });
    });
    document.addEventListener("mousemove", function(e) {
      Mouse.MouseMoveFunctions.forEach(function(func) {
        func(e);
      });
      Mouse.MousePos = Vector2.new(
        (e.x / window.innerWidth).toFixed(2),
        (e.y / window.innerHeight).toFixed(2)
      );
    });
  }
  static get MouseDown() {
    if (Mouse.isInitialized == false) {
      Mouse.init();
      Mouse.isInitialized = true;
    }
    return {
      connect: function(func) {
        Mouse.MouseDownFunctions.push(func);
      }
    };
  }
  static get MouseUp() {
    if (Mouse.isInitialized == false) {
      Mouse.init();
      Mouse.isInitialized = true;
    }
    return {
      connect: function(func) {
        Mouse.MouseUpFunctions.push(func);
      }
    };
  }
  static get Click() {
    if (Mouse.isInitialized == false) {
      Mouse.init();
      Mouse.isInitialized = true;
    }
    return {
      connect: function(func) {
        Mouse.ClickFunctions.push(func);
      }
    };
  }
  static get MouseMove() {
    if (Mouse.isInitialized == false) {
      Mouse.init();
      Mouse.isInitialized = true;
    }
    return {
      connect: function(func) {
        Mouse.MouseMoveFunctions.push(func);
      }
    };
  }
  static get position() {
    if (Mouse.isInitialized == false) {
      Mouse.init();
      Mouse.isInitialized = true;
    }
    return Mouse.MousePos;
  }
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

class Rectangle {
    constructor(Width, Height) {
      this.name = "Rectangle" + makeName(10);
      /*this.tworect = two.makeRectangle(
        window.innerWidth / 2,
        window.innerHeight / 2,
        window.innerWidth * Width,
        window.innerHeight * Height
      );*/
      this.tworect = two.makeRoundedRectangle(window.innerWidth / 2,window.innerHeight / 2, window.innerWidth * Width, window.innerHeight * Height, 0)
      Objects[this.name] = this;
      this.position = Vector2.new(0.5, 0.5);
      this.size = Vector2.new(Width, Height);
      this.innerColor = Color3.fromRGB(255, 0, 0);
      this.outline = 0;
      this.opacity = 1;
      this.outlineColor = Color3.fromRGB(0, 0, 0);
      this.visible = true;
      this.rotation = 0
      this.bevel = 0
      this.SVGElement = document.querySelector("#two_0").childNodes[
        document.querySelector("#two_0").childNodes.length - 1
      ];
      var TotalObjectsNumber = Object.keys(Objects).length + 1
      this.layer = TotalObjectsNumber
      console.log("Layer is " + this.layer)
    }
    set position(NewPos) {
      var NewX = NewPos.x;
      var NewY = NewPos.y;
      this.tworect.translation.set(
        window.innerWidth * NewX,
        window.innerHeight * NewY
      );
      this.setPropertyAndUpdate("position", NewPos);
    }
    set outline(NewOutline) {
      this.tworect.linewidth = NewOutline;
      this.setPropertyAndUpdate("outline", NewOutline);
    }
    get outline() {
      return this._outline;
    }
    set outlineColor(NewColor) {
      this.tworect.stroke =
        "#" + Color3.rgbToHex(NewColor.red, NewColor.green, NewColor.blue);
      this.setPropertyAndUpdate("outlineColor", NewColor);
    }
    get outlineColor() {
      return this._outlineColor;
    }
    set opacity(NewOpacity) {
      this.tworect.opacity = NewOpacity;
      this.setPropertyAndUpdate("opacity", NewOpacity);
    }
    get opacity() {
      return this._opacity;
    }
    get position() {
      return this._position;
    }
    set innerColor(NewColor) {
      var r = NewColor.red;
      var g = NewColor.green;
      var b = NewColor.blue;
      this.tworect.fill = "rgba(" + r + "," + g + "," + b + ", 1)";
      this.setPropertyAndUpdate("innerColor", NewColor);
    }
    get innerColor() {
      return this._innerColor;
    }
    set size(NewSize) {
      var SizeX = window.innerWidth * NewSize.x;
      var SizeY = window.innerHeight * NewSize.y;
      this.tworect.width = SizeX;
      this.tworect.height = SizeY;
      this.setPropertyAndUpdate("size", NewSize);
    }
    get size() {
      return this._size;
    }
    set visible(NewVisibility) {
      if (NewVisibility == false) {
        this.tworect.opacity = 0;
      } else {
        this.tworect.opacity = 1;
      }
      this.setPropertyAndUpdate("visible", NewVisibility);
    }
    get visible() {
      return this._visible;
    }
    set layer(NewLayer) {
      this.setPropertyAndUpdate("layer", NewLayer);
      ReLayerObjects()
    }
    get layer() {
      return this._layer;
    }
    set rotation(NewRotation) {
      //Formula for degrees to radians is degrees * pi / 180
      this.tworect.rotation = NewRotation * Math.PI / 180
      this.setPropertyAndUpdate("rotation", NewRotation)
    }
    get rotation() {
      return this._rotation
    }
    set bevel(NewBevel) {
      this.tworect.radius = NewBevel
      this.setPropertyAndUpdate("bevel", NewBevel)
    }
    get bevel() {
      return this._bevel
    }
    destroy() {
      this.visible = false
      this.tworect.remove()
      two.update()
    }
    BringToFront() {
      document.querySelector("#two_0").appendChild(this.SVGElement);
    }
    setPropertyAndUpdate(PropName, PropValue) {
      this["_" + PropName] = PropValue;
      two.update();
    }
  }
class Button {
  constructor(Width, Height) {
    var Name = "Button" + makeName(10);
    Objects[Name] = this;
    this.rectangle = new Rectangle(Width, Height);
    this.onButtonClicked = function() {};
    this._isMouseDown = false
    this.visible = true
    document.addEventListener("click", this.click.bind(this));

    document.addEventListener("mousedown", this.mousedown.bind(this));

    document.addEventListener("mouseup", this.mouseup.bind(this));

    document.addEventListener("mousemove", this.mousemove.bind(this));
    this.onMouseUnhover = function() {

    }
    this.onMouseHover = function() {

    }
    this.onMouseDown = function() {

    }
    this.onMouseUp = function() {

    }
  }
  mousemove(e) {
    if(this.visible == true){
      if (this.isPointInRectangle(e.clientX, e.clientY, this.rectangle)) {
        this.onMouseHover();
      } else {
        this.onMouseUnhover()
      }
    }
  }
  click(e) {
    if(this.visible == true){
      if (this.isPointInRectangle(e.clientX, e.clientY, this.rectangle)) {
        //Mouse Clicked
        this.onButtonClicked();
      }
    }
  }

  mouseup(e) {
    //Mouse Up
    if(this.visible == true){
      if(this._isMouseDown == true) {
        this.onMouseUp()
        this._isMouseDown = false
      }
    }
  }
  mousedown(e) {
    if(this.visible == true) {
      if (this.isPointInRectangle(e.clientX, e.clientY, this.rectangle)) {
        //Mouse Down
        this.onMouseDown()
        this._isMouseDown = true
      }
    }
  }
  isPointInRectangle(X, Y, Rectangle) {
    var CenterOfButtonX = Rectangle.position.x * window.innerWidth;
    var CenterOfButtonY = Rectangle.position.y * window.innerHeight;
    var SizeOfButtonX = Rectangle.size.x * window.innerWidth;
    var SizeOfButtonY = Rectangle.size.y * window.innerHeight;

    var LeftSideOfButton = CenterOfButtonX - SizeOfButtonX / 2;
    var RightSideOfButton = CenterOfButtonX + SizeOfButtonX / 2;

    var TopOfButton = CenterOfButtonY - SizeOfButtonY / 2;
    var BottomOfButton = CenterOfButtonY + SizeOfButtonY / 2;

    if (
      X > LeftSideOfButton &&
      X < RightSideOfButton &&
      Y > TopOfButton &&
      Y < BottomOfButton
    ) {
      return true;
    } else {
      return false;
    }
  }

  set position(NewPos) {
    this.rectangle.position = NewPos;
    this.setPropertyAndUpdate("position", NewPos);
  }
  get position() {
    return this._position;
  }
  set size(NewSize) {
    this.rectangle.size = NewSize;
    this.setPropertyAndUpdate("size", NewSize);
  }
  get size() {
    return this._size;
  }
  set onButtonClicked(codeToRun) {
    this.setPropertyAndUpdate("onButtonClicked", codeToRun);
  }
  get onButtonClicked() {
    return this._onButtonClicked;
  }
  set onMouseDown(codeToRun) {
    this.setPropertyAndUpdate("onMouseDown", codeToRun);
  }
  get onMouseDown() {
    return this._onMouseDown;
  }
  set onMouseUp(codeToRun) {
    this.setPropertyAndUpdate("onMouseUp", codeToRun);
  }
  get onMouseUp() {
    return this._onMouseUp;
  }
  set onMouseHover(codeToRun) {
    this.setPropertyAndUpdate("onMouseHover", codeToRun);
  }
  get onMouseHover() {
    return this._onMouseHover
  }
  set onMouseUnhover(codeToRun) {
    this.setPropertyAndUpdate("onMouseUnhover", codeToRun);
  }
  get onMouseUnhover() {
    return this._onMouseUnhover
  }
  set innerColor(NewColor) {
    this.rectangle.innerColor = NewColor;
    this.setPropertyAndUpdate("innerColor", NewColor);
  }
  get innerColor() {
    return this._innerColor;
  }
  set rotation(NewRotation) {
    this.rectangle.rotation = NewRotation
    this.setPropertyAndUpdate("rotation", NewRotation)
  }
  get rotation() {
    return this._rotation
  }
  set outline(NewOutline) {
    this.rectangle.outline = NewOutline
    this.setPropertyAndUpdate("outline", NewOutline)
  }
  get outline() {
    return this._outline
  }
  set outlineColor(NewOutlineColor) {
    this.rectangle.outlineColor = NewOutlineColor
    this.setPropertyAndUpdate("outlineColor", NewOutlineColor)
  }
  get outlineColor() {
    return this._outlineColor
  }
  get isMouseDown() {
    return this._isMouseDown
  }
  set visible(NewVisibility) {
    this.rectangle.visible = NewVisibility
    this.setPropertyAndUpdate("visible", NewVisibility)
  }
  get visible() {
    return this._visible
  }
  destroy() {
    this.visible = false
    this.rectangle.destroy()
  }
  setPropertyAndUpdate(PropName, PropValue) {
    this["_" + PropName] = PropValue;
    two.update();
  }
}

class RaisedButton {
    constructor(Width, Height) {
      var Name = "RaisedButton" + makeName(10);
      Objects[Name] = this;
      this.rectangle = new Rectangle(Width, Height);
      this.backtangle = new Rectangle(Width, Height);
      this.size = Vector2.new(Width, Height);
      this.setRectangleToBacktangle(this.rectangle, this.backtangle);
      this.backtangle.opacity = 0.5;
      this.onButtonClicked = function() {};
      document.addEventListener("click", this.click.bind(this));
  
      document.addEventListener("mousedown", this.mousedown.bind(this));
  
      document.addEventListener("mouseup", this.mouseup.bind(this));
    }
  
    setRectangleToBacktangle(Rectangle, Backtangle) {
      Rectangle.position = Vector2.new(
        Backtangle.position.x,
        Backtangle.position.y - this.size.y / 10
      );
      Rectangle.size = Backtangle.size;
      Rectangle.innerColor = Backtangle.innerColor;
    }
    click(e) {
      if (this.isPointInRectangle(e.clientX, e.clientY, this.rectangle)) {
        this.onButtonClicked();
      }
    }
    mouseup(e) {
      if (this.rectangle.position == this.backtangle.position) {
        this.rectangle.position = Vector2.new(
          this.backtangle.position.x,
          this.backtangle.position.y - this.size.y / 10
        );
      }
    }
    mousedown(e) {
      if (this.isPointInRectangle(e.clientX, e.clientY, this.rectangle)) {
        this.rectangle.position = this.backtangle.position;
      }
    }
    isPointInRectangle(X, Y, Rectangle) {
      var CenterOfButtonX = Rectangle.position.x * window.innerWidth;
      var CenterOfButtonY = Rectangle.position.y * window.innerHeight;
      var SizeOfButtonX = Rectangle.size.x * window.innerWidth;
      var SizeOfButtonY = Rectangle.size.y * window.innerHeight;
  
      var LeftSideOfButton = CenterOfButtonX - SizeOfButtonX / 2;
      var RightSideOfButton = CenterOfButtonX + SizeOfButtonX / 2;
  
      var TopOfButton = CenterOfButtonY - SizeOfButtonY / 2;
      var BottomOfButton = CenterOfButtonY + SizeOfButtonY / 2;
  
      if (
        X > LeftSideOfButton &&
        X < RightSideOfButton &&
        Y > TopOfButton &&
        Y < BottomOfButton
      ) {
        return true;
      } else {
        return false;
      }
    }
  
    set position(NewPos) {
      this.backtangle.position = NewPos;
      this.setRectangleToBacktangle(this.rectangle, this.backtangle);
      this.setPropertyAndUpdate("position", NewPos);
    }
    get position() {
      return this._position;
    }
    set size(NewSize) {
      this.setPropertyAndUpdate("size", NewSize);
      this.backtangle.size = NewSize;
      this.setRectangleToBacktangle(this.rectangle, this.backtangle);
    }
    get size() {
      return this._size;
    }
    set onButtonClicked(codeToRun) {
      this.setPropertyAndUpdate("onButtonClicked", codeToRun);
    }
    get onButtonClicked() {
      return this._onButtonClicked;
    }
    set innerColor(NewColor) {
      this.backtangle.innerColor = NewColor;
      this.setRectangleToBacktangle(this.rectangle, this.backtangle);
      this.setPropertyAndUpdate("innerColor", NewColor);
    }
    get innerColor() {
      return this._innerColor;
    }
    set rotation(NewRotation) {
      console.log("Set rotation")
      this.rectangle.rotation = NewRotation
      this.backtangle.rotation = NewRotation
      this.setPropertyAndUpdate("rotation", NewRotation)
    }
    get rotation() {
      return this._rotation
    }
    setPropertyAndUpdate(PropName, PropValue) {
      this["_" + PropName] = PropValue;
      two.update();
    }
  }
class TextLabel {
    constructor(text) {
      var Name = "TextLabel" + makeName(10);
      Objects[Name] = this;
      this.TextLabel = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      this.TextLabel.textContent = text;
      document.querySelector("#two_0").appendChild(this.TextLabel);
      this.size = 0.1;
      this.position = Vector2.new(0.5, 0.5);
      this.fontFamily = "sans-serif";
      this.visible = true
    }
    set text(NewText) {
      this.TextLabel.textContent = NewText;
      this.setPropertyAndUpdate("text", NewText);
    }
    get text() {
      return this._text;
    }
    set size(NewSize) {
      this.TextLabel.setAttributeNS(null, "font-size", NewSize * 100 + "vw");
      this.setPropertyAndUpdate("size", NewSize);
    }
    get size() {
      return this._size;
    }
    set position(NewPosition) {
      var PosX = NewPosition.x;
      var PosY = NewPosition.y;
      this.TextLabel.setAttributeNS(
        null,
        "x",
        (window.innerWidth * PosX - this.boundingBoxSize.x / 2).toString()
      );
      this.TextLabel.setAttributeNS(
        null,
        "y",
        (window.innerHeight * PosY + this.boundingBoxSize.y / 4).toString()
      );
      this.setPropertyAndUpdate("position", NewPosition);
    }
    get position() {
      return this._position;
    }
    set textColor(NewColor) {
      var SVGColor =
        "#" + Color3.rgbToHex(NewColor.red, NewColor.green, NewColor.blue);
      this.TextLabel.setAttributeNS(null, "fill", SVGColor);
      this.setPropertyAndUpdate("textColor", NewColor);
    }
    get textColor() {
      return this._textColor;
    }
    set fontFamily(NewFontFamily) {
      this.TextLabel.setAttributeNS(null, "font-family", NewFontFamily);
      this.setPropertyAndUpdate("fontFamily", NewFontFamily);
    }
    get fontFamily() {
      return this._fontFamily;
    }
    get boundingBoxSize() {
      var bbox = this.TextLabel.getBBox();
      var width = bbox.width;
      var height = bbox.height;
      return Vector2.new(width, height);
    }
    set layer(NewLayer) {
      this.setPropertyAndUpdate("layer", NewLayer)
      ReLayerObjects()
    }
    get layer() {
      return this._layer
    }
    set rotation(NewRotation) {
      var bbox = this.TextLabel.getBBox();
      var cx = bbox.x + bbox.width/2;
      var cy = bbox.y + bbox.height/2;
      this.TextLabel.setAttribute("transform", "rotate(" + NewRotation + "," + cx + "," + cy + ")")
      this.setPropertyAndUpdate("rotation", NewRotation)
    }
    get rotation() {
      return this._rotation
    }
    set visible(NewVisibility) {
      if(NewVisibility == true) {
        this.TextLabel.setAttribute("visibility", "visible")
      } else {
        this.TextLabel.setAttribute("visibility", "hidden")
      }
      this.setPropertyAndUpdate("visible", NewVisibility)
    }
    get visible() {
      return this._visible
    }
    destroy() {
      this.visible = false
      if(this.TextLabel.parentNode) {
        this.TextLabel.parentNode.removeChild(this.TextLabel);
      }
      
    }
    BringToFront() {
      document.querySelector("#two_0").appendChild(this.TextLabel);
    }
    setPropertyAndUpdate(PropName, PropValue) {
      this["_" + PropName] = PropValue;
      two.update();
    }
  }
class TextButton {
    constructor(Width, Height) {
      var Name = "TextButton" + makeName(10);
      Objects[Name] = this;
      this.rectangle = new Rectangle(Width, Height);
      this.backtangle = new Rectangle(Width, Height);
      this.textlabel = new TextLabel("Button");
      this.size = Vector2.new(Width, Height);
      this.raised = true
      this.visible = true
      this.textColor = Color3.fromRGB(0, 0, 0)
      this.innerColor = Color3.fromRGB(255, 255, 255)
      this.bevel = 0
      this.onlyTextVisible = false
      this.outline = 0
      this.outlineColor = Color3.fromRGB(0, 0, 0)
      this.setRectangleToBacktangle(this.rectangle, this.backtangle);
      var TotalObjectsNumber = Object.keys(Objects).length + 1
      this.layer = TotalObjectsNumber
      this.backtangle.opacity = 0.5;
      this.onButtonClicked = function() {};
      document.addEventListener("click", this.click.bind(this));
  
      document.addEventListener("mousedown", this.mousedown.bind(this));
  
      document.addEventListener("mouseup", this.mouseup.bind(this));
  }
    setRectangleToBacktangle(Rectangle, Backtangle) {
      if(this.raised == true) {
        Rectangle.position = Vector2.new(
          Backtangle.position.x,
          Backtangle.position.y - this.size.y / 10
        );
        Rectangle.size = Backtangle.size;
        this.textlabel.position = Rectangle.position;
        Rectangle.innerColor = Backtangle.innerColor;
      } else {
        Rectangle.position = Vector2.new(
          Backtangle.position.x,
          Backtangle.position.y
        );
        Rectangle.size = Backtangle.size;
        this.textlabel.position = Rectangle.position;
        Rectangle.innerColor = Backtangle.innerColor;
      }
    }
    click(e) {
      if (this.isPointInRectangle(e.clientX, e.clientY, this.rectangle)) {
        if(this.visible == true) {
          this.onButtonClicked();
        }
      }
    }
    mouseup(e) {
      if (this.rectangle.position == this.backtangle.position) {
        /*this.rectangle.position = Vector2.new(
          this.backtangle.position.x,
          this.backtangle.position.y - this.size.y / 10
        );*/
        this.setRectangleToBacktangle(this.rectangle, this.backtangle);
      }
    }
    mousedown(e) {
      if (this.isPointInRectangle(e.clientX, e.clientY, this.rectangle)) {
        this.rectangle.position = this.backtangle.position;
        this.textlabel.position = this.rectangle.position;
      }
    }
    mousemove(e) {
      if (this.isPointInRectangle(e.clientX, e.clientY, this.rectangle)) {
        this.onMouseHover();
      }
    }
    isPointInRectangle(X, Y, Rectangle) {
      var CenterOfButtonX = Rectangle.position.x * window.innerWidth;
      var CenterOfButtonY = Rectangle.position.y * window.innerHeight;
      var SizeOfButtonX = Rectangle.size.x * window.innerWidth;
      var SizeOfButtonY = Rectangle.size.y * window.innerHeight;
  
      var LeftSideOfButton = CenterOfButtonX - SizeOfButtonX / 2;
      var RightSideOfButton = CenterOfButtonX + SizeOfButtonX / 2;
  
      var TopOfButton = CenterOfButtonY - SizeOfButtonY / 2;
      var BottomOfButton = CenterOfButtonY + SizeOfButtonY / 2;
  
      if (
        X > LeftSideOfButton &&
        X < RightSideOfButton &&
        Y > TopOfButton &&
        Y < BottomOfButton
      ) {
        return true;
      } else {
        return false;
      }
    }
  
    set position(NewPos) {
      this.backtangle.position = NewPos;
      this.setRectangleToBacktangle(this.rectangle, this.backtangle);
      this.setPropertyAndUpdate("position", NewPos);
    }
    get position() {
      return this._position;
    }
    set size(NewSize) {
      this.setPropertyAndUpdate("size", NewSize);
      this.backtangle.size = NewSize;
      this.setRectangleToBacktangle(this.rectangle, this.backtangle);
      this.scaleTextToButton();
    }
    get size() {
      return this._size;
    }
    set onButtonClicked(codeToRun) {
      this.setPropertyAndUpdate("onButtonClicked", codeToRun);
    }
    get onButtonClicked() {
      return this._onButtonClicked;
    }
    set innerColor(NewColor) {
      this.backtangle.innerColor = NewColor;
      this.setRectangleToBacktangle(this.rectangle, this.backtangle);
      this.setPropertyAndUpdate("innerColor", NewColor);
    }
    get innerColor() {
      return this._innerColor;
    }
    set textSize(NewSize) {
      this.textlabel.size = NewSize;
      this.setPropertyAndUpdate("textSize", NewSize);
    }
    get textSize() {
      return this._textSize;
    }
    set textColor(NewColor) {
      this.textlabel.textColor = NewColor;
      this.setPropertyAndUpdate("textColor", NewColor);
    }
    get textColor() {
      return this._textColor;
    }
    set text(NewText) {
      this.textlabel.text = NewText;
      this.scaleTextToButton();
      this.setPropertyAndUpdate("text", NewText);
    }
    get text() {
      return this._text;
    }
    set raised(NewRaised) {
      this.setPropertyAndUpdate("raised", NewRaised)
      this.setRectangleToBacktangle(this.rectangle, this.backtangle)
    }
    get raised() {
      return this._raised
    }
    set layer(NewLayer) {
      this.setPropertyAndUpdate("layer", NewLayer);
      ReLayerObjects()
    }
    get layer() {
      return this._layer
    }
    set rotation(NewRotation) {
      this.backtangle.rotation = NewRotation
      this.rectangle.rotation = NewRotation
      this.textlabel.rotation = NewRotation
      this.setPropertyAndUpdate("rotation", NewRotation)
    }
    get rotation() {
      return this._rotation
    }
    set bevel(NewBevel) {
      this.backtangle.bevel = NewBevel
      this.rectangle.bevel = NewBevel
      this.setPropertyAndUpdate("bevel", NewBevel)
    }
    get bevel() {
      return this._bevel
    }
    set outline(NewOutline) {
      this.rectangle.outline = NewOutline
      this.setPropertyAndUpdate("outline", NewOutline)
    }
    get outline() {
      return this._outline
    }
    set outlineColor(NewOutlineColor) {
      this.rectangle.outlineColor = NewOutlineColor
      this.setPropertyAndUpdate("outlineColor", NewOutlineColor)
    }
    get outlineColor() {
      return this._outlineColor
    }
    set onMouseHover(codeToRun) {
      this.setPropertyAndUpdate("onMouseHover", codeToRun);
    }
    get onMouseHover() {
      return this._onMouseHover
    }
    set visible(NewVisibility) {
      this.rectangle.visible = NewVisibility
      this.backtangle.visible = NewVisibility
      this.textlabel.visible = NewVisibility
      this.setPropertyAndUpdate("visible", NewVisibility);
    }
    get visible() {
      return this._visible
    }
    set onlyTextVisible(NewOnlyTextVisible) {
      if(NewOnlyTextVisible == true) {
        this.textlabel.visible = true
        this.rectangle.visible = false
        this.backtangle.visible = false
      } else {
        this.textlabel.visible = true
        this.rectangle.visible = true
        this.backtangle.visible = true
      }
      this.setPropertyAndUpdate("onlyTextVisible", NewOnlyTextVisible);
    }
    get onlyTextVisible() {
      return this._onlyTextVisible
    }
    destroy() {
      this.visible = false
      this.rectangle.destroy()
      this.backtangle.destroy()
      this.textlabel.destroy()
    }
    clone() {
      var ClonedButton = new TextButton(this.size.x, this.size.y)
      ClonedButton.position = this.position
      ClonedButton.size = this.size
      ClonedButton.innerColor = this.innerColor
      ClonedButton.raised = this.raised
      ClonedButton.textSize = this.textSize
      ClonedButton.textColor = this.textColor
      ClonedButton.bevel = this.bevel
      //ClonedButton.text = this._text
     /* ClonedButton.size = this.size
      ClonedButton.innerColor = this.innerColor
      ClonedButton.rotation = this.rotation
      ClonedButton.raised = this.raised
      ClonedButton.textSize = this.textSize
      ClonedButton.textColor = this.textColor
      ClonedButton.text = this.text
      ClonedButton.bevel = this.bevel*/
      return ClonedButton
    }
    BringToFront() {
      if(this.backtangle != null) {
        document.querySelector("#two_0").appendChild(this.backtangle.SVGElement)
        document.querySelector("#two_0").appendChild(this.rectangle.SVGElement)
        document.querySelector("#canvasarea > svg").appendChild(this.textlabel.TextLabel);
      }
    }
    scaleTextToButton() {
      var ButtonSize = this.rectangle.size;
      var TextBoundingSize = Vector2.new(
        (this.textlabel.boundingBoxSize.x / window.innerWidth).toFixed(3),
        (this.textlabel.boundingBoxSize.y / window.innerHeight).toFixed(3)
      );
      console.log(ButtonSize);
      console.log(TextBoundingSize);
      this.textlabel.size = 0;
      var i;
  
      while (true) {
        this.textlabel.size = this.textlabel.size + 0.001;
        var NewBoundingSizeX = (
          this.textlabel.boundingBoxSize.x /
          window.innerWidth /
          10
        ).toFixed(3);
        var NewBoundingSizeY = (
          this.textlabel.boundingBoxSize.y /
          window.innerHeight /
          10
        ).toFixed(3);
        if (NewBoundingSizeX >= ButtonSize.x.toFixed(3)) {
          console.log("Button size is " + ButtonSize.x);
          console.log("New text size is " + this.textlabel.size);
          this.textSize = this.textlabel.size / 10;
          this.textlabel.position = this.rectangle.position;
          break;
        }
        if (NewBoundingSizeY >= ButtonSize.y.toFixed(3)) {
          console.log("Button size is " + ButtonSize.x);
          console.log("New text size is " + this.textlabel.size);
          this.textSize = this.textlabel.size / 10;
          this.textlabel.position = this.rectangle.position;
          break;
        }
      }
      this.textSize = this.textlabel.size - this.textlabel.size/10
      this.textlabel.position = this.rectangle.position;
    }
    setPropertyAndUpdate(PropName, PropValue) {
      this["_" + PropName] = PropValue;
      two.update();
    }
  }
class TextBox {
  constructor(Text) {
    var Name = "TextBox" + makeName(10);
    Objects[Name] = this;
    this.BackBox = new Rectangle(0.1, 0.1);
    this.BackBox.innerColor = Color3.fromRGB(255, 255, 255);
    this.TextLabel = new TextLabel(Text);
    this.TextLabel.size = 0.1;
    this.BackBox.outline = 2;
    this.visible = true
    this.onButtonClicked = function() {
      CurrentTextBox = this;
      this.BackBox.outlineColor = Color3.fromRGB(0, 189, 255);
      this.TextLabel.text = this.TextLabel.text + "|";
    };
    document.addEventListener("click", this.click.bind(this));
    //GEFLGHSDFLJDF
    //this.TextLabel.size = 0.23;
    this.text = "Insert Text Here";
    this.sizeTextToFitBox(false);
  }
  sizeTextToFitBox(Removing) {
    if (this.TextLabel.text != null) {
      var Delta;
      if (Removing == true) {
        Delta = -0.001;
      } else {
        Delta = 0.001;
      }
      var counter = 0;
      while (true) {
        counter = counter + 1;
        this.TextLabel.size = this.TextLabel.size + Delta;
        var NewBoundingSizeX = (
          this.TextLabel.boundingBoxSize.x /
          window.innerWidth /
          10
        ).toFixed(3);
        var NewBoundingSizeY = (
          this.TextLabel.boundingBoxSize.y /
          window.innerHeight /
          10
        ).toFixed(3);
        if (NewBoundingSizeX >= this.BackBox.size.x.toFixed(3)) {
          var size = this.TextLabel.size;
          this.TextLabel.size = size / 10;
          this.TextLabel.position = this.BackBox.position;
          console.log("New text size is " + this.TextLabel.size);
          break;
        } else {
        }
        if (NewBoundingSizeY >= this.BackBox.size.y.toFixed(3)) {
          var size = this.TextLabel.size;
          this.TextLabel.size = size / 10;
          this.TextLabel.position = this.BackBox.position;
          console.log("New text size is " + this.TextLabel.size);
          break;
        }
      }
    }
  }
  set size(NewSize) {
    this.BackBox.size = NewSize;
    this.TextLabel.size = NewSize.x;
    this.sizeTextToFitBox();
    this.setPropertyAndUpdate("size", NewSize);
  }
  get size() {
    return this._size;
  }
  set text(NewText) {
    this.TextLabel.text = NewText;
    this.setPropertyAndUpdate("text", NewText);
  }
  get text() {
    return this._text;
  }
  set position(NewPosition) {
    this.BackBox.position = NewPosition;
    this.TextLabel.position = NewPosition;
    this.setPropertyAndUpdate("position", NewPosition);
  }
  get position() {
    return this._position;
  }
  set rotation(NewRotation) {
    this.BackBox.rotation = NewRotation;
    this.TextLabel.rotation = NewRotation;
    this.setPropertyAndUpdate("rotation", NewRotation);
  }
  get rotation() {
    return this._rotation;
  }
  set innerColor(NewColor) {
    this.BackBox.innerColor = NewColor;
    this.setPropertyAndUpdate("innerColor", NewColor);
  }
  get innerColor() {
    return this._innerColor;
  }
  set outline(NewOutline) {
    this.BackBox.outline = NewOutline;
    this.setPropertyAndUpdate("outline", NewOutline);
  }
  get outline() {
    return this._outline;
  }
  set textColor(NewColor) {
    this.TextLabel.textColor = NewColor;
    this.setPropertyAndUpdate("textColor", NewColor);
  }
  get textColor() {
    return this._textColor;
  }
  set onTextSubmit(Code) {
    this.setPropertyAndUpdate("onTextSubmit", Code);
  }
  get onTextSubmit() {
    return this._onTextSubmit;
  }
  set visible(NewVisible) {
    this.TextLabel.visible = NewVisible;
    this.BackBox.visible = NewVisible;
    this.setPropertyAndUpdate("visible", NewVisible);
  }
  get visible() {
    return this._visible;
  }
  destroy() {
    this.visible = false;
    this.TextLabel.destroy();
    this.BackBox.destroy();
  }
  setPropertyAndUpdate(PropName, PropValue) {
    this["_" + PropName] = PropValue;
    two.update();
  }
  click(e) {
    if (this.visible == true) {
      if (this.isPointInRectangle(e.clientX, e.clientY, this.BackBox)) {
        if (CurrentTextBox == null) {
          this.onButtonClicked();
        }
      } else {
        if (CurrentTextBox != null) {
          if(CurrentTextBox == this) {
            CurrentTextBox = null;
            this.BackBox.outlineColor = Color3.fromRGB(0, 0, 0);
            var TextWithoutCursor = this.TextLabel.text.slice(0, -1);
            this.TextLabel.text = TextWithoutCursor;
            this.sizeTextToFitBox();
            this.onTextSubmit();
          }

        }
      }
    }
  }
  isPointInRectangle(X, Y, Rectangle) {
    var CenterOfButtonX = Rectangle.position.x * window.innerWidth;
    var CenterOfButtonY = Rectangle.position.y * window.innerHeight;
    var SizeOfButtonX = Rectangle.size.x * window.innerWidth;
    var SizeOfButtonY = Rectangle.size.y * window.innerHeight;

    var LeftSideOfButton = CenterOfButtonX - SizeOfButtonX / 2;
    var RightSideOfButton = CenterOfButtonX + SizeOfButtonX / 2;

    var TopOfButton = CenterOfButtonY - SizeOfButtonY / 2;
    var BottomOfButton = CenterOfButtonY + SizeOfButtonY / 2;

    if (
      X > LeftSideOfButton &&
      X < RightSideOfButton &&
      Y > TopOfButton &&
      Y < BottomOfButton
    ) {
      return true;
    } else {
      return false;
    }
  }
}

var LastScriptLoaded = true;
class Image {
  constructor(Image) {
    var Name = "Image" + makeName(10);
    Objects[Name] = this;
    var svgCanvas = document.querySelector("#canvasarea > svg");
    var twoCanvas = document.querySelector("#two_0");
    this.Img = document.createElementNS("http://www.w3.org/2000/svg", "image");
    this.Img.setAttributeNS("http://www.w3.org/1999/xlink", "href", Image);
    this.Img.setAttributeNS(null, "width", "200");
    this.Img.setAttributeNS(null, "height", "200");
    this.Img.setAttribute("preserveAspectRatio", "none");
    this.visible = true
    this.size = Vector2.new(0.1, 0.1)
    this.position = Vector2.new(0.5, 0.5)
    twoCanvas.appendChild(this.Img);
    var TotalObjectsNumber = Object.keys(Objects).length + 1;
    this.layer = TotalObjectsNumber;
  }
  set size(NewSize) {
    var SizeX = window.innerWidth * NewSize.x;
    var SizeY = window.innerHeight * NewSize.y;
    this.Img.setAttributeNS(null, "width", SizeX.toString());
    this.Img.setAttributeNS(null, "height", SizeY.toString());
    this.setPropertyAndUpdate("size", NewSize);
  }
  get size() {
    return this._size;
  }
  set position(NewPosition) {
    var PositionX = window.innerWidth * (NewPosition.x - this.size.x / 2);
    var PositionY = window.innerHeight * (NewPosition.y - this.size.y / 2);
    this.Img.setAttributeNS(null, "x", PositionX.toString());
    this.Img.setAttributeNS(null, "y", PositionY.toString());
    this.setPropertyAndUpdate("position", NewPosition);
  }
  get position() {
    return this._position;
  }
  set rotation(NewRotation) {
    var bbox = this.Img.getBBox();
    var cx = bbox.x + bbox.width / 2;
    var cy = bbox.y + bbox.height / 2;
    this.Img.setAttribute(
      "transform",
      "rotate(" + NewRotation + "," + cx + "," + cy + ")"
    );
    this.setPropertyAndUpdate("rotation", NewRotation);
  }
  get rotation() {
    return this._rotation;
  }
  set layer(NewLayer) {
    this.setPropertyAndUpdate("layer", NewLayer);
    ReLayerObjects();
  }
  get layer() {
    return this._layer;
  }
  set visible(NewVisibility) {
    if (NewVisibility == true) {
      this.Img.setAttribute("visibility", "visible");
    } else {
      this.Img.setAttribute("visibility", "hidden");
    }
    this.setPropertyAndUpdate("visible", NewVisibility);
  }
  get visible() {
    return this._visible;
  }
  destroy() {
    this.visible = false
  }
  setPropertyAndUpdate(PropName, PropValue) {
    this["_" + PropName] = PropValue;
    two.update();
  }
}

class Folder {
  constructor() {
    this.children = [];
  }
  addChild(Object) {
    this.children.push(Object);
  }
  getChildren() {
    return this.children;
  }
  getChildByIndex(Index){
      return this.children[Index]
  }
  forEachChild(CodeToRun) {
    this.children.forEach(function(child) {
      CodeToRun()
    });
  }
  get Objects(){
      return this.children
  }
}

class AlertTextBox {
    constructor(Text) {
      this.PromptInput = null
      this.BackBox = new Rectangle(0.1, 0.1);
      this.BackBox.innerColor = Color3.fromRGB(255, 255, 255);
      this.TextLabel = new TextLabel(Text);
      this.TextLabel.size = 0.1;
      this.BackBox.outline = 2;
      this.visible = true
      this.onTextSubmit = function() {
        
      }
      this.onButtonClicked = function() {
        console.log("Clicked!")
        CurrentAlertTextBox = this;
        this.BackBox.outlineColor = Color3.fromRGB(0, 189, 255);
        this.PromptInput = prompt("Input", this.TextLabel.text);
        if(this.PromptInput != null) {
            console.log("Not nil!")
            this.TextLabel.text = this.PromptInput
            console.log(this.PromptInput)
            
        }
        this.BackBox.outlineColor = Color3.fromRGB(0, 0, 0);
        this.sizeTextToFitBox();
        this.onTextSubmit();
        this.PromptInput = null
        CurrentAlertTextBox = null
      };
      document.addEventListener("click", this.click.bind(this));
      this.text = "Insert Text Here";
      this.sizeTextToFitBox(false);
    }
    sizeTextToFitBox(Removing) {
      if (this.TextLabel.text != null) {
        var Delta;
        if (Removing == true) {
          Delta = -0.001;
        } else {
          Delta = 0.001;
        }
        var counter = 0;
        while (true) {
          counter = counter + 1;
          this.TextLabel.size = this.TextLabel.size + Delta;
          var NewBoundingSizeX = (
            this.TextLabel.boundingBoxSize.x /
            window.innerWidth /
            10
          ).toFixed(3);
          var NewBoundingSizeY = (
            this.TextLabel.boundingBoxSize.y /
            window.innerHeight /
            10
          ).toFixed(3);
          if (NewBoundingSizeX >= this.BackBox.size.x.toFixed(3)) {
            var size = this.TextLabel.size;
            this.TextLabel.size = size / 10;
            this.TextLabel.position = this.BackBox.position;
            console.log("New text size is " + this.TextLabel.size);
            break;
          } else {
          }
          if (NewBoundingSizeY >= this.BackBox.size.y.toFixed(3)) {
            var size = this.TextLabel.size;
            this.TextLabel.size = size / 10;
            this.TextLabel.position = this.BackBox.position;
            console.log("New text size is " + this.TextLabel.size);
            break;
          }
        }
      }
    }
    set size(NewSize) {
      this.BackBox.size = NewSize;
      this.TextLabel.size = NewSize.x;
      this.sizeTextToFitBox();
      this.setPropertyAndUpdate("size", NewSize);
    }
    get size() {
      return this._size;
    }
    set text(NewText) {
      this.TextLabel.text = NewText;
      this.setPropertyAndUpdate("text", NewText);
    }
    get text() {
      return this._text;
    }
    set position(NewPosition) {
      this.BackBox.position = NewPosition;
      this.TextLabel.position = NewPosition;
      this.setPropertyAndUpdate("position", NewPosition);
    }
    get position() {
      return this._position;
    }
    set rotation(NewRotation) {
      this.BackBox.rotation = NewRotation;
      this.TextLabel.rotation = NewRotation;
      this.setPropertyAndUpdate("rotation", NewRotation);
    }
    get rotation() {
      return this._rotation;
    }
    set innerColor(NewColor) {
      this.BackBox.innerColor = NewColor;
      this.setPropertyAndUpdate("innerColor", NewColor);
    }
    get innerColor() {
      return this._innerColor;
    }
    set outline(NewOutline) {
      this.BackBox.outline = NewOutline;
      this.setPropertyAndUpdate("outline", NewOutline);
    }
    get outline() {
      return this._outline;
    }
    set textColor(NewColor) {
      this.TextLabel.textColor = NewColor;
      this.setPropertyAndUpdate("textColor", NewColor);
    }
    get textColor() {
      return this._textColor;
    }
    set onTextSubmit(Code) {
      this.setPropertyAndUpdate("onTextSubmit", Code);
    }
    get onTextSubmit() {
      return this._onTextSubmit;
    }
    set visible(NewVisible) {
      this.TextLabel.visible = NewVisible;
      this.BackBox.visible = NewVisible;
      this.setPropertyAndUpdate("visible", NewVisible);
    }
    get visible() {
      return this._visible;
    }
    destroy() {
      this.visible = false;
      this.TextLabel.destroy();
      this.BackBox.destroy();
    }
    setPropertyAndUpdate(PropName, PropValue) {
      this["_" + PropName] = PropValue;
      two.update();
    }
    click(e) {
      if (this.visible == true) {
        if (this.isPointInRectangle(e.clientX, e.clientY, this.BackBox)) {
          if (CurrentAlertTextBox == null) {
            this.onButtonClicked();
          }
        } 
      }
    }
    isPointInRectangle(X, Y, Rectangle) {
      var CenterOfButtonX = Rectangle.position.x * window.innerWidth;
      var CenterOfButtonY = Rectangle.position.y * window.innerHeight;
      var SizeOfButtonX = Rectangle.size.x * window.innerWidth;
      var SizeOfButtonY = Rectangle.size.y * window.innerHeight;
  
      var LeftSideOfButton = CenterOfButtonX - SizeOfButtonX / 2;
      var RightSideOfButton = CenterOfButtonX + SizeOfButtonX / 2;
  
      var TopOfButton = CenterOfButtonY - SizeOfButtonY / 2;
      var BottomOfButton = CenterOfButtonY + SizeOfButtonY / 2;
  
      if (
        X > LeftSideOfButton &&
        X < RightSideOfButton &&
        Y > TopOfButton &&
        Y < BottomOfButton
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  
class NewTextBox {
  constructor(Width, Height) {
    this.textInput = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "foreignObject"
    );
    this.textInput.setAttribute("x", "0");
    this.textInput.setAttribute("y", "0");
    this.textInput.setAttribute("width", window.innerWidth);
    this.textInput.setAttribute("height", window.innerHeight);

    var div = document.createElement("div");
    div.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");

    var inputArea = document.createElement("textarea");
    inputArea.setAttribute("width", String(Width * window.innerWidth))
    inputArea.setAttribute("height", String(Height * window.innerHeight))
    //inputArea.setAttribute("cols", "40")
    // inputArea.setAttribute("rows", "5")

    document.querySelector("#two_0").appendChild(this.textInput);
    this.textInput.appendChild(div);
    div.appendChild(inputArea);
  }
  set position(NewPos) {
    var NewX = NewPos.x;
    var NewY = NewPos.y;
    this.textInput.setAttribute("x", window.innerWidth * NewX)
    this.textInput.setAttribute("y", window.innerHeight * NewY)
    this.setPropertyAndUpdate("position", NewPos);
  }
  setPropertyAndUpdate(PropName, PropValue) {
    this["_" + PropName] = PropValue;
    two.update();
  }
}

var elem = document.getElementById("canvasarea");
var params = { width: window.innerWidth, height: window.innerHeight };
var two = new Two(params).appendTo(elem);

var CurrentTextBox;
var CurrentAlertTextBox;

var Objects = {};

function round(NumToRound, PlaceValueToRound) {
  rounded_number = Math.round(NumToRound * PlaceValueToRound) / PlaceValueToRound
  return rounded_number
}

Array.prototype.insert = function(index, item) {
  this.splice(index, 0, item);
};

function ReLayerObjects() {
  LayerOrder = [];
  function LoopOverObjects(ObjectType) {
    for (var ObjName in Objects) {
      //if(ObjName.includes(ObjectType)){
      var Obj = Objects[ObjName];
      ObjectLayer = Obj.layer;
      LayerOrder.insert(ObjectLayer, Obj);
      //}
    }
    var SortedLayerOrder = LayerOrder.slice(0);
    SortedLayerOrder.sort(function(a, b) {
      return a.layer - b.layer;
    });
    for (let i = SortedLayerOrder.length - 1; i >= 0; i--) {
      var Obj = SortedLayerOrder[i];
      Obj.BringToFront();
    }
    LayerOrder = [];
  }
  /*LoopOverObjects("Rectangle")
    //LoopOverObjects("TextLabel")
    LoopOverObjects("TextButton")*/
}

function getAllObjects() {
  var Positions = {};
  for (index = 0; index < Objects.length; ++index) {
    Obj = Objects[0][index];
    var Position = Obj._position;
    console.log(Position);
    Positions[index] = Position;
  }
  return Positions;
}

function makeName(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class Color3 {
  static fromRGB(red, green, blue) {
    return { red: red, green: green, blue: blue };
  }
  static fromHex(HexValue) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(HexValue);
    return result
      ? {
          red: parseInt(result[1], 16),
          green: parseInt(result[2], 16),
          blue: parseInt(result[3], 16)
        }
      : null;
  }
  static fromHSV(h, s, v) {
    var r, g, b;
    var i;
    var f, p, q, t;
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    v = Math.max(0, Math.min(100, v));
    s /= 100;
    v /= 100;
    if (s == 0) {
      r = g = b = v;
      return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    h /= 60;
    i = Math.floor(h);
    f = h - i;
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));

    switch (i) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;

      case 1:
        r = q;
        g = v;
        b = p;
        break;

      case 2:
        r = p;
        g = v;
        b = t;
        break;

      case 3:
        r = p;
        g = q;
        b = v;
        break;

      case 4:
        r = t;
        g = p;
        b = v;
        break;

      default:
        r = v;
        g = p;
        b = q;
    }

    return {
      red: Math.round(r * 255),
      green: Math.round(g * 255),
      blue: Math.round(b * 255)
    };
  }
  static fromRandom() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return { red: red, green: green, blue: blue };
  }
  static rgbToHex = function(r, g, b) {
    var rgbSingleToHex = function(rgb) {
      var hex = Number(rgb).toString(16);
      if (hex.length < 2) {
        hex = "0" + hex;
      }
      return hex;
    };
    var red = rgbSingleToHex(r);
    var green = rgbSingleToHex(g);
    var blue = rgbSingleToHex(b);
    return red + green + blue;
  };
}

class Vector2 {
  static new(x, y) {
    return { x: x, y: y };
  }
}

Mouse.MouseDown.connect(function(e) {});

Mouse.MouseUp.connect(function(e) {});

Mouse.Click.connect(function(e) {});

Mouse.MouseMove.connect(function(e) {});

document.addEventListener("keydown", logKey);

function logKey(e) {
  if (CurrentTextBox == null) {
  } else {
    //console.log(e.code);
    var KeyCode = e.code;
    //console.log(CurrentTextBox);
    var BaseNum = 0.23;
    var BaseSize = 22.5;
    function updateTextSize() {
      /* //CurrentTextBox.TextLabel.size = CurrentTextBox.size.x/CurrentTextBox.text.length*5.3
        if (CurrentTextBox.text.length <= CurrentTextBox.size.x * BaseSize) {
          //CurrentTextBox.TextLabel.size = CurrentTextBox.size.x/CurrentTextBox.text.length*5.3
          CurrentTextBox.TextLabel.size = BaseNum;
        } else {
          CurrentTextBox.TextLabel.size =
            (CurrentTextBox.size.x / CurrentTextBox.text.length) * 4.5;
        }*/
      CurrentTextBox.sizeTextToFitBox();
    }
    var ShiftDown = false;
    //console.log(e.key);
    if (KeyCode.includes("Key")) {
    }
    if (KeyCode == "Backspace") {
      console.log("Backspace pressed");
      CurrentTextBox.text =
        CurrentTextBox.text.substring(0, CurrentTextBox.text.length - 2) + "|";
      // updateTextSize();
    } else if (e.key == "Shift") {
    } else if (e.key == "Tab") {
      CurrentTextBox.text = CurrentTextBox.text.substring(
        0,
        CurrentTextBox.text.length - 1
      );
      CurrentTextBox.text = CurrentTextBox.text + "   " + "|";
    } else if (e.key == "CapsLock") {
    } else if (e.key == "Meta") {
    } else if (e.key == "Enter") {
    } else if (e.key == "Meta") {
    } else if (e.key == "v" && e.metaKey) {
      var input = document.createElement("textarea");
      input.name = "textarea";

      document.body.appendChild(input);
      input.focus();
      function handlePaste(e) {
        var clipboardData, pastedData;

        // Stop data actually being pasted into div
        e.stopPropagation();
        e.preventDefault();

        // Get pasted data via clipboard API
        clipboardData = e.clipboardData || window.clipboardData;
        pastedData = clipboardData.getData("Text");
        CurrentTextBox.text = CurrentTextBox.text + pastedData;
        input.remove();
      }

      input.addEventListener("paste", handlePaste);
      document.execCommand("paste");
      input.select();

      //CurrentTextBox.text = CurrentTextBox.text + window.clipboardData.getData('Text')
    } else if (e.key == "ArrowLeft" && e.metaKey) {
      var input = document.createElement("textarea");
      input.name = "textarea";

      document.body.appendChild(input);
      input.focus();
      function handlePaste(e) {
        var clipboardData, pastedData;

        // Stop data actually being pasted into div
        e.stopPropagation();
        e.preventDefault();

        // Get pasted data via clipboard API
        clipboardData = e.clipboardData || window.clipboardData;
        pastedData = clipboardData.getData("Text");
        CurrentTextBox.text = CurrentTextBox.text.substring(
          0,
          CurrentTextBox.text.length - 1
        );
        CurrentTextBox.text = CurrentTextBox.text + pastedData + "|";
        input.remove();
      }

      input.addEventListener("paste", handlePaste);
      document.execCommand("paste");
      input.select();

      //CurrentTextBox.text = CurrentTextBox.text + window.clipboardData.getData('Text')
    } else if (e.key == "ArrowRight") {
    } else if (e.key == "ArrowUp") {
    } else if (e.key == "ArrowDown") {
    } else if (e.key == "Alt") {
    } else if (e.key == "Escape") {
    } else {
      CurrentTextBox.text = CurrentTextBox.text.substring(
        0,
        CurrentTextBox.text.length - 1
      );
      CurrentTextBox.text = CurrentTextBox.text + e.key + "|";
    }
    if (KeyCode == "Backspace") {
      updateTextSize(true);
    } else {
      updateTextSize(false);
    }

    //CurrentTextBox.sizeTextToFitBox();
  }
}